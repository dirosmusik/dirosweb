'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLang, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

function LangToggle() {
  const { lang, setLang } = useLang()
  const options: Lang[] = ['es', 'en']
  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center rounded-full border border-border bg-elevated p-0.5 text-xs font-medium"
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={cn(
            'rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors',
            lang === opt ? 'bg-[#8B0D18] text-white' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#media', label: t.nav.media },
    { href: '#events', label: t.nav.events },
    { href: '#press', label: t.nav.press },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="DIROS home">
          <Image
            src="/diros-logo.png"
            alt="DIROS"
            width={480}
            height={128}
            priority
            className="h-8 w-auto"
          />
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            {t.role}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="mailto:bookings@dirosmusik.com?subject=Booking%20enquiry%20%E2%80%94%20DIROS"
            className="rounded-full bg-[#8B0D18] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#B21A20] hover:shadow-[0_0_20px_rgba(139,13,24,0.6)]"
          >
            {t.booking}
          </a>
        </div>
      </div>
    </header>
  )
}
