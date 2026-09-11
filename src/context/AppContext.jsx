import React, { createContext, useContext, useMemo, useState } from 'react'
import { notifications as seedNotifications } from '../data/mockData.js'

const AppContext = createContext(null)

export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'mr', label: 'Garhwali',native: 'hehe'},
]

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [voiceMode, setVoiceMode] = useState(false)
  const [notifications, setNotifications] = useState(seedNotifications)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  )

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))

  const markRead = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )

  const value = {
    language,
    setLanguage,
    voiceMode,
    setVoiceMode,
    notifications,
    setNotifications,
    unreadCount,
    markAllRead,
    markRead,
    sidebarOpen,
    setSidebarOpen
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
