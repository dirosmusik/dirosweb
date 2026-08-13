'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function CopyEmail({ className }: { className?: string }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.bookingEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={`${LINKS.bookingEmail} — ${copied ? t.copied : 'copy'}`}
      className={cn(
        'flex cursor-pointer items-center justify-center gap-1.5 text-xs text-white/70 transition-colors hover:text-white',
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="size-3.5" aria-hidden />
          {t.copied}
        </>
      ) : (
        <>
          {LINKS.bookingEmail}
          <Copy className="size-3.5" aria-hidden />
        </>
      )}
    </button>
  )
}
