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
