"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Phone, Menu, X } from "lucide-react";
import { SITE, SERVICES, METROS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [openMetro, setOpenMetro] = useState<string | null>(null);

  const [mobileServices, setMobileServices] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);
  const [mobileOpenMetro, setMobileOpenMetro] = useState<string | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
        setOpenMetro(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    `px-3 py-2 text-sm font-medium transition-colors hover:text-[#4FC3F7] ${
      isActive(href) ? "text-[#4FC3F7] border-b-2 border-[#4FC3F7]" : "text-[#F5F9FC]"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0A1628] shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[#4FC3F7] font-bold text-xl lg:text-2xl font-display tracking-tight">
                TQ Cleaners
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link href="/" className={navLinkClass("/")}>Home</Link>
              <Link href="/about" className={navLinkClass("/about")}>About</Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false); }}
                  className={`flex items-center gap-1 ${navLinkClass("/services")}`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-[#0A1628] border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-[#F5F9FC]/80 hover:text-[#4FC3F7] hover:bg-white/5 font-semibold border-b border-white/10 mb-1"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2 text-sm text-[#F5F9FC] hover:text-[#4FC3F7] hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas Two-Stage Dropdown */}
              <div ref={areasRef} className="relative">
                <button
                  onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false); }}
                  className={`flex items-center gap-1 ${navLinkClass("/service-areas")}`}
                >
                  Service Areas
                  <ChevronDown size={14} className={`transition-transform ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-[#0A1628] border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                    <Link
                      href="/service-areas"
                      className="block px-4 py-2 text-sm text-[#F5F9FC]/80 hover:text-[#4FC3F7] hover:bg-white/5 font-semibold border-b border-white/10 mb-1"
                      onClick={() => setAreasOpen(false)}
                    >
                      All Service Areas
                    </Link>
                    {METROS.map((metro) => (
                      <div
                        key={metro.slug}
                        className="relative group"
                        onMouseEnter={() => setOpenMetro(metro.slug)}
                        onMouseLeave={() => setOpenMetro(null)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-[#F5F9FC] hover:text-[#4FC3F7] hover:bg-white/5 cursor-pointer transition-colors">
                          <Link
                            href={`/service-areas/${metro.slug}`}
                            onClick={() => { setAreasOpen(false); setOpenMetro(null); }}
                            className="flex-1"
                          >
                            {metro.name}
                          </Link>
                          <ChevronRight size={12} className="ml-1 flex-shrink-0" />
                        </div>
                        {/* City submenu */}
                        {openMetro === metro.slug && (
                          <div className="absolute left-full top-0 w-52 bg-[#0A1628] border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                            {metro.cities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/service-areas/${metro.slug}/${city.slug}`}
                                className="block px-4 py-2 text-sm text-[#F5F9FC] hover:text-[#4FC3F7] hover:bg-white/5 transition-colors"
                                onClick={() => { setAreasOpen(false); setOpenMetro(null); }}
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/reviews" className={navLinkClass("/reviews")}>Reviews</Link>
              <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>
              <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>

              {/* Phone */}
              <a
                href={`tel:${SITE.phoneTel}`}
                className="hidden xl:flex items-center gap-1.5 text-[#4FC3F7] text-sm font-medium hover:text-white transition-colors"
              >
                <Phone size={14} />
                {SITE.phone}
              </a>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-2 px-4 py-2 bg-[#E6B800] text-[#0A1628] font-bold text-sm rounded-lg hover:bg-[#CFA200] transition-colors"
              >
                Get a Free Quote
              </Link>
            </nav>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a href={`tel:${SITE.phoneTel}`} className="text-[#4FC3F7]" aria-label="Call TQ Cleaners">
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-[#F5F9FC] p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-[#0A1628] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-[#4FC3F7] font-bold text-xl font-display">TQ Cleaners</span>
              <button onClick={() => setMobileOpen(false)} className="text-[#F5F9FC]">
                <X size={24} />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              <Link href="/" className="block py-3 text-[#F5F9FC] font-medium border-b border-white/10">Home</Link>
              <Link href="/about" className="block py-3 text-[#F5F9FC] font-medium border-b border-white/10">About</Link>

              {/* Services accordion */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className="w-full flex items-center justify-between py-3 text-[#F5F9FC] font-medium"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                </button>
                {mobileServices && (
                  <div className="pl-4 pb-2 space-y-1">
                    <Link href="/services" className="block py-2 text-[#F5F9FC]/80 text-sm font-semibold">All Services</Link>
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2 text-[#F5F9FC]/80 text-sm hover:text-[#4FC3F7]">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas accordion */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setMobileAreas(!mobileAreas)}
                  className="w-full flex items-center justify-between py-3 text-[#F5F9FC] font-medium"
                >
                  Service Areas
                  <ChevronDown size={16} className={`transition-transform ${mobileAreas ? "rotate-180" : ""}`} />
                </button>
                {mobileAreas && (
                  <div className="pl-4 pb-2 space-y-1">
                    <Link href="/service-areas" className="block py-2 text-[#F5F9FC]/80 text-sm font-semibold">All Areas</Link>
                    {METROS.map((metro) => (
                      <div key={metro.slug}>
                        <div className="flex items-center justify-between">
                          <Link href={`/service-areas/${metro.slug}`} className="py-2 text-[#4FC3F7] text-sm font-medium flex-1">
                            {metro.name}
                          </Link>
                          <button
                            onClick={() => setMobileOpenMetro(mobileOpenMetro === metro.slug ? null : metro.slug)}
                            className="p-2 text-[#F5F9FC]/60"
                          >
                            <ChevronDown size={14} className={`transition-transform ${mobileOpenMetro === metro.slug ? "rotate-180" : ""}`} />
                          </button>
                        </div>
                        {mobileOpenMetro === metro.slug && (
                          <div className="pl-4 space-y-1 pb-2">
                            {metro.cities.map((city) => (
                              <Link key={city.slug} href={`/service-areas/${metro.slug}/${city.slug}`} className="block py-1.5 text-[#F5F9FC]/70 text-sm hover:text-[#4FC3F7]">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/reviews" className="block py-3 text-[#F5F9FC] font-medium border-b border-white/10">Reviews</Link>
              <Link href="/blog" className="block py-3 text-[#F5F9FC] font-medium border-b border-white/10">Blog</Link>
              <Link href="/contact" className="block py-3 text-[#F5F9FC] font-medium border-b border-white/10">Contact</Link>

              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block w-full text-center py-3 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg">
                  Get a Free Quote
                </Link>
                <a href={`tel:${SITE.phoneTel}`} className="flex items-center justify-center gap-2 w-full py-3 border border-[#4FC3F7] text-[#4FC3F7] font-semibold rounded-lg">
                  <Phone size={16} />
                  {SITE.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
