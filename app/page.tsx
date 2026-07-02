import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <img src="/logo.png.PNG" alt="KBFC" className="h-48 w-48 mx-auto mb-8 object-contain" />
        <h1 className="text-5xl font-black text-gold mb-4">KBFC</h1>
        <h2 className="text-xl font-bold text-white mb-3">KARIBBEAN BULLY FANATICS CLUB</h2>
        <p className="text-gold/80 text-sm mb-10">UNE CARAIBE - UNE COMMUNAUTE - UNE PASSION CANINE</p>
        <Link href="/adhesion" className="bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg">
          Devenir Membre
        </Link>
      </div>
    </main>
  );
}
