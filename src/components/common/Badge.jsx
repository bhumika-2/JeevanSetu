import React from 'react'

const styles = {
  Critical: 'bg-red-50 text-red-600 border-red-100',
  Urgent: 'bg-saffron-50 text-saffron-700 border-saffron-100',
  Moderate: 'bg-teal-50 text-teal-700 border-teal-100',
  Eligible: 'bg-teal-50 text-teal-700 border-teal-100',
  'Action needed': 'bg-saffron-50 text-saffron-700 border-saffron-100',
  'Not eligible': 'bg-ink/5 text-ink/45 border-ink/10',
  Open: 'bg-teal-50 text-teal-700 border-teal-100',
  Closed: 'bg-ink/5 text-ink/45 border-ink/10'
}

export default function Badge({ children, tone }) {
  const style = styles[tone] || styles[children] || 'bg-ink/5 text-ink/60 border-ink/10'
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${style}`}>
      {children}
    </span>
  )
}
