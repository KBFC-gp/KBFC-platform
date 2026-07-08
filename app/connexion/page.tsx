'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function ConnexionPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
        alert('Le bouton fonctionne !')
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError("Email ou mot de passe incorrect.")
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <img src="/logo.png.PNG" alt="KBFC" className="h-24 w-24 mx-auto mb-4 object-contain" />
          </Link>
          <h1 className="text-3xl font-black text-gold">MON ESPACE</h1>
          <p className="text-gray-400 mt-2">Connectez-vous a votre compte KBFC</p>
        </div>

        <form onSubmit={handleLogin} className="bg-[#111] border border-gold/20 rounded-2xl p-8">
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full bg-black border border-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Mot de passe</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Votre mot de passe"
                className="w-full bg-black border border-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <Link href="/contact" className="text-gold text-sm hover:underline">Mot de passe oublie ?</Link>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-black py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors mb-4 disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

          <div className="border-t border-gold/10 pt-4 text-center">
            <p className="text-gray-400 text-sm mb-3">Pas encore membre ?</p>
            <Link href="/adhesion" className="block w-full border border-gold text-gold py-3 rounded-xl font-bold text-center hover:bg-gold/10 transition-colors">
              Devenir membre
            </Link>
          </div>
        </form>

        <div className="text-center mt-6">
          <Link href="/" className="text-gray-600 text-sm hover:text-gold transition-colors">Retour a l accueil</Link>
        </div>
      </div>

    </main>
  )
}
