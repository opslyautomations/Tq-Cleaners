import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | House & Commercial Cleaning in Texas`,
    template: `%s | ${SITE.name}`,
  },
  description: "TQ Cleaners: licensed, insured 5-star cleaning across 30+ Texas cities. San Antonio, Austin, Dallas & Fort Worth. Free quote.",
  metadataBase: new URL(SITE.domain),
  alternates: { canonical: SITE.domain },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  other: {
    "theme-color": "#0A1628",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: "TQ Cleaners",
  description:
    "Professional house cleaning and commercial cleaning services across San Antonio, Austin, Dallas, and Fort Worth — licensed, insured, 100% satisfaction guaranteed.",
  url: "https://tqcleaners.com",
  telephone: "+19563066378",
  email: "info@tqcleaners.com",
  image: "https://tqcleaners.com/og/homepage.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mobile Service — We Come to You",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    "San Antonio","Alamo Heights","Helotes","Leon Valley","Converse","Universal City","Schertz","New Braunfels","Boerne","Stone Oak","The Dominion",
    "Austin","Round Rock","Pflugerville","Cedar Park","Kyle","Buda","Leander","Georgetown","Lakeway","Bee Cave","Dripping Springs",
    "Dallas","Plano","Frisco","Richardson",
    "Fort Worth","Arlington","Grapevine","Southlake",
  ].map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.opslyautomations.com" />
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        {gaId && <link rel="preconnect" href="https://www.googletagmanager.com" />}
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />

        {/* GHL Form Embed Script */}
        <Script src="https://api.opslyautomations.com/js/form_embed.js" strategy="lazyOnload" />

        {/* GHL Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e7cd7b29e8467446912bb8"
          strategy="lazyOnload"
        />

        {/* GA4 — set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX in Vercel environment variables */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
