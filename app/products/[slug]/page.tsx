import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import ProductShowcase from "@/app/components/ProductShowcase";
import ComingSoon from "@/app/components/ComingSoon";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems } from "@/data";
import { products, getProduct } from "@/lib/products";
import { siteConfig, absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${product.name} - ${product.tagline}`;
  const path = `/products/${product.slug}`;

  return {
    title,
    description: product.description,
    keywords: product.keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: product.description,
      url: absoluteUrl(path),
      type: "website",
      images: [{ url: product.features[0]?.image ?? "/logo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.longDescription,
    applicationCategory: product.category,
    operatingSystem: product.operatingSystem ?? "Web",
    url: product.link ?? absoluteUrl(`/products/${product.slug}`),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(product.comingSoon
      ? { releaseNotes: "Coming soon" }
      : {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: absoluteUrl("/products"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: absoluteUrl(`/products/${product.slug}`),
      },
    ],
  };

  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-4 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white-200">
            <Link href="/" className="hover:text-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/products"
              className="hover:text-purple transition-colors"
            >
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-purple">{product.name}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {product.name}
          </h1>
          <p className="text-lg md:text-2xl font-medium text-purple mb-6">
            {product.tagline}
          </p>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {product.longDescription}
          </p>
        </section>

        {/* Interactive showcase */}
        {product.comingSoon ? (
          <ComingSoon
            name={product.name}
            tagline={product.tagline}
            description={product.description}
            screens={product.features}
          />
        ) : (
          <ProductShowcase
            name={product.name}
            tagline={product.tagline}
            description={product.description}
            features={product.features}
            link={product.link}
            linkLabel={product.linkLabel}
          />
        )}

        {/* Highlights */}
        <section className="py-16">
          <h2 className="heading mb-12">
            Why choose <span className="text-purple">{product.name}</span>?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {product.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-6 rounded-2xl border border-white/[0.1] bg-black-200"
              >
                <h3 className="text-white text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white-100 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <h2 className="heading mb-12">
            Frequently Asked <span className="text-purple">Questions</span>
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {product.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl border border-white/[0.1] bg-black-200"
              >
                <h3 className="text-white text-lg font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-white-100 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross links + CTA */}
        <section className="py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want something like {product.name} for your business?
          </h2>
          <p className="text-white-100 mb-8 max-w-2xl mx-auto">
            We build custom web and mobile applications end to end — from idea
            to launch.{" "}
            <Link href="/contact" className="text-purple hover:underline">
              Get in touch
            </Link>{" "}
            or explore our other products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-medium border border-purple/40 text-white hover:scale-105 transition-all bg-purple/10"
                >
                  {p.name}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
