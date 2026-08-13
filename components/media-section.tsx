'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { videoClips } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function MediaSection() {
  const { t } = useLang()

  return (
    <section id="media" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="01" title={t.media.title} subtitle={t.media.subtitle} />

      <div className="mt-10 rounded-2xl border border-border bg-card p-4 sm:p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t.media.latestSet}
        </p>
        {/* SoundCloud embed placeholder for the latest live set */}
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="DIROS latest live set on SoundCloud"
            width="100%"
            height="166"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F293&color=%238b0d18&inverse=true&auto_play=false&show_user=true&hide_related=true"
            className="block w-full"
          />
        </div>
      </div>

      <div className="mt-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t.media.videosTitle}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoClips.map((clip) => (
            <button
              key={clip.title}
              type="button"
              className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-elevated text-left"
            >
              <Image
                src={clip.image || '/placeholder.svg'}
                alt={`${clip.title}, ${clip.location} — live performance clip`}
                fill
                className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-5 translate-x-0.5" fill="currentColor" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-base font-semibold text-foreground">{clip.title}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{clip.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
