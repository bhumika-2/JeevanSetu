import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Search, Mic, Bell, ChevronDown, Globe } from 'lucide-react'
import { useApp, LANGUAGES } from '../../context/AppContext.jsx'
import { user } from '../../data/mockData.js'

export default function Topbar() {
  const { setSidebarOpen, language, setLanguage, voiceMode, setVoiceMode, unreadCount } =
    useApp()
  const [langOpen, setLangOpen] = useState(false)
  const navigate = useNavigate()

  const currentLang = LANGUAGES.find((l) => l.code === language)

  return (
    <header className="sticky top-0 z-30 border-b border-teal-100 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 md:px-6">
        <button
          className="rounded-lg p-2 text-ink/60 hover:bg-teal-50 lg:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <div className="hidden flex-1 max-w-md md:block">
          <div className="relative">
            <Search
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/35"
            />
            <input
              className="input pl-9"
              placeholder="Search hospitals, schemes, symptoms…"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          {/* Voice-first toggle */}
          <button
            onClick={() => setVoiceMode((v) => !v)}
            className={`hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors sm:flex ${
              voiceMode
                ? 'border-saffron-300 bg-saffron-50 text-saffron-700'
                : 'border-teal-100 text-ink/55 hover:bg-teal-50'
            }`}
            aria-pressed={voiceMode}
          >
            <span className="relative flex h-2 w-2">
              {voiceMode && (
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-saffron-400" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${
                  voiceMode ? 'bg-saffron-500' : 'bg-ink/30'
                }`}
              />
            </span>
            Voice-first {voiceMode ? 'on' : 'off'}
          </button>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 rounded-full border border-teal-100 px-3 py-1.5 text-xs font-semibold text-ink/70 hover:bg-teal-50"
            >
              <Globe size={15} />
              <span className="hidden sm:inline">{currentLang.native}</span>
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="absolute right-0 z-40 mt-2 w-44 overflow-hidden rounded-xl border border-teal-100 bg-white py-1 shadow-card">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center justify-between px-3.5 py-2 text-sm hover:bg-teal-50 ${
                      l.code === language ? 'text-teal-600 font-semibold' : 'text-ink/70'
                    }`}
                  >
                    <span>{l.native}</span>
                    <span className="text-xs text-ink/40">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mic quick-access to assistant */}
          <button
            onClick={() => navigate('/assistant')}
            className="grid h-9 w-9 place-items-center rounded-full bg-teal-500 text-white transition-transform hover:scale-105"
            aria-label="Speak to AI assistant"
          >
            <Mic size={16} />
          </button>

          {/* Notifications */}
          <button
            onClick={() => navigate('/notifications')}
            className="relative grid h-9 w-9 place-items-center rounded-full text-ink/60 hover:bg-teal-50"
            aria-label="Notifications"
          >
            <Bell size={19} />
            {unreadCount > 0 && (
              <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-saffron-500 text-[9px] font-bold text-indigo-900">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Profile */}
          <button
            onClick={() => navigate('/profile')}
            className="grid h-9 w-9 place-items-center rounded-full bg-teal-100 text-xs font-bold text-teal-700"
          >
            {user.avatarInitials}
          </button>
        </div>
      </div>
    </header>
  )
}
