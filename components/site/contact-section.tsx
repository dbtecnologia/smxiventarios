import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SHOW_REVIEW_NOTES, site, whatsappUrl } from '@/lib/site-content'
import { ContactForm } from './contact-form'
import { ReviewBadge, SectionHeading } from './section-heading'

export function ContactSection() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="border-t border-border bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contato-title"
            eyebrow="Contato"
            title="Solicite um orçamento sem compromisso"
            description="Conte um pouco sobre sua operação. Retornamos com as próximas etapas e, se necessário, agendamos uma visita técnica."
          />

          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">E-mail comercial</p>
                <a href={`mailto:${site.email}`} className="font-semibold break-all hover:underline">
                  {site.email}
                </a>
              </div>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.tel} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{`Telefone ${phone.label.toLowerCase()}`}</p>
                  <a href={`tel:${phone.tel}`} className="font-semibold hover:underline">
                    {phone.display}
                  </a>
                </div>
              </li>
            ))}
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <ul className="flex flex-wrap gap-x-4">
                  {site.whatsapp.map((w) => (
                    <li key={w.number}>
                      <a href={whatsappUrl(w.number)} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                        {w.display}
                        <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Base</p>
                <p className="font-semibold">{`${site.city} – ${site.stateCode}`}</p>
              </div>
            </li>
          </ul>
          {SHOW_REVIEW_NOTES ? (
            <div className="mt-6">
              <ReviewBadge label="Conferir e-mail e telefones" />
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
