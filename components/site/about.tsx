import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from './section-heading'

const expertise = [
  'Financeiro e administrativo',
  'O&M e custos',
  'Área tributária',
  'Gestão de estoques',
  'Implantação e parametrização de sistemas',
  'Inventários de estoque',
]

export function About() {
  return (
    <section id="quem-somos" aria-labelledby="quem-somos-title" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/deposito-contagem.png"
              alt="Profissional contando caixas em um depósito com coletor de código de barras"
              width={1024}
              height={1280}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <SectionHeading
            id="quem-somos-title"
            eyebrow="Quem somos"
            title="Nascemos no varejo. Entendemos o seu estoque."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            <p>
              A SMX foi fundada por profissionais do varejo com ampla e consolidada experiência. Somos uma
              empresa de consultoria e serviços que atua nas áreas financeira, administrativa, de custos,
              tributária, gestão de estoques e implantação de sistemas.
            </p>
            <p>
              Para completar essa atuação, nos especializamos na realização de inventários de estoque. Mais do
              que contar produtos, fazemos inventários completos: organizamos o local previamente, analisamos
              os resultados, apontamos divergências e condições físicas dos itens e entregamos relatórios
              completos e comparativos.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Áreas de atuação</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="mt-8 border-l-4 border-brand pl-5 text-base leading-relaxed text-foreground italic">
            Acreditamos no crescimento conjunto e visamos sempre o sucesso dos nossos clientes.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
