'use server'

import { allServedStates, operationTypes } from '@/lib/site-content'

export type ContactFields = {
  nome: string
  empresa: string
  email: string
  telefone: string
  estado: string
  operacao: string
  mensagem: string
}

export type ContactState = {
  status: 'idle' | 'invalid' | 'success' | 'not_configured' | 'error'
  message?: string
  errors?: Partial<Record<keyof ContactFields | 'lgpd', string>>
  values?: Partial<ContactFields>
}

const MIN_FILL_TIME_MS = 3000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const validStates = new Set([...allServedStates.map((s) => s.code), 'OUTRO'])
const validOperations = new Set(operationTypes)

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .trim()
    .slice(0, max)
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values: ContactFields = {
    nome: clean(formData.get('nome'), 120),
    empresa: clean(formData.get('empresa'), 160),
    email: clean(formData.get('email'), 160),
    telefone: clean(formData.get('telefone'), 30),
    estado: clean(formData.get('estado'), 10),
    operacao: clean(formData.get('operacao'), 80),
    mensagem: String(formData.get('mensagem') ?? '').trim().slice(0, 2000),
  }

  // Anti-spam: campo isca preenchido ou envio rápido demais indicam robôs.
  const honeypot = clean(formData.get('website'), 200)
  const startedAt = Number(formData.get('startedAt'))
  if (honeypot || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: 'error', message: 'Não foi possível validar o envio. Tente novamente em alguns segundos.', values }
  }

  const errors: ContactState['errors'] = {}
  if (values.nome.length < 2) errors.nome = 'Informe seu nome.'
  if (values.empresa.length < 2) errors.empresa = 'Informe o nome da empresa.'
  if (!EMAIL_RE.test(values.email)) errors.email = 'Informe um e-mail válido.'
  const digits = values.telefone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 13) errors.telefone = 'Informe um telefone com DDD.'
  if (!validStates.has(values.estado)) errors.estado = 'Selecione o estado.'
  if (!validOperations.has(values.operacao)) errors.operacao = 'Selecione o tipo de operação.'
  if (formData.get('lgpd') !== 'on') errors.lgpd = 'É necessário autorizar o uso dos dados para responder.'

  if (Object.keys(errors).length > 0) {
    return { status: 'invalid', message: 'Revise os campos destacados.', errors, values }
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT
  if (!endpoint) {
    console.warn('[contato] CONTACT_FORM_ENDPOINT não configurado; mensagem não foi entregue.')
    return {
      status: 'not_configured',
      message:
        'O envio online ainda não está ativo neste ambiente. Sua mensagem não foi enviada — fale conosco pelo WhatsApp ou e-mail.',
      values,
    }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, origem: 'site', consentimentoLgpd: true, enviadoEm: new Date().toISOString() }),
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
  } catch (err) {
    console.error('[contato] Falha ao entregar mensagem:', err)
    return {
      status: 'error',
      message: 'Não conseguimos enviar agora. Tente novamente ou fale conosco pelo WhatsApp.',
      values,
    }
  }

  return {
    status: 'success',
    message: 'Recebemos sua solicitação. Nossa equipe comercial entrará em contato em breve.',
  }
}
