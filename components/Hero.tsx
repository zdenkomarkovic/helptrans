import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Help Trans 011 sanitetsko vozilo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937]/80 via-[#1f2937]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#f97316] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Dostupni 24h / 7 dana
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Sanitetski Prevoz Beograd
            <br /><span className="text-[#f97316]">Help Trans</span>
          </h1>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Privatni sanitetski prevoz i medicinski transport pacijenata u Beogradu — dostupni{" "}
            <strong className="text-white">0-24h</strong>. Prevoz nepokretnih i slabo pokretnih
            lica, usluga od kreveta do kreveta, prevoz u inostranstvo.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "⚡ Stižemo za ~15 minuta",
              "🛏️ Od kreveta do kreveta",
              "📍 Centar Beograda",
              "✈️ Prevoz u inostranstvo",
              "⏳ Čekanje pacijenta",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
              {PHONE}
            </a>
            <a
              href="#usluge"
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Naše usluge
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-4 max-w-lg">
            {[
              { value: "~15", label: "min dolazak" },
              { value: "24/7", label: "Dostupnost" },
              { value: "0-24", label: "Sanitetski" },
              { value: "100%", label: "Pouzdanost" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
