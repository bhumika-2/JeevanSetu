import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Bot, MapPinned, Droplets, Siren } from 'lucide-react'

const items = [
  { to: '/', label: 'Home', icon: LayoutDashboard, end: true },
  { to: '/nearby-care', label: 'Nearby', icon: MapPinned },
  { to: '/assistant', label: 'Ask AI', icon: Bot },
  { to: '/blood-connect', label: 'Blood', icon: Droplets },
  { to: '/emergency', label: 'SOS', icon: Siren }
]

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-teal-100 bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium ${
                isActive ? 'text-teal-600' : 'text-ink/45'
              }`
            }
          >
            {({ isActive }) =>
              item.label === 'Ask AI' ? (
                <>
                  <span
                    className={`grid h-9 w-9 -mt-4 place-items-center rounded-full shadow-pop ${
                      isActive ? 'bg-saffron-500 text-indigo-900' : 'bg-teal-500 text-white'
                    }`}
                  >
                    <item.icon size={17} />
                  </span>
                  {item.label}
                </>
              ) : item.label === 'SOS' ? (
                <>
                  <item.icon size={19} className={isActive ? '' : 'text-red-500'} />
                  <span className={isActive ? '' : 'text-red-500'}>{item.label}</span>
                </>
              ) : (
                <>
                  <item.icon size={19} />
                  {item.label}
                </>
              )
            }
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
