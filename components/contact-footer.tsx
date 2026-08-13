'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { socialBar, LINKS } from '@/lib/data'
import { brandIconMap } from '@/components/brand-icons'
import { CopyEmail } from '@/components/copy-email'

export function ContactFooter() {
  const { t } = useLang()

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.contact.subtitle}
          </p>

          {/* Re-iterated booking CTA + copyable email */}
          <a
            href={LINKS.bookingMailto}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#8B0D18] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#B21A20] hover:shadow-[0_0_25px_rgba(139,13,24,0.7)]"
          >
            {t.contact.cta}
            <ArrowUpRight className="size-4" />
          </a>
          <CopyEmail className="mt-3" />

          {/* Socials */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {socialBar.map(({ label, href, icon }) => {
              const Icon = brandIconMap[icon]
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-5 transition-colors group-hover:text-[#B21A20]" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="text-lg font-bold tracking-[0.2em] text-foreground">DIROS</span>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DIROS. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
