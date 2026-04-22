import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SITE, SERVICES, METROS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div>
            <div className="text-[#4FC3F7] font-bold text-2xl font-display mb-3">TQ Cleaners</div>
            <p className="text-[#F5F9FC]/70 text-sm mb-5 leading-relaxed">{SITE.tagline}</p>
            <div className="space-y-3">
              <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 text-[#F5F9FC]/80 hover:text-[#4FC3F7] transition-colors text-sm">
                <Phone size={15} className="text-[#4FC3F7] flex-shrink-0" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-[#F5F9FC]/80 hover:text-[#4FC3F7] transition-colors text-sm">
                <Mail size={15} className="text-[#4FC3F7] flex-shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2 text-[#F5F9FC]/70 text-sm">
                <Clock size={15} className="text-[#4FC3F7] flex-shrink-0 mt-0.5" />
                <span>{SITE.hours}</span>
              </div>
              <div className="flex items-start gap-2 text-[#F5F9FC]/70 text-sm">
                <MapPin size={15} className="text-[#4FC3F7] flex-shrink-0 mt-0.5" />
                <span>Serving 30+ Cities Across Texas</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[#F5F9FC] font-bold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[#F5F9FC]/70 hover:text-[#4FC3F7] text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-[#F5F9FC] font-bold text-base mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {METROS.map((metro) => (
                <li key={metro.slug}>
                  <Link href={`/service-areas/${metro.slug}`} className="text-[#F5F9FC]/70 hover:text-[#4FC3F7] text-sm transition-colors">
                    {metro.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-[#4FC3F7] hover:text-white text-sm font-medium transition-colors">
                  View All 30 Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div>
            <h3 className="text-[#F5F9FC] font-bold text-base mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/reviews", label: "Reviews" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#F5F9FC]/70 hover:text-[#4FC3F7] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 bg-[#E6B800] text-[#0A1628] font-bold text-sm rounded-lg hover:bg-[#CFA200] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5F9FC]/50">
          <p>© 2026 TQ Cleaners. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#4FC3F7] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#4FC3F7] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
