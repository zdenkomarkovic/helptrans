const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hitni Prevoz",
    description: "Brz odgovor i transport pacijenata u hitnim situacijama. Dolazimo u najkraćem mogućem roku.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-2 0h-2m-10 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5H9z" />
      </svg>
    ),
    title: "Prevoz do Bolnice",
    description: "Siguran i udoban transport pacijenata do bolnica i zdravstvenih ustanova u Beogradu i okolini.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 0-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1m4 0h-4" />
      </svg>
    ),
    title: "Kućne Posete",
    description: "Prevoz nepokretnih pacijenata od kuće do lekara, pregleda, dijalize ili rehabilitacije.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-1.447-.894L15 9m0 8V9m0 0L9 7" />
      </svg>
    ),
    title: "Međugradski Prevoz",
    description: "Organizovani transport pacijenata između gradova u Srbiji. Sigurno i komforno putovanje.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" />
      </svg>
    ),
    title: "Prevoz Nepokretnih",
    description: "Specijalizovano vozilo i obučeno osoblje za bezbedan prevoz nepokretnih i teško pokretnih pacijenata.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: "Dostupni 0-24h",
    description: "Naša služba radi non-stop, uključujući vikende i praznike. Uvek tu kada nas trebate.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
            Šta nudimo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-4">
            Naše Usluge
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Pružamo kompletan sanitetski prevoz u Beogradu i Srbiji. Bezbednost
            i komfor pacijenta su naš prioritet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#f97316]/10 text-[#f97316] rounded-xl flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-[#374151] text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
