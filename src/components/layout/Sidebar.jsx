import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeartPulse, X } from 'lucide-react'
import { navItems } from '../../data/navConfig.js'
import { useApp } from '../../context/AppContext.jsx'

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useApp()

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-72 shrink-0 transform bg-indigo-500 text-white transition-transform duration-300 lg:static lg:translate-x-0 lg:flex lg:flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-6 pb-5">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-saffron-500 text-indigo-900">
              <HeartPulse size={19} strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              JeevanSetu
            </span>
          </a>
          <button
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <p className="px-5 text-[11px] font-medium uppercase tracking-wide text-white/40">
          Bridge to better health
        </p>

        <nav className="mt-3 flex-1 space-y-0.5 overflow-y-auto px-3 pb-4 no-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-pop'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <item.icon size={18} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mx-4 mb-5 rounded-xl bg-white/10 p-4">
          <p className="text-xs font-semibold text-white">Need help right now?</p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/65">
            Ambulance, police and emergency helplines are one tap away.
          </p>
          <NavLink
            to="/emergency"
            onClick={() => setSidebarOpen(false)}
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-saffron-500 px-3 py-1.5 text-xs font-semibold text-indigo-900"
          >
            Open Emergency
          </NavLink>
        </div>
      </aside>
    </>
  )
}
