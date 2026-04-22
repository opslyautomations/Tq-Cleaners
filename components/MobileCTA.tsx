import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0A1628] border-t border-white/10 flex">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-[#4FC3F7] font-bold text-sm border-r border-white/10"
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#E6B800] text-[#0A1628] font-bold text-sm"
      >
        Get Quote
      </Link>
    </div>
  );
}
