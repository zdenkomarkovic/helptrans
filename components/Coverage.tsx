import Link from "next/link";

const municipalities = [
  "Stari Grad", "Savski Venac", "Vračar", "Zvezdara", "Palilula",
  "Novi Beograd", "Zemun", "Čukarica", "Rakovica", "Voždovac",
  "Grocka", "Lazarevac", "Mladenovac", "Obrenovac", "Surčin", "Barajevo",
];

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

        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f97316]/10 text-[#f97316] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#374151] text-lg">Beograd</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {municipalities.map((m) => (
                <span
                  key={m}
                  className="bg-[#f9fafb] border border-gray-200 text-[#374151] text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f97316]/10 text-[#f97316] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-1.447-.894L15 9m0 8V9m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-bold text-[#374151] text-lg">Srbija</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Organizujemo sanitetski prevoz pacijenata do svih gradova u Srbiji —
              Novi Sad, Niš, Kragujevac, Subotica, i sva ostala mesta.
            </p>
            <ul className="flex flex-col gap-2">
              {["Međugradski sanitetski transport", "Prevoz na dijalizu i hemioterapiju", "Pratnja medicinskog osoblja", "Specijalizovana vozila"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1f2937] rounded-2xl p-6 shadow-sm border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="w-10 h-10 bg-[#f97316]/20 text-[#f97316] rounded-xl flex items-center justify-center">
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
              {["Nemačka, Austrija, Švajcarska", "Slovenija, Hrvatska, BiH", "Sve ostale EU i EEA zemlje", "Dokumentacija i pratnja"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
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
