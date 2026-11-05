import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode za React - hvata potencijalne probleme ranije
  reactStrictMode: true,

  // Optimizacija slika - dodaj domene po potrebi
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      // Google profile photos za recenzije
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Redirect non-www -> www (canonical domen)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sanitetskiprevoz-beograd.rs" }],
        destination: "https://www.sanitetskiprevoz-beograd.rs/:path*",
        permanent: true,
      },
    ];
  },

  // Headers za bolju sigurnost
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
