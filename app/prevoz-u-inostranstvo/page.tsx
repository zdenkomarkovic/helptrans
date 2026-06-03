import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneBar from "@/components/PhoneBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Međunarodni Sanitetski Prevoz — Prevoz u Inostranstvo | Help Trans 011",
  description:
    "Međunarodni sanitetski prevoz i medicinski transport pacijenata u inostranstvo — Nemačka, Austrija, Švajcarska, Slovenija, Hrvatska i sve EU/EEA zemlje. Dostupni 0-24h. Pozovite 060 605 4546.",
  keywords: [
    "međunarodni sanitetski prevoz",
    "prevoz u inostranstvo",
    "medicinski transport inostranstvo",
    "sanitetski prevoz Nemačka",
    "sanitetski prevoz Austrija",
    "sanitetski prevoz Švajcarska",
    "sanitetski prevoz Slovenija",
    "sanitetski prevoz Hrvatska",
    "prevoz pacijenata inostranstvo",
    "međunarodni medicinski transport",
  ],
  openGraph: {
    title: "Međunarodni Sanitetski Prevoz u Inostranstvo | Help Trans 011",
    description:
      "Prevoz pacijenata u sve evropske zemlje. Opremljena vozila, medicinsko osoblje, dokumentacija. Dostupni 0-24h.",
    url: `${SITE_URL}/prevoz-u-inostranstvo`,
  },
};

const countries = [
  { flag: "🇩🇪", name: "Nemačka" },
  { flag: "🇦🇹", name: "Austrija" },
  { flag: "🇨🇭", name: "Švajcarska" },
  { flag: "🇸🇮", name: "Slovenija" },
  { flag: "🇭🇷", name: "Hrvatska" },
  { flag: "🇧🇦", name: "Bosna i Hercegovina" },
  { flag: "🇲🇰", name: "Severna Makedonija" },
  { flag: "🇲🇪", name: "Crna Gora" },
  { flag: "🇭🇺", name: "Mađarska" },
  { flag: "🇷🇴", name: "Rumunija" },
  { flag: "🇧🇬", name: "Bugarska" },
  { flag: "🇫🇷", name: "Francuska" },
];

const features = [
  {
    title: "Opremljena vozila",
    description:
      "Sanitetska vozila sa medicinskom opremom za bezbedni međunarodni transport pacijenata na duge relacije.",
  },
  {
    title: "Obučeno osoblje",
    description:
      "Pratnja medicinskog osoblja tokom celog puta. Iskusan tim koji zna kako da zbrine pacijenta na dugom putu.",
  },
  {
    title: "Dokumentacija",
    description:
      "Pomažemo sa organizacijom potrebne medicinske i putne dokumentacije za prevoz pacijenta u inostranstvo.",
  },
  {
    title: "Dostupni 0-24h",
    description:
      "Organizujemo međunarodni sanitetski prevoz u svako doba dana i noći, uključujući vikende i praznike.",
  },
  {
    title: "Povratni prevoz",
    description:
      "Organizujemo i povratni prevoz pacijenata iz inostranstva u Srbiju — iz bolnica, rehabilitacionih centara i domova.",
  },
  {
    title: "Individualni pristup",
    description:
      "Svaki prevoz planiramo prema specifičnim potrebama pacijenta — ruta, tempo, pauze, medicinska podrška.",
  },
];

const faqs = [
  {
    q: "U koje države organizujete prevoz?",
    a: "Organizujemo međunarodni sanitetski prevoz u sve evropske zemlje — Nemačka, Austrija, Švajcarska, Slovenija, Hrvatska, BiH, Mađarska, Rumunija, Bugarska, Francuska i ostale EU i EEA države.",
  },
  {
    q: "Koliko košta prevoz u inostranstvo?",
    a: "Cena međunarodnog sanitetskog prevoza zavisi od destinacije, stanja pacijenta i potrebne opreme. Pozovite nas za besplatnu procenu — dajemo informacije bez obaveze.",
  },
  {
    q: "Da li možete da dovedete pacijenta iz inostranstva u Srbiju?",
    a: "Da, organizujemo i povratni prevoz — dovozimo pacijente iz inostrannih bolnica, rehabilitacionih centara ili domova nazad u Srbiju.",
  },
  {
    q: "Kako se organizuje prevoz nepokretnog pacijenta u inostranstvo?",
    a: "Pacijenta preuzimamo direktno iz kreveta (usluga od kreveta do kreveta), obezbeđujemo medicinsku pratnju i odgovarajuću opremu za dug put. Kontaktirajte nas da zajedno isplaniramo prevoz.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Help Trans 011 — Međunarodni Sanitetski Prevoz",
  description:
    "Međunarodni sanitetski prevoz i medicinski transport pacijenata u inostranstvo. Sve evropske zemlje. Dostupni 0-24h.",
  url: `${SITE_URL}/prevoz-u-inostranstvo`,
  telephone: "+381606054546",
  areaServed: "Europe",
  availableService: {
    "@type": "MedicalTherapy",
    name: "Međunarodni medicinski transport pacijenata",
  },
};

export default function InostranstvoPage() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <JsonLd data={schema} />

        {/* Hero */}
        <section className="bg-[#1f2937] pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f97316] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Dostupni 0-24h
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Međunarodni{" "}
              <span className="text-[#f97316]">Sanitetski Prevoz</span>
              <br />u Inostranstvo
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Medicinski transport pacijenata u sve evropske zemlje — Nemačka,
              Austrija, Švajcarska, Slovenija, Hrvatska i dalje. Opremljena
              vozila, medicinsko osoblje, organizacija dokumentacije.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp upit
              </a>
            </div>
          </div>
        </section>

        {/* Countries */}
        <section className="py-16 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#374151] mb-8">
              Destinacije međunarodnog prevoza
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {countries.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-[#374151] shadow-sm"
                >
                  <span className="text-lg">{c.flag}</span>
                  {c.name}
                </div>
              ))}
              <div className="flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full px-4 py-2 text-sm font-medium text-[#f97316]">
                + sve ostale EU/EEA države
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#374151] text-center mb-10">
              Zašto izabrati nas za međunarodni prevoz?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-[#f9fafb] rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-8 h-8 text-[#f97316] mb-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#374151] mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#f9fafb]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#374151] text-center mb-10">
              Česta pitanja — međunarodni prevoz
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#374151] mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1f2937]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Planirate prevoz u inostranstvo?
            </h2>
            <p className="text-gray-400 mb-8">
              Kontaktirajte nas za besplatnu procenu i informacije.
              Dostupni smo 0-24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                {PHONE}
              </a>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                Nazad na početnu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PhoneBar />
      <WhatsAppFloat />
    </>
  );
}
