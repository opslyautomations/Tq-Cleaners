import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS_DATA } from "@/lib/blog-posts-data";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | TQ Cleaners Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://tqcleaners.com/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://tqcleaners.com/blog/${slug}`,
      siteName: "TQ Cleaners",
      locale: "en_US",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS_DATA.filter((p) => p.slug !== slug).slice(0, 3);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Blog", item: "https://tqcleaners.com/blog" },
    { name: post.title, item: `https://tqcleaners.com/blog/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "TQ Cleaners", url: "https://tqcleaners.com" },
    publisher: { "@type": "Organization", name: "TQ Cleaners", url: "https://tqcleaners.com", logo: { "@type": "ImageObject", url: "https://tqcleaners.com/og/homepage.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://tqcleaners.com/blog/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-16 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#F5F9FC]/50 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#4FC3F7]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#4FC3F7]">Blog</Link>
            <span>/</span>
            <span className="text-[#F5F9FC]/80 line-clamp-1">{post.title}</span>
          </nav>
          <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-wide mb-3 block">{post.category}</span>
          <h1 className="text-2xl md:text-4xl font-bold text-[#F5F9FC] font-display leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Article Meta */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-4 text-sm text-[#1A2332]/60">
          <span>By <strong className="text-[#0A1628]">TQ Cleaners</strong></span>
          <span>·</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#1A2332]/80 leading-relaxed font-semibold mb-8 border-l-4 border-[#4FC3F7] pl-5">
            {post.excerpt}
          </p>
          <div className="space-y-8 text-[#1A2332]/80 leading-relaxed">
            {post.body.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-bold text-[#0A1628] font-display mb-4">{section.heading}</h2>
                )}
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* In-article CTA */}
          <div className="mt-12 p-6 bg-[#0A1628] rounded-xl text-center">
            <p className="text-[#F5F9FC] font-bold text-lg mb-2">Ready for a Spotless Home?</p>
            <p className="text-[#F5F9FC]/70 text-sm mb-5">Serving 30+ Texas cities. Flat-rate pricing, licensed &amp; insured.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-[#E6B800] text-[#0A1628] font-bold rounded-lg hover:bg-[#CFA200] transition-colors">
                Get a Free Quote
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="px-6 py-3 border-2 border-white/50 text-[#F5F9FC] font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-[#F5F9FC] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A1628] font-display mb-8">More Cleaning Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-[#0A1628] to-[#1A3A5C] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-widest px-3 py-1.5 border border-[#4FC3F7]/30 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-wide">{p.category}</span>
                    <h3 className="font-bold text-[#0A1628] text-sm font-display group-hover:text-[#4FC3F7] transition-colors leading-tight flex-1">{p.title}</h3>
                    <span className="text-xs text-[#1A2332]/50">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
