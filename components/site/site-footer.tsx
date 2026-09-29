import Image from 'next/image'
import { navLinks, site } from '@/lib/site-content'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <span className="inline-block rounded-lg bg-white p-2">
            <Image src="/images/logo-smx.jpg" alt="SMX Inventários" width={1024} height={871} className="h-12 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            Consultoria, serviços e inventários de estoque para empresas do varejo.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="text-sm font-semibold">Navegação</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-foreground/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-ink-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink-foreground">
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="hover:text-ink-foreground">
                  {p.display}
                </a>
              </li>
            ))}
            <li>{`${site.city} – ${site.stateCode}`}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-ink-foreground/60 md:px-6">
          {`© ${new Date().getFullYear()} ${site.name}. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
