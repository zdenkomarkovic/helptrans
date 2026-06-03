const testimonials = [
  {
    name: "Marija Nikolić",
    text: "Odlična usluga! Vozilo je stiglo za 15 minuta, osoblje ljubazno i profesionalno. Prevezli su mamu do bolnice bez ikakvih problema. Toplo preporučujem.",
    rating: 5,
    detail: "Prevoz do KBC Zemun",
  },
  {
    name: "Dragan Petrović",
    text: "Koristim Help Trans 011 već godinu dana za redovne odlaske na dijalizu. Uvek tačni, uvek pažljivi. Ne mogu da zamislim bolju uslugu.",
    rating: 5,
    detail: "Redovni prevoz — dijaliza",
  },
  {
    name: "Snežana Jovanović",
    text: "Zvala sam u 2 ujutru i za kratko vreme su bili pred vratima. Profesionalno, brzo i humano. Hvala ekipi Help Trans 011.",
    rating: 5,
    detail: "Hitni prevoz — noć",
  },
  {
    name: "Milan Stojanović",
    text: "Prevoz oca iz Beograda do Novog Sada — sve je prošlo savršeno. Vozilo opremljeno, vozač strpljiv i pažljiv prema pacijentu.",
    rating: 5,
    detail: "Međugradski prevoz",
  },
  {
    name: "Gordana Lukić",
    text: "Veoma sam zadovoljna. Cena je realna, a usluga odlična. Osoblje zna kako da postupa sa nepokretnim pacijentima — pažljivo i stručno.",
    rating: 5,
    detail: "Prevoz nepokretnog pacijenta",
  },
  {
    name: "Zoran Đorđević",
    text: "Rezervisao sam prevoz za jutro i sve je bilo tačno po dogovoru. Preporučujem svima koji trebaju pouzdan sanitetski prevoz u Beogradu.",
    rating: 5,
    detail: "Prevoz do privatne klinike",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="recenzije" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
            Iskustva klijenata
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-4">
            Šta kažu naši pacijenti
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Poverenje klijenata je naša najveća nagrada. Evo šta kažu oni koji
            su koristili naše usluge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f9fafb] rounded-2xl p-6 border border-gray-100 flex flex-col gap-4"
            >
              <svg className="w-8 h-8 text-[#f97316]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-gray-500 text-sm leading-relaxed flex-1">{t.text}</p>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#374151] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.detail}</div>
                </div>
                <Stars count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
