'use client'

import { useState } from 'react'
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
            <div className="p-2 sm:p-4">
              <DirosMap activeId={activeId} onActivate={setActiveId} />
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
