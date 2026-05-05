import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { REVIEWS } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | TQ Cleaners — Texas Cleaning Service",
  description: "Real 5-star reviews from TQ Cleaners customers across San Antonio, Austin, Dallas & Fort Worth — families, landlords, and Airbnb hosts.",
  alternates: { canonical: "https://tqcleaners.com/reviews" },
  openGraph: {
    type: "website",
    title: "Customer Reviews | TQ Cleaners",
    description: "Real 5-star reviews from Texas families, landlords, and Airbnb hosts. See why TQ Cleaners is rated the #1 cleaning service in Texas.",
    url: "https://tqcleaners.com/reviews",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [{ url: "https://tqcleaners.com/og/reviews.png", secureUrl: "https://tqcleaners.com/og/reviews.png", width: 1200, height: 630, alt: "TQ Cleaners customer reviews", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Customer Reviews | TQ Cleaners", description: "Real 5-star reviews from Texas families.", images: ["https://tqcleaners.com/og/reviews.png"] },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Reviews", item: "https://tqcleaners.com/reviews" }]);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TQ Cleaners",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: REVIEWS.length,
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.body,
  })),
};

const CATEGORIES = ["All", "House Cleaning", "Deep Cleaning", "Move-Out", "Airbnb", "Commercial"];

export default function ReviewsPage() {
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Reviews</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display mb-5">
            What Texas Families Are Saying
          </h1>

          {/* Rating Summary */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E6B800]">{avgRating}</div>
              <div className="flex items-center justify-center gap-0.5 text-[#E6B800] text-xl my-1">
                {"★".repeat(5)}
              </div>
              <div className="text-[#F5F9FC]/60 text-sm">{REVIEWS.length} Verified Reviews</div>
            </div>
            <div className="space-y-2 flex-1 max-w-xs">
              {[5, 4, 3].map((star) => {
                const count = REVIEWS.filter((r) => r.rating === star).length;
                const pct = Math.round((count / REVIEWS.length) * 100);
                return (
                  <div key={star} className="flex items-center gap-3 text-sm">
                    <span className="text-[#F5F9FC]/60 w-4">{star}★</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E6B800] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[#F5F9FC]/50 w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-[#F5F9FC]/70">
              <div className="flex items-center gap-2"><Star size={14} className="text-[#4FC3F7]" /> Google Verified</div>
              <div className="flex items-center gap-2"><Star size={14} className="text-[#4FC3F7]" /> Real Customer Reviews</div>
              <div className="flex items-center gap-2"><Star size={14} className="text-[#4FC3F7]" /> Across 30+ Texas Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tags (display only — no client state needed for static) */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                cat === "All"
                  ? "bg-[#0A1628] text-[#F5F9FC] border-[#0A1628]"
                  : "bg-white text-[#1A2332]/70 border-gray-200"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-[#F5F9FC] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-white py-14 px-4 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-3">Had a Great Experience?</h2>
          <p className="text-[#1A2332]/65 mb-6">
            Your review helps other Texas families find reliable cleaning. We&apos;d love to hear from you.
          </p>
          <a
            href="https://g.page/r/tqcleaners/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors"
          >
            Leave a Google Review
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
