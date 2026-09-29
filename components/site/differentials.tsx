import Image from 'next/image'
import { FileOutput } from 'lucide-react'
import { SHOW_REVIEW_NOTES, differentials } from '@/lib/site-content'
import { ReviewBadge, SectionHeading } from './section-heading'

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="diferenciais-title"
          eyebrow="Diferenciais"
          title="Pessoas, equipamentos e software trabalhando juntos"
          tone="light"
        />

        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <li key={item.title} className="border-t border-ink-foreground/15 pt-6">
              <span aria-hidden="true" className="font-heading text-sm font-bold text-brand">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <FileOutput className="size-5" aria-hidden="true" />
              </span>
              {SHOW_REVIEW_NOTES ? <ReviewBadge label="Detalhar formatos com a SMX" /> : null}
            </div>
            <h3 className="mt-5 text-2xl font-bold">Como o resultado chega ao seu sistema</h3>
            <p className="mt-3 leading-relaxed text-ink-foreground/75">
              Ao final da contagem, nosso software gera os arquivos necessários para que o resultado seja
              processado no seu servidor, atualizando o saldo de estoque no seu sistema interno.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/85">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brand" />
                Alinhamento prévio do layout de arquivo esperado pelo seu sistema.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brand" />
                Entrega dos arquivos logo após a conclusão e conferência do inventário.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brand" />
                Relatórios comparativos para validação antes da atualização do saldo.
              </li>
            </ul>
          </div>
          <div className="relative min-h-64">
            <Image
              src="/images/analise-relatorio.png"
              alt="Coletor de dados ao lado de um notebook com planilha de estoque e relatórios impressos"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
