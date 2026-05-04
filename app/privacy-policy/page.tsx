import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TQ Cleaners",
  description: "TQ Cleaners Privacy Policy. Learn how we collect, use, and protect your personal information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Dark header banner */}
      <section className="bg-[#0A1628] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] font-display">Privacy Policy</h1>
          <p className="text-[#F5F9FC]/60 mt-2 text-sm font-medium">TQ Cleaners &mdash; Last updated: 12/31/2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-[#1A2332]/80 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Introduction</h2>
            <p>
              TQ Cleaners (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how
              we collect, use, disclose, and protect your information when you visit our website or use our cleaning
              services. By using our website, you agree to the practices described in this policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Information We Collect</h2>

            <h3 className="text-base font-bold text-[#0A1628] font-display mb-2 mt-4">Information You Provide Directly</h3>
            <p className="mb-3">We may collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Service address</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Notes about your home or cleaning preferences</li>
            </ul>

            <h3 className="text-base font-bold text-[#0A1628] font-display mb-2 mt-6">Information Collected Automatically</h3>
            <p className="mb-3">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Cookies and tracking data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Schedule and provide cleaning services</li>
              <li>Communicate with you about appointments or inquiries</li>
              <li>Process payments</li>
              <li>Improve our website and services</li>
              <li>Send updates, promotions, or service reminders (you may opt out anytime)</li>
              <li>Maintain internal business records</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Sharing Your Information</h2>
            <p className="mb-4">We do not sell your personal information.</p>
            <p className="mb-3">We may share information only with:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Service providers (payment processors, scheduling software, etc.)</li>
              <li>Employees or contractors who perform cleaning services</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Payment Security</h2>
            <p>
              We do not store full credit card numbers on our servers. Payments are processed through secure,
              PCI-compliant third-party processors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies to improve functionality, remember preferences, and analyze website
              traffic. You may disable cookies in your browser settings, but some features may not work properly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Children&apos;s Privacy</h2>
            <p>
              Our website and services are not intended for children under 13. We do not knowingly collect
              information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your personal
              information, and to opt out of marketing communications.
            </p>
            <p className="mt-3">
              To make a request, contact us at:{" "}
              <a href="mailto:info@tqcleaners.com" className="text-[#4FC3F7] hover:underline">
                info@tqcleaners.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Data Protection</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date will reflect the most
              recent changes.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Contact Us</h2>
            <p className="font-bold text-[#0A1628]">TQ Cleaners</p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:info@tqcleaners.com" className="text-[#4FC3F7] hover:underline">
                info@tqcleaners.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+19563066378" className="text-[#4FC3F7] hover:underline">
                956-306-6378
              </a>
            </p>
            <p>Address: PO Box 2097, Edinburg, TX 78540</p>
          </div>

        </div>
      </section>
    </>
  );
}
