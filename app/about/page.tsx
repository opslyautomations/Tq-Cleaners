import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Leaf, DollarSign, Calendar } from "lucide-react";
import CTASection from "@/components/CTASection";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About TQ Cleaners | Trusted Texas Cleaning Service",
  description: "Texas-based, owner-operated cleaning company serving 30+ cities with trained, background-checked teams and eco-friendly products.",
  alternates: { canonical: "https://tqcleaners.com/about" },
  openGraph: {
    type: "website",
    title: "About TQ Cleaners | Trusted Texas Cleaning Service",
    description:
      "Texas-based, owner-operated cleaning company built on consistency, transparent pricing, and trained, background-checked teams.",
    url: "https://tqcleaners.com/about",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [{ url: "https://tqcleaners.com/og/about.png", secureUrl: "https://tqcleaners.com/og/about.png", width: 1200, height: 630, alt: "About TQ Cleaners — Texas cleaning company", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "About TQ Cleaners | Trusted Texas Cleaning Service", description: "Texas-based, owner-operated cleaning company serving 30+ cities.", images: ["https://tqcleaners.com/og/about.png"] },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "About", item: "https://tqcleaners.com/about" }]);

const PILLARS = [
  { icon: ShieldCheck, title: "Trained, Trusted Teams", body: "Every cleaner is background-checked, trained on our 50-point checklist, and covered by full liability insurance." },
  { icon: Leaf, title: "Eco-Friendly by Default", body: "Products safe for kids, pets, and sensitive individuals — no harsh fumes, no mystery chemicals." },
  { icon: DollarSign, title: "Flat-Rate Transparent Pricing", body: "Know the exact price before we arrive. No hourly surprises, no upsell tactics — guaranteed." },
  { icon: Calendar, title: "7-Day Scheduling", body: "Weeknights and weekends included. We work around your life, not the other way around." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display mb-4">About TQ Cleaners</h1>
          <p className="text-xl text-[#F5F9FC]/70 max-w-2xl">Texas-based. Detail-obsessed. 100% satisfaction guaranteed.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1628] font-display mb-6">Our Story</h2>
          <div className="space-y-5 text-[#1A2332]/80 text-lg leading-relaxed">
            <p>
              TQ Cleaners was founded on a simple idea: every home and business in Texas deserves a clean, healthy,
              welcoming space — and the people who provide that service should be as professional, reliable, and
              detail-obsessed as the families and businesses they serve. From day one, we&apos;ve built TQ Cleaners
              around a trained, background-checked team, eco-friendly products, and flat-rate transparent pricing.
              No surprises, no upsells, just spotless results every single visit.
            </p>
            <p>
              Today, TQ Cleaners proudly serves more than 30 cities across four major Texas metros — San Antonio,
              Austin, Dallas, and Fort Worth — delivering the same 5-star experience whether it&apos;s a weekly tidy,
              a deep top-to-bottom refresh, a move-out turnover, or a post-stay Airbnb reset. Our goal is simple:
              become the most trusted name in Texas cleaning by doing every job the way we&apos;d clean our own home.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Luis */}
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#4FC3F7]/20 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#F5F9FC] font-display">Meet Luis, Founder</h2>
                <p className="text-[#4FC3F7] text-sm">Owner & Operator, TQ Cleaners</p>
              </div>
            </div>
            <p className="text-[#F5F9FC]/80 text-lg leading-relaxed">
              Luis, the founder of TQ Cleaners, built this company around one belief: consistency is everything.
              After years of watching cleaning companies cut corners and ghost their customers, he launched TQ Cleaners
              to prove that a local, owner-operated team can deliver better results, better communication, and better
              value than the big franchises — every time. Luis personally oversees every team, refines every process,
              and stands behind the 100% satisfaction promise with his name and reputation on the line.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-display mb-4">What Sets Us Apart</h2>
            <p className="text-[#1A2332]/65 max-w-xl mx-auto">
              Four pillars that define every job we do and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5 p-6 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-[#0A1628]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-[#0A1628]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] text-lg mb-2 font-display">{title}</h3>
                  <p className="text-[#1A2332]/70 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Our 100% Satisfaction Commitment"
        subheading="If you're not completely happy with any clean, we return within 24 hours to make it right — at no charge."
        primaryText="Book Your First Clean"
      />
    </>
  );
}
