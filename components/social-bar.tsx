'use client'

import { socialBar } from '@/lib/data'
import { brandIconMap } from '@/components/brand-icons'

export function SocialBar() {
  return (
    <div className="border-y border-neutral-800/60 bg-[#0a0a0a]">
      <nav
        aria-label="Social media"
        className="mx-auto flex max-w-6xl flex-wrap items-stretch justify-center px-4 sm:px-6"
      >
        {socialBar.map(({ label, href, icon }) => {
          const Icon = brandIconMap[icon]
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-center gap-2 border-l border-neutral-800/60 px-4 py-5 text-sm font-medium text-muted-foreground transition-all duration-300 first:border-l-0 hover:text-[#8B0D18] hover:[filter:drop-shadow(0_0_8px_rgba(139,13,24,0.6))]"
            >
              <Icon className="size-5 transition-colors duration-300 group-hover:text-[#8B0D18]" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
