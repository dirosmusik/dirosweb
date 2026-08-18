'use client'

import { Calendar } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { upcomingShows } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function TourSection() {
  const { t } = useLang()

  return (
    <section id="tour" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="03" title={t.tour.title} subtitle={t.tour.subtitle} />

        {upcomingShows.length > 0 ? (
          <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {upcomingShows.map((show) => (
              <li
                key={`${show.date}-${show.party}`}
                className="flex items-center gap-4 px-5 py-5 transition-colors hover:bg-elevated sm:gap-6 sm:px-6"
              >
                {/* Date */}
                <div className="flex w-14 shrink-0 flex-col items-center rounded-xl border border-border bg-background px-2 py-2 text-center">
                  <span className="text-base font-bold leading-none text-foreground">{show.date.split('/')[0]}</span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[#B21A20]">
                    {'/' + show.date.split('/')[1]}
                  </span>
                </div>

                {/* Party (large/bold) + venue (small/subtle) */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-bold text-foreground sm:text-lg">{show.party}</p>
                  {show.venue && (
                    <p className="truncate text-xs uppercase tracking-wider text-muted-foreground">{show.venue}</p>
                  )}
                </div>

                {/* City, Country (far right) */}
                <span className="shrink-0 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {show.city}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#8B0D18]/15 text-[#B21A20]">
              <Calendar className="size-5" />
            </span>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.tour.tba}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
