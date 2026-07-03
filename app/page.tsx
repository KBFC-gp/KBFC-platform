import Link from "next/link";
import Image from "next/image";

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

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <Image
          src="/banner-kbfc.jpg.PNG"
          alt="Karibbean Bully Fanatics Club"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
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

      <section className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Evenement Phare</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2">NOS PROCHAINS <span className="text-gold">EVENEMENTS</span></h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border-2 border-gold rounded-2xl overflow-hidden">
            <div className="bg-gold text-black text-center py-2 text-sm font-bold tracking-widest">EVENEMENT PRINCIPAL 2026</div>
            <div className="p-8">
              <h3 className="text-4xl font-black text-white mb-2">CARIBBEAN</h3>
              <h3 className="text-4xl font-black text-gold mb-6">DOG SHOW 2026</h3>
              <div className="text-gold text-sm font-bold mb-4">SHOW MULTI-RACES DES CARAIBES</div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">DATE</div>
                  <div className="text-white font-bold">Decembre 2026</div>
                  <div className="text-gray-400 text-xs">Vacances scolaires</div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">LIEU</div>
                  <div className="text-white font-bold">Guadeloupe</div>
                  <div className="text-gray-400 text-xs">Caraibes francaises</div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">RACES</div>
                  <div className="text-white font-bold">Toutes les races</div>
                  <div className="text-gray-400 text-xs">LOF et non LOF</div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">OUVERT A</div>
                  <div className="text-white font-bold">Toute la Caraibe</div>
                  <div className="text-gray-400 text-xs">et International</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/evenements" className="bg-gold text-black px-6 py-3 rounded-xl font-bold">Je m inscris</Link>
                <Link href="/evenements" className="border border-gold text-gold px-6 py-3 rounded-xl font-bold">En savoir plus</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Notre mission</span>
          <h2 className="text-3xl font-black text-white mt-2 mb-8">L ORGANISATION CYNOPHILE <span className="text-gold">DES CARAIBES</span></h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">Le KBFC a pour mission de promouvoir les races canines, encourager un elevage responsable, organiser des evenements de qualite et rassembler les passionnes autour de valeurs fortes : respect, excellence, bien-etre animal, culture et solidarite.</p>
          <div className="grid grid-cols-1 gap-6 text-left">
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">Respect</div>
              <div className="text-gray-400 text-sm">Du chien, de l eleveur, de la communaute</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">Excellence</div>
              <div className="text-gray-400 text-sm">Des standards reconnus dans toute la Caraibe</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">Solidarite</div>
              <div className="text-gray-400 text-sm">Une communaute unie autour de la passion canine</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-gold/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png.PNG" alt="KBFC" className="h-12 w-12 object-contain" />
                <div>
                  <div className="text-gold font-black">KBFC</div>
                  <div className="text-gray-500 text-xs">Karibbean Bully Fanatics Club</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">L organisation cynophile officielle des Caraibes.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-gold font-bold mb-3 text-sm">Liens rapides</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/adhesion" className="hover:text-gold transition-colors">Adhesion</Link></li>
                  <li><Link href="/evenements" className="hover:text-gold transition-colors">Evenements</Link></li>
                  <li><Link href="/galerie" className="hover:text-gold transition-colors">Galerie</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-gold font-bold mb-3 text-sm">Contact</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/contact" className="hover:text-gold transition-colors">Nous contacter</Link></li>
                  <li><Link href="/connexion" className="hover:text-gold transition-colors">Mon espace</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/10 pt-6 text-center text-gray-600 text-xs">
            2026 Karibbean Bully Fanatics Club - Tous droits reserves.
          </div>
        </div>
      </footer>

    </main>
  );
}
