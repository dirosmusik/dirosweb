'use client'

import { MapPin } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { venuesSpain, venuesIntl } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

function VenueGrid({ venues }: { venues: { name: string; city: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {venues.map((v) => (
        <div
          key={v.name}
          className="group flex items-center justify-between gap-3 bg-card px-5 py-4 transition-colors hover:bg-elevated"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{v.name}</p>
            {v.city ? (
              <p className="truncate text-xs uppercase tracking-wider text-muted-foreground">{v.city}</p>
            ) : null}
          </div>
          <MapPin className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-[#B21A20]" />
        </div>
      ))}
    </div>
  )
}

export function VenuesSection() {
  const { t } = useLang()

  return (
    <section id="venues" className="scroll-mt-20 border-b border-border bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="02" title={t.venues.title} subtitle={t.venues.subtitle} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Map widget */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="border-b border-border px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t.venues.mapLabel}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:h-full sm:min-h-[420px]">
              <iframe
                title={t.venues.mapLabel}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.8%2C35.6%2C15.5%2C45.2&layer=mapnik"
                className="absolute inset-0 h-full w-full [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_contrast(0.95)]"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[#8B0D18] mix-blend-multiply opacity-20"
                aria-hidden
              />
            </div>
          </div>

          {/* Clubs list */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B21A20]">
                {t.venues.spain}
              </h3>
              <VenueGrid venues={venuesSpain} />
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B21A20]">
                {t.venues.international}
              </h3>
              <VenueGrid venues={venuesIntl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
