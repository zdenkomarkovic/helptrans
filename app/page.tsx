import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PhoneBar from "@/components/PhoneBar";

export const metadata = {
  title: "Help Trans 011 | Sanitetski Prevoz Beograd 0-24h",
  description:
    "Help Trans 011 — profesionalni sanitetski prevoz u Beogradu. Prevoz pacijenata, hitni transport, kućne posete. Dostupni 24h. Pozovite 060 605 4546.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <PhoneBar />
    </>
  );
}
