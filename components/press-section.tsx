'use client'

import { Download, FileText, Sliders } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { SectionHeading } from '@/components/section-heading'
import { PressAccessModal } from '@/components/press-access-modal'

export function PressSection() {
  const { t, lang } = useLang()

  const cards = [
    {
      icon: Sliders,
      title: t.press.technicalTitle,
      desc: t.press.technicalDesc,
    },
    {
      icon: FileText,
      title: t.press.hospitalityTitle,
      desc: t.press.hospitalityDesc,
    },
  ]

  const pressKitFile = lang === 'es' ? 'DIROSPressKitES.pdf' : 'DIROSPressKitEN.pdf'

  return (
    <section id="presskit" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
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
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`/${pressKitFile}`}
          download={pressKitFile}
          className="inline-flex items-center gap-2 rounded-full bg-[#8B0D18] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,13,24,0.7)]"
        >
          <Download className="size-4" />
          {t.press.downloadPressKit}
        </a>
        <PressAccessModal />
      </div>
    </section>
  )
}
