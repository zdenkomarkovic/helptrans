import { PHONE_HREF, WHATSAPP_HREF, VIBER_HREF } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Naručite odmah ili zakažite za kasnije",
    description:
      "Pozovite, pišite na WhatsApp ili Viber — u bilo koje doba dana. Možete naručiti hitno odmah ili zakazati prevoz unapred.",
  },
  {
    number: "02",
    title: "Dolazimo za ~15 minuta",
    description:
      "Nalazimo se u centru Beograda. Opremljeno sanitetsko vozilo i obučeno osoblje stižu brzo na vašu adresu.",
  },
  {
    number: "03",
    title: "Bezbedni prevoz do odredišta",
    description:
      "Preuzimamo pacijenta direktno iz kreveta i bezbedno ga dovodimo na odredište — bolnica, klinika, dom, inostranstvo.",
  },
];

const whatsappIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const viberIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.398.002C8.717-.028 3.282.42 1.02 4.867c-1.177 2.31-1.042 5.31-.89 7.66.15 2.35.524 6.95 4.33 8.03h.004l-.004 1.838s-.025.672.417.808c.534.163.848-.344 1.361-.893.28-.302.667-.746 1.026-1.156 2.82.237 4.99-.305 5.24-.384.568-.184 3.78-.595 4.305-4.85.542-4.39-.264-7.163-1.7-8.42v-.004c-.408-.36-2.055-1.573-5.71-1.494zm.08 1.53c3.216-.065 4.637 1.007 4.976 1.3 1.172 1.03 1.83 3.572 1.36 7.28-.43 3.49-3.017 3.72-3.496 3.875-.213.07-2.167.563-4.67.4 0 0-1.854 2.236-2.436 2.82-.09.09-.195.128-.263.11-.097-.026-.124-.143-.123-.315l.016-2.737c-3.174-.893-3.01-4.943-3.137-7.02-.127-2.077-.008-4.62.94-6.53 1.86-3.618 6.405-3.997 6.833-4.183zm.013 2.48s-3.61-.035-5.252 2.986c-.85 1.566-.77 3.594-.65 4.89.12 1.298.476 3.618 2.063 4.37l.033 1.524c0 .002.698-1.538.698-1.538 3.084.217 5.193-.303 5.193-.303s2.63-.4 2.955-3.77c.346-3.6-.26-5.796-1.324-6.72-.84-.74-2.136-1.44-3.716-1.44zm-1.963 2.09c.19-.006.378.073.51.235l.003.002c.23.285.62.815.67 1.22.048.382-.166.694-.428.932-.055.05-.118.1-.147.168-.032.073-.03.175.01.306.25.758 1.175 1.716 1.817 2.062.168.09.332.15.467.15.19 0 .34-.094.436-.278.092-.178.378-.572.52-.762.135-.177.35-.195.564-.094l1.655.886c.206.11.348.297.383.51.037.23-.064.583-.444.91-.477.41-1.083.64-1.726.65-.486.008-1.278-.047-2.677-.77-1.3-.674-2.282-1.606-2.915-2.554-.457-.684-.67-1.303-.655-1.908.018-.763.464-1.294.75-1.57.288-.275.586-.43.857-.453.07-.006.136-.013.2-.016l-.051.374z" />
  </svg>
);

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
            Jednostavan proces
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Naručite odmah ili zakažite za kasnije — sve u manje od minute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px border-t-2 border-dashed border-gray-200" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 text-[#f97316] flex items-center justify-center text-2xl font-bold mb-5 relative z-10">
                {step.number}
              </div>
              <h3 className="font-bold text-[#374151] text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
            Pozovite odmah
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
          >
            {whatsappIcon}
            WhatsApp
          </a>
          <a
            href={VIBER_HREF}
            className="flex items-center justify-center gap-3 bg-[#7360f2] hover:bg-[#5f4fd4] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
          >
            {viberIcon}
            Viber
          </a>
        </div>
      </div>
    </section>
  );
}
