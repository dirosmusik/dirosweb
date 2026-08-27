import { FALLBACK_SHOWS, type UpcomingShow } from './data'

// Public Google Calendar ID for DIROS tour dates.
const CALENDAR_ID = '1f266f74d8f949358d64b728ca4c7032a347322a9c17eeb0f4ec3cb2c6c78254@group.calendar.google.com'

// Public calendars expose a free iCal feed with no API key required.
const ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`

const WINDOW_DAYS = 40

type RawEvent = {
  summary: string
  start: Date
}

// RFC 5545: continuation lines are folded and start with a single space or tab.
function unfoldIcs(raw: string): string[] {
  const lines: string[] = []
  for (const line of raw.replace(/\r\n/g, '\n').split('\n')) {
    if ((line.startsWith(' ') || line.startsWith('\t')) && lines.length > 0) {
      lines[lines.length - 1] += line.slice(1)
    } else if (line.length > 0) {
      lines.push(line)
    }
  }
  return lines
}

function unescapeIcsText(value: string): string {
  return value
    .replace(/\\n/gi, ' ')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\')
    .trim()
}

function parseIcsDate(value: string): Date | null {
  const dateOnly = value.match(/^(\d{4})(\d{2})(\d{2})$/)
  if (dateOnly) {
    const [, y, mo, d] = dateOnly
    return new Date(Date.UTC(+y, +mo - 1, +d))
  }

  const dateTime = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/)
  if (dateTime) {
    const [, y, mo, d, h, mi, s, z] = dateTime
    return z
      ? new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +s))
      : new Date(+y, +mo - 1, +d, +h, +mi, +s)
  }

  return null
}

function parseIcs(raw: string): RawEvent[] {
  const lines = unfoldIcs(raw)
  const events: RawEvent[] = []

  let inEvent = false
  let summary = ''
  let start: Date | null = null

  for (const line of lines) {
    if (line.startsWith('BEGIN:VEVENT')) {
      inEvent = true
      summary = ''
      start = null
      continue
    }
    if (line.startsWith('END:VEVENT')) {
      if (inEvent && start) {
        events.push({ summary: unescapeIcsText(summary), start })
      }
      inEvent = false
      continue
    }
    if (!inEvent) continue

    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const rawKey = line.slice(0, colonIndex)
    const value = line.slice(colonIndex + 1)
    const key = rawKey.split(';')[0]

    if (key === 'SUMMARY') {
      summary = value
    } else if (key === 'DTSTART') {
      start = parseIcsDate(value)
    }
  }

  return events
}

// Expected title format: "Party Name | Venue Name | City, Country"
// Falls back gracefully if the delimiter is missing.
function parseTitle(summary: string): { party: string; venue: string; city: string } {
  const parts = summary
    .split('|')
    .map((p) => p.trim())
    .filter(Boolean)

  if (parts.length >= 3) {
    return { party: parts[0], venue: parts[1], city: parts.slice(2).join(', ') }
  }
  if (parts.length === 2) {
    return { party: parts[0], venue: parts[1], city: '' }
  }
  return { party: summary.trim() || 'TBA', venue: '', city: '' }
}

function formatDDMM(date: Date): string {
  const d = String(date.getUTCDate()).padStart(2, '0')
  const m = String(date.getUTCMonth() + 1).padStart(2, '0')
  return `${d}/${m}`
}

/**
 * Fetches upcoming shows from the public DIROS Google Calendar.
 * - Only present/future events, within a 40-day window.
 * - Sorted ascending by start date.
 * - Falls back to FALLBACK_SHOWS if the calendar can't be reached or parsed.
 */
export async function getUpcomingShows(): Promise<UpcomingShow[]> {
  try {
    const res = await fetch(ICS_URL, {
      // Cache for 30 min server-side so we don't hit Google on every request,
      // while keeping the list reasonably fresh.
      next: { revalidate: 1800 },
    })

    if (!res.ok) {
      throw new Error(`Calendar fetch failed with status ${res.status}`)
    }

    const raw = await res.text()
    const events = parseIcs(raw)

    const now = new Date()
    const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
    const windowEnd = new Date(now.getTime() + WINDOW_DAYS * 24 * 60 * 60 * 1000)

    return events
      .filter((e) => e.start >= todayStart && e.start <= windowEnd)
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .map((e) => {
        const { party, venue, city } = parseTitle(e.summary)
        return { date: formatDDMM(e.start), party, venue, city }
      })
  } catch (error) {
    console.error('[calendar] Failed to fetch upcoming shows, using fallback list:', error)
    return FALLBACK_SHOWS
  }
}
