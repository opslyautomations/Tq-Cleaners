import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import { SITE } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get a Free Cleaning Quote | TQ Cleaners — Texas",
  description: "Free, no-obligation cleaning quote in under 60 seconds. Serving San Antonio, Austin, Dallas & Fort Worth. Call or fill out our form.",
  alternates: { canonical: "https://tqcleaners.com/contact" },
  openGraph: {
    type: "website",
    title: "Get a Free Cleaning Quote | TQ Cleaners",
    description: "Free, no-obligation quote in under 60 seconds. Serving 30+ Texas cities.",
    url: "https://tqcleaners.com/contact",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [{ url: "https://tqcleaners.com/og/contact.png", secureUrl: "https://tqcleaners.com/og/contact.png", width: 1200, height: 630, alt: "Contact TQ Cleaners", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Get a Free Quote | TQ Cleaners", description: "Free quote in under 60 seconds. 30+ Texas cities.", images: ["https://tqcleaners.com/og/contact.png"] },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Contact", item: "https://tqcleaners.com/contact" }]);

const CONTACT_DETAILS = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneTel}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Hours", value: SITE.hoursLong, href: null },
  { icon: MapPin, label: "Service Area", value: "San Antonio · Austin · Dallas · Fort Worth and 30+ surrounding cities", href: "/service-areas" },
];

const FAQ_ITEMS = [
  { q: "How quickly can I get a quote?", a: "Fill out the form above and you'll hear back within a few hours. For same-day service, call us directly." },
  { q: "Is there a minimum clean size?", a: "No minimum square footage — we serve studios, apartments, and large estates alike." },
  { q: "Do I need to be home during the clean?", a: "Not at all. Many clients provide a key or door code. We're background-checked, bonded, and insured." },
  { q: "What areas do you serve?", a: "30+ cities across San Antonio, Austin, Dallas, and Fort Worth metros. See our full service area map." },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-[#F5F9FC]/70 max-w-2xl">
            Fill out the form below or call us directly. We&apos;ll respond with flat-rate pricing — no in-home estimate required.
          </p>
        </div>
      </section>

      {/* Two-Column: Form + Details */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-6">Request a Quote</h2>
            <GHLForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-6">Contact Details</h2>
              <div className="space-y-5">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4FC3F7]/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#4FC3F7]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1A2332]/50 uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-[#0A1628] font-medium hover:text-[#4FC3F7] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#0A1628] font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="p-5 bg-[#F5F9FC] rounded-xl border border-gray-200">
              <p className="text-sm font-bold text-[#0A1628] mb-3">Why Clients Trust TQ Cleaners</p>
              <ul className="space-y-2 text-sm text-[#1A2332]/70">
                <li className="flex items-center gap-2"><span className="text-[#4FC3F7]">✓</span> Background-checked, insured teams</li>
                <li className="flex items-center gap-2"><span className="text-[#4FC3F7]">✓</span> Flat-rate pricing — no hourly surprises</li>
                <li className="flex items-center gap-2"><span className="text-[#4FC3F7]">✓</span> 100% satisfaction guarantee</li>
                <li className="flex items-center gap-2"><span className="text-[#4FC3F7]">✓</span> Eco-friendly, pet-safe products</li>
                <li className="flex items-center gap-2"><span className="text-[#4FC3F7]">✓</span> 5-star rated across Texas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F9FC] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-8">Common Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#0A1628] mb-2 font-display">{item.q}</h3>
                <p className="text-[#1A2332]/70 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
