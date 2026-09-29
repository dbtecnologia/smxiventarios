import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site-content'
import { CtaLink } from './cta-link'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-16 md:px-6 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 lg:col-span-6">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
            <span aria-hidden="true" className="size-2 rotate-45 rounded-[2px] bg-brand" />
            Inventário e gestão de estoques
          </p>
          <h1 id="hero-title" className="text-4xl leading-[1.05] font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Inventários precisos para decisões{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">mais inteligentes</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand/70 md:h-4" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Conte com uma equipe especializada, tecnologia própria e relatórios completos para conhecer seu
            estoque, identificar divergências e reduzir perdas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#contato" size="lg">
              Solicitar orçamento
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={whatsappUrl()} external variant="outline" size="lg">
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
              <span className="sr-only">(abre em nova aba)</span>
            </CtaLink>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 hidden size-40 rotate-45 rounded-3xl bg-brand md:block"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <Image
              src="/images/hero-inventario.png"
              alt="Equipe de inventário usando coletores de dados para contar produtos nas prateleiras de um supermercado"
              width={1312}
              height={816}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover lg:aspect-[16/12]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
