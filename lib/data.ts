// Cities grouped with geo-coordinates ([lng, lat]) for the custom SVG map + interactive list
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
  // España — exactly one map pin and one video per city
  { id: 'barcelona', name: 'Barcelona', region: 'spain', coordinates: [2.1734, 41.3851], venues: ['Pacha', 'CDLC', 'La Terrrazza', 'Bikini', 'Atlantic Club', 'SeaSeaClub'], image: '/venues/barcelona.png', video: '/venues/video/load gitch (bcn).mp4' },
  { id: 'ibiza', name: 'Ibiza', region: 'spain', coordinates: [1.4321, 38.9067], venues: ['Tantra Ibiza'], image: '/venues/ibiza.png', video: '/venues/video/tantra (ibiza).mp4' },
  { id: 'madrid', name: 'Madrid', region: 'spain', coordinates: [-3.7038, 40.4168], venues: ['The Bassement Club'], image: '/venues/madrid.png', video: '/venues/video/bassement (madrid).mp4' },
  { id: 'sitges', name: 'Sitges', region: 'spain', coordinates: [1.8117, 41.2371], venues: ['Hola Club Sitges'], image: '/venues/sitges.png', video: '/venues/video/hola sitges.mp4' },
  { id: 'mataro', name: 'Mataró', region: 'spain', coordinates: [2.4445, 41.5388], venues: ['Privat · Particular'], image: '/venues/mataro.png', video: '/venues/video/privat mataro.mp4' },
  { id: 'vic', name: 'Vic', region: 'spain', coordinates: [2.2549, 41.9301], venues: ['Snooz'], image: '/venues/mataro.png', video: '/venues/video/vic.MOV' },
  { id: 'castellon', name: 'Castellón', region: 'spain', coordinates: [-0.0407, 39.9864], venues: ['Nudo Beach'], image: '/venues/castellon.png', video: '' },
  // Internacional
  { id: 'andorra', name: 'El Tarter, Andorra', region: 'intl', coordinates: [1.6566, 42.5776], venues: ['The Boss Après Ski'], image: '/venues/andorra.png', video: '/venues/video/andorra.mov' },
  { id: 'parma', name: 'Parma, Italia', region: 'intl', coordinates: [10.3279, 44.8015], venues: ['Astrolabio'], image: '/venues/parma.png', video: '/venues/video/astrolabio (it).mp4' },
  { id: 'ravenna', name: 'Ravenna, Italia', region: 'intl', coordinates: [12.2035, 44.4184], venues: ['Zanzibar'], image: '/venues/ravenna.png', video: '/venues/video/ravenna (it).MOV' },
  { id: 'amsterdam', name: 'Ámsterdam, Países Bajos', region: 'intl', coordinates: [4.9041, 52.3676], venues: ['Madam'], image: '/venues/amsterdam.png', video: '/venues/video/amsterdam.mov' },
]

// External profiles used by the hero secondary actions and social bar
export const LINKS = {
  bookingEmail: 'bookings@dirosmusik.com',
  bookingMailto: 'mailto:bookings@dirosmusik.com?subject=Booking%20enquiry%20%E2%80%94%20DIROS',
  spotify: 'https://open.spotify.com/intl-es/artist/03U69LhJeNwXv8hsK9F25Y?si=HSUWYsudRwyQR2J8bYeHjw',
  soundcloudSet: 'https://on.soundcloud.com/0Az91ZTE4Ku07YGkhm',
  instagram: 'https://instagram.com/diros.musik',
  bandcamp: 'https://bandcamp.com',
  youtube: 'https://youtube.com',
  tiktok: 'https://tiktok.com/@diros.musik',
}

// Horizontal social bar just below the hero
export const socialBar = [
  { label: 'SoundCloud', href: 'https://soundcloud.com/dirosdj', icon: 'soundcloud' as const },
  { label: 'Spotify', href: 'https://open.spotify.com/intl-es/artist/03U69LhJeNwXv8hsK9F25Y?si=HSUWYsudRwyQR2J8bYeHjw', icon: 'spotify' as const },
  { label: 'Beatport', href: 'https://www.beatport.com/es/artist/diros/2401429', icon: 'beatport' as const },
  { label: 'Bandcamp', href: 'https://diros.bandcamp.com/', icon: 'bandcamp' as const },
  { label: 'Instagram', href: 'https://www.instagram.com/diros.musik/', icon: 'instagram' as const },
  { label: 'YouTube', href: 'https://www.youtube.com/@DIROSDJ', icon: 'youtube' as const },
  { label: 'TikTok', href: 'https://www.tiktok.com/@dirosmusik', icon: 'tiktok' as const },
]

// Upcoming shows — schedule list
export const upcomingShows: { date: string; day: string; venue: string; city: string }[] = []
