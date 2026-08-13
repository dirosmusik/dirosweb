'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Headphones, Radio, ChevronDown, Copy, Check } from 'lucide-react'
import { useLang } from '@/lib/i18n'

const BOOKING_EMAIL = 'bookings@dirosmusik.com'

export function HeroSection() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BOOKING_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <section id="top" className="relative isolate h-[100svh] w-full overflow-hidden">
      {/* Full-screen background image */}
      <Image
        src="/hero.png"
        alt="DIROS portrait against a deep crimson backdrop"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />

      {/* Dramatic cinematic gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40 to-black/60" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-transparent to-black/80" aria-hidden />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur">
          <span className="size-1.5 rounded-full bg-[#B21A20]" aria-hidden />
          {t.role}
        </div>

        <h1 className="sr-only">DIROS</h1>
        <Image
          src="/diros-logo.png"
          alt="DIROS"
          width={1400}
          height={373}
          priority
          className="h-auto w-full max-w-md drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] sm:max-w-xl lg:max-w-2xl"
        />

        <p className="mt-6 max-w-2xl text-balance text-base font-medium text-white/90 sm:text-lg lg:text-xl">
          {t.heroTag}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:bookings@dirosmusik.com?subject=Booking%20enquiry%20%E2%80%94%20DIROS"
            className="inline-flex items-center gap-2 rounded-full bg-[#8B0D18] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#B21A20] hover:shadow-[0_0_20px_rgba(139,13,24,0.6)]"
          >
            {t.booking}
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#media"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
          >
            <Headphones className="size-4" />
            {t.listen}
          </a>
          <a
            href="#media"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
          >
            <Radio className="size-4" />
            {t.lastSet}
          </a>
        </div>

        {/* Clickable copy-to-clipboard email */}
        <button
          type="button"
          onClick={copyEmail}
          aria-label={`${BOOKING_EMAIL} — ${copied ? t.copied : 'copy'}`}
          className="mt-2 flex cursor-pointer items-center justify-center gap-1.5 text-xs text-white/70 transition-colors hover:text-white"
        >
          {copied ? (
            <>
              <Check className="size-3.5" aria-hidden />
              {t.copied}
            </>
          ) : (
            <>
              {BOOKING_EMAIL}
              <Copy className="size-3.5" aria-hidden />
            </>
          )}
        </button>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#media"
        aria-label={t.scroll}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">{t.scroll}</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
