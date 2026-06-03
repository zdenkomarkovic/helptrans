import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    "Help Trans 011 - Profesionalni sanitetski prevoz u Beogradu. Dostupni 24h, 7 dana u nedelji. Pozovite 060 605 4546.",
  keywords: [
    "sanitetski prevoz",
    "sanitetski transport",
    "prevoz pacijenata",
    "Beograd",
    "hitna pomoć",
    "medicinski prevoz",
    "help trans",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Help Trans 011 | Sanitetski Prevoz Beograd",
    description:
      "Profesionalni sanitetski prevoz u Beogradu. Dostupni 24h, 7 dana u nedelji.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
