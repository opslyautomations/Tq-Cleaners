import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | TQ Cleaners",
  description: "TQ Cleaners terms of service — conditions governing use of our cleaning services and website.",
  alternates: { canonical: "https://tqcleaners.com/terms" },
  robots: { index: false, follow: false },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Terms of Service", item: "https://tqcleaners.com/terms" }]);

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#0A1628] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Terms of Service</span>
          </nav>
          <h1 className="text-3xl font-bold text-[#F5F9FC] font-display">Terms of Service</h1>
          <p className="text-[#F5F9FC]/60 mt-2 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-[#1A2332]/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">1. Services</h2>
              <p>TQ Cleaners provides residential and commercial cleaning services across Texas. By requesting or scheduling services, you agree to these terms. Services are provided on a flat-rate basis as quoted prior to the appointment.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">2. Scheduling and Cancellation</h2>
              <p>Appointments may be rescheduled or cancelled with at least 24 hours&apos; notice at no charge. Cancellations with less than 24 hours&apos; notice may be subject to a cancellation fee equal to 50% of the quoted service price. No-shows are subject to the full quoted service price.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">3. Satisfaction Guarantee</h2>
              <p>TQ Cleaners offers a 100% satisfaction guarantee. If you are not satisfied with any aspect of a completed clean, contact us within 24 hours and we will return to address the issue at no charge. The guarantee applies to the original scope of services as quoted and delivered.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">4. Access to Property</h2>
              <p>You agree to provide safe, reasonable access to the property at the scheduled appointment time. TQ Cleaners is not responsible for delays or inability to perform services resulting from denied access.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">5. Liability</h2>
              <p>TQ Cleaners carries full general liability insurance. Claims for alleged damage must be reported within 24 hours of service completion with photographic evidence. TQ Cleaners&apos; liability is limited to the cost of the service provided. We are not liable for pre-existing damage or for items of exceptional value not disclosed prior to service.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">6. Payment</h2>
              <p>Payment is due at the time of service unless otherwise agreed in writing. We accept all major credit cards, debit cards, and bank transfers.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">7. Contact</h2>
              <p>Questions? Contact TQ Cleaners at <a href={`mailto:${SITE.email}`} className="text-[#4FC3F7] hover:underline">{SITE.email}</a> or <a href={`tel:${SITE.phoneTel}`} className="text-[#4FC3F7] hover:underline">{SITE.phone}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
