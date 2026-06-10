"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const navLinks = [
  { href: "/#usluge", label: "Usluge" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#kontakt", label: "Kontakt" },
];

const inostranstvoLink = { href: "/prevoz-u-inostranstvo", label: "Prevoz u inostranstvo" };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Help Trans 011 logo"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="font-bold text-[#374151] text-base leading-tight">
            Help Trans
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#374151] hover:text-[#f97316] font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={inostranstvoLink.href}
            className="flex items-center gap-1.5 border border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white px-3 py-1.5 rounded-lg font-semibold text-sm transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064" />
            </svg>
            {inostranstvoLink.label}
          </Link>
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden md:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
          </svg>
          {PHONE}
        </a>

        <button
          className="md:hidden p-2 text-[#374151]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori meni"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#374151] hover:text-[#f97316] font-medium py-2 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={inostranstvoLink.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 border border-[#f97316] text-[#f97316] px-3 py-2 rounded-lg font-semibold text-sm mt-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064" />
              </svg>
              {inostranstvoLink.label}
            </Link>
            <a
              href={PHONE_HREF}
              className="mt-2 flex items-center justify-center gap-2 bg-[#f97316] text-white px-4 py-3 rounded-lg font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
              Pozovi {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
