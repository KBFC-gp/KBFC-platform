import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-gold/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png.PNG" alt="KBFC" className="h-12 w-12 object-contain" />
            <div>
              <div className="text-gold font-bold text-sm">KBFC</div>
              <div className="text-gray-400 text-xs">Karibbean Bully Fanatics Club</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-gold transition-colors">Accueil</Link>
            <Link href="/adhesion" className="text-gray-300 hover:text-gold transition-colors">Adhesion</Link>
            <Link href="/evenements" className="text-gray-300 hover:text-gold transition-colors">Evenements</Link>
            <Link href="/galerie" className="text-gray-300 hover:text-gold transition-colors">Galerie</Link>
            <Link href="/contact" className="text-gold font-semibold">Contact</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold">Connexion</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Contactez-nous</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-2">NOUS <span className="text-gold">CONTACTER</span></h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Une question sur l adhesion, un evenement ou le club ? Notre equipe est la pour vous repondre.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-[#111] border border-gold/20 rounded-2xl p-6">
                <div className="text-gold font-bold mb-2">Email</div>
                <div className="text-white">contact@karibbeanbullyfanaticsclub.org</div>
                <div className="text-gray-400 text-sm mt-1">Reponse sous 48h</div>
              </div>
              <div className="bg-[#111] border border-gold/20 rounded-2xl p-6">
                <div className="text-gold font-bold mb-2">Reseaux sociaux</div>
                <div className="space-y-2">
                  <div className="text-white text-sm">Facebook : KBFC Karibbean Bully Fanatics Club</div>
                  <div className="text-white text-sm">Instagram : @kbfc_official</div>
                  <div className="text-white text-sm">TikTok : @kbfc_official</div>
                </div>
              </div>
              <div className="bg-[#111] border border-gold/20 rounded-2xl p-6">
                <div className="text-gold font-bold mb-2">Siege social</div>
                <div className="text-white">Guadeloupe</div>
                <div className="text-gray-400 text-sm mt-1">Caraibes francaises</div>
              </div>
              <div className="bg-[#111] border border-gold/20 rounded-2xl p-6">
                <div className="text-gold font-bold mb-2">Caribbean Dog Show 2026</div>
                <div className="text-gray-300 text-sm">Pour toute question concernant l evenement de decembre 2026 en Guadeloupe, contactez-nous directement par email.</div>
              </div>
            </div>

            <div className="bg-[#111] border border-gold/20 rounded-2xl p-8">
              <h2 className="text-xl font-black text-gold mb-6">Envoyer un message</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Nom complet</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-black border border-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Email</label>
                  <input type="email" placeholder="votre@email.com" className="w-full bg-black border border-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Sujet</label>
                  <select className="w-full bg-black border border-gold/30 rounded-xl px-4 py-3 text-white focus:border-gold focus:outline-none">
                    <option value="">Choisir un sujet</option>
                    <option value="adhesion">Adhesion</option>
                    <option value="evenement">Caribbean Dog Show 2026</option>
                    <option value="chien">Enregistrement chien</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Message</label>
                  <textarea placeholder="Votre message..." rows={5} className="w-full bg-black border border-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none resize-none" />
                </div>
                <button className="w-full bg-gold text-black py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                  Envoyer le message
                </button>
                <p className="text-gray-600 text-xs text-center">Le formulaire de contact sera bientot connecte. En attendant, contactez-nous par email.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border border-gold/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Vous souhaitez devenir <span className="text-gold">membre</span> ?</h2>
            <p className="text-gray-400 mb-6">Decouvrez nos offres d adhesion et rejoignez la communaute KBFC.</p>
            <Link href="/adhesion" className="inline-block bg-gold text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-gold/20 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-xs">
          2026 Karibbean Bully Fanatics Club - Tous droits reserves.
        </div>
      </footer>

    </main>
  );
}
