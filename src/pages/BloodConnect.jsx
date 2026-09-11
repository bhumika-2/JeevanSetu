import React, { useMemo, useState } from 'react'
import { Droplets, Phone, MapPinned, Award, Users, HeartHandshake, X } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import Badge from '../components/common/Badge.jsx'
import { bloodRequests, donorStats, user } from '../data/mockData.js'

const groups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']

export default function BloodConnect() {
  const [group, setGroup] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [posted, setPosted] = useState(false)

  const filtered = useMemo(() => {
    const list = group === 'All' ? bloodRequests : bloodRequests.filter((b) => b.bloodGroup === group)
    const order = { Critical: 0, Urgent: 1, Moderate: 2 }
    return [...list].sort((a, b) => order[a.urgency] - order[b.urgency])
  }, [group])

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        title="BloodConnect"
        subtitle="Real-time blood requests from hospitals near you"
        action={
          <button onClick={() => setShowForm(true)} className="btn-primary">
            <HeartHandshake size={16} /> I want to donate
          </button>
        }
      />

      {/* Donor impact strip */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="card p-4 text-center">
          <p className="font-display text-xl font-bold text-teal-600">{donorStats.totalDonors.toLocaleString('en-IN')}</p>
          <p className="text-[11px] text-ink/50">Registered donors</p>
        </div>
        <div className="card p-4 text-center">
          <p className="font-display text-xl font-bold text-teal-600">{donorStats.activeThisMonth}</p>
          <p className="text-[11px] text-ink/50">Active this month</p>
        </div>
        <div className="card p-4 text-center">
          <p className="font-display text-xl font-bold text-teal-600">{donorStats.livesImpacted.toLocaleString('en-IN')}</p>
          <p className="text-[11px] text-ink/50">Lives impacted</p>
        </div>
        <div className="card border-saffron-100 bg-saffron-50/50 p-4 text-center">
          <p className="flex items-center justify-center gap-1 font-display text-xl font-bold text-saffron-600">
            <Award size={16} /> {donorStats.yourDonations}
          </p>
          <p className="text-[11px] text-ink/50">Your donations · {donorStats.badge}</p>
        </div>
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto no-scrollbar">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              group === g
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-teal-100 bg-white text-ink/60 hover:bg-teal-50'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((b) => (
          <div key={b.id} className="card p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-50 font-display text-sm font-extrabold text-red-600">
                  {b.bloodGroup}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{b.patient}</p>
                  <p className="text-xs text-ink/50">{b.unitsNeeded} units needed</p>
                </div>
              </div>
              <Badge tone={b.urgency}>{b.urgency}</Badge>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-ink/55">
              <MapPinned size={13} className="text-teal-500" /> {b.hospital} · {b.distanceKm} km · {b.postedAgo}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn-primary flex-1 text-xs">
                <Droplets size={14} /> Respond to request
              </button>
              <button className="btn-secondary text-xs px-3">
                <Phone size={14} />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-ink/40">
            No active requests for this blood group right now.
          </p>
        )}
      </div>

      {/* Donor registration modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 grid place-items-end bg-ink/40 p-0 sm:place-items-center sm:p-4">
          <div className="w-full max-w-md rounded-t-2xl bg-white p-6 shadow-pop sm:rounded-2xl animate-rise-in">
            {posted ? (
              <div className="py-4 text-center">
                <span className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-teal-50 text-teal-600">
                  <HeartHandshake size={26} />
                </span>
                <p className="font-display text-lg font-bold text-ink">Thank you, {user.name.split(' ')[0]}!</p>
                <p className="mt-1 text-sm text-ink/55">
                  You're now listed as an available {user.bloodGroup} donor. We'll alert you when a nearby patient needs your blood group.
                </p>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setPosted(false)
                  }}
                  className="btn-primary mt-5 w-full"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-lg font-bold text-ink">Register as a donor</p>
                  <button onClick={() => setShowForm(false)} className="text-ink/40 hover:text-ink">
                    <X size={20} />
                  </button>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setPosted(true)
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="text-xs font-medium text-ink/60">Full name</label>
                    <input className="input mt-1" defaultValue={user.name} required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-ink/60">Blood group</label>
                      <select className="input mt-1" defaultValue={user.bloodGroup}>
                        {groups.slice(1).map((g) => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-ink/60">Phone number</label>
                      <input className="input mt-1" defaultValue={user.phone} required />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-2 text-xs text-teal-700">
                    <Users size={14} /> Next eligible donation date: {donorStats.nextEligibleDate}
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Confirm registration
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
