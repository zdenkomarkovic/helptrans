import Image from "next/image";
import { PHONE_HREF, PHONE } from "@/lib/constants";

const highlights = [
  "Privatni sanitetski prevoz 0-24h",
  "Usluga od kreveta do kreveta",
  "Stižemo za ~15 minuta",
  "Prevoz nepokretnih i slabo pokretnih lica",
  "Medicinski transport u inostranstvo",
  "Opremljena sanitetska vozila",
  "Opcija čekanja pacijenta",
  "Povoljne cene — bez skrivenih troškova",
];

export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/unnamed (1).jpg"
                alt="Help Trans 011 tim"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#374151] text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <div className="text-3xl font-bold text-[#f97316]">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Uvek dostupni za vas</div>
            </div>
          </div>

          <div className="lg:pl-4">
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
              Ko smo mi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-6">
              Help Trans 011 <br />
              <span className="text-gray-400">Vaš Pouzdan Partner</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">
              Help Trans 011 je specijalizovana firma za privatni sanitetski prevoz i
              medicinski transport pacijenata u Beogradu. Nalazimo se u centru grada,
              što nam omogućava da stignemo za svega ~15 minuta. Pružamo kompletnu
              uslugu od kreveta do kreveta — preuzimamo pacijenta i pratimo ga do odredišta.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Organizujemo prevoz nepokretnih i slabo pokretnih lica, sanitetski transport
              unutar Srbije i međunarodni prevoz u inostranstvo. Raspolažemo savremeno
              opremljenim vozilima i obučenim osobljem. Dostupni smo non-stop — sanitetski
              prevoz 0-24h, sva dana u nedelji, vikendima i praznicima.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                  <svg className="w-5 h-5 text-[#f97316] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
              Pozovite nas — {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
