import React, { useState } from 'react'
import { CalendarHeart, MapPinned, Users, CheckCircle2, Clock } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { healthCamps as seedCamps } from '../data/mockData.js'

export default function HealthCamps() {
  const [camps, setCamps] = useState(seedCamps)

  const toggleRegister = (id) =>
    setCamps((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, registered: !c.registered, seatsLeft: c.registered ? c.seatsLeft + 1 : c.seatsLeft - 1 }
          : c
      )
    )

  return (
    <div className="mx-auto max-w-5xl">
      <SectionHeader
        title="Health Camp Alerts"
        subtitle="Free screening, immunisation and check-up camps near Rishikesh Rural Block"
      />

      <div className="space-y-4">
        {camps.map((c) => {
          const dateLabel = new Date(c.date).toLocaleDateString('en-IN', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
          })
          return (
            <div key={c.id} className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-teal-50 px-4 py-3 text-teal-700 sm:w-24">
                <CalendarHeart size={18} />
                <p className="mt-1 text-center text-xs font-bold leading-tight">{dateLabel}</p>
              </div>

              <div className="flex-1">
                <p className="font-display text-base font-bold text-ink">{c.title}</p>
                <p className="text-xs text-ink/50">{c.organizer}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/55">
                  <span className="flex items-center gap-1">
                    <MapPinned size={13} className="text-teal-500" /> {c.venue} · {c.distanceKm} km
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-indigo-500" /> {c.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} className="text-saffron-600" /> {c.seatsLeft} seats left
                  </span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {c.services.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => toggleRegister(c.id)}
                className={`shrink-0 ${c.registered ? 'btn-secondary' : 'btn-primary'} text-xs`}
              >
                {c.registered ? (
                  <>
                    <CheckCircle2 size={14} /> Registered
                  </>
                ) : (
                  'Register'
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
