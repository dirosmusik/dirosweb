// Cities grouped with geo-coordinates ([lng, lat]) for the custom SVG map + interactive list
// Exactly ONE map pin/node per city and ONE looping video popover per city when media is available.
export type MapCity = {
  id: string
  name: string
  region: 'spain' | 'intl'
  coordinates: [number, number]
  venues: string[]
  image: string
  video: string
}

export const mapCities: MapCity[] = [
  // España
  { id: 'barcelona', name: 'Barcelona', region: 'spain', coordinates: [2.1734, 41.3851], venues: ['Pacha', 'CDLC', 'La Terrrazza', 'Bikini', 'Atlantic Club', 'Sea Sea Club'], image: '/venues/barcelona.png', video: '/venues/video/glitch (bcn).mp4' },
  { id: 'sitges', name: 'Sitges', region: 'spain', coordinates: [1.8117, 41.2371], venues: ['Hola Club Sitges'], image: '/venues/sitges.png', video: '/venues/video/hola sitges (bcn).mp4' },
  { id: 'mataro', name: 'Mataró', region: 'spain', coordinates: [2.4445, 41.5388], venues: ['Privat · Particular'], image: '/venues/mataro.png', video: '/venues/video/privat (mataro).mp4' },
  { id: 'vic', name: 'Vic', region: 'spain', coordinates: [2.2549, 41.9301], venues: ['Snooz'], image: '/venues/mataro.png', video: '/venues/video/snooz (vic).MOV' },
  { id: 'madrid', name: 'Madrid', region: 'spain', coordinates: [-3.7038, 40.4168], venues: ['The Bassement Club'], image: '/venues/madrid.png', video: '/venues/video/bassement (madrid).mp4' },
  { id: 'ibiza', name: 'Ibiza', region: 'spain', coordinates: [1.4321, 38.9067], venues: ['Tantra Ibiza'], image: '/venues/ibiza.png', video: '/venues/video/tantra (ibiza).mp4' },
  { id: 'castellon', name: 'Castellón', region: 'spain', coordinates: [-0.0407, 39.9864], venues: ['Nudo Beach'], image: '/venues/castellon.png', video: '' },
  // Internacional
  { id: 'andorra', name: 'El Tarter, Andorra', region: 'intl', coordinates: [1.6566, 42.5776], venues: ['The Boss Après Ski'], image: '/venues/andorra.png', video: '/venues/video/the boss (andorra).mov' },
  { id: 'parma', name: 'Parma, Italia', region: 'intl', coordinates: [10.3279, 44.8015], venues: ['Astrolabio'], image: '/venues/parma.png', video: '/venues/video/astrolabio (it).mp4' },
  { id: 'ravenna', name: 'Rávena, Italia', region: 'intl', coordinates: [12.2035, 44.4184], venues: ['Zanzibar'], image: '/venues/ravenna.png', video: '/venues/video/ravenna (it).mov' },
  { id: 'amsterdam', name: 'Ámsterdam, Países Bajos', region: 'intl', coordinates: [4.9041, 52.3676], venues: ['Madam'], image: '/venues/amsterdam.png', video: '/venues/video/madam (amsterdam).mov' },
]

export function getBookingMailto(lang: 'es' | 'en') {
  return lang === 'es'
    ? 'mailto:bookings@dirosmusik.com?subject=Solicitud%20de%20Booking%20%E2%80%94%20DIROS'
    : 'mailto:bookings@dirosmusik.com?subject=Booking%20Enquiry%20%E2%80%94%20DIROS'
}

export const LINKS = {
  bookingEmail: 'bookings@dirosmusik.com',
  spotify: 'https://open.spotify.com/intl-es/artist/03U69LhJeNwXv8hsK9F25Y?si=HSUWYsudRwyQR2J8bYeHjw',
  soundcloudSet: 'https://on.soundcloud.com/0Az91ZTE4Ku07YGkhm',
  instagram: 'https://instagram.com/diros.musik',
  bandcamp: 'https://diros.bandcamp.com/',
  tiktok: 'https://tiktok.com/@dirosmusik',
}

export const socialBar = [
  { label: 'SoundCloud', href: 'https://soundcloud.com/dirosdj', icon: 'soundcloud' as const },
  { label: 'Spotify', href: 'https://open.spotify.com/intl-es/artist/03U69LhJeNwXv8hsK9F25Y?si=HSUWYsudRwyQR2J8bYeHjw', icon: 'spotify' as const },
  { label: 'Beatport', href: 'https://www.beatport.com/es/artist/diros/2401429', icon: 'beatport' as const },
  { label: 'Bandcamp', href: 'https://diros.bandcamp.com/', icon: 'bandcamp' as const },
  { label: 'Instagram', href: 'https://www.instagram.com/diros.musik/', icon: 'instagram' as const },
  { label: 'TikTok', href: 'https://www.tiktok.com/@dirosmusik', icon: 'tiktok' as const },
]

export type UpcomingShow = { date: string; party: string; venue: string; city: string }

export const upcomingShows: UpcomingShow[] = [
  { date: '22/08', party: 'Summer Party', venue: 'Metro Dance Club', city: 'Alicante, Spain' },
  { date: '05/09', party: 'TBA', venue: 'Venue TBA', city: 'Location TBA' },
  { date: '19/09', party: 'Babylon', venue: '', city: 'Girona, Spain' },
  { date: '20/09', party: 'Swing', venue: 'Sea Sea Club', city: 'Barcelona, Spain' },
  { date: '26/09', party: 'TBA', venue: 'Venue TBA', city: 'Location TBA' },
  { date: '03/10', party: 'Play', venue: 'Cocoa', city: 'Mataró, Spain' },
]
