'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

export const content = {
  es: {
    nav: { media: 'Media', events: 'Eventos', press: 'Press Kit', contact: 'Contacto' },
    booking: 'Solicitar Booking',
    role: 'DJ | Producer',
    heroTag: 'Tech House · Minimal Deep Tech · Minimal | Barcelona',
    heroBio:
      'DIROS es un DJ y productor de Barcelona en constante evolución, con una sólida formación y un profundo conocimiento de la música electrónica. Su enfoque versátil y dinámico le permite fusionar distintos estilos en sets envolventes, diseñados para adaptarse con precisión al contexto y la energía de cada pista.',
    listen: 'Escuchar set',
    scrollBio: 'Basado en Barcelona · Disponible para bookings internacionales',
    media: {
      title: 'Live Sets & Media',
      subtitle: 'Últimos directos y clips de actuaciones seleccionados.',
      latestSet: 'Último Live Set',
      videosTitle: 'Clips en directo',
      watch: 'Ver clip',
    },
    events: {
      title: 'Events & Venues',
      subtitle: 'Una selección de clubes y festivales donde DIROS ha pinchado.',
      spain: 'España',
      international: 'Internacional',
    },
    press: {
      title: 'Press Assets & Technical Rider',
      subtitle: 'Documentación técnica y de hospitality para promotores.',
      technicalTitle: 'Technical Rider',
      technicalDesc: '3x CDJ 3000 + 1x RMX 1000 + 1x Pioneer V10 LF + 2x Booth Monitors',
      hospitalityTitle: 'Hospitality Rider',
      hospitalityDesc: 'Transfers locales + Hotel 3*+ + Refrescos en cabina',
      download: 'Descargar PDF',
    },
    contact: {
      title: '¿Listo para un booking?',
      subtitle: 'Contacta directamente para fechas, tarifas y disponibilidad.',
      cta: 'Solicitar Booking',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      followLabel: 'Sígueme',
    },
    rights: 'Todos los derechos reservados.',
  },
  en: {
    nav: { media: 'Media', events: 'Events', press: 'Press Kit', contact: 'Contact' },
    booking: 'Request Booking',
    role: 'DJ | Producer',
    heroTag: 'Tech House · Minimal Deep Tech · Minimal | Barcelona',
    heroBio:
      'DIROS is a DJ and producer from Barcelona in constant evolution, with a solid background and a deep knowledge of electronic music. His versatile and dynamic approach allows him to fuse different styles into immersive sets, designed to precisely adapt to the context and energy of each dance floor.',
    listen: 'Listen to set',
    scrollBio: 'Based in Barcelona · Available for international bookings',
    media: {
      title: 'Live Sets & Media',
      subtitle: 'Latest live recordings and selected performance clips.',
      latestSet: 'Latest Live Set',
      videosTitle: 'Live clips',
      watch: 'Watch clip',
    },
    events: {
      title: 'Events & Venues',
      subtitle: 'A selection of clubs and festivals where DIROS has played.',
      spain: 'Spain',
      international: 'International',
    },
    press: {
      title: 'Press Assets & Technical Rider',
      subtitle: 'Technical and hospitality documentation for promoters.',
      technicalTitle: 'Technical Rider',
      technicalDesc: '3x CDJ 3000 + 1x RMX 1000 + 1x Pioneer V10 LF + 2x Booth Monitors',
      hospitalityTitle: 'Hospitality Rider',
      hospitalityDesc: 'Local Transfers + Hotel 3*+ + Cabin Refreshments',
      download: 'Download PDF',
    },
    contact: {
      title: 'Ready for a booking?',
      subtitle: 'Get in touch directly for dates, fees and availability.',
      cta: 'Request Booking',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      followLabel: 'Follow',
    },
    rights: 'All rights reserved.',
  },
} as const

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof content)[Lang]
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
