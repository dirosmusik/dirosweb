'use client'

import { MapPin } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { venuesSpain, venuesIntl } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

function VenueGrid({ venues }: { venues: { name: string; city: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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
          <MapPin className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
      ))}
    </div>
  )
}

export function EventsSection() {
  const { t } = useLang()

  return (
    <section id="events" className="scroll-mt-20 border-y border-border bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="02" title={t.events.title} subtitle={t.events.subtitle} />

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.events.spain}
            </h3>
            <VenueGrid venues={venuesSpain} />
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t.events.international}
            </h3>
            <VenueGrid venues={venuesIntl} />
          </div>
        </div>
      </div>
    </section>
  )
}
