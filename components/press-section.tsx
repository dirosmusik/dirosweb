'use client'

import { Download, FileText, Sliders } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { SectionHeading } from '@/components/section-heading'

export function PressSection() {
  const { t } = useLang()

  const cards = [
    {
      icon: Sliders,
      title: t.press.technicalTitle,
      desc: t.press.technicalDesc,
      href: '/diros-technical-rider.pdf',
      file: 'diros-technical-rider.pdf',
    },
    {
      icon: FileText,
      title: t.press.hospitalityTitle,
      desc: t.press.hospitalityDesc,
      href: '/diros-hospitality-rider.pdf',
      file: 'diros-hospitality-rider.pdf',
    },
  ]

  return (
    <section id="press" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="03" title={t.press.title} subtitle={t.press.subtitle} />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
            >
              <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              <a
                href={card.href}
                download={card.file}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#8B0D18] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_0_25px_rgba(139,13,24,0.7)]"
              >
                <Download className="size-4" />
                {t.press.download}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
