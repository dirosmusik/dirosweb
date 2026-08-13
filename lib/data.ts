export const venuesSpain = [
  { name: 'The Bassement', city: 'Madrid' },
  { name: 'Tantra', city: 'Ibiza' },
  { name: 'Pacha', city: 'Barcelona' },
  { name: 'City Hall', city: 'Barcelona' },
  { name: 'Macarena', city: 'Barcelona' },
  { name: 'Skyfall', city: 'Barcelona' },
  { name: 'Go Beach', city: 'Barcelona' },
  { name: 'Atlantic Club', city: '' },
  { name: 'M7 Club', city: '' },
  { name: 'Downtown', city: '' },
  { name: 'Hola Club', city: 'Sitges' },
  { name: 'Nudo Beach', city: 'Castellón' },
  { name: 'Snooz', city: 'Vic' },
  { name: 'Attic & La Guasa', city: 'Mataró' },
  { name: 'Load', city: '' },
]

export const venuesIntl = [{ name: 'Zanzibar', city: 'Ravena, Italy' }]

// Cities grouped with geo-coordinates ([lng, lat]) for the custom SVG map + interactive list
export type MapCity = {
  id: string
  name: string
  region: 'spain' | 'intl'
  coordinates: [number, number]
  venues: string[]
}

export const mapCities: MapCity[] = [
  { id: 'barcelona', name: 'Barcelona', region: 'spain', coordinates: [2.1734, 41.3851], venues: ['Pacha', 'City Hall', 'Macarena', 'Skyfall', 'Go Beach'] },
  { id: 'madrid', name: 'Madrid', region: 'spain', coordinates: [-3.7038, 40.4168], venues: ['The Bassement'] },
  { id: 'ibiza', name: 'Ibiza', region: 'spain', coordinates: [1.4321, 38.9067], venues: ['Tantra'] },
  { id: 'sitges', name: 'Sitges', region: 'spain', coordinates: [1.8117, 41.2371], venues: ['Hola Club'] },
  { id: 'castellon', name: 'Castellón', region: 'spain', coordinates: [-0.0374, 39.9864], venues: ['Nudo Beach'] },
  { id: 'vic', name: 'Vic', region: 'spain', coordinates: [2.2549, 41.9301], venues: ['Snooz'] },
  { id: 'mataro', name: 'Mataró', region: 'spain', coordinates: [2.4445, 41.5388], venues: ['Attic & La Guasa'] },
  { id: 'ravenna', name: 'Ravenna', region: 'intl', coordinates: [12.2035, 44.4184], venues: ['Zanzibar'] },
]

// Additional clubs without a mapped city
export const moreClubs = ['Atlantic Club', 'M7 Club', 'Downtown', 'Load']

// External profiles used by the hero secondary actions and social bar
export const LINKS = {
  bookingEmail: 'bookings@dirosmusik.com',
  bookingMailto: 'mailto:bookings@dirosmusik.com?subject=Booking%20enquiry%20%E2%80%94%20DIROS',
  spotify: 'https://open.spotify.com/search/DIROS',
  soundcloudSet: 'https://soundcloud.com/diros',
  instagram: 'https://instagram.com/diros.musik',
  bandcamp: 'https://bandcamp.com',
  youtube: 'https://youtube.com',
  tiktok: 'https://tiktok.com/@diros.musik',
}

// Horizontal social bar just below the hero
export const socialBar = [
  { label: 'SoundCloud', href: LINKS.soundcloudSet, icon: 'soundcloud' as const },
  { label: 'Spotify', href: LINKS.spotify, icon: 'spotify' as const },
  { label: 'Instagram', href: LINKS.instagram, icon: 'instagram' as const },
  { label: 'Bandcamp', href: LINKS.bandcamp, icon: 'bandcamp' as const },
  { label: 'YouTube', href: LINKS.youtube, icon: 'youtube' as const },
  { label: 'TikTok', href: LINKS.tiktok, icon: 'tiktok' as const },
]

// Upcoming shows — schedule list
export const upcomingShows: { date: string; day: string; venue: string; city: string }[] = []
