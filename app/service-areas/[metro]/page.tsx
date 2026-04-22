import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import { METROS } from "@/lib/constants";
import { CITIES_DATA } from "@/lib/cities-data";
import { buildBreadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return METROS.map((m) => ({ metro: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ metro: string }> }): Promise<Metadata> {
  const { metro: metroSlug } = await params;
  const metro = METROS.find((m) => m.slug === metroSlug);
  if (!metro) return {};
  return {
    title: `${metro.name} Cleaning Services | TQ Cleaners`,
    description: `TQ Cleaners serves ${metro.cities.length} cities in the ${metro.name}. Flat-rate pricing, licensed & insured. Get a free cleaning quote for your city today.`,
    alternates: { canonical: `https://tqcleaners.com/service-areas/${metroSlug}` },
    openGraph: {
      type: "website",
      title: `${metro.name} Cleaning Services | TQ Cleaners`,
      description: `Professional cleaning across ${metro.cities.length} ${metro.name} cities. Flat-rate, no surprises.`,
      url: `https://tqcleaners.com/service-areas/${metroSlug}`,
      siteName: "TQ Cleaners",
      locale: "en_US",
      images: [{ url: `https://tqcleaners.com/og/${metroSlug}.png`, secureUrl: `https://tqcleaners.com/og/${metroSlug}.png`, width: 1200, height: 630, alt: `${metro.name} cleaning services`, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: `${metro.name} Cleaning | TQ Cleaners`, description: `${metro.cities.length} cities served across the ${metro.name}.`, images: [`https://tqcleaners.com/og/${metroSlug}.png`] },
  };
}

export default async function MetroPage({ params }: { params: Promise<{ metro: string }> }) {
  const { metro: metroSlug } = await params;
  const metro = METROS.find((m) => m.slug === metroSlug);
  if (!metro) notFound();

  const metrosCities = metro.cities.map((c) => {
    const data = CITIES_DATA.find((d) => d.slug === c.slug);
    return { ...c, intro: data?.intro?.slice(0, 160) ?? "" };
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Service Areas", item: "https://tqcleaners.com/service-areas" },
    { name: metro.name, item: `https://tqcleaners.com/service-areas/${metroSlug}` },
  ]);

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${metro.name} Cleaning Services`,
    provider: { "@type": "HouseCleaningService", name: "TQ Cleaners", url: "https://tqcleaners.com", telephone: "+19563066378" },
    areaServed: metro.cities.map((c) => ({ "@type": "City", name: c.name })),
    offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", description: "Flat-rate — contact for a free quote" } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-[#4FC3F7]">Service Areas</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">{metro.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <MapPin size={28} className="text-[#4FC3F7] flex-shrink-0" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display">
              {metro.name} Cleaning Services
            </h1>
          </div>
          <p className="text-xl text-[#F5F9FC]/70 max-w-3xl mb-8 leading-relaxed">
            TQ Cleaners serves {metro.cities.length} cities across the {metro.name} — flat-rate pricing,
            licensed and insured, 5-star rated. Select your city below for local details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">
            Cities We Serve in the {metro.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrosCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${metroSlug}/${city.slug}`}
                className="group flex flex-col gap-3 p-5 border border-gray-200 rounded-xl hover:border-[#4FC3F7] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#4FC3F7] flex-shrink-0" />
                  <h3 className="font-bold text-[#0A1628] font-display group-hover:text-[#4FC3F7] transition-colors">
                    {city.name}
                  </h3>
                </div>
                {city.intro && (
                  <p className="text-sm text-[#1A2332]/65 leading-relaxed line-clamp-2">{city.intro}</p>
                )}
                <span className="text-sm font-semibold text-[#4FC3F7] group-hover:text-[#E6B800] transition-colors mt-auto">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CTA */}
      <section className="bg-[#F5F9FC] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8 text-center">
            Why {metro.name} Chooses TQ Cleaners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⭐", title: "5-Star Rated", body: "Consistent, verified reviews from real customers across the metro." },
              { icon: "🛡️", title: "Licensed & Insured", body: "Full liability coverage and bonded teams on every job." },
              { icon: "💯", title: "Satisfaction Guaranteed", body: "Not happy? We return within 24 hours to make it right — at no charge." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-[#0A1628] mb-2 font-display">{title}</h3>
                <p className="text-sm text-[#1A2332]/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Ready for a Clean Home in the ${metro.name}?`} />
    </>
  );
}
