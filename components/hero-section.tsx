'use client'

import Image from 'next/image'
import { ArrowRight, Headphones } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export function HeroSection() {
  const { t } = useLang()

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/diros-hero.png"
          alt="DIROS performing behind the decks in a dark club lit with red light"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-[#A71D2A]" aria-hidden />
            {t.scrollBio}
          </div>

          <h1 className="sr-only">DIROS</h1>
          <Image
            src="/diros-logo.png"
            alt="DIROS"
            width={1400}
            height={373}
            priority
            className="h-auto w-full max-w-lg"
          />

          <p className="mt-5 text-lg font-medium text-foreground/90 text-pretty sm:text-xl">{t.heroTag}</p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t.heroBio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#A71D2A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_25px_rgba(167,29,42,0.7)]"
            >
              {t.booking}
              <ArrowRight className="size-4" />
            </a>
            
              href="#media"
              className="inline-flex items-center gap-2 rounded-full border border-[#A71D2A]/40 bg-elevated/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[#A71D2A] hover:bg-elevated hover:shadow-[0_0_20px_rgba(167,29,42,0.4)]"
            >
              <Headphones className="size-4" />
              {t.listen}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}