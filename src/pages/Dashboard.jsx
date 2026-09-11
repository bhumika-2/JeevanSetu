import React from 'react'
import { Link } from 'react-router-dom'
import {
  Bot,
  MapPinned,
  Landmark,
  Droplets,
  CalendarHeart,
  Siren,
  Users,
  ArrowUpRight,
  ShieldCheck,
  HeartPulse,
  ChevronRight
} from 'lucide-react'
import StatCard from '../components/common/StatCard.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import Badge from '../components/common/Badge.jsx'
import {
  user,
  schemes,
  bloodRequests,
  healthCamps,
  nearbyFacilities,
  familyMembers
} from '../data/mockData.js'

const quickActions = [
  { to: '/assistant', label: 'Ask AI Assistant', desc: 'Symptoms, reports, guidance', icon: Bot, tone: 'bg-teal-500' },
  { to: '/nearby-care', label: 'Find Care Nearby', desc: '6 facilities open now', icon: MapPinned, tone: 'bg-indigo-500' },
  { to: '/schemes', label: 'Scheme Navigator', desc: '4 schemes you qualify for', icon: Landmark, tone: 'bg-saffron-500' },
  { to: '/blood-connect', label: 'BloodConnect', desc: '4 active requests nearby', icon: Droplets, tone: 'bg-red-500' },
  { to: '/health-camps', label: 'Health Camps', desc: '2 camps this week', icon: CalendarHeart, tone: 'bg-teal-600' },
  { to: '/emergency', label: 'Emergency SOS', desc: 'One-tap ambulance & alerts', icon: Siren, tone: 'bg-indigo-600' }
]

export default function Dashboard() {
  const topSchemes = schemes.filter((s) => s.status !== 'Not eligible').slice(0, 3)
  const criticalBlood = bloodRequests.filter((b) => b.urgency === 'Critical')
  const nextCamp = healthCamps[0]
  const closestFacility = [...nearbyFacilities].sort((a, b) => a.distanceKm - b.distanceKm)[0]

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-indigo-500 px-6 py-7 text-white shadow-pop md:px-9 md:py-9 animate-rise-in">
        <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 right-24 h-48 w-48 rounded-full bg-saffron-500/10" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <ShieldCheck size={13} /> ABHA linked · {user.village}, {user.district}
            </p>
            <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight md:text-3xl">
              Namaste, {user.name.split(' ')[0]} 👋
            </h1>
            <p className="mt-2 max-w-lg text-sm text-white/70">
              Your health score is {user.healthScore}/100. You're enrolled in{' '}
              {user.schemesEnrolled.length} government schemes and {familyMembers.length} family
              members are linked to your Family Health Portal.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/assistant" className="btn-accent">
                <Bot size={16} /> Talk to AI Assistant
              </Link>
              <Link
                to="/emergency"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Siren size={16} /> Emergency help
              </Link>
            </div>
          </div>
          <div className="hidden shrink-0 md:block">
            <div className="grid h-32 w-32 place-items-center rounded-full border-4 border-white/15 bg-white/5">
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold">{user.healthScore}</p>
                <p className="text-[10px] font-medium text-white/60">Health score</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <StatCard icon={Landmark} label="Schemes eligible" value="4 of 6" tone="saffron" trend="+1 new match this week" />
        <StatCard icon={Droplets} label="Blood requests nearby" value={bloodRequests.length} tone="teal" trend={`${criticalBlood.length} critical`} />
        <StatCard icon={CalendarHeart} label="Upcoming camps" value={healthCamps.length} tone="indigo" trend="Next in 6 days" />
        <StatCard icon={Users} label="Family members" value={familyMembers.length} tone="teal" trend="2 checkups due" />
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Quick actions */}
        <section className="lg:col-span-2">
          <SectionHeader title="Quick actions" subtitle="Everything you need, one tap away" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {quickActions.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="card group flex items-start gap-3.5 p-4 transition-transform hover:-translate-y-0.5"
              >
                <span className={`shrink-0 grid h-10 w-10 place-items-center rounded-xl text-white ${a.tone}`}>
                  <a.icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{a.label}</p>
                  <p className="mt-0.5 text-xs text-ink/50">{a.desc}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-ink/25 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-500"
                />
              </Link>
            ))}
          </div>

          {/* Closest facility + next camp */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">Closest facility</p>
              <p className="mt-2 font-display text-lg font-bold text-ink">{closestFacility.name}</p>
              <p className="text-xs text-ink/50">{closestFacility.type} · {closestFacility.distanceKm} km away</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge tone={closestFacility.openNow ? 'Open' : 'Closed'}>
                  {closestFacility.openNow ? 'Open now' : 'Closed'}
                </Badge>
                <span className="text-xs text-ink/45">~{closestFacility.waitMins} min wait</span>
              </div>
              <Link to="/nearby-care" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                View all nearby care <ChevronRight size={14} />
              </Link>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">Next health camp</p>
              <p className="mt-2 font-display text-lg font-bold text-ink">{nextCamp.title}</p>
              <p className="text-xs text-ink/50">{nextCamp.venue} · {nextCamp.distanceKm} km away</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-ink/55">
                <CalendarHeart size={14} className="text-indigo-500" />
                {new Date(nextCamp.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}, {nextCamp.time}
              </div>
              <Link to="/health-camps" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-500">
                View all camps <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Side column */}
        <section className="space-y-6">
          <div className="card p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Scheme matches for you</p>
              <Link to="/schemes" className="text-xs font-semibold text-teal-600">See all</Link>
            </div>
            <div className="space-y-3">
              {topSchemes.map((s) => (
                <div key={s.id} className="flex items-start justify-between gap-2 border-b border-teal-50 pb-3 last:border-0 last:pb-0">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{s.name}</p>
                    <p className="text-xs text-ink/45">{s.category}</p>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-teal-600">{s.matchScore}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-red-100 bg-red-50/40 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-red-500 text-white">
                <Droplets size={15} />
              </span>
              <p className="text-sm font-semibold text-ink">Critical blood needs</p>
            </div>
            <div className="space-y-2.5">
              {criticalBlood.map((b) => (
                <div key={b.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-ink">{b.patient}</p>
                    <p className="text-xs text-ink/50">{b.hospital} · {b.distanceKm} km</p>
                  </div>
                  <Badge tone="Critical">{b.bloodGroup}</Badge>
                </div>
              ))}
            </div>
            <Link to="/blood-connect" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-red-600">
              Respond now <ChevronRight size={14} />
            </Link>
          </div>

          <div className="card p-5">
            <div className="mb-3 flex items-center gap-2">
              <HeartPulse size={16} className="text-teal-600" />
              <p className="text-sm font-semibold text-ink">Family check-ups due</p>
            </div>
            <div className="space-y-2.5">
              {familyMembers.slice(0, 3).map((m) => (
                <div key={m.id} className="flex items-center gap-3 text-sm">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                    {m.avatarInitials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-ink">{m.name}</p>
                    <p className="truncate text-xs text-ink/45">{m.upcoming}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/family" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
              Open family portal <ChevronRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
