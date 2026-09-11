import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar.jsx'
import Topbar from './components/layout/Topbar.jsx'
import MobileNav from './components/layout/MobileNav.jsx'

import Dashboard from './pages/Dashboard.jsx'
import AIAssistant from './pages/AIAssistant.jsx'
import NearbyCare from './pages/NearbyCare.jsx'
import SchemeNavigator from './pages/SchemeNavigator.jsx'
import BloodConnect from './pages/BloodConnect.jsx'
import HealthCamps from './pages/HealthCamps.jsx'
import Emergency from './pages/Emergency.jsx'
import FamilyPortal from './pages/FamilyPortal.jsx'
import Notifications from './pages/Notifications.jsx'
import Profile from './pages/Profile.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col lg:pl-0">
        <Topbar />
        <main className="flex-1 px-4 pb-24 pt-5 md:px-6 md:pb-10 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assistant" element={<AIAssistant />} />
            <Route path="/nearby-care" element={<NearbyCare />} />
            <Route path="/schemes" element={<SchemeNavigator />} />
            <Route path="/blood-connect" element={<BloodConnect />} />
            <Route path="/health-camps" element={<HealthCamps />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/family" element={<FamilyPortal />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <MobileNav />
      </div>
    </div>
  )
}
