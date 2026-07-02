import Link from "next/link";

export default function AdhesionPage() {
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
            <Link href="/adhesion" className="text-gold font-semibold">Adhesion</Link>
            <Link href="/evenements" className="text-gray-300 hover:text-gold transition-colors">Evenements</Link>
            <Link href="/galerie" className="text-gray-300 hover:text-gold transition-colors">Galerie</Link>
            <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold">Connexion</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Rejoignez-nous</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-2">DEVENIR <span className="text-gold">MEMBRE</span></h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Rejoignez la premiere organisation cynophile des Caraibes et faites partie d une communaute passionnee.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#111] border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-colors">
              <div className="text-gold font-black text-2xl mb-2">Membre Standard</div>
              <div className="text-4xl font-black text-white mb-1">30<span className="text-gold text-xl">EUR</span></div>
              <div className="text-gray-400 text-sm mb-6">par an</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Carte membre numerique
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Acces aux evenements
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Enregistrement de chiens
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Newsletter KBFC
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Acces communaute
                </li>
              </ul>
              <Link href="/contact" className="block w-full bg-gold text-black py-3 rounded-xl font-bold text-center hover:bg-yellow-500 transition-colors">
                S inscrire
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border-2 border-gold rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-black px-4 py-1 rounded-full">POPULAIRE</div>
              <div className="text-gold font-black text-2xl mb-2">Membre Premium</div>
              <div className="text-4xl font-black text-white mb-1">60<span className="text-gold text-xl">EUR</span></div>
              <div className="text-gray-400 text-sm mb-6">par an</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Tout du Standard
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Tarifs reduits evenements
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Chiens illimites
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Badge premium
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Acces prioritaire
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Support dedie
                </li>
              </ul>
              <Link href="/contact" className="block w-full bg-gold text-black py-3 rounded-xl font-bold text-center hover:bg-yellow-500 transition-colors">
                S inscrire
              </Link>
            </div>

            <div className="bg-[#111] border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-colors">
              <div className="text-gold font-black text-2xl mb-2">Club Affilié</div>
              <div className="text-4xl font-black text-white mb-1">150<span className="text-gold text-xl">EUR</span></div>
              <div className="text-gray-400 text-sm mb-6">par an</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Pour les clubs canins
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> 5 membres inclus
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Logo sur le site KBFC
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Partenariat officiel
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-gold">ok</span> Stand aux evenements
                </li>
              </ul>
              <Link href="/contact" className="block w-full bg-gold text-black py-3 rounded-xl font-bold text-center hover:bg-yellow-500 transition-colors">
                Nous contacter
              </Link>
            </div>
          </div>

          <div className="bg-[#111] border border-gold/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-black text-gold mb-6">Avantages membres</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-white font-bold mb-2">Carte membre numerique</div>
                <div className="text-gray-400 text-sm">Votre carte membre avec QR Code unique, valable pour tous les evenements KBFC. Presentez-la sur votre telephone.</div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">Enregistrement de chiens</div>
                <div className="text-gray-400 text-sm">Creez les fiches de vos chiens, gerez leurs informations et participez aux competitions officielles.</div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">Acces aux evenements</div>
                <div className="text-gray-400 text-sm">Inscrivez-vous facilement a tous les evenements KBFC dans toute la Caraibe avec des tarifs preferentiels.</div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">Communaute passionnee</div>
                <div className="text-gray-400 text-sm">Rejoignez une communaute de passionnes, echangez, partagez et progressez ensemble.</div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border border-gold/30 rounded-2xl p-12">
            <h2 className="text-3xl font-black text-white mb-4">Pret a rejoindre le <span className="text-gold">KBFC</span> ?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Contactez-nous pour finaliser votre inscription. Le paiement en ligne sera bientot disponible.</p>
            <Link href="/contact" className="inline-block bg-gold text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-500 transition-colors">
              Nous contacter
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
