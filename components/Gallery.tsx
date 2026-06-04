import Image from "next/image";

const images = [
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.39.14%20(1).jpeg",  alt: "Sanitetsko vozilo Help Trans 011" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.39.14%20(2).jpeg",  alt: "Medicinska oprema u sanitetskom vozilu" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.39.14%20(3).jpeg",  alt: "Help Trans 011 vozni park Beograd" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.39.14%20(4).jpeg",  alt: "Prevoz pacijenata Beograd" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.39.14%20(5).jpeg",  alt: "Sanitetski prevoz tim Help Trans" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.39.14%20(7).jpeg",  alt: "Help Trans 011 u akciji" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.40.13.jpeg",        alt: "Unutrašnjost sanitetskog vozila" },
  { src: "/WhatsApp%20Image%202026-06-04%20at%2008.40.14.jpeg",        alt: "Oprema za prevoz nepokretnih pacijenata" },
];

export default function Gallery() {
  return (
    <section id="galerija" className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">
            Naša vozila
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mt-2 mb-4">
            Galerija
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Savremeno opremljena vozila prilagođena za bezbedni i udoban
            prevoz pacijenata.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${
                index === 0 ? "col-span-2 row-span-2 h-72 md:h-auto" : "h-40 md:h-48"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#374151]/0 group-hover:bg-[#374151]/25 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/helptrans011/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#374151] hover:text-[#f97316] font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            Pratite nas na Instagramu @helptrans011
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
