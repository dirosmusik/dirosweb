import type { SVGProps } from 'react'

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SoundcloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 15v-3" />
      <path d="M6 16v-6" />
      <path d="M9 16.5V9" />
      <path d="M12 16.5V7.5" />
      <path d="M15 16.5h4.2a2.8 2.8 0 0 0 0-5.6 4.8 4.8 0 0 0-8.7-2" />
    </svg>
  )
}

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M7 9.2c3.2-.9 6.7-.5 9.3 1.1" />
      <path d="M7.4 12.3c2.6-.7 5.4-.4 7.6 1" />
      <path d="M7.8 15.3c2-.5 4.1-.3 5.8.8" />
    </svg>
  )
}

export function BandcampIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M8.5 9.5 6 14.5h5.2l2.5-5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.2 9.3 4.4 2.7-4.4 2.7Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 6.2A5 5 0 0 0 18.6 9" />
    </svg>
  )
}

export const brandIconMap = {
  instagram: InstagramIcon,
  soundcloud: SoundcloudIcon,
  spotify: SpotifyIcon,
  bandcamp: BandcampIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
} as const
