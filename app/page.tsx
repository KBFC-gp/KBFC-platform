import Link from "next/link";

export default function Home() {
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
            <Link href="/" className="text-gold font-semibold">Accueil</Link>
            <Link href="/adhesion" className="text-gray-300 hover:text-gold transition-colors">Adhesion</Link>
            <Link href="/evenements" className="text-gray-300 hover:text-gold transition-colors">Evenements</Link>
            <Link href="/galerie" className="text-gray-300 hover:text-gold transition-colors">Galerie</Link>
            <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold">Connexion</Link>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <img src="/logo.png.PNG" alt="KBFC" className="h-48 w-48 mx-auto mb-8 object-contain" />
          <h1 className="text-5xl md:text-7xl font-black text-gold mb-4">KBFC</h1>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">KARIBBEAN BULLY FANATICS CLUB</h2>
          <p className="text-gold/80 text-sm mb-10">UNE CARAIBE - UNE COMMUNAUTE - UNE PASSION CANINE - UNE CULTURE A PARTAGER</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adhesion" className="bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg">Devenir Membre</Link>
            <Link href="/evenements" className="border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg">Nos Evenements</Link>
            <Link href="/connexion" className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20">Se Connecter</Link>
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

