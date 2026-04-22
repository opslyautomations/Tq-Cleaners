import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import { SERVICES_DATA } from "@/lib/services-data";
import { SITE } from "@/lib/constants";
import { SERVICE_ICON_MAP } from "@/lib/icons";
import { buildBreadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `https://tqcleaners.com/services/${slug}` },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://tqcleaners.com/services/${slug}`,
      siteName: "TQ Cleaners",
      locale: "en_US",
      images: [{ url: `https://tqcleaners.com/og/${slug}.png`, secureUrl: `https://tqcleaners.com/og/${slug}.png`, width: 1200, height: 630, alt: `${service.name} — TQ Cleaners`, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: service.metaTitle, description: service.metaDesc, images: [`https://tqcleaners.com/og/${slug}.png`] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = SERVICE_ICON_MAP[service.icon];
  const related = SERVICES_DATA.filter((s) => s.slug !== slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDesc,
    provider: {
      "@type": "HouseCleaningService",
      name: "TQ Cleaners",
      url: "https://tqcleaners.com",
      telephone: "+19563066378",
    },
    areaServed: ["San Antonio", "Austin", "Dallas", "Fort Worth"],
    offers: {
      "@type": "Offer",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", description: "Flat-rate pricing — contact for a free quote" },
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Services", item: "https://tqcleaners.com/services" },
    { name: service.name, item: `https://tqcleaners.com/services/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#4FC3F7]">Services</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">{service.name}</span>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-[#4FC3F7]/15 flex items-center justify-center flex-shrink-0">
              <Icon size={28} className="text-[#4FC3F7]" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F9FC] font-display leading-tight mb-5">
            {service.heroTitle}
          </h1>
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

      {/* Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-6">About This Service</h2>
          <div className="space-y-4 text-[#1A2332]/80 leading-relaxed">
            {service.overview.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#F5F9FC] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircle size={18} className="text-[#4FC3F7] flex-shrink-0 mt-0.5" />
                <span className="text-[#1A2332]/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="p-6 bg-[#0A1628] rounded-xl">
                <h3 className="font-bold text-[#F5F9FC] text-lg mb-3 font-display">{b.title}</h3>
                <p className="text-[#F5F9FC]/70 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-[#4FC3F7]/10 border-y border-[#4FC3F7]/30 py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-3">
            Flat-Rate Transparent Pricing — No Surprises
          </h2>
          <p className="text-[#1A2332]/70 mb-6">
            Get your exact price before we arrive. No hourly tracking, no upsell tactics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3.5 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors">
              Get a Free Quote
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#0A1628] text-[#0A1628] font-semibold rounded-lg hover:bg-[#0A1628]/10 transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] font-display mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0A1628] text-lg mb-3 font-display">{faq.q}</h3>
                <p className="text-[#1A2332]/75 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#F5F9FC] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {related.map((s) => {
              const RelIcon = SERVICE_ICON_MAP[s.icon];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-lg bg-[#0A1628]/10 flex items-center justify-center flex-shrink-0">
                    <RelIcon size={18} className="text-[#0A1628]" />
                  </div>
                  <span className="text-[#0A1628] font-semibold text-sm">{s.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
