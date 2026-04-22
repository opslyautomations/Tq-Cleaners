import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

interface HeroStripProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function HeroStrip({ title, subtitle, breadcrumb }: HeroStripProps) {
  return (
    <section className="bg-[#0A1628] py-16 md:py-20 px-4 border-b border-white/10">
      <div className="max-w-5xl mx-auto">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#4FC3F7] transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-[#F5F9FC]/80">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#4FC3F7] transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F9FC] font-display leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-[#F5F9FC]/70 max-w-2xl mb-8">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#F5F9FC]/60 text-[#F5F9FC] font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
