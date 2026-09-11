import React, { useMemo, useState } from 'react'
import { MapPinned, Star, Clock, Phone, Navigation, ShieldCheck, BedDouble } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import Badge from '../components/common/Badge.jsx'
import { nearbyFacilities } from '../data/mockData.js'

const filters = ['All', 'Government', 'Private', 'Pharmacy']

export default function NearbyCare() {
  const [filter, setFilter] = useState('All')
  const [openOnly, setOpenOnly] = useState(false)
  const [sortBy, setSortBy] = useState('distance')

  const results = useMemo(() => {
    let list = nearbyFacilities.filter((f) => {
      if (filter === 'All') return true
      return f.type.toLowerCase().includes(filter.toLowerCase())
    })
    if (openOnly) list = list.filter((f) => f.openNow)
    list = [...list].sort((a, b) =>
      sortBy === 'distance' ? a.distanceKm - b.distanceKm : b.rating - a.rating
    )
    return list
  }, [filter, openOnly, sortBy])

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        title="Nearby Healthcare"
        subtitle="Hospitals, PHCs and pharmacies around Rishikesh Rural Block, live availability"
        action={
          <div className="flex items-center gap-2 text-xs">
            <label className="flex items-center gap-1.5 text-ink/60">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded accent-teal-500"
                checked={openOnly}
                onChange={(e) => setOpenOnly(e.target.checked)}
              />
              Open now
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-teal-100 bg-white px-2 py-1.5 text-xs text-ink/70"
            >
              <option value="distance">Sort: Nearest</option>
              <option value="rating">Sort: Top rated</option>
            </select>
          </div>
        }
      />

      <div className="mb-5 flex gap-2 overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
              filter === f
                ? 'border-teal-500 bg-teal-500 text-white'
                : 'border-teal-100 bg-white text-ink/60 hover:bg-teal-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Mock map strip */}
      <div className="card relative mb-6 flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#0F6B62_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink/60 shadow-card">
          <MapPinned size={15} className="text-teal-600" />
          Map view — {results.length} facilities within 10 km of Rishikesh Rural Block
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {results.map((f) => (
          <div key={f.id} className="card p-5 animate-rise-in">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-base font-bold text-ink">{f.name}</p>
                <p className="text-xs text-ink/50">{f.type}</p>
              </div>
              <Badge tone={f.openNow ? 'Open' : 'Closed'}>{f.openNow ? 'Open now' : 'Closed'}</Badge>
            </div>

            <p className="mt-2 text-xs text-ink/50">{f.address}</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink/60">
              <span className="flex items-center gap-1">
                <MapPinned size={13} className="text-teal-500" /> {f.distanceKm} km
              </span>
              <span className="flex items-center gap-1">
                <Star size={13} className="text-saffron-500" /> {f.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-indigo-500" /> ~{f.waitMins} min wait
              </span>
              {f.schemeAccepted && (
                <span className="flex items-center gap-1 text-teal-600">
                  <ShieldCheck size={13} /> PM-JAY accepted
                </span>
              )}
            </div>

            {f.beds && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-teal-50/70 px-3 py-2 text-xs text-ink/60">
                <BedDouble size={14} className="text-teal-600" />
                {f.beds.general} general · {f.beds.icu} ICU · {f.beds.oxygen} oxygen beds available
              </div>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {f.specialties.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <button className="btn-primary flex-1 text-xs">
                <Navigation size={14} /> Directions
              </button>
              <button className="btn-secondary flex-1 text-xs">
                <Phone size={14} /> Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
