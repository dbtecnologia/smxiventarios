import { MapPin } from 'lucide-react'
import type { COBEOptions } from 'cobe'
import { SHOW_REVIEW_NOTES, allServedStates, regions } from '@/lib/site-content'
import { Globe } from '@/components/ui/globe'
import { ReviewBadge, SectionHeading } from './section-heading'

const presenceGlobeConfig: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.45,
  mapSamples: 16000,
  mapBrightness: 1.15,
  baseColor: [0.93, 0.95, 0.98],
  markerColor: [0.93, 0.59, 0.08],
  glowColor: [0.82, 0.87, 0.96],
  markers: [
    { location: [-22.9068, -43.1729], size: 0.1 }, // Rio de Janeiro
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
    { location: [-19.9167, -43.9345], size: 0.08 }, // Minas Gerais
    { location: [-20.3155, -40.3128], size: 0.07 }, // Espírito Santo
    { location: [-12.9777, -38.5016], size: 0.08 }, // Bahia
    { location: [-10.9472, -37.0731], size: 0.06 }, // Sergipe
    { location: [-9.6498, -35.7089], size: 0.06 }, // Alagoas
    { location: [-8.0476, -34.877], size: 0.07 }, // Pernambuco
    { location: [-7.1195, -34.845], size: 0.06 }, // Paraíba
    { location: [-5.7945, -35.211], size: 0.06 }, // Rio Grande do Norte
  ],
}

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

          <div className="relative mt-8 aspect-square max-w-md overflow-hidden rounded-3xl border border-border bg-[#f3f5f8] shadow-sm">
            <Globe config={presenceGlobeConfig} className="-inset-[8%] max-w-none" />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-4 py-3 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
              <span>Sudeste + Nordeste</span>
              <span className="text-muted-foreground">10 estados</span>
            </div>
          </div>
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

