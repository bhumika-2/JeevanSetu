import React, { useState } from 'react'
import { Users, Plus, HeartPulse, CalendarClock, Droplet, X } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { familyMembers } from '../data/mockData.js'

export default function FamilyPortal() {
  const [selected, setSelected] = useState(familyMembers[0])
  const [showAdd, setShowAdd] = useState(false)

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        title="Family Health Portal"
        subtitle="Manage health records for everyone in your household"
        action={
          <button onClick={() => setShowAdd(true)} className="btn-primary">
            <Plus size={16} /> Add family member
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="space-y-3">
            {familyMembers.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m)}
                className={`card flex w-full items-center gap-3.5 p-4 text-left transition-colors ${
                  selected.id === m.id ? 'ring-2 ring-teal-400' : ''
                }`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                  {m.avatarInitials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{m.name}</p>
                  <p className="text-xs text-ink/45">{m.relation} · {m.age} yrs</p>
                </div>
                <span className="chip">{m.bloodGroup}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="card p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-100 font-display text-xl font-bold text-teal-700">
                {selected.avatarInitials}
              </span>
              <div>
                <p className="font-display text-xl font-bold text-ink">{selected.name}</p>
                <p className="text-sm text-ink/50">{selected.relation} · {selected.age} years old</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-teal-50/70 p-3.5 text-center">
                <Droplet size={16} className="mx-auto text-red-500" />
                <p className="mt-1.5 text-sm font-bold text-ink">{selected.bloodGroup}</p>
                <p className="text-[11px] text-ink/45">Blood group</p>
              </div>
              <div className="rounded-xl bg-teal-50/70 p-3.5 text-center">
                <CalendarClock size={16} className="mx-auto text-indigo-500" />
                <p className="mt-1.5 text-sm font-bold text-ink">
                  {new Date(selected.lastCheckup).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </p>
                <p className="text-[11px] text-ink/45">Last checkup</p>
              </div>
              <div className="rounded-xl bg-teal-50/70 p-3.5 text-center">
                <HeartPulse size={16} className="mx-auto text-teal-600" />
                <p className="mt-1.5 truncate text-sm font-bold text-ink">{selected.conditions.length}</p>
                <p className="text-[11px] text-ink/45">Ongoing condition(s)</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                Ongoing conditions
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selected.conditions.length ? (
                  selected.conditions.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))
                ) : (
                  <span className="text-sm text-ink/40">No ongoing conditions on record.</span>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-saffron-100 bg-saffron-50/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-saffron-700">
                Upcoming
              </p>
              <p className="mt-1 text-sm text-ink/70">{selected.upcoming}</p>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="btn-primary text-xs">Book appointment</button>
              <button className="btn-secondary text-xs">Upload health record</button>
            </div>
          </div>
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 z-50 grid place-items-end bg-ink/40 p-0 sm:place-items-center sm:p-4">
          <div className="w-full max-w-md rounded-t-2xl bg-white p-6 shadow-pop sm:rounded-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-lg font-bold text-ink">Add family member</p>
              <button onClick={() => setShowAdd(false)} className="text-ink/40 hover:text-ink">
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setShowAdd(false)
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs font-medium text-ink/60">Full name</label>
                <input className="input mt-1" placeholder="e.g. Kiran Sharma" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-ink/60">Relation</label>
                  <input className="input mt-1" placeholder="e.g. Sister" required />
                </div>
                <div>
                  <label className="text-xs font-medium text-ink/60">Age</label>
                  <input type="number" className="input mt-1" placeholder="e.g. 24" required />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-ink/60">Blood group</label>
                <select className="input mt-1" defaultValue="O+">
                  {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">
                <Users size={15} /> Save family member
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
