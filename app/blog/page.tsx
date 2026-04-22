import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS_DATA } from "@/lib/blog-posts-data";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides | TQ Cleaners Blog",
  description:
    "Expert cleaning tips, move-out guides, Airbnb hosting advice, and eco-friendly cleaning insights from TQ Cleaners — serving Texas families since day one.",
  alternates: { canonical: "https://tqcleaners.com/blog" },
  openGraph: {
    type: "website",
    title: "Cleaning Tips & Guides | TQ Cleaners Blog",
    description: "Expert cleaning advice for Texas families — deep clean schedules, move-out checklists, Airbnb turnovers, and eco-friendly products.",
    url: "https://tqcleaners.com/blog",
    siteName: "TQ Cleaners",
    locale: "en_US",
    images: [{ url: "https://tqcleaners.com/og/blog.png", secureUrl: "https://tqcleaners.com/og/blog.png", width: 1200, height: 630, alt: "TQ Cleaners blog", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Cleaning Tips | TQ Cleaners Blog", description: "Expert cleaning guides for Texas families.", images: ["https://tqcleaners.com/og/blog.png"] },
};

const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Blog", item: "https://tqcleaners.com/blog" }]);

const CATEGORIES = Array.from(new Set(BLOG_POSTS_DATA.map((p) => p.category)));

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS_DATA;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] font-display mb-4">
            Cleaning Tips &amp; Guides
          </h1>
          <p className="text-xl text-[#F5F9FC]/70 max-w-2xl">
            Expert advice for Texas families — deep cleaning schedules, move-out checklists, Airbnb hosting, and more.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#0A1628] text-[#F5F9FC]">All</span>
          {CATEGORIES.map((cat) => (
            <span key={cat} className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-[#1A2332]/70 border border-gray-200">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 items-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#1A3A5C] flex items-center justify-center">
              <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-widest px-4 py-2 border border-[#4FC3F7]/30 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-wide">{featured.category} · Featured</span>
              <h2 className="text-2xl font-bold text-[#0A1628] font-display group-hover:text-[#4FC3F7] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-[#1A2332]/70 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-[#1A2332]/50">
                <time dateTime={featured.date}>{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="text-[#4FC3F7] font-bold text-sm group-hover:text-[#E6B800] transition-colors">Read Article →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#F5F9FC] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#0A1628] to-[#1A3A5C] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-widest px-4 py-2 border border-[#4FC3F7]/30 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-wide">{post.category}</span>
                  <h2 className="font-bold text-[#0A1628] font-display group-hover:text-[#4FC3F7] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#1A2332]/70 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#1A2332]/50 mt-auto">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
