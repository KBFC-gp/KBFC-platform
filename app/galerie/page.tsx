import Link from "next/link";

export default function GaleriePage() {
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
            <Link href="/galerie" className="text-gold font-semibold">Galerie</Link>
            <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold">Connexion</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Photos et Videos</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-2">NOTRE <span className="text-gold">GALERIE</span></h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Decouvrez les moments forts du KBFC — shows canins, evenements, membres et leurs chiens dans toute la Caraibe.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-[#111] border border-gold/20 rounded-2xl aspect-square flex items-center justify-center hover:border-gold/60 transition-colors">
              <div className="text-center">
                <div className="text-gold text-4xl mb-2">photo</div>
                <div className="text-gray-600 text-xs">Photo 1</div>
              </div>
            </div>
            <div className="bg-[#111] border border-gold/20 rounded-2xl aspect-square flex items-center justify-center hover:border-gold/60 transition-colors">
              <div className="text-center">
                <div className="text-gold text-4xl mb-2">photo</div>
                <div className="text-gray-600 text-xs">Photo 2</div>
              </div>
            </div>
            <div className="bg-[#111] border border-gold/20 rounded-2xl aspect-square flex items-center justify-center hover:border-gold/60 transition-colors">
              <div className="text-center">
                <div className="text-gold text-4xl mb-2">photo</div>
                <div className="text-gray-600 text-xs">Photo 3</div>
              </div>
            </div>
            <div className="bg-[#111] border border-gold/20 rounded-2xl aspect-square flex items-center justify-center hover:border-gold/60 transition-colors">
              <div className="text-center">
                <div className="text-gold text-4xl mb-2">photo</div>
                <div className="text-gray-600 text-xs">Photo 4</div>
              </div>
            </div>
            <div className="bg-[#111] border border-gold/20 rounded-2xl aspect-square flex items-center justify-center hover:border-gold/60 transition-colors">
              <div className="text-center">
                <div className="text-gold text-4xl mb-2">photo</div>
                <div className="text-gray-600 text-xs">Photo 5</div>
              </div>
            </div>
            <div className="bg-[#111] border border-gold/20 rounded-2xl aspect-square flex items-center justify-center hover:border-gold/60 transition-colors">
              <div className="text-center">
                <div className="text-gold text-4xl mb-2">photo</div>
                <div className="text-gray-600 text-xs">Photo 6</div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border border-gold/30 rounded-2xl p-12">
            <h2 className="text-2xl font-black text-white mb-4">Galerie en cours de <span className="text-gold">construction</span></h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">Les photos et videos des evenements KBFC seront bientot disponibles ici. Rejoignez-nous sur les reseaux sociaux pour voir nos contenus en avant-premiere.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evenements" className="bg-gold text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                Voir nos evenements
              </Link>
              <Link href="/contact" className="border border-gold text-gold px-8 py-3 rounded-xl font-bold hover:bg-gold/10 transition-colors">
                Nous contacter
              </Link>
            </div>
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
