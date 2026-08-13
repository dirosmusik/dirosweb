'use client'

import { useEffect, useRef, useState } from 'react'
import { Lock, X } from 'lucide-react'
import { useLang } from '@/lib/i18n'

const ACCESS_PASSWORD = 'dirosmusik2026'
const DROPBOX_URL =
  'https://www.dropbox.com/scl/fo/g2784s1lsxckv9ejg7982/h?rlkey=5o2546ye32bli92d61twitnh8&st=xtki1c65&dl=0'

export function PressAccessModal({ children }: { children?: React.ReactNode }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input and lock body scroll while the modal is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const id = requestAnimationFrame(() => inputRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      cancelAnimationFrame(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  function close() {
    setOpen(false)
    setValue('')
    setError(false)
  }

  function submit() {
    if (value.trim() === ACCESS_PASSWORD) {
      window.open(DROPBOX_URL, '_blank', 'noopener,noreferrer')
      close()
    } else {
      setError(true)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
      >
        <Lock className="size-4" />
        {children ?? t.press.pressAssets}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.pressAccess.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-2xl">
            <button
              type="button"
              onClick={close}
              aria-label={t.pressAccess.close}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#8B0D18]/15 text-[#B21A20]">
              <Lock className="size-5" />
            </div>

            <h2 className="text-lg font-semibold uppercase tracking-[0.15em] text-foreground text-balance">
              {t.pressAccess.title}
            </h2>

            <div className="mt-5">
              <input
                ref={inputRef}
                type="password"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  if (error) setError(false)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) submit()
                }}
                placeholder={t.pressAccess.placeholder}
                aria-invalid={error}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-[#8B0D18]"
              />
              {error && <p className="mt-2 text-xs font-medium text-[#B21A20]">{t.pressAccess.error}</p>}
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t.pressAccess.help}</p>
            </div>

            <button
              type="button"
              onClick={submit}
              className="mt-6 w-full rounded-full bg-[#8B0D18] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(139,13,24,0.7)]"
            >
              {t.pressAccess.submit}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
