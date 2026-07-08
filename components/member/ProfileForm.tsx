'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'

type Membre = {
  id: string
  Nom: string
  Prénom: string
  Email: string
  Téléphone: string
  Type_adhesion: string
  Statut: string
}

export default function ProfileForm({ membre }: { membre: Membre | null }) {
  const router = useRouter()
  const supabase = createClient()

  const [nom, setNom] = useState(membre?.Nom ?? '')
  const [prenom, setPrenom] = useState(membre?.Prénom ?? '')
  const [telephone, setTelephone] = useState(membre?.Téléphone ?? '')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage('')

    const { error } = await supabase
      .from('Membres')
      .update({
        Nom: nom,
        Prénom: prenom,
        Téléphone: telephone,
      })
      .eq('id', membre?.id)

    setSaving(false)

    if (error) {
      setMessage("Erreur lors de l'enregistrement.")
      return
    }

    setMessage('Profil mis à jour avec succès.')
    router.refresh()
  }

  if (!membre) {
    return (
      <p className="text-gray-500">
        Aucune fiche membre trouvée pour ce compte.
      </p>
    )
  }

  return (
    <form onSubmit={handleSave} className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Prénom</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
        <input
          type="email"
          value={membre.Email}
          disabled
          className="w-full rounded-lg border bg-gray-50 px-3 py-2 text-gray-500"
        />
        <p className="mt-1 text-xs text-gray-400">L'email ne peut pas être modifié ici.</p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Téléphone</label>
        <input
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
        <div>
          <span className="text-gray-500">Type d'adhésion</span>
          <p className="font-medium text-gray-900">{membre.Type_adhesion}</p>
        </div>
        <div>
          <span className="text-gray-500">Statut</span>
          <p className="font-medium text-gray-900">{membre.Statut}</p>
        </div>
      </div>

      {message && (
        <p className={`text-sm ${message.includes('Erreur') ? 'text-red-500' : 'text-green-600'}`}>
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
      >
        {saving ? 'Enregistrement...' : 'Enregistrer'}
      </button>
    </form>
  )
}
