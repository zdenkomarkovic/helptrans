"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Da li ste dostupni 24 sata?",
    a: "Da, naša služba radi non-stop — 24 sata dnevno, 7 dana u nedelji, uključujući vikende i praznike. Možete nas pozvati u bilo koje doba dana ili noći.",
  },
  {
    q: "Koje oblasti pokrivate?",
    a: "Primarno pokrivamo Beograd i širu okolinu. Organizujemo i međugradski prevoz pacijenata na teritoriji cele Srbije. Kontaktirajte nas za više detalja o konkretnoj destinaciji.",
  },
  {
    q: "Da li vozila imaju medicinsku opremu?",
    a: "Da, naša vozila su opremljena osnovnom medicinskom opremom za bezbedni prevoz pacijenata. Vozila su prilagođena za prevoz nepokretnih i teško pokretnih osoba.",
  },
  {
    q: "Kako mogu da rezervišem prevoz?",
    a: "Rezervacija se vrši telefonskim pozivom na broj 060 605 4546. Naš operater će uzeti sve potrebne informacije i organizovati prevoz u što kraćem roku.",
  },
  {
    q: "Koliko košta prevoz?",
    a: "Cena zavisi od destinacije, vrste prevoza i uslova. Za tačnu cenu pozovite nas — dajemo informacije besplatno i bez obaveze. Trudimo se da naše cene budu pristupačne.",
  },
  {
    q: "Da li prevozite nepokretne pacijente?",
    a: "Da, specijalizovani smo za prevoz nepokretnih i teško pokretnih pacijenata. Imamo odgovarajuću opremu i obučeno osoblje koje zna kako da bezbedno i pažljivo postupi sa pacijentom.",
  },
  {
    q: "Koliko brzo možete da stignete?",
    a: "Vreme dolaska zavisi od lokacije i trenutne dostupnosti vozila. U Beogradu uglavnom stižemo u roku od 15–30 minuta. Za hitne slučajeve dajemo prioritet.",
  },
  {
    q: "Da li mogu da zakažem prevoz unapred?",
    a: "Apsolutno. Možete zakazati prevoz dan ili više dana unapred — preporučujemo to za redovne odlaske na dijalizu, hemioterapiju, kontrolne preglede i slično.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-[#f9fafb] transition-colors"
      >
        <span className="font-semibold text-[#374151] text-sm sm:text-base">{q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-[#374151] transition-transform duration-200 ${
            open ? "rotate-180 border-[#f97316] text-[#f97316]" : ""
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5 bg-white">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
            Često postavljena pitanja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-4">
            Imate pitanje?
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Ovde smo odgovorili na najčešća pitanja naših klijenata. Ako ne
            nađete odgovor — slobodno pozovite.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Niste pronašli odgovor? Slobodno nas pozovite.</p>
          <a
            href="tel:+381606054546"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
            060 605 4546
          </a>
        </div>
      </div>
    </section>
  );
}
