import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-gold/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png.PNG" alt="KBFC Logo" className="h-12 w-12 object-contain" />
            <div>
              <div className="text-gold font-bold text-sm">KBFC</div>
              <div className="text-gray-400 text-xs">Karibbean Bully Fanatics Club</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gold font-semibold">Accueil</Link>
            <Link href="/adhesion" className="text-gray-300 hover:text-gold transition-colors">Adhésion</Link>
            <Link href="/evenements" className="text-gray-300 hover:text-gold transition-colors">Événements</Link>
            <Link href="/galerie" className="text-gray-300 hover:text-gold transition-colors">Galerie</Link>
            <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
              Connexion
            </Link>
          </div>
          <button className="md:hidden text-gold text-2xl">☰</button>
        </div>
      </nav>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <img
            src="/logo.png.PNG"
            alt="KBFC"
            className="h-48 w-48 mx-auto mb-8 object-contain drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-black text-gold mb-4 tracking-wider">
            KBFC
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            KARIBBEAN BULLY FANATICS CLUB
          </h2>
          <p className="text-gold/80 text-sm md:text-base mb-10 tracking-widest">
            UNE CARAÏBE • UNE COMMUNAUTÉ • UNE PASSION CANINE • UNE CULTURE À PARTAGER
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adhesion" className="bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors">
              👤 Devenir Membre
            </Link>
            <Link href="/evenements" className="border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-black transition-colors">
              📅 Nos Événements
            </Link>
            <Link href="/connexion" className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors border border-white/20">
              🔐 Se Connecter
            </Link>
          </div>
        </div>
      </section>
      {/* ÉVÉNEMENT VEDETTE */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Événement Phare</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2">
              NOS PROCHAINS <span className="text-gold">ÉVÉNEMENTS</span>
            </h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border-2 border-gold rounded-2xl overflow-hidden mb-8">
            <div className="bg-gold text-black text-center py-2 text-sm font-bold tracking-widest">
              ★ ÉVÉNEMENT PRINCIPAL 2026 ★
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="text-gold text-sm font-bold mb-2">SHOW MULTI-RACES DES CARAÏBES</div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2">CARIBBEAN</h3>
                  <h3 className="text-4xl md:text-5xl font-black text-gold mb-6">DOG SHOW 2026</h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                      <div className="text-gold text-xs mb-1">📅 DATE</div>
                      <div className="text-white font-bold">Décembre 2026</div>
                      <div className="text-gray-400 text-xs">Vacances scolaires</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                      <div className="text-gold text-xs mb-1">📍 LIEU</div>
                      <div className="text-white font-bold">Guadeloupe</div>
                      <div className="text-gray-400 text-xs">Caraïbes françaises</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                      <div className="text-gold text-xs mb-1">🐕 RACES</div>
                      <div className="text-white font-bold">Toutes les races</div>
                      <div className="text-gray-400 text-xs">LOF et non LOF</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                      <div className="text-gold text-xs mb-1">🌍 OUVERT À</div>
                      <div className="text-white font-bold">Toute la Caraïbe</div>
                      <div className="text-gray-400 text-xs">& International</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/evenements/caribbean-dog-show-2026" className="bg-gold text-black px-6 py-3 rounded-xl font-bold text-center hover:bg-yellow-500 transition-colors">
                      Je m'inscris
                    </Link>
                    <Link href="/evenements/caribbean-dog-show-2026" className="border border-gold text-gold px-6 py-3 rounded-xl font-bold text-center hover:bg-gold/10 transition-colors">
                      En savoir plus
                    </Link>
                  </div>
                </div>
                <div className="md:w-64 text-center">
                  <div className="bg-black/50 border border-gold/30 rounded-2xl p-6">
                    <div className="text-gold font-black text-6xl mb-2">1er</div>
                    <div className="text-white font-bold text-sm">SHOW CANIN</div>
                    <div className="text-gray-400 text-xs mt-1">Multi-races des Caraïbes</div>
                    <div className="mt-4 pt-4 border-t border-gold/20">
                      <div className="text-gold text-xs mb-2">EN PARTENARIAT AVEC</div>
                      <div className="text-white font-bold">CBKR</div>
                      <div className="text-gray-400 text-xs">Caribbean Bully K9 Registry</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          {/* POURQUOI REJOINDRE */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Rejoignez-nous</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-12">
            POURQUOI REJOINDRE LE <span className="text-gold">KBFC</span> ?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🐕", titre: "Enregistrer vos chiens", desc: "Gérez et valorisez vos compagnons" },
              { icon: "📅", titre: "Participer aux événements", desc: "Shows, expositions, rencontres & plus" },
              { icon: "💳", titre: "Carte de membre", desc: "Carte numérique avec QR Code" },
              { icon: "🏆", titre: "Compétitions officielles", desc: "Juges experts & règlements clairs" },
              { icon: "🤝", titre: "Communauté passionnée", desc: "Échange, partage et entraide" },
              { icon: "📚", titre: "Ressources & documents", desc: "Guides, conseils, formations" },
            ].map((item) => (
              <div key={item.titre} className="bg-[#111] border border-gold/20 rounded-2xl p-6 hover:border-gold/60 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-gold font-bold text-sm mb-1">{item.titre}</div>
                <div className="text-gray-400 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
          <Link href="/adhesion" className="inline-block mt-10 bg-gold text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-500 transition-colors">
            Devenir membre
          </Link>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-4 bg-black border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Notre mission</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-8">
            L'ORGANISATION CYNOPHILE <span className="text-gold">DES CARAÏBES</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Le KBFC a pour mission de promouvoir les races canines, encourager un élevage responsable,
            organiser des événements de qualité et rassembler les passionnés autour de valeurs fortes :
            respect, excellence, bien-être animal, culture et solidarité.
          </p>
          <div className="grid grid-cols-1 gap-6 text-left>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">Respect</div>
              <div className="text-gray-400 text-sm">Du chien, de l'éleveur, de la communauté</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">Excellence</div>
              <div className="text-gray-400 text-sm">Dans l'élevage et les événements</div>
             </div>
            <p className="border-l-2 border-gold pl-4 text-gold font-bold">Solidarité — <span className="text-gray-400 font-normal text-sm">Une communauté unie autour de la passion canine</span></p>
        </div>
      </div>
    </section>

      {/* FOOTER */}
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
              <p className="text-gray-500 text-sm max-w-xs">
                L'organisation cynophile officielle des Caraïbes. Unir la Caraïbe, célébrer nos chiens, valoriser notre culture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-gold font-bold mb-3 text-sm">Liens rapides</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/kbfc" className="hover:text-gold transition-colors">Le KBFC</Link></li>
                  <li><Link href="/adhesion" className="hover:text-gold transition-colors">Adhésion</Link></li>
                  <li><Link href="/evenements" className="hover:text-gold transition-colors">Événements</Link></li>
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
            © 2026 Karibbean Bully Fanatics Club — Tous droits réservés.
          </div>
        </div>
      </footer>

    </main>
  );
}
