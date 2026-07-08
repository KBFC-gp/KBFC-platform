import { createClient } from '@/lib/supabase-server'
import ProfileForm from '@/components/member/ProfileForm'

export default async function ProfilePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: membre } = await supabase
    .from('Membres')
    .select('*')
    .eq('id', user?.id)
    .single()

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Mon profil</h1>
      <p className="mt-1 text-gray-600">
        Gérez vos informations personnelles.
      </p>

      <div className="mt-8 max-w-xl">
        <ProfileForm membre={membre} />
      </div>
    </div>
  )
}
