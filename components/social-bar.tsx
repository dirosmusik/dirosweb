'use client'

import { socialBar } from '@/lib/data'
import { brandIconMap } from '@/components/brand-icons'

export function SocialBar() {
  return (
    <div className="border-b border-border bg-[#0c0c0c]">
      <nav
        aria-label="Social media"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-6 sm:px-6"
      >
        {socialBar.map(({ label, href, icon }) => {
          const Icon = brandIconMap[icon]
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-5 transition-colors group-hover:text-[#B21A20]" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
