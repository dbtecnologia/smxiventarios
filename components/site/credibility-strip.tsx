import { ClipboardCheck, Cpu, FileSpreadsheet, UserCheck } from 'lucide-react'
import { SHOW_REVIEW_NOTES, site } from '@/lib/site-content'
import { ReviewBadge } from './section-heading'

const pillars = [
  { icon: UserCheck, label: 'Liderança experiente em campo' },
  { icon: Cpu, label: 'Software próprio de contagem' },
  { icon: ClipboardCheck, label: 'Análise de divergências' },
  { icon: FileSpreadsheet, label: 'Relatórios comparativos' },
]

export function CredibilityStrip() {
  return (
    <section aria-label="Credibilidade" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-12 lg:items-center">
        <div className="flex items-center gap-5 lg:col-span-4">
          <p className="font-heading text-6xl leading-none font-extrabold text-brand">{site.yearsInMarket}</p>
          <div>
            <p className="text-lg leading-snug font-semibold">anos de experiência em consultoria e varejo</p>
            {SHOW_REVIEW_NOTES ? (
              <div className="mt-2">
                <ReviewBadge label="Confirmar tempo de mercado" />
              </div>
            ) : null}
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:col-span-8">
          {pillars.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 border-l border-ink-foreground/15 pl-4">
              <Icon className="size-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-sm leading-snug text-ink-foreground/85">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
