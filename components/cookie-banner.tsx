'use client'

import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from '@/lib/consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
        const id = requestAnimationFrame(() => setVisible(true))
        return () => cancelAnimationFrame(id)
      }
    } catch {
      // localStorage unavailable — show the banner anyway
      setVisible(true)
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    } catch {
      // ignore storage errors
    }
    // Lets components like MetaPixel start tracking immediately, without a reload.
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
    // Explicit call in case window.fbq is already defined (e.g. the pixel
    // script had already loaded earlier in this session).
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', '1058143220354590')
      window.fbq('track', 'PageView')
    }
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={`fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-2xl border border-[#8B0D18]/50 bg-black/95 px-5 py-4 shadow-[0_0_30px_rgba(139,13,24,0.35)] backdrop-blur-md sm:flex-row sm:gap-6">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#8B0D18]/15 text-[#B21A20]">
          <Cookie className="size-4" />
        </span>
        <p className="flex-1 text-center text-sm leading-relaxed text-muted-foreground sm:text-left">
          Utilizamos cookies para garantizar la mejor experiencia en nuestra web.
        </p>
        <button
          type="button"
          onClick={accept}
          className="w-full shrink-0 rounded-full bg-[#8B0D18] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#B21A20] hover:shadow-[0_0_20px_rgba(139,13,24,0.6)] sm:w-auto"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
