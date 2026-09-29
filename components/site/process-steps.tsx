import { processSteps } from '@/lib/site-content'
import { SectionHeading } from './section-heading'

export function ProcessSteps() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="border-y border-border bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="solucoes-title"
            eyebrow="Solução de inventário"
            title="Um processo completo, do planejamento ao saldo atualizado"
            className="lg:col-span-7"
          />
          <p className="text-base leading-relaxed text-pretty text-muted-foreground lg:col-span-5">
            Conhecido no varejo como “balanço”, o inventário é a identificação, classificação e contagem dos
            produtos em estoque, confrontando entradas e saídas para chegar ao saldo correto no sistema e no
            físico.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-lg bg-brand font-heading text-base font-bold text-brand-foreground"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-5 text-lg leading-snug font-semibold">
                <span className="sr-only">{`Etapa ${index + 1}: `}</span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
