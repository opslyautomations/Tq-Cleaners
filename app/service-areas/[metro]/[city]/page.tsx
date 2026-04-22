import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import { METROS, SITE } from "@/lib/constants";
import { CITIES_DATA } from "@/lib/cities-data";
import { SERVICES } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return METROS.flatMap((metro) =>
    metro.cities.map((city) => ({ metro: metro.slug, city: city.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ metro: string; city: string }> }): Promise<Metadata> {
  const { metro: metroSlug, city: citySlug } = await params;
  const city = CITIES_DATA.find((c) => c.slug === citySlug && c.metroSlug === metroSlug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDesc,
    alternates: { canonical: `https://tqcleaners.com/service-areas/${metroSlug}/${citySlug}` },
    openGraph: {
      type: "website",
      title: city.metaTitle,
      description: city.metaDesc,
      url: `https://tqcleaners.com/service-areas/${metroSlug}/${citySlug}`,
      siteName: "TQ Cleaners",
      locale: "en_US",
      images: [{ url: `https://tqcleaners.com/og/${citySlug}.png`, secureUrl: `https://tqcleaners.com/og/${citySlug}.png`, width: 1200, height: 630, alt: `House cleaning in ${city.name}, TX`, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: city.metaTitle, description: city.metaDesc, images: [`https://tqcleaners.com/og/${citySlug}.png`] },
  };
}

export default async function CityPage({ params }: { params: Promise<{ metro: string; city: string }> }) {
  const { metro: metroSlug, city: citySlug } = await params;
  const city = CITIES_DATA.find((c) => c.slug === citySlug && c.metroSlug === metroSlug);
  if (!city) notFound();

  const metro = METROS.find((m) => m.slug === metroSlug)!;

  const neighborCities = city.neighbors
    .map((slug) => {
      const data = CITIES_DATA.find((c) => c.slug === slug);
      const metroMatch = METROS.find((m) => m.cities.some((c) => c.slug === slug));
      return data && metroMatch ? { name: data.name, slug: data.slug, metroSlug: metroMatch.slug } : null;
    })
    .filter(Boolean) as { name: string; slug: string; metroSlug: string }[];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Service Areas", item: "https://tqcleaners.com/service-areas" },
    { name: city.metroName, item: `https://tqcleaners.com/service-areas/${metroSlug}` },
    { name: city.name, item: `https://tqcleaners.com/service-areas/${metroSlug}/${citySlug}` },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    name: `TQ Cleaners — ${city.name}`,
    description: city.metaDesc,
    url: `https://tqcleaners.com/service-areas/${metroSlug}/${citySlug}`,
    telephone: "+19563066378",
    areaServed: { "@type": "City", name: city.name, "@id": `https://tqcleaners.com/service-areas/${metroSlug}/${citySlug}` },
    provider: { "@type": "HouseCleaningService", name: "TQ Cleaners", url: "https://tqcleaners.com" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-[#4FC3F7]">Service Areas</Link>
            <span>/</span>
            <Link href={`/service-areas/${metroSlug}`} className="hover:text-[#4FC3F7]">{city.metroName}</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">{city.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <MapPin size={28} className="text-[#4FC3F7] flex-shrink-0" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display leading-tight">
              House Cleaning in {city.name}, TX
            </h1>
          </div>
          <p className="text-lg text-[#F5F9FC]/70 max-w-3xl mb-8 leading-relaxed">
            5-star rated, licensed &amp; insured cleaning service serving {city.name} and surrounding communities.
            Flat-rate pricing — no hourly surprises, no upsells.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors">
              Get a Free Quote
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#F5F9FC]/60 text-[#F5F9FC] font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* City Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-6">
            Professional Cleaning in {city.name}
          </h2>
          <p className="text-[#1A2332]/80 leading-relaxed text-lg">{city.intro}</p>
        </div>
      </section>

      {/* Why Choose TQ in This City */}
      <section className="bg-[#F5F9FC] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">
            Why {city.name} Residents Choose TQ Cleaners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.reasons.map((reason) => (
              <div key={reason.title} className="p-6 bg-white rounded-xl border border-gray-200">
                <CheckCircle size={20} className="text-[#4FC3F7] mb-3" />
                <h3 className="font-bold text-[#0A1628] mb-2 font-display">{reason.title}</h3>
                <p className="text-sm text-[#1A2332]/70 leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">
            Cleaning Services Available in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-3 p-4 bg-[#F5F9FC] border border-gray-200 rounded-lg hover:border-[#4FC3F7] transition-colors"
              >
                <CheckCircle size={16} className="text-[#4FC3F7] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm">{service.name}</p>
                  <p className="text-xs text-[#1A2332]/60 mt-0.5">{service.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F5F9FC] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">
            Frequently Asked Questions — {city.name}
          </h2>
          <div className="space-y-5">
            {city.faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="font-bold text-[#0A1628] text-lg mb-3 font-display">{faq.q}</h3>
                <p className="text-[#1A2332]/75 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {neighborCities.length > 0 && (
        <section className="bg-white py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-5">
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap gap-3">
              {neighborCities.map((n) => (
                <Link
                  key={n.slug}
                  href={`/service-areas/${n.metroSlug}/${n.slug}`}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#F5F9FC] border border-gray-200 rounded-full text-sm font-medium text-[#0A1628] hover:border-[#4FC3F7] hover:text-[#4FC3F7] transition-colors"
                >
                  <MapPin size={12} />
                  {n.name}
                </Link>
              ))}
              <Link
                href={`/service-areas/${metroSlug}`}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#0A1628] text-[#F5F9FC] rounded-full text-sm font-medium hover:bg-[#0D1B2A] transition-colors"
              >
                All {metro.name} Cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Ready for a Spotless Home in ${city.name}?`} />
    </>
  );
}
