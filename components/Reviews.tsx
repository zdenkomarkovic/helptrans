import type { ReviewsResponse } from "@/app/api/reviews/route";

async function getReviews(): Promise<ReviewsResponse | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/reviews`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function RatingBar({ label, value, total }: { label: string; value: number; total: number }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-4 text-slate-600 text-right">{label}</span>
      <svg className="w-3 h-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-slate-500 w-8 text-right">{pct}%</span>
    </div>
  );
}

export default async function Reviews() {
  const data = await getReviews();

  if (!data || data.reviews.length === 0) {
    return null;
  }

  const { rating, user_ratings_total, reviews } = data;

  // Broji koliko je recenzija po oceni
  const starCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Math.round(r.rating) === star).length,
  }));

  return (
    <section id="recenzije" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest">
            Iskustva klijenata
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b] mt-2 mb-4">
            Google Recenzije
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            Originalne recenzije direktno sa Google Business profila.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Leva kolona — ukupna ocena */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 text-center border border-slate-100">
            {/* Veliki broj */}
            <div className="text-7xl font-bold text-[#1b3a6b] leading-none mb-2">
              {rating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-3">
              <StarRating rating={Math.round(rating)} />
            </div>
            <p className="text-slate-500 text-sm mb-6">
              od {user_ratings_total} recenzija
            </p>

            {/* Bar chart po zvezdama */}
            <div className="flex flex-col gap-2">
              {starCounts.map(({ star, count }) => (
                <RatingBar
                  key={star}
                  label={String(star)}
                  value={count}
                  total={reviews.length}
                />
              ))}
            </div>

            {/* Google link */}
            <a
              href={`https://search.google.com/local/reviews?placeid=${process.env.GOOGLE_PLACE_ID ?? ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#1b3a6b] hover:text-[#dc2626] font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Ostavi recenziju na Google-u
            </a>
          </div>

          {/* Desna kolona — kartice recenzija */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {reviews.slice(0, 6).map((review, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-5 flex flex-col gap-3"
              >
                {/* Autor */}
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-9 h-9 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-semibold text-[#1b3a6b] text-sm leading-tight">
                      {review.author_name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {review.relative_time_description}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Tekst */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                {/* Google badge */}
                <div className="flex items-center gap-1.5 mt-auto pt-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs text-slate-400">Google recenzija</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
