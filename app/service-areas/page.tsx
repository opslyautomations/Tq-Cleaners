import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import { METROS } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas | TQ Cleaners — Cleaning Across Texas",
  description:
    "TQ Cleaners serves 30+ cities across San Antonio, Austin, Dallas, and Fort Worth metros. Find your city and get a free cleaning quote today.",
  alternates: { canonical: "https://tqcleaners.com/service-areas" },
  openGraph: {
    type: "website",
    title: "Service Areas | TQ Cleaners — Texas",
    description: "Professional cleaning in 30+ Texas cities across 4 major metros. Find your city.",
    url: "https://tqcleaners.com/service-areas",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [{ url: "https://tqcleaners.com/og/service-areas.png", secureUrl: "https://tqcleaners.com/og/service-areas.png", width: 1200, height: 630, alt: "TQ Cleaners service areas across Texas", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Service Areas | TQ Cleaners", description: "Professional cleaning in 30+ Texas cities.", images: ["https://tqcleaners.com/og/service-areas.png"] },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Service Areas", item: "https://tqcleaners.com/service-areas" }]);

const METRO_DESCRIPTIONS: Record<string, string> = {
  "san-antonio-metro": "From the River Walk to the Hill Country fringe — 11 cities served across the Alamo City metro.",
  "austin-metro": "From downtown Austin to the fast-growing suburbs stretching north and south on 35 — 11 cities served.",
  "dallas-metro": "Big D and its northern suburbs — Plano, Frisco, Richardson — 4 cities with full residential and commercial coverage.",
  "fort-worth-metro": "Cowtown to Southlake — 4 cities including Arlington, Grapevine, and the DFW corridor.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Service Areas</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display mb-4">
            Professional Cleaning Across Texas
          </h1>
          <p className="text-xl text-[#F5F9FC]/70 max-w-3xl leading-relaxed">
            TQ Cleaners serves 30+ cities across four major Texas metros. Click your metro below to find your city
            and get flat-rate pricing with no surprises.
          </p>
        </div>
      </section>

      {/* Metro Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {METROS.map((metro) => (
            <div key={metro.slug}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={22} className="text-[#4FC3F7] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1628] font-display">{metro.name}</h2>
                  <p className="text-[#1A2332]/60 text-sm mt-0.5">{METRO_DESCRIPTIONS[metro.slug]}</p>
                </div>
                <Link
                  href={`/service-areas/${metro.slug}`}
                  className="ml-auto text-sm font-semibold text-[#4FC3F7] hover:text-[#0A1628] transition-colors whitespace-nowrap"
                >
                  View Metro Hub →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {metro.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-areas/${metro.slug}/${city.slug}`}
                    className="flex items-center gap-2 px-4 py-3 bg-[#F5F9FC] border border-gray-200 rounded-lg hover:border-[#4FC3F7] hover:bg-[#4FC3F7]/5 transition-colors text-sm font-medium text-[#0A1628]"
                  >
                    <MapPin size={13} className="text-[#4FC3F7] flex-shrink-0" />
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5F9FC]/70 text-lg mb-6">
            Don&apos;t see your city? We&apos;re expanding — call us and we&apos;ll let you know if we can reach you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#F5F9FC]/60 mb-8">
            <span>⭐ 5-Star Rated</span>
            <span>🛡️ Licensed & Insured</span>
            <span>📍 30+ Cities</span>
            <span>💯 Satisfaction Guaranteed</span>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
