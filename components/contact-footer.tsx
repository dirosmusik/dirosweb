'use client'

import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { InstagramIcon, SoundcloudIcon, SpotifyIcon } from '@/components/brand-icons'

const EMAIL = 'dirosdj@gmail.com'
const PHONE = '+34 626 85 10 25'
const PHONE_HREF = 'tel:+34626851025'

const socials = [
  { label: 'Instagram', handle: '@diros.musik', href: 'https://instagram.com/diros.musik', Icon: InstagramIcon },
  { label: 'SoundCloud', handle: 'diros', href: 'https://soundcloud.com', Icon: SoundcloudIcon },
  { label: 'Spotify', handle: 'DIROS', href: 'https://spotify.com', Icon: SpotifyIcon },
]

export function ContactFooter() {
  const { t } = useLang()

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-medium text-primary">04</span>
              <span className="h-px w-10 bg-primary/50" aria-hidden />
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{t.contact.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.contact.subtitle}
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Booking%20Request%20-%20DIROS`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A71D2A] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_10px_40px_-8px_rgba(167,29,42,0.7)]"
            >
              {t.contact.cta}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="space-y-8">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-3 bg-card px-5 py-5 transition-colors hover:bg-elevated"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t.contact.emailLabel}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">{EMAIL}</span>
                </span>
              </a>
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-3 bg-card px-5 py-5 transition-colors hover:bg-elevated"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t.contact.phoneLabel}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">{PHONE}</span>
                </span>
              </a>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t.contact.followLabel}
              </p>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {socials.map(({ label, handle, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 bg-card px-5 py-4 transition-colors hover:bg-elevated"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-5 text-foreground transition-colors group-hover:text-primary" />
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      {handle}
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <span className="text-lg font-bold tracking-[0.2em] text-foreground">DIROS</span>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DIROS. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
