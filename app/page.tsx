import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Calendar, ShieldCheck, Leaf } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { SITE, SERVICES, METROS, REVIEWS, BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "TQ Cleaners | House & Commercial Cleaning in Texas",
  description:
    "TQ Cleaners delivers licensed, insured, 5-star house and commercial cleaning across 30+ Texas cities — San Antonio, Austin, Dallas, Fort Worth. 100% satisfaction guaranteed. Free quote today.",
  alternates: { canonical: "https://tqcleaners.com" },
  openGraph: {
    type: "website",
    title: "TQ Cleaners | House & Commercial Cleaning in Texas",
    description:
      "Licensed, insured 5-star cleaning services across San Antonio, Austin, Dallas & Fort Worth. 100% satisfaction guaranteed.",
    url: "https://tqcleaners.com",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [
      {
        url: "https://tqcleaners.com/og/homepage.png",
        secureUrl: "https://tqcleaners.com/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "TQ Cleaners — Professional House Cleaning in Texas",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TQ Cleaners | House & Commercial Cleaning in Texas",
    description:
      "Licensed, insured 5-star cleaning services across San Antonio, Austin, Dallas & Fort Worth.",
    images: ["https://tqcleaners.com/og/homepage.png"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TQ Cleaners",
  url: "https://tqcleaners.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://tqcleaners.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const WHY_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trained & Background-Checked Team",
    body: "Every cleaner is vetted, insured, and trained on our 50-point checklist before stepping foot in your home.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    body: "Plant-based, non-toxic cleaning products safe for kids, pets, and allergy-sensitive households.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Flat-Rate Pricing",
    body: "Know the exact price before we arrive. No hourly surprises, no upsell tactics — ever.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling 7 Days a Week",
    body: "Weeknights and weekends available. We work around your schedule, not the other way around.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-[#0A1628] min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#0D2B45]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: 60% */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F9FC] font-display leading-tight mb-6">
                Spotless Homes, Effortless Living —{" "}
                <span className="text-[#4FC3F7]">Across Central & North Texas</span>
              </h1>
              <p className="text-lg md:text-xl text-[#F5F9FC]/80 mb-8 max-w-2xl leading-relaxed">
                TQ Cleaners delivers licensed, insured, 5-star cleaning services across San Antonio,
                Austin, Dallas, and Fort Worth. 100% satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#E6B800] text-[#0A1628] font-bold text-lg rounded-lg hover:bg-[#CFA200] transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F5F9FC]/60 text-[#F5F9FC] font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone size={20} />
                  Call {SITE.phone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#F5F9FC]/60">
                <span>⭐ 5-Star Rated</span>
                <span>🛡️ Licensed & Insured</span>
                <span>📍 30+ Cities</span>
                <span>💯 Satisfaction Guaranteed</span>
                <span>📞 Same-Day Quotes</span>
              </div>
            </div>
            {/* Right: 40% — GHL Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <GHLForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-display mb-4">
              Cleaning Services Built Around Your Life
            </h2>
            <p className="text-[#1A2332]/70 max-w-2xl mx-auto text-lg leading-relaxed">
              From recurring maintenance to deep resets, move-out turnovers, Airbnb flips, and commercial
              cleaning — TQ Cleaners has a service for every need across Central and North Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why TQ Cleaners */}
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] font-display mb-4">
              Why Texas Homeowners Choose TQ Cleaners
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4FC3F7]/15 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[#4FC3F7]" />
                </div>
                <h3 className="font-bold text-[#F5F9FC] mb-2 font-display">{title}</h3>
                <p className="text-[#F5F9FC]/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-display mb-4">
              Proudly Serving Central & North Texas
            </h2>
            <p className="text-[#1A2332]/70 max-w-xl mx-auto">
              From the military communities of San Antonio to the tech corridors of Austin, the corporate hubs
              of Dallas, and the growing suburbs of Fort Worth — TQ Cleaners is your local team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METROS.map((metro) => (
              <div key={metro.slug} className="border border-gray-200 rounded-xl p-6 hover:-translate-y-1 transition-transform shadow-sm">
                <h3 className="font-bold text-[#0A1628] text-xl font-display mb-2">{metro.name}</h3>
                <p className="text-[#1A2332]/60 text-sm mb-4">{metro.cities.length} cities served</p>
                <Link
                  href={`/service-areas/${metro.slug}`}
                  className="text-[#4FC3F7] font-semibold text-sm hover:text-[#0A1628] transition-colors"
                >
                  View Cities →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[#1A2332]/60 text-sm">
            Don&apos;t see your city?{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-[#4FC3F7] font-medium hover:underline">
              Call us
            </a>{" "}
            — we&apos;re always expanding.
          </p>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] font-display mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-[#4FC3F7] font-semibold hover:text-white transition-colors">
              See All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-display mb-4">
              Cleaning Tips From the TQ Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform shadow-sm">
                <div className="h-48 bg-gradient-to-br from-[#0A1628] to-[#1A3A5C] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-widest px-4 py-2 border border-[#4FC3F7]/30 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#4FC3F7] uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-bold text-[#0A1628] text-lg mt-2 mb-3 font-display leading-snug">{post.title}</h3>
                  <p className="text-[#1A2332]/65 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-[#4FC3F7] font-semibold text-sm hover:text-[#0A1628] transition-colors">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-[#4FC3F7] font-semibold hover:underline">
              Visit the Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
