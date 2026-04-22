import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { SERVICES_DATA } from "@/lib/services-data";
import { SERVICE_ICON_MAP } from "@/lib/icons";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cleaning Services | TQ Cleaners — San Antonio, Austin, Dallas & Fort Worth",
  description:
    "TQ Cleaners offers standard house cleaning, deep cleaning, move-in/out, Airbnb, office & commercial cleaning, and custom packages across San Antonio, Austin, Dallas, and Fort Worth.",
  alternates: { canonical: "https://tqcleaners.com/services" },
  openGraph: {
    type: "website",
    title: "Cleaning Services | TQ Cleaners — Texas",
    description: "6 professional cleaning services across San Antonio, Austin, Dallas, and Fort Worth. Flat-rate pricing, licensed and insured.",
    url: "https://tqcleaners.com/services",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [{ url: "https://tqcleaners.com/og/services.png", secureUrl: "https://tqcleaners.com/og/services.png", width: 1200, height: 630, alt: "TQ Cleaners services overview", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Cleaning Services | TQ Cleaners", description: "6 professional cleaning services across Texas. Flat-rate pricing.", images: ["https://tqcleaners.com/og/services.png"] },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Services", item: "https://tqcleaners.com/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display mb-4">
            Professional Cleaning Services Across Texas
          </h1>
          <p className="text-xl text-[#F5F9FC]/70 max-w-3xl leading-relaxed">
            From weekly maintenance to deep resets, move-out turnovers, Airbnb flips, and commercial cleaning —
            TQ Cleaners has a flat-rate, no-surprise service for every need across San Antonio, Austin, Dallas,
            and Fort Worth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => {
              const Icon = SERVICE_ICON_MAP[service.icon];
              return (
                <article key={service.slug} className="border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-[#0A1628]/10 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-[#0A1628]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-3">{service.name}</h2>
                  <p className="text-[#1A2332]/70 mb-5 leading-relaxed">{service.overview[0]}</p>
                  <ul className="space-y-1.5 mb-6">
                    {service.included.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#1A2332]/70">
                        <span className="text-[#4FC3F7] font-bold flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                    {service.included.length > 5 && (
                      <li className="text-sm text-[#1A2332]/50 pl-5">+ {service.included.length - 5} more included tasks</li>
                    )}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-[#4FC3F7] font-bold hover:text-[#0A1628] transition-colors"
                  >
                    View Details →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
