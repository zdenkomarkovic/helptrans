"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAdsConversion() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (!target?.href || !window.gtag) return;

      if (target.href.startsWith("tel:")) {
        window.gtag("event", "conversion", {
          send_to: "AW-18259301604/m4GACK69jMMcEOSp24JE",
          value: 1.0,
          currency: "RSD",
        });
      } else if (
        target.href.startsWith("https://wa.me/") ||
        target.href.startsWith("viber://")
      ) {
        window.gtag("event", "conversion", {
          send_to: "AW-18259301604/sGQICPzP88IcEOSp24JE",
          value: 1.0,
          currency: "RSD",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
