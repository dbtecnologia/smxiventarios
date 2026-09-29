'use client'

import { useActionState, useEffect, useRef } from 'react'
import { AlertTriangle, CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { allServedStates, operationTypes, site, whatsappUrl } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const inputClass =
  'mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none aria-[invalid=true]:border-destructive md:text-sm'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm text-destructive">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const startedAtRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now())
  }, [state])

  useEffect(() => {
    if (state.status !== 'idle') statusRef.current?.focus()
  }, [state])

  if (state.status === 'success') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8 focus:outline-none"
      >
        <CheckCircle2 className="size-10 text-emerald-600" aria-hidden="true" />
        <h3 className="text-2xl font-bold">Solicitação enviada</h3>
        <p className="text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const v = state.values ?? {}
  const e = state.errors ?? {}
  const fieldProps = (name: keyof NonNullable<ContactState['errors']>) => ({
    'aria-invalid': e[name] ? true : undefined,
    'aria-describedby': e[name] ? `${name}-erro` : undefined,
  })

  return (
    <form action={formAction} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {state.status !== 'idle' && state.message ? (
          <div
            role={state.status === 'invalid' ? 'alert' : 'status'}
            className={cn(
              'mb-6 flex gap-3 rounded-lg border p-4 text-sm leading-relaxed',
              state.status === 'not_configured'
                ? 'border-amber-600/50 bg-amber-50 text-amber-900'
                : 'border-destructive/40 bg-destructive/5 text-destructive',
            )}
          >
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <div>
              <p>{state.message}</p>
              {state.status === 'not_configured' || state.status === 'error' ? (
                <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-medium">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="text-sm font-medium">
            Nome <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input id="nome" name="nome" type="text" autoComplete="name" required maxLength={120} defaultValue={v.nome} className={inputClass} {...fieldProps('nome')} />
          <FieldError id="nome-erro" message={e.nome} />
        </div>
        <div>
          <label htmlFor="empresa" className="text-sm font-medium">
            Empresa <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input id="empresa" name="empresa" type="text" autoComplete="organization" required maxLength={160} defaultValue={v.empresa} className={inputClass} {...fieldProps('empresa')} />
          <FieldError id="empresa-erro" message={e.empresa} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            E-mail <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={160} defaultValue={v.email} className={inputClass} {...fieldProps('email')} />
          <FieldError id="email-erro" message={e.email} />
        </div>
        <div>
          <label htmlFor="telefone" className="text-sm font-medium">
            Telefone / WhatsApp <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(21) 90000-0000" required maxLength={30} defaultValue={v.telefone} className={inputClass} {...fieldProps('telefone')} />
          <FieldError id="telefone-erro" message={e.telefone} />
        </div>
        <div>
          <label htmlFor="estado" className="text-sm font-medium">
            Estado <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select id="estado" name="estado" required defaultValue={v.estado ?? ''} className={inputClass} {...fieldProps('estado')}>
            <option value="" disabled>
              Selecione
            </option>
            {allServedStates.map((s) => (
              <option key={s.code} value={s.code}>
                {`${s.name} (${s.code})`}
              </option>
            ))}
            <option value="OUTRO">Outro estado</option>
          </select>
          <FieldError id="estado-erro" message={e.estado} />
        </div>
        <div>
          <label htmlFor="operacao" className="text-sm font-medium">
            Tipo de operação <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select id="operacao" name="operacao" required defaultValue={v.operacao ?? ''} className={inputClass} {...fieldProps('operacao')}>
            <option value="" disabled>
              Selecione
            </option>
            {operationTypes.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
          <FieldError id="operacao-erro" message={e.operacao} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="text-sm font-medium">
            Mensagem <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            maxLength={2000}
            defaultValue={v.mensagem}
            placeholder="Conte sobre o local, número de lojas, quantidade aproximada de itens e datas desejadas."
            className={inputClass}
          />
        </div>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id="lgpd"
            name="lgpd"
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 rounded border-input accent-foreground"
            {...fieldProps('lgpd')}
          />
          <label htmlFor="lgpd" className="text-sm leading-relaxed text-muted-foreground">
            Autorizo a SMX Inventários a utilizar os dados informados exclusivamente para responder a esta
            solicitação e enviar a proposta comercial, conforme a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018).
          </label>
        </div>
        <FieldError id="lgpd-erro" message={e.lgpd} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand px-6 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          'Enviar solicitação'
        )}
      </button>
    </form>
  )
}
