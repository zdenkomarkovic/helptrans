import Link from "next/link";

const municipalities = [
  { name: "Stari Grad",    desc: "Centar Beograda — najbrži dolazak, ~10 min" },
  { name: "Savski Venac",  desc: "Brz sanitetski prevoz, 0-24h dostupnost" },
  { name: "Vračar",        desc: "Medicinski transport i prevoz nepokretnih" },
  { name: "Zvezdara",      desc: "Privatni sanitetski prevoz 0-24h" },
  { name: "Palilula",      desc: "Prevoz pacijenata i hitni transport" },
  { name: "Novi Beograd",  desc: "Blokovi i Bežanija — brz dolazak" },
  { name: "Zemun",         desc: "Sanitetski transport do bolnica i klinika" },
  { name: "Čukarica",      desc: "Prevoz nepokretnih i slabo pokretnih lica" },
  { name: "Rakovica",      desc: "Medicinski prevoz 0-24h na poziv" },
  { name: "Voždovac",      desc: "Od kreveta do kreveta, non-stop" },
  { name: "Grocka",        desc: "Sanitetski transport Beograd — Grocka" },
  { name: "Lazarevac",     desc: "Prevoz pacijenata Lazarevac — Beograd" },
  { name: "Mladenovac",    desc: "Sanitetski prevoz Mladenovac 0-24h" },
  { name: "Obrenovac",     desc: "Medicinski transport Obrenovac — Beograd" },
  { name: "Surčin",        desc: "Prevoz pacijenata Surčin i okolina" },
  { name: "Barajevo",      desc: "Sanitetski prevoz Barajevo 0-24h" },
];

const checkIcon = (
  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);

export default function Coverage() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
            Zona pokrivenosti
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-4">
            Gde pružamo usluge?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sanitetski prevoz pokriva sve beogradske opštine, celu Srbiju i međunarodni
            medicinski transport u inostranstvo.
          </p>
        </div>

        {/* Beogradske opštine */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#374151] mb-2">
            Sanitetski prevoz Beograd — sve opštine
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Privatni sanitetski prevoz i medicinski transport pacijenata u svim
            delovima Beograda — Zemun, Novi Beograd, Stari Grad, Vračar, Voždovac,
            Čukarica, Rakovica, Palilula i svim ostalim opštinama.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {municipalities.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#f97316]/30 transition-all"
              >
                <h3 className="font-semibold text-[#374151] text-sm mb-1">
                  Sanitetski prevoz {m.name}
                </h3>
                <p className="text-gray-400 text-xs leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Srbija + Inostranstvo */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f97316]/10 text-[#f97316] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-1.447-.894L15 9m0 8V9m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-bold text-[#374151] text-lg">Srbija</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Organizujemo sanitetski prevoz pacijenata do svih gradova u Srbiji —
              Novi Sad, Niš, Kragujevac, Subotica i sva ostala mesta.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Međugradski sanitetski transport",
                "Prevoz na dijalizu i hemioterapiju",
                "Pratnja medicinskog osoblja",
                "Specijalizovana vozila",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1f2937] rounded-2xl p-6 shadow-sm border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 bg-[#f97316]/20 text-[#f97316] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg">Inostranstvo</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
              Međunarodni sanitetski prevoz i medicinski transport pacijenata u sve
              evropske zemlje — bezbedno i profesionalno.
            </p>
            <ul className="flex flex-col gap-2 relative z-10 mb-5">
              {[
                "Nemačka, Austrija, Švajcarska",
                "Slovenija, Hrvatska, BiH",
                "Sve ostale EU i EEA zemlje",
                "Dokumentacija i pratnja",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/prevoz-u-inostranstvo"
              className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold hover:underline relative z-10"
            >
              Više o međunarodnom prevozu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
