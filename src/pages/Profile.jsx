import React, { useState } from 'react'
import {
  ShieldCheck,
  Landmark,
  Bell,
  Mic,
  Globe,
  LogOut,
  Pencil,
  Phone,
  Mail,
  MapPin,
  Droplet
} from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { user } from '../data/mockData.js'
import { useApp, LANGUAGES } from '../context/AppContext.jsx'

export default function Profile() {
  const { language, setLanguage, voiceMode, setVoiceMode } = useApp()
  const [smsAlerts, setSmsAlerts] = useState(true)
  const [pushAlerts, setPushAlerts] = useState(true)

  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeader title="Profile" subtitle="Your ABHA-linked health identity" />

      <div className="card overflow-hidden">
        <div className="bg-indigo-500 px-6 py-8 text-white">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 font-display text-xl font-bold">
              {user.avatarInitials}
            </span>
            <div>
              <p className="font-display text-xl font-bold">{user.name}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/70">
                <ShieldCheck size={13} /> ABHA ID: {user.abhaId}
              </p>
            </div>
            <button className="ml-auto grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <Pencil size={15} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <InfoRow icon={Phone} label="Phone" value={user.phone} />
          <InfoRow icon={Mail} label="Email" value={user.email} />
          <InfoRow icon={MapPin} label="Location" value={`${user.village}, ${user.district}, ${user.state} — ${user.pincode}`} />
          <InfoRow icon={Droplet} label="Blood group" value={`${user.bloodGroup} · Age ${user.age} · ${user.gender}`} />
        </div>
      </div>

      <div className="mt-6 card p-6">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
          <Landmark size={16} className="text-saffron-600" /> Schemes enrolled
        </p>
        <div className="flex flex-wrap gap-2">
          {user.schemesEnrolled.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>

      <div className="mt-6 card divide-y divide-teal-50 p-2">
        <SettingRow
          icon={Globe}
          title="Preferred language"
          description="Used across the app and by the AI assistant"
          control={
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-lg border border-teal-100 bg-white px-2.5 py-1.5 text-xs font-medium text-ink/70"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.native}</option>
              ))}
            </select>
          }
        />
        <SettingRow
          icon={Mic}
          title="Voice-first mode"
          description="Speak instead of type across the app"
          control={<Toggle checked={voiceMode} onChange={() => setVoiceMode((v) => !v)} />}
        />
        <SettingRow
          icon={Bell}
          title="Push notifications"
          description="Scheme matches, blood alerts, camp reminders"
          control={<Toggle checked={pushAlerts} onChange={() => setPushAlerts((v) => !v)} />}
        />
        <SettingRow
          icon={Bell}
          title="SMS alerts"
          description="For low-connectivity areas"
          control={<Toggle checked={smsAlerts} onChange={() => setSmsAlerts((v) => !v)} />}
        />
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-100">
        <LogOut size={16} /> Sign out
      </button>
    </div>
  )
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-teal-50/50 p-3.5">
      <Icon size={16} className="mt-0.5 shrink-0 text-teal-600" />
      <div className="min-w-0">
        <p className="text-[11px] text-ink/45">{label}</p>
        <p className="truncate text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  )
}

function SettingRow({ icon: Icon, title, description, control }) {
  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-600">
          <Icon size={16} />
        </span>
        <div>
          <p className="text-sm font-medium text-ink">{title}</p>
          <p className="text-xs text-ink/45">{description}</p>
        </div>
      </div>
      {control}
    </div>
  )
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? 'bg-teal-500' : 'bg-ink/15'
      }`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}
