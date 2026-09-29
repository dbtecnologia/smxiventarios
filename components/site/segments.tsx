import { Store } from 'lucide-react'
import { SHOW_REVIEW_NOTES, segments } from '@/lib/site-content'
import { ReviewBadge, SectionHeading } from './section-heading'

export function Segments() {
  return (
    <section aria-labelledby="segmentos-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="segmentos-title"
          eyebrow="Segmentos atendidos"
          title="Experiência em diferentes operações de estoque"
          description="Atendemos empresas das mais diversas áreas, de lojas de rua a redes com múltiplas unidades."
        />
        {SHOW_REVIEW_NOTES ? (
          <p className="mt-6 max-w-2xl rounded-lg border border-dashed border-amber-600/50 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            <strong className="font-semibold">Para revisão:</strong> segmentos inferidos a partir da imagem
            “Alguns de nossos clientes” do site atual. Confirme a lista com a SMX antes de publicar.
          </p>
        ) : null}
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {segments.map((segment) => (
            <li
              key={segment.title}
              className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <Store className="size-5 text-muted-foreground" aria-hidden="true" />
              <div>
                <h3 className="text-base leading-snug font-semibold">{segment.title}</h3>
                {SHOW_REVIEW_NOTES && segment.review ? (
                  <div className="mt-2">
                    <ReviewBadge label="Confirmar" />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
