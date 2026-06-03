import { NextResponse } from "next/server";

export interface GoogleReview {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

export interface ReviewsResponse {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

// Keširanje 1h — smanjuje broj API poziva
export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google Places API nije konfigurisan" },
      { status: 503 }
    );
  }

  const fields = "name,rating,user_ratings_total,reviews";
  const language = "sr";

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&language=${language}&reviews_sort=newest&key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: `Google API greška: ${data.status}` },
        { status: 502 }
      );
    }

    const result = data.result;

    return NextResponse.json({
      rating: result.rating ?? 0,
      user_ratings_total: result.user_ratings_total ?? 0,
      reviews: (result.reviews ?? []).filter(
        (r: GoogleReview) => r.text && r.text.trim().length > 0
      ),
    } satisfies ReviewsResponse);
  } catch {
    return NextResponse.json(
      { error: "Greška pri komunikaciji sa Google API" },
      { status: 500 }
    );
  }
}
