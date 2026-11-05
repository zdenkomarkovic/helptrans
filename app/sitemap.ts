import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/prevoz-u-inostranstvo`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
