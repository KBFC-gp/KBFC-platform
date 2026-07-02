import Link from "next/link";

export default function EvenementsPage() {
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
            <Link href="/evenements" className="text-gold font-semibold">Evenements</Link>
            <Link href="/galerie" className="text-gray-300 hover:text-gold transition-colors">Galerie</Link>
            <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold">Connexion</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Calendrier</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-2">NOS <span className="text-gold">EVENEMENTS</span></h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Decouvrez les evenements organises par le KBFC dans toute la Caraibe. Shows canins, expositions, competitions et plus encore.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border-2 border-gold rounded-2xl overflow-hidden mb-8">
            <div className="bg-gold text-black text-center py-2 text-sm font-bold tracking-widest">A VENIR - EVENEMENT PRINCIPAL</div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="text-gold text-xs font-bold mb-2 tracking-widest">SHOW MULTI-RACES DES CARAIBES</div>
                  <h2 className="text-4xl font-black text-white mb-1">CARIBBEAN</h2>
                  <h2 className="text-4xl font-black text-gold mb-6">DOG SHOW 2026</h2>
                  <p className="text-gray-300 mb-6">Le premier show canin des Caraibes reunissant les chiens LOF et non LOF dans une meme celebration de l excellence canine. Ouvert a toutes les races reconnues et non reconnues.</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-black/50 rounded-xl p-3 border border-gold/20">
                      <div className="text-gold text-xs mb-1">DATE</div>
                      <div className="text-white font-bold">Decembre 2026</div>
                      <div className="text-gray-400 text-xs">Vacances scolaires</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-3 border border-gold/20">
                      <div className="text-gold text-xs mb-1">LIEU</div>
                      <div className="text-white font-bold">Guadeloupe</div>
                      <div className="text-gray-400 text-xs">Caraibes francaises</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-3 border border-gold/20">
                      <div className="text-gold text-xs mb-1">RACES</div>
                      <div className="text-white font-bold">Toutes les races</div>
                      <div className="text-gray-400 text-xs">LOF et non LOF</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-3 border border-gold/20">
                      <div className="text-gold text-xs mb-1">PARTENAIRE</div>
                      <div className="text-white font-bold">CBKR</div>
                      <div className="text-gray-400 text-xs">Caribbean Bully K9 Registry</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-gold font-bold mb-3">Ce que vous trouverez</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-300 text-sm">Expositions multi-races</div>
                      <div className="text-gray-300 text-sm">Classes par age et categorie</div>
                      <div className="text-gray-300 text-sm">Meilleur de race</div>
                      <div className="text-gray-300 text-sm">Meilleur du groupe</div>
                      <div className="text-gray-300 text-sm">Best in Show</div>
                      <div className="text-gray-300 text-sm">Village exposants</div>
                      <div className="text-gray-300 text-sm">Trophees et medailles</div>
                      <div className="text-gray-300 text-sm">Lots a gagner</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/adhesion" className="bg-gold text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors">Je m inscris</Link>
                    <Link href="/contact" className="border border-gold text-gold px-6 py-3 rounded-xl font-bold hover:bg-gold/10 transition-colors">Plus d infos</Link>
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="bg-black/50 border border-gold/30 rounded-2xl p-6 text-center mb-4">
                    <div className="text-gold font-black text-5xl mb-2">1er</div>
                    <div className="text-white font-bold text-sm">SHOW CANIN</div>
                    <div className="text-gray-400 text-xs mt-1">Multi-races des Caraibes</div>
                  </div>
                  <div className="bg-black/50 border border-gold/30 rounded-2xl p-6">
                    <div className="text-gold font-bold text-sm mb-3">Iles participantes</div>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div>Guadeloupe</div>
                      <div>Martinique</div>
                      <div>Guyane</div>
                      <div>Saint-Martin</div>
                      <div>Jamaique</div>
                      <div>Haiti</div>
                      <div>Republique Dominicaine</div>
                      <div>Trinite-et-Tobago</div>
                      <div>Barbade</div>
                      <div>Antigua-et-Barbuda</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-12 border border-gold/20 rounded-2xl">
            <div className="text-gold text-4xl mb-4">cal</div>
            <h3 className="text-white font-bold text-xl mb-2">Plus d evenements a venir</h3>
            <p className="text-gray-400 mb-6">Le calendrier complet sera annonce prochainement. Rejoignez le KBFC pour etre informes en priorite.</p>
            <Link href="/adhesion" className="bg-gold text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors">Devenir membre</Link>
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
