"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import { Language } from "../lib/translations";

export default function Home() {
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

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
            <Link href="/" className="text-gold font-semibold">{t.nav.accueil}</Link>
            <Link href="/adhesion" className="text-gray-300 hover:text-gold transition-colors">{t.nav.adhesion}</Link>
            <Link href="/evenements" className="text-gray-300 hover:text-gold transition-colors">{t.nav.evenements}</Link>
            <Link href="/galerie" className="text-gray-300 hover:text-gold transition-colors">{t.nav.galerie}</Link>
            <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">{t.nav.contact}</Link>
            <Link href="/connexion" className="bg-gold text-black px-4 py-2 rounded-lg font-bold">{t.nav.connexion}</Link>
            <div className="flex items-center gap-1 border-l border-gold/30 pl-4 ml-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                    lang === l.code ? "bg-gold text-black" : "text-gray-400 hover:text-gold"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex md:hidden items-center gap-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                  lang === l.code ? "bg-gold text-black" : "text-gray-400"
                }`}
              >
                {l.label}
              </button>
            ))}
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
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{t.hero.subtitle}</h2>
          <p className="text-gold/80 text-sm mb-10">{t.hero.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adhesion" className="bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg">{t.hero.devenirMembre}</Link>
            <Link href="/evenements" className="border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg">{t.hero.nosEvenements}</Link>
            <Link href="/connexion" className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20">{t.hero.seConnecter}</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">{t.event.badge}</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2">{t.event.titleLine1} <span className="text-gold">{t.event.titleLine2}</span></h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1400] to-[#0d0d0d] border-2 border-gold rounded-2xl overflow-hidden">
            <div className="bg-gold text-black text-center py-2 text-sm font-bold tracking-widest">{t.event.banner}</div>
            <div className="p-8">
              <h3 className="text-4xl font-black text-white mb-2">{t.event.eventName1}</h3>
              <h3 className="text-4xl font-black text-gold mb-6">{t.event.eventName2}</h3>
              <div className="text-gold text-sm font-bold mb-4">{t.event.eventSubtitle}</div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">{t.event.date}</div>
                  <div className="text-white font-bold">{t.event.dateValue}</div>
                  <div className="text-gray-400 text-xs">{t.event.dateNote}</div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">{t.event.lieu}</div>
                  <div className="text-white font-bold">{t.event.lieuValue}</div>
                  <div className="text-gray-400 text-xs">{t.event.lieuNote}</div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">{t.event.races}</div>
                  <div className="text-white font-bold">{t.event.racesValue}</div>
                  <div className="text-gray-400 text-xs">{t.event.racesNote}</div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-gold/20">
                  <div className="text-gold text-xs mb-1">{t.event.ouvertA}</div>
                  <div className="text-white font-bold">{t.event.ouvertAValue}</div>
                  <div className="text-gray-400 text-xs">{t.event.ouvertANote}</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/evenements" className="bg-gold text-black px-6 py-3 rounded-xl font-bold">{t.event.inscription}</Link>
                <Link href="/evenements" className="border border-gold text-gold px-6 py-3 rounded-xl font-bold">{t.event.enSavoirPlus}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">{t.mission.badge}</span>
          <h2 className="text-3xl font-black text-white mt-2 mb-8">{t.mission.titleLine1} <span className="text-gold">{t.mission.titleLine2}</span></h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{t.mission.description}</p>
          <div className="grid grid-cols-1 gap-6 text-left">
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">{t.mission.respect}</div>
              <div className="text-gray-400 text-sm">{t.mission.respectDesc}</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">{t.mission.excellence}</div>
              <div className="text-gray-400 text-sm">{t.mission.excellenceDesc}</div>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <div className="text-gold font-bold mb-1">{t.mission.solidarite}</div>
              <div className="text-gray-400 text-sm">{t.mission.solidariteDesc}</div>
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
              <p className="text-gray-500 text-sm max-w-xs">{t.footer.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-gold font-bold mb-3 text-sm">{t.footer.liensRapides}</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/adhesion" className="hover:text-gold transition-colors">{t.nav.adhesion}</Link></li>
                  <li><Link href="/evenements" className="hover:text-gold transition-colors">{t.nav.evenements}</Link></li>
                  <li><Link href="/galerie" className="hover:text-gold transition-colors">{t.nav.galerie}</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-gold font-bold mb-3 text-sm">{t.footer.contactTitle}</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/contact" className="hover:text-gold transition-colors">{t.footer.nousContacter}</Link></li>
                  <li><Link href="/connexion" className="hover:text-gold transition-colors">{t.footer.monEspace}</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/10 pt-6 text-center text-gray-600 text-xs">
            {t.footer.copyright}
          </div>
        </div>
            </footer>

    </main>
  );
}

