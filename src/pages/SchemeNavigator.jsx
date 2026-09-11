import React, { useMemo, useState } from 'react'
import { Landmark, FileCheck2, CalendarClock, ChevronDown, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import Badge from '../components/common/Badge.jsx'
import { schemes } from '../data/mockData.js'

const statusFilters = ['All', 'Eligible', 'Action needed', 'Not eligible']

export default function SchemeNavigator() {
  const [status, setStatus] = useState('All')
  const [openId, setOpenId] = useState(schemes[0]?.id ?? null)

  const filtered = useMemo(() => {
    const list =
      status === 'All' ? schemes : schemes.filter((s) => s.status === status)
    return [...list].sort((a, b) => b.matchScore - a.matchScore)
  }, [status])

  return (
    <div className="mx-auto max-w-5xl">
      <SectionHeader
        title="Government Scheme Navigator"
        subtitle="Matched to your family profile using age, income bracket and location"
      />

      <div className="mb-5 flex gap-2 overflow-x-auto no-scrollbar">
        {statusFilters.map((f) => (
          <button
            key={f}
            onClick={() => setStatus(f)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
              status === f
                ? 'border-saffron-500 bg-saffron-500 text-indigo-900'
                : 'border-teal-100 bg-white text-ink/60 hover:bg-teal-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((s) => {
          const open = openId === s.id
          return (
            <div key={s.id} className="card overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : s.id)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-saffron-50 text-saffron-600">
                    <Landmark size={18} />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{s.name}</p>
                    <p className="text-xs text-ink/45">{s.authority}</p>
                    <p className="mt-1.5 text-sm text-ink/65">{s.benefit}</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <Badge tone={s.status}>{s.status}</Badge>
                  <span className="text-xs font-bold text-teal-600">{s.matchScore}% match</span>
                  <ChevronDown
                    size={16}
                    className={`text-ink/40 transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {open && (
                <div className="border-t border-teal-50 bg-teal-50/30 px-5 py-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                        Eligibility criteria
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {s.eligibility.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-sm text-ink/70">
                            <FileCheck2 size={14} className="mt-0.5 shrink-0 text-teal-500" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                        Documents required
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {s.documents.map((d) => (
                          <li key={d} className="chip">{d}</li>
                        ))}
                      </ul>
                      <p className="mt-3 flex items-center gap-1.5 text-xs text-ink/50">
                        <CalendarClock size={13} /> {s.deadline}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="btn-accent text-xs"
                      disabled={s.status === 'Not eligible'}
                    >
                      {s.status === 'Not eligible' ? 'Not eligible' : 'Start application'}
                    </button>
                    <button className="btn-secondary text-xs">
                      <ExternalLink size={13} /> Official scheme page
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
