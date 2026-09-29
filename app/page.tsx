import { About } from '@/components/site/about'
import { Benefits } from '@/components/site/benefits'
import { ContactSection } from '@/components/site/contact-section'
import { CredibilityStrip } from '@/components/site/credibility-strip'
import { Differentials } from '@/components/site/differentials'
import { FinalCta } from '@/components/site/final-cta'
import { Hero } from '@/components/site/hero'
import { ProcessSteps } from '@/components/site/process-steps'
import { Regions } from '@/components/site/regions'
import { Segments } from '@/components/site/segments'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { allServedStates, site } from '@/lib/site-content'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo-smx.jpg`,
  image: `${site.url}/images/hero-inventario.png`,
  description:
    'Consultoria e serviços de inventário de estoque com equipe especializada, software próprio e relatórios analíticos.',
  email: site.email,
  telephone: site.phones[0].tel,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.stateCode, addressCountry: 'BR' },
  areaServed: allServedStates.map((s) => ({ '@type': 'State', name: s.name })),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    telephone: site.phones[0].tel,
    availableLanguage: 'Portuguese',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <CredibilityStrip />
        <About />
        <ProcessSteps />
        <Benefits />
        <Differentials />
        <Segments />
        <Regions />
        <FinalCta />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
