import type { Metadata } from "next";
import Link from "next/link";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems } from "@/data";
import { getAllPosts } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog - Software Development Insights",
  description:
    "Articles on web development, mobile apps, AI integration, and building software products — written by the team at Coms Advance Engineering.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Coms Advance Engineering",
    description:
      "Articles on web development, mobile apps, AI integration, and building software products.",
    url: absoluteUrl("/blog"),
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  };

  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={blogJsonLd} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section className="pt-28 md:pt-36 pb-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white-200">
            <Link href="/" className="hover:text-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-purple">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-purple">Blog</span>
          </h1>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Insights on web development, mobile apps, AI integration, and what
            we learn building software products.
          </p>
        </section>

        <section className="pb-16">
          {posts.length === 0 ? (
            <p className="text-center text-white-200 py-20">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-2xl border border-white/[0.1] bg-black-200 p-6 hover:border-purple/40 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs text-white-200 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-white text-xl font-semibold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-purple transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-white-100 text-sm leading-relaxed flex-1">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs border border-purple/30 text-purple bg-purple/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple text-sm mt-5 hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        <Footer showContactForm={false} />
      </div>
    </main>
  );
}
