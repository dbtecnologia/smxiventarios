import { MapPin } from 'lucide-react'
import { SHOW_REVIEW_NOTES, allServedStates, regions } from '@/lib/site-content'
import { ReviewBadge, SectionHeading } from './section-heading'

export function Regions() {
  return (
    <section
      id="areas-atendidas"
      aria-labelledby="areas-title"
      className="border-y border-border bg-muted py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="areas-title"
            eyebrow="Áreas atendidas"
            title={`Presença em ${allServedStates.length} estados`}
            description="Base no Rio de Janeiro e equipes que se deslocam para atender operações no Sudeste e no Nordeste."
          />
          {SHOW_REVIEW_NOTES ? (
            <p className="mt-6 rounded-lg border border-dashed border-amber-600/50 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
              <strong className="font-semibold">Para revisão:</strong> o mapa do site atual também exibe CE,
              PR, SC e RS. Confirme com a SMX se esses estados devem entrar na lista.
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {regions.map((region) => (
            <div key={region.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{region.name}</h3>
                <span className="text-sm text-muted-foreground">{`${region.states.length} estados`}</span>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2">
                {region.states.map((state) => (
                  <li
                    key={state.code}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5"
                  >
                    <span className="flex h-8 w-11 items-center justify-center rounded-md bg-brand font-heading text-sm font-bold text-brand-foreground">
                      {state.code}
                    </span>
                    <span className="text-sm font-medium">{state.name}</span>
                    {state.code === 'RJ' ? (
                      <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        Sede
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {SHOW_REVIEW_NOTES ? (
            <div className="sm:col-span-2">
              <ReviewBadge label="Confirmar lista de estados" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
