import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | TQ Cleaners",
  description: "TQ Cleaners privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://tqcleaners.com/privacy" },
  robots: { index: false, follow: false },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Privacy Policy", item: "https://tqcleaners.com/privacy" }]);

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#0A1628] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-bold text-[#F5F9FC] font-display">Privacy Policy</h1>
          <p className="text-[#F5F9FC]/60 mt-2 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none">
          <div className="space-y-8 text-[#1A2332]/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">1. Information We Collect</h2>
              <p>When you request a quote or contact TQ Cleaners, we collect information you provide directly — including your name, email address, phone number, service address, and cleaning preferences. We also collect standard analytics data (pages visited, device type) through our website analytics tools.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide to respond to quote requests, schedule and deliver cleaning services, send appointment confirmations and reminders, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">3. Data Storage and Security</h2>
              <p>Your information is stored securely via our CRM platform (GoHighLevel). We use industry-standard security measures including SSL/TLS encryption for all data transmission. We retain your information only as long as necessary to provide our services and comply with applicable law.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">4. Cookies and Analytics</h2>
              <p>Our website uses cookies for analytics purposes (Google Analytics) and to improve user experience. You can disable cookies in your browser settings. Disabling cookies will not affect your ability to request a quote or use our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">5. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal information at any time. To exercise these rights, contact us at <a href={`mailto:${SITE.email}`} className="text-[#4FC3F7] hover:underline">{SITE.email}</a>.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">6. Contact Us</h2>
              <p>Questions about this policy? Contact TQ Cleaners at <a href={`mailto:${SITE.email}`} className="text-[#4FC3F7] hover:underline">{SITE.email}</a> or call <a href={`tel:${SITE.phoneTel}`} className="text-[#4FC3F7] hover:underline">{SITE.phone}</a>.</p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">SMS Privacy Policy</h2>
              <p>
                SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
