import React from 'react'

export default function StatCard({ icon: Icon, label, value, trend, tone = 'teal' }) {
  const tones = {
    teal: 'bg-teal-50 text-teal-600',
    saffron: 'bg-saffron-50 text-saffron-600',
    indigo: 'bg-indigo-50 text-indigo-500'
  }
  return (
    <div className="card p-5 flex items-start justify-between gap-3 animate-rise-in">
      <div>
        <p className="text-xs font-medium text-ink/50">{label}</p>
        <p className="mt-1.5 font-display text-2xl font-bold text-ink">{value}</p>
        {trend && <p className="mt-1 text-xs font-medium text-teal-600">{trend}</p>}
      </div>
      <div className={`shrink-0 rounded-xl p-2.5 ${tones[tone]}`}>
        <Icon size={20} strokeWidth={2} />
      </div>
    </div>
  )
}
