import { createClient } from '@/lib/supabase-server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">
        Bienvenue{user?.email ? `, ${user.email}` : ''} 👋
      </h1>
      <p className="mt-1 text-gray-600">
        Voici un aperçu de votre espace membre KBFC.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="text-sm text-gray-500">🐶 Mes chiens</div>
          <div className="mt-2 text-3xl font-bold text-gray-900">—</div>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="text-sm text-gray-500">💳 Statut adhésion</div>
          <div className="mt-2 text-3xl font-bold text-gray-900">—</div>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="text-sm text-gray-500">📅 Prochain événement</div>
          <div className="mt-2 text-3xl font-bold text-gray-900">—</div>
        </div>
      </div>
    </div>
  )
}
