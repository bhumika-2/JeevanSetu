import React, { useState } from 'react'
import {
  Siren,
  Phone,
  MapPin,
  Ambulance,
  Shield,
  HeartHandshake,
  FlaskConical,
  Stethoscope,
  CheckCircle2,
  Loader2
} from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { emergencyContacts, familyEmergencyContacts, user } from '../data/mockData.js'

const iconMap = {
  ambulance: Ambulance,
  shield: Shield,
  'heart-handshake': HeartHandshake,
  flask: FlaskConical,
  stethoscope: Stethoscope
}

export default function Emergency() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  function triggerSOS() {
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1800)
  }

  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeader
        title="Emergency Assistance"
        subtitle="One tap connects you to an ambulance and alerts your family"
      />

      <div className="card relative overflow-hidden border-red-100 bg-gradient-to-br from-red-50 via-white to-white p-6 text-center md:p-10">
        <div className="relative mx-auto flex flex-col items-center">
          <button
            onClick={triggerSOS}
            disabled={status !== 'idle'}
            className="relative grid h-32 w-32 place-items-center rounded-full bg-red-500 text-white shadow-pop transition-transform hover:scale-105 disabled:hover:scale-100 md:h-40 md:w-40"
          >
            {status === 'idle' && (
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-red-400" />
            )}
            {status === 'sending' ? (
              <Loader2 size={40} className="animate-spin" />
            ) : status === 'sent' ? (
              <CheckCircle2 size={44} />
            ) : (
              <div className="flex flex-col items-center gap-1">
                <Siren size={34} />
                <span className="text-sm font-extrabold tracking-wide">SOS</span>
              </div>
            )}
          </button>

          <p className="mt-6 font-display text-lg font-bold text-ink">
            {status === 'idle' && 'Tap to alert ambulance & family'}
            {status === 'sending' && 'Sharing your location…'}
            {status === 'sent' && 'Help is on the way'}
          </p>
          <p className="mt-1.5 max-w-sm text-sm text-ink/55">
            {status === 'sent'
              ? `An ambulance has been dispatched to your live location and ${familyEmergencyContacts[0].name} has been notified.`
              : 'This shares your live location with 108 ambulance services and your emergency contacts.'}
          </p>
          {status === 'sent' && (
            <div className="mt-4 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-ink/60 shadow-card">
              <MapPin size={13} className="text-red-500" /> {user.village}, {user.district}, {user.state}
            </div>
          )}
          {status === 'sent' && (
            <button
              onClick={() => setStatus('idle')}
              className="mt-5 text-xs font-semibold text-ink/40 underline underline-offset-2"
            >
              Reset demo
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="card p-5">
          <p className="mb-3 text-sm font-semibold text-ink">National helplines</p>
          <div className="space-y-2.5">
            {emergencyContacts.map((c) => {
              const Icon = iconMap[c.icon] || Phone
              return (
                <a
                  key={c.id}
                  href={`tel:${c.number}`}
                  className="flex items-center justify-between rounded-xl border border-teal-50 px-3.5 py-2.5 hover:bg-teal-50/60"
                >
                  <span className="flex items-center gap-3 text-sm text-ink/75">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-50 text-teal-600">
                      <Icon size={15} />
                    </span>
                    {c.label}
                  </span>
                  <span className="font-display text-sm font-bold text-teal-600">{c.number}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="card p-5">
          <p className="mb-3 text-sm font-semibold text-ink">Your emergency contacts</p>
          <div className="space-y-2.5">
            {familyEmergencyContacts.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between rounded-xl border border-teal-50 px-3.5 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{c.name}</p>
                  <p className="text-xs text-ink/45">{c.relation}</p>
                </div>
                <a href={`tel:${c.number}`} className="grid h-8 w-8 place-items-center rounded-full bg-teal-500 text-white">
                  <Phone size={14} />
                </a>
              </div>
            ))}
          </div>
          <button className="btn-secondary mt-3 w-full text-xs">+ Add emergency contact</button>
        </div>
      </div>
    </div>
  )
}
