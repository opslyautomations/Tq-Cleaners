import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | TQ Cleaners",
  description: "TQ Cleaners Terms of Service governing the use of our website and cleaning services.",
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Dark header banner */}
      <section className="bg-[#0A1628] py-16 px-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Terms of Service</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] font-display">Terms of Service</h1>
          <p className="text-[#F5F9FC]/60 mt-2 text-sm font-medium">TQ Cleaners &mdash; Last updated: 12/31/2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-[#1A2332]/80 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">1. Overview</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the TQ Cleaners website and cleaning services.
              By booking a service or using our website, you agree to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">2. Services Provided</h2>
            <p>
              TQ Cleaners provides residential and commercial cleaning services. Service details, pricing, and
              availability may vary and are subject to change.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">3. Appointments and Cancellations</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Appointments must be scheduled in advance.</li>
              <li>Cancellations or rescheduling should be made at least 24 hours before the appointment.</li>
              <li>Late cancellations may incur a fee.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">4. Payments</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Payment is due at the time of service unless otherwise agreed.</li>
              <li>We accept major payment methods through secure third-party processors.</li>
              <li>Failure to pay may result in service suspension.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">5. Customer Responsibilities</h2>
            <p className="mb-3">Customers agree to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Provide safe access to the property</li>
              <li>Secure pets, valuables, and fragile items</li>
              <li>Notify us of any special cleaning instructions or hazards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">6. Satisfaction Guarantee</h2>
            <p>
              If you are not satisfied with a cleaning, notify us within 24 hours, and we will make reasonable
              efforts to address the issue.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">7. Liability</h2>
            <p className="mb-3">TQ Cleaners is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm mb-4">
              <li>Pre-existing damage</li>
              <li>Items not properly secured or stored</li>
              <li>Allergic reactions to cleaning products unless disclosed in advance</li>
            </ul>
            <p>Our liability is limited to the cost of the service provided.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">8. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of our services constitutes acceptance
              of updated Terms.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-6">SMS Terms &amp; Conditions</h2>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold text-[#0A1628] mb-1">1- SMS Consent Communication:</p>
                <p>Information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-1">2- Types of SMS Communications:</p>
                <p className="mb-2">If consent has been given to receive text messages from TQ Cleaners, messages may be received related to the following:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Specific jobs</li>
                  <li>Balance due</li>
                  <li>Account status</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-1">3- Message Frequency:</p>
                <p>Message frequency may vary depending on the type of communication. For example, you may receive up to 4 SMS messages per week related to appointments, billing, and account updates.</p>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-1">4- Potential Fees for SMS Messaging:</p>
                <p>Standard message and data rates may apply, depending on the carrier&apos;s pricing plan. These fees may vary if the message is sent domestically or internationally.</p>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-1">5- Opt-In Method:</p>
                <p className="mb-2">Opt-in to receive SMS messages from TQ Cleaners can be done in the following ways:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>By submitting an online form</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-1">6- Opt-Out Method:</p>
                <p>Opting out of receiving SMS messages can be done at any time by replying &ldquo;STOP&rdquo; to any SMS message received. Alternatively, direct contact can be made to request removal from the messaging list.</p>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-1">7- Help:</p>
                <p className="mb-2">
                  For any issues, reply with the keyword HELP. Alternatively, help can be obtained directly from us at{" "}
                  <a href="https://www.tqcleaners.com" className="text-[#4FC3F7] hover:underline">www.tqcleaners.com</a>
                </p>
                <p className="font-medium text-[#0A1628] mb-1">Additional Options:</p>
                <p>If SMS messages are not desired, the SMS consent box on forms can be left unchecked.</p>
              </div>

              <div>
                <p className="font-bold text-[#0A1628] mb-2">8- Standard Messaging Disclosures:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Message and data rates may apply.</li>
                  <li>Opt out at any time by texting &ldquo;STOP.&rdquo;</li>
                  <li>
                    For assistance, text &ldquo;HELP&rdquo; or visit our{" "}
                    <Link href="/privacy" className="text-[#4FC3F7] hover:underline">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="/terms-of-service" className="text-[#4FC3F7] hover:underline">Terms and Conditions</Link>
                    {" "}pages.
                  </li>
                  <li>Message frequency may vary.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-[#0A1628] font-display mb-3">Contact Information</h2>
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
