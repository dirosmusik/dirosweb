'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

export const content = {
  es: {
    nav: { bio: 'Bio', venues: 'Clubs', tour: 'Fechas', contact: 'Contacto' },
    booking: 'Solicitar Booking',
    presskit: 'Presskit',
    copied: '¡Email Copiado!',
    role: 'DJ | Producer',
    heroTag: 'Tech House · Minimal Deep Tech · Minimal | Barcelona',
    bio: {
      title: 'Biografía',
      genresLabel: 'Géneros',
      location: 'Barcelona, España',
    },
    venues: {
      title: 'Salas y Ciudades',
      subtitle: 'Ciudades y salas donde he compartido mi música.',
      spain: 'España',
      international: 'Internacional',
      mapLabel: 'Mapa de actuaciones',
      more: 'Otros clubs',
    },
    tour: {
      title: 'Salas y Eventos',
      subtitle: 'Próximas y pasadas actuaciones',
      dateHeader: 'Fecha',
      venueHeader: 'Sala / Evento',
      locationHeader: 'Ubicación',
      tba: 'Nuevas fechas muy pronto. Vuelve a consultar o solicita un booking.',
    },
    heroBio:
      'DIROS es un DJ y productor de Barcelona en constante evolución, con una sólida formación y un profundo conocimiento de la música electrónica. Su enfoque versátil y dinámico le permite fusionar distintos estilos en sets envolventes, diseñados para adaptarse con precisión al contexto y la energía de cada pista.',
    listen: 'Pistas',
    lastSet: 'Último Set',
    pressAssets: 'Recursos de Prensa',
    scroll: 'Scroll',
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
      downloadPressKit: 'Descargar Press Kit',
      pressAssets: 'Recursos de Prensa',
    },
    pressAccess: {
      title: 'CONTRASEÑA DE ACCESO',
      help: '¿Eres promotor? Solicita la clave a bookings@dirosmusik.com',
      placeholder: 'Introduce la contraseña...',
      submit: 'Acceder',
      error: 'Contraseña incorrecta',
      close: 'Cerrar',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Contratación y Consultas',
      cta: 'Solicitar Booking',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      followLabel: 'Sígueme',
    },
    rights: 'Todos los derechos reservados.',
  },
  en: {
    nav: { bio: 'Bio', venues: 'Clubs', tour: 'Dates', contact: 'Contact' },
    booking: 'Bookings & Inquiries',
    presskit: 'Presskit',
    copied: 'Email Copied!',
    role: 'DJ | Producer',
    heroTag: 'Tech House · Minimal Deep Tech · Minimal | Barcelona',
    bio: {
      title: 'Biography',
      genresLabel: 'Genres',
      location: 'Barcelona, Spain',
    },
    venues: {
      title: 'DIROS SPOT',
      subtitle: "Cities and venues where I've played my music.",
      spain: 'Spain',
      international: 'International',
      mapLabel: 'Performance map',
      more: 'Other clubs',
    },
    tour: {
      title: 'Venues & Locations',
      subtitle: 'Upcoming & past performances',
      dateHeader: 'Date',
      venueHeader: 'Venue / Event',
      locationHeader: 'Location',
      tba: 'New dates coming soon. Check back or request a booking.',
    },
    heroBio:
      'DIROS is a DJ and producer from Barcelona in constant evolution, with a solid background and a deep knowledge of electronic music. His versatile and dynamic approach allows him to fuse different styles into immersive sets, designed to precisely adapt to the context and energy of each dance floor.',
    listen: 'Tracks',
    lastSet: 'Latest Set',
    pressAssets: 'Press Assets',
    scroll: 'Scroll',
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
      downloadPressKit: 'Download Press Kit',
      pressAssets: 'Press Assets',
    },
    pressAccess: {
      title: 'ACCESS PASSWORD',
      help: 'Promoter? Request access at bookings@dirosmusik.com',
      placeholder: 'Enter password...',
      submit: 'Unlock',
      error: 'Incorrect password',
      close: 'Close',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Bookings & Inquiries',
      cta: 'Bookings & Inquiries',
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
