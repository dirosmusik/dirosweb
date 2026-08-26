'use client'

import { MapPin } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { SectionHeading } from '@/components/section-heading'

export function BioSection() {
  const { t } = useLang()
  const genres = t.heroTag.split('|')[0].split('·').map((g) => g.trim())

  return (
    <section id="bio" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="01" title={t.bio.title} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {t.heroBio.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t.bio.genresLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-[#8B0D18]/40 bg-[#8B0D18]/10 px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-[#B21A20]" />
              {t.bio.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
