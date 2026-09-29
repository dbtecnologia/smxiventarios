import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site-content'
import { CtaLink } from './cta-link'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-brand-foreground md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-16 -bottom-16 size-64 rotate-45 rounded-[2.5rem] border-[20px] border-brand-foreground/10"
          />
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
              Sua empresa sabe exatamente o que tem em estoque?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-foreground/80">
              Solicite uma visita técnica ou um orçamento sem compromisso e conheça uma nova forma de gerir seu
              estoque.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="#contato" variant="dark" size="lg">
                Solicitar uma proposta
                <ArrowRight className="size-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink
                href={whatsappUrl()}
                external
                size="lg"
                className="border border-brand-foreground/25 bg-transparent shadow-none hover:bg-brand-foreground/10"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar no WhatsApp
                <span className="sr-only">(abre em nova aba)</span>
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
