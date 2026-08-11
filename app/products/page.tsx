import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems } from "@/data";
import { products } from "@/lib/products";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Products - ORBS, Emailify & BudgetGuard",
  description:
    "Explore software products built by Coms Advance Engineering: ORBS business management platform, Emailify email signature manager, and BudgetGuard privacy-first budget app.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Our Products | Coms Advance Engineering",
    description:
      "ORBS, Emailify, and BudgetGuard — software products designed, built, and maintained by our team.",
    url: absoluteUrl("/products"),
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Products by Coms Advance Engineering",
  itemListElement: products.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: product.name,
    url: absoluteUrl(`/products/${product.slug}`),
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
  ],
};

export default function ProductsPage() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section className="pt-28 md:pt-36 pb-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white-200">
            <Link href="/" className="hover:text-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-purple">Products</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-purple">Products</span>
          </h1>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just build software for clients — we design, ship,
            and maintain our own products. Each one is built with the same
            process and stack we bring to client work.
          </p>
        </section>

        <section className="pb-16 space-y-8">
          {products.map((product, i) => (
            <article
              key={product.slug}
              className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-10 rounded-3xl border border-white/[0.1] bg-black-200 hover:border-purple/40 transition-colors"
            >
              <div
                className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#13162d] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={product.features[0].image}
                  alt={`${product.name} — ${product.features[0].label}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                {product.comingSoon && (
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border border-purple/40 text-purple bg-purple/10">
                    Coming Soon
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-purple transition-colors"
                  >
                    {product.name}
                  </Link>
                </h2>
                <p className="text-purple font-medium mb-4">{product.tagline}</p>
                <p className="text-white-100 text-sm md:text-base leading-relaxed mb-6">
                  {product.longDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-medium border border-purple/40 text-white hover:scale-105 transition-all bg-purple/10"
                  >
                    Learn More About {product.name}
                  </Link>
                  {product.link && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-medium border border-white/[0.2] text-white hover:scale-105 transition-all"
                    >
                      Visit Live Site
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want us to build your product next?
          </h2>
          <p className="text-white-100 mb-8 max-w-2xl mx-auto">
            We take ideas from first wireframe to launch — web, mobile, and AI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full text-sm font-medium border border-purple/40 text-white hover:scale-105 transition-all bg-purple/10"
          >
            Start a Project
          </Link>
        </section>

        <Footer showContactForm={false} />
      </div>
    </main>
  );
}
