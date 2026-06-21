import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import About from "@/components/About";
import Coverage from "@/components/Coverage";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PhoneBar from "@/components/PhoneBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Help Trans 011",
  description:
    "Privatni sanitetski prevoz i medicinski transport pacijenata u Beogradu. Prevoz nepokretnih i slabo pokretnih lica, usluga od kreveta do kreveta, međunarodni prevoz. Dostupni 0-24h.",
  url: SITE_URL,
  telephone: "+381628677096",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.8046,
    longitude: 20.4651,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://www.instagram.com/helptrans011/"],
  areaServed: [
    { "@type": "City", name: "Beograd" },
    { "@type": "Country", name: "Srbija" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge sanitetskog prevoza",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sanitetski prevoz Beograd" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prevoz nepokretnih lica" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Usluga od kreveta do kreveta" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Međunarodni sanitetski prevoz" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Privatni medicinski transport" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li ste dostupni 24 sata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, naša služba sanitetskog prevoza radi non-stop — 24 sata dnevno, 7 dana u nedelji, uključujući vikende i praznike.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko brzo možete da stignete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nalazimo se u centru Beograda — u proseku stižemo za oko 15 minuta.",
      },
    },
    {
      "@type": "Question",
      name: "Da li prevozite nepokretne pacijente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, specijalizovani smo za prevoz nepokretnih i slabo pokretnih pacijenata. Pružamo uslugu od kreveta do kreveta — preuzimamo pacijenta direktno iz kreveta.",
      },
    },
    {
      "@type": "Question",
      name: "Da li organizujete prevoz u inostranstvo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, organizujemo međunarodni sanitetski prevoz u sve evropske zemlje — Nemačka, Austrija, Švajcarska, Slovenija, Hrvatska i ostale EU i EEA države.",
      },
    },
    {
      "@type": "Question",
      name: "Da li nudite uslugu čekanja pacijenta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, nudimo opciju čekanja pacijenta tokom pregleda ili zahvata i povratni prevoz kući.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Stats />
        <HowItWorks />
        <Services />
        <About />
        <Coverage />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <PhoneBar />
      <WhatsAppFloat />
    </>
  );
}
