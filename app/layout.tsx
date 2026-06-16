import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Help Trans 011 | Sanitetski Prevoz Beograd",
    template: `%s | Help Trans 011`,
  },
  description:
    "Help Trans 011 — privatni sanitetski prevoz i medicinski transport pacijenata u Beogradu. Prevoz nepokretnih i slabo pokretnih lica, usluga od kreveta do kreveta, međunarodni prevoz. Stižemo za ~15 minuta, dostupni 0-24h. Pozovite 060 605 4546.",
  keywords: [
    "sanitetski prevoz",
    "sanitetski transport",
    "prevoz pacijenata",
    "medicinski transport",
    "privatni sanitetski prevoz",
    "sanitetski prevoz 0-24",
    "prevoz nepokretnih lica",
    "prevoz slabo pokretnih lica",
    "usluga od kreveta do kreveta",
    "medjunarodni sanitetski prevoz",
    "prevoz u inostranstvo",
    "medjunarodni medicinski transport",
    "sanitetski prevoz Beograd",
    "hitni prevoz Beograd",
    "prevoz do bolnice",
    "help trans 011",
    "Beograd",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Help Trans 011 | Sanitetski Prevoz Beograd 0-24h",
    description:
      "Privatni sanitetski prevoz i medicinski transport pacijenata u Beogradu. Prevoz nepokretnih lica, od kreveta do kreveta, međunarodni prevoz. Stižemo za ~15 minuta, dostupni 0-24h.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Help Trans 011 — Sanitetski Prevoz Beograd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Trans 011 | Sanitetski Prevoz Beograd 0-24h",
    description:
      "Privatni sanitetski prevoz u Beogradu. Prevoz nepokretnih lica, od kreveta do kreveta, međunarodni prevoz. Stižemo za ~15 minuta.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.className}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11495396723"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11495396723');
        `}
      </Script>
      <body className="antialiased">{children}</body>
    </html>
  );
}
