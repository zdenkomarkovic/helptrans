const stats = [
  { value: "~15 min", label: "Prosečno vreme dolaska u Beogradu" },
  { value: "0-24h", label: "Sanitetski prevoz non-stop" },
  { value: "15+", label: "Opština Beograda u pokrivenosti" },
  { value: "EU", label: "Međunarodni prevoz u inostranstvo" },
];

export default function Stats() {
  return (
    <section className="bg-[#1f2937] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
