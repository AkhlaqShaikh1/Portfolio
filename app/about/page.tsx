import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems, workExperience } from "@/data";
import { siteConfig, absoluteUrl } from "@/lib/site";

const TechStackComponent = dynamic(() => import("@/app/components/TechStack"));
const Process = dynamic(() => import("@/app/components/Process"));

export const metadata: Metadata = {
  title: "About Us - Custom Software Development Company",
  description:
    "Coms Advance Engineering is a software development company building web applications, mobile apps, and AI-powered solutions. Learn about our team, expertise, and development process.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Coms Advance Engineering",
    description:
      "A software development company building web applications, mobile apps, and AI-powered solutions with a collaborative, transparent process.",
    url: absoluteUrl("/about"),
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
      name: "About",
      item: absoluteUrl("/about"),
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section className="pt-28 md:pt-36 pb-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white-200">
            <Link href="/" className="hover:text-purple transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-purple">About</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-purple">Coms Advance Engineering</span>
          </h1>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We are a software development company that turns ideas into
            production-ready products. From full-stack web applications and
            cross-platform mobile apps to AI integrations and cloud
            infrastructure, we handle the entire journey — planning,
            development, testing, and launch.
          </p>
        </section>

        <section className="py-10">
          <h2 className="heading mb-12">
            What we <span className="text-purple">do</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {workExperience.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl border border-white/[0.1] bg-black-200"
              >
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white-100 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="heading mb-6">
            Why work <span className="text-purple">with us</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-white-100 text-sm md:text-base leading-relaxed">
            <p>
              We prioritize client collaboration and open communication at
              every step. You will always know where your project stands, what
              comes next, and why we made each technical decision.
            </p>
            <p>
              Our team works across time zones and adapts to your schedule,
              whether you are a startup founder shipping an MVP or an
              established business modernizing internal tools.
            </p>
            <p>
              We build our own products too —{" "}
              <Link href="/products/orbs" className="text-purple hover:underline">
                ORBS
              </Link>
              ,{" "}
              <Link
                href="/products/emailify"
                className="text-purple hover:underline"
              >
                Emailify
              </Link>
              , and{" "}
              <Link
                href="/products/budgetguard"
                className="text-purple hover:underline"
              >
                BudgetGuard
              </Link>{" "}
              — so we understand what it takes to ship and maintain real
              software, not just deliver a codebase.
            </p>
          </div>
        </section>

        <TechStackComponent />
        <Process />

        <section className="py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white-100 mb-8 max-w-2xl mx-auto">
            Tell us about your idea and we&apos;ll get back to you with a plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full text-sm font-medium border border-purple/40 text-white hover:scale-105 transition-all bg-purple/10"
          >
            Contact Us
          </Link>
        </section>

        <Footer showContactForm={false} />
      </div>
    </main>
  );
}
