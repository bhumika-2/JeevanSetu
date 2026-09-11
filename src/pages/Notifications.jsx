import React, { useState } from 'react'
import { Bell, Landmark, Droplets, CalendarHeart, Users, Info, Siren } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { useApp } from '../context/AppContext.jsx'

const iconMap = {
  scheme: { icon: Landmark, tone: 'bg-saffron-50 text-saffron-600' },
  blood: { icon: Droplets, tone: 'bg-red-50 text-red-600' },
  camp: { icon: CalendarHeart, tone: 'bg-indigo-50 text-indigo-500' },
  family: { icon: Users, tone: 'bg-teal-50 text-teal-600' },
  system: { icon: Info, tone: 'bg-ink/5 text-ink/50' },
  emergency: { icon: Siren, tone: 'bg-red-50 text-red-600' }
}

const filterTabs = ['All', 'Unread', 'scheme', 'blood', 'camp', 'family']

export default function Notifications() {
  const { notifications, markAllRead, markRead } = useApp()
  const [tab, setTab] = useState('All')

  const filtered = notifications.filter((n) => {
    if (tab === 'All') return true
    if (tab === 'Unread') return !n.read
    return n.type === tab
  })

  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeader
        title="Notifications"
        subtitle="Scheme matches, blood alerts, camp reminders and family updates"
        action={
          <button onClick={markAllRead} className="btn-secondary text-xs">
            Mark all as read
          </button>
        }
      />

      <div className="mb-5 flex gap-2 overflow-x-auto no-scrollbar">
        {filterTabs.map((f) => (
          <button
            key={f}
            onClick={() => setTab(f)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors ${
              tab === f
                ? 'border-teal-500 bg-teal-500 text-white'
                : 'border-teal-100 bg-white text-ink/60 hover:bg-teal-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-2.5">
        {filtered.map((n) => {
          const meta = iconMap[n.type] || iconMap.system
          const Icon = meta.icon
          return (
            <button
              key={n.id}
              onClick={() => markRead(n.id)}
              className={`card flex w-full items-start gap-3.5 p-4 text-left transition-colors ${
                !n.read ? 'border-teal-200 bg-teal-50/30' : ''
              }`}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${meta.tone}`}>
                <Icon size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold text-ink">{n.title}</p>
                  {!n.read && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-ink/55">{n.body}</p>
                <p className="mt-1.5 text-[11px] text-ink/35">{n.time}</p>
              </div>
            </button>
          )
        })}
        {filtered.length === 0 && (
          <div className="card flex flex-col items-center gap-2 py-12 text-center">
            <Bell size={22} className="text-ink/25" />
            <p className="text-sm text-ink/40">No notifications here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
