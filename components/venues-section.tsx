'use client'

import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { useLang } from '@/lib/i18n'
import { mapCities, type MapCity } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const CRIMSON = '#8B0D18'

function DirosMap({
  activeId,
  onActivate,
}: {
  activeId: string | null
  onActivate: (id: string | null) => void
}) {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [4.2, 45.8], scale: 950 }}
      width={800}
      height={640}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: '#18181b', stroke: '#27272a', strokeWidth: 0.5, outline: 'none' },
                hover: { fill: '#18181b', stroke: '#27272a', strokeWidth: 0.5, outline: 'none' },
                pressed: { fill: '#18181b', stroke: '#27272a', strokeWidth: 0.5, outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>

      {mapCities.map((city) => {
        const active = activeId === city.id
        return (
          <Marker
            key={city.id}
            coordinates={city.coordinates}
            onMouseEnter={() => onActivate(city.id)}
            onMouseLeave={() => onActivate(null)}
            style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
          >
            {/* pulsing halo */}
            <circle
              r={active ? 11 : 7}
              fill={CRIMSON}
              className="animate-ping"
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'center',
                opacity: active ? 0.55 : 0.3,
              }}
            />
            {/* glowing dot */}
            <circle
              r={active ? 5 : 3.5}
              fill={CRIMSON}
              stroke="#ffffff"
              strokeWidth={active ? 1 : 0.6}
              style={{
                filter: `drop-shadow(0 0 ${active ? 14 : 7}px ${CRIMSON})`,
                transition: 'all 0.25s ease',
              }}
            />
          </Marker>
        )
      })}
    </ComposableMap>
  )
}

/** Sleek dark video-style preview card shown while a city is hovered. */
function VenuePopover({ activeCity }: { activeCity: MapCity | null }) {
  const [display, setDisplay] = useState<MapCity | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (activeCity) {
      setDisplay(activeCity)
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }
    setVisible(false)
    const timeout = setTimeout(() => setDisplay(null), 300)
    return () => clearTimeout(timeout)
  }, [activeCity])

  if (!display) return null

  return (
    <div
      className="pointer-events-none absolute inset-x-3 top-3 z-20 flex justify-center"
      aria-hidden
    >
      <div
        className={`w-full max-w-sm overflow-hidden rounded-xl border border-[#8B0D18]/50 bg-black/90 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
        <div className="relative aspect-video overflow-hidden">
          <video
            key={display.id}
            src={encodeURI(display.video)}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={display.image || '/placeholder.svg'}
            className="size-full object-cover"
          />
          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* live indicator */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-[#8B0D18]" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
              Live
            </span>
          </div>

          {/* title overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-base font-bold leading-tight text-white text-balance">
              {display.venues.join(' · ')}
            </p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-[#B21A20]">
              {display.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CityRow({
  city,
  active,
  onActivate,
}: {
  city: MapCity
  active: boolean
  onActivate: (id: string | null) => void
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onActivate(city.id)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(city.id)}
      onBlur={() => onActivate(null)}
      className="group flex w-full items-start justify-between gap-4 border-b border-white/5 py-3 text-left transition-colors"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <span
            className="size-2 shrink-0 rounded-full transition-all duration-300"
            style={{
              backgroundColor: CRIMSON,
              boxShadow: active ? `0 0 12px ${CRIMSON}` : `0 0 4px ${CRIMSON}80`,
              transform: active ? 'scale(1.35)' : 'scale(1)',
            }}
            aria-hidden
          />
          <span
            className="text-sm font-semibold tracking-wide transition-colors"
            style={{ color: active ? '#f4f4f5' : '#d4d4d8' }}
          >
            {city.name}
          </span>
        </div>
        <p className="mt-1 pl-[18px] text-xs leading-relaxed text-muted-foreground">
          {city.venues.join(' · ')}
        </p>
      </div>
    </button>
  )
}

export function VenuesSection() {
  const { t } = useLang()
  const [activeId, setActiveId] = useState<string | null>(null)

  const spain = mapCities.filter((c) => c.region === 'spain')
  const intl = mapCities.filter((c) => c.region === 'intl')
  const activeCity = mapCities.find((c) => c.id === activeId) ?? null

  return (
    <section id="venues" className="scroll-mt-20 border-b border-border bg-black">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="02" title={t.venues.title} subtitle={t.venues.subtitle} />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          {/* Custom SVG map */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="border-b border-white/10 px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t.venues.mapLabel}
              </p>
            </div>
            <div className="relative p-2 sm:p-4">
              <DirosMap activeId={activeId} onActivate={setActiveId} />
              <VenuePopover activeCity={activeCity} />
            </div>
          </div>

          {/* Interactive cities / clubs list */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B21A20]">
                {t.venues.spain}
              </h3>
              <div className="flex flex-col">
                {spain.map((c) => (
                  <CityRow key={c.id} city={c} active={activeId === c.id} onActivate={setActiveId} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B21A20]">
                {t.venues.international}
              </h3>
              <div className="flex flex-col">
                {intl.map((c) => (
                  <CityRow key={c.id} city={c} active={activeId === c.id} onActivate={setActiveId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
