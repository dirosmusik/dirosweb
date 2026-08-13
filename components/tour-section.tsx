'use client'

import { Calendar, ArrowUpRight } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { upcomingShows, LINKS } from '@/lib/data'
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
                key={`${show.date}-${show.venue}`}
                className="flex items-center gap-4 px-5 py-5 transition-colors hover:bg-elevated sm:gap-6 sm:px-6"
              >
                <div className="flex w-16 shrink-0 flex-col items-center rounded-xl border border-border bg-background px-2 py-2 text-center">
                  <span className="text-lg font-bold leading-none text-foreground">{show.date}</span>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-[#B21A20]">{show.day}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-foreground">{show.venue}</p>
                  <p className="truncate text-xs uppercase tracking-wider text-muted-foreground">{show.city}</p>
                </div>
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
            <a
              href={LINKS.bookingMailto}
              className="inline-flex items-center gap-2 rounded-full bg-[#8B0D18] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#B21A20] hover:shadow-[0_0_20px_rgba(139,13,24,0.6)]"
            >
              {t.booking}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
