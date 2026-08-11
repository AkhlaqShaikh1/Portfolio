import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems } from "@/data";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: absoluteUrl(path),
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover ?? "/logo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(post.cover ?? "/logo.png"),
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: siteConfig.logo },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <article className="pt-28 md:pt-36 pb-16 max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white-200">
            <Link href="/" className="hover:text-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-purple transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-purple">{post.title}</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-white-200 mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-white-100 text-base md:text-lg leading-relaxed">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
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
          </header>

          <div
            className="prose prose-invert prose-headings:text-white prose-a:text-purple prose-strong:text-white prose-li:text-white-100 prose-p:text-white-100 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        {otherPosts.length > 0 && (
          <section className="pb-16 max-w-3xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-6">
              More from our <span className="text-purple">blog</span>
            </h2>
            <div className="space-y-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-5 rounded-2xl border border-white/[0.1] bg-black-200 hover:border-purple/40 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                  <p className="text-white-100 text-sm line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Footer showContactForm={false} />
      </div>
    </main>
  );
}
