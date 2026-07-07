'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/dashboard', label: '🏠 Tableau de bord' },
  { href: '/profile', label: '👤 Mon profil' },
  { href: '/dogs', label: '🐶 Mes chiens' },
  { href: '/membership', label: '💳 Mon adhésion' },
  { href: '/events', label: '📅 Mes événements' },
  { href: '/certificates', label: '📄 Mes certificats' },
  { href: '/admin', label: '⚙️ Administration' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 border-r bg-white p-4 hidden md:block">
      <div className="mb-8 text-xl font-bold text-gray-900">KBFC</div>
      <nav className="space-y-1">
        {links.map((link) => {
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
