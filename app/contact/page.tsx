import type { Metadata } from "next";
import Link from "next/link";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems } from "@/data";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us - Start Your Project",
  description:
    "Get in touch with Coms Advance Engineering to discuss your web application, mobile app, or AI project. We respond quickly and work across all time zones.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Coms Advance Engineering",
    description:
      "Tell us about your project — web, mobile, or AI — and we'll get back to you with a plan.",
    url: absoluteUrl("/contact"),
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Coms Advance Engineering",
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.linkedin],
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
      name: "Contact",
      item: absoluteUrl("/contact"),
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={contactJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section className="pt-28 md:pt-36 pb-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white-200">
            <Link href="/" className="hover:text-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-purple">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Let&apos;s build <span className="text-purple">together</span>
          </h1>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Whether you need a web application, a mobile app, an AI
            integration, or a full product built from scratch — tell us about
            your project and we&apos;ll get back to you as soon as possible.
          </p>
        </section>

        <section className="pb-16">
          <ContactForm />
        </section>

        <Footer showContactForm={false} />
      </div>
    </main>
  );
}
