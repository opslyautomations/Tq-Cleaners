import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryText?: string;
  showPhone?: boolean;
}

export default function CTASection({
  heading = "Ready for a Spotless Space?",
  subheading = "Get a free, no-obligation quote in under 60 seconds.",
  primaryText = "Get a Free Quote",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="bg-[#0A1628] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] mb-4 font-display">{heading}</h2>
        <p className="text-[#F5F9FC]/70 text-lg mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#E6B800] text-[#0A1628] font-bold text-lg rounded-lg hover:bg-[#CFA200] transition-colors"
          >
            {primaryText}
          </Link>
          {showPhone && (
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#F5F9FC] text-[#F5F9FC] font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone size={20} />
              Call {SITE.phone}
            </a>
          )}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[#F5F9FC]/60 text-sm">
          <span>⭐ 5-Star Rated</span>
          <span>🛡️ Licensed & Insured</span>
          <span>📍 30+ Cities</span>
          <span>💯 Satisfaction Guaranteed</span>
        </div>
      </div>
    </section>
  );
}
