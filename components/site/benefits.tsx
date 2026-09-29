import { BarChart3, Boxes, Coins, ScanLine, ShieldCheck, ShoppingCart, type LucideIcon } from 'lucide-react'
import { benefits } from '@/lib/site-content'
import { SectionHeading } from './section-heading'

const icons: Record<(typeof benefits)[number]['icon'], LucideIcon> = {
  boxes: Boxes,
  shield: ShieldCheck,
  scan: ScanLine,
  cart: ShoppingCart,
  coins: Coins,
  chart: BarChart3,
}

export function Benefits() {
  return (
    <section aria-labelledby="beneficios-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="beneficios-title"
          eyebrow="Benefícios"
          title="Controle de estoque que se reflete na gestão"
          description="Com um inventário confiável, sua empresa passa a enxergar o estoque como ele realmente é."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon]
            return (
              <li key={benefit.title} className="group bg-card p-7 transition-colors hover:bg-accent/40">
                <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-brand group-hover:bg-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
