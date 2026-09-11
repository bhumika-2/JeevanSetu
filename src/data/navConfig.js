import {
  LayoutDashboard,
  Bot,
  MapPinned,
  Landmark,
  Droplets,
  CalendarHeart,
  Siren,
  Users,
  Bell,
  UserRound
} from 'lucide-react'

export const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/assistant', label: 'AI Health Assistant', icon: Bot },
  { to: '/nearby-care', label: 'Nearby Healthcare', icon: MapPinned },
  { to: '/schemes', label: 'Scheme Navigator', icon: Landmark },
  { to: '/blood-connect', label: 'BloodConnect', icon: Droplets },
  { to: '/health-camps', label: 'Health Camp Alerts', icon: CalendarHeart },
  { to: '/emergency', label: 'Emergency Assistance', icon: Siren },
  { to: '/family', label: 'Family Health Portal', icon: Users },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/profile', label: 'Profile', icon: UserRound }
]
