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
    "Coms Advance Engineering is a software development agency building web applications, mobile apps, and AI-powered solutions. Meet our team, values, and development process.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Coms Advance Engineering",
    description:
      "A software development agency with an experienced, cross-functional team building web, mobile, and AI solutions.",
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

const stats = [
  { value: "12+", label: "Apps shipped" },
  { value: "3", label: "In-house products" },
  { value: "3", label: "Platforms: iOS, Android, Web" },
  { value: "6–12 wks", label: "Typical MVP launch" },
];

const team = [
  {
    role: "Engineering Leads",
    desc: "Senior engineers who own architecture, code reviews, and technical decisions so your product is built to last.",
  },
  {
    role: "Full-Stack Developers",
    desc: "React, Next.js, Node.js, and database specialists who build fast, secure web apps and APIs.",
  },
  {
    role: "Mobile Developers",
    desc: "Flutter and React Native engineers shipping polished iOS and Android apps to the stores.",
  },
  {
    role: "DevOps & Cloud Engineers",
    desc: "Docker, CI/CD, queues, monitoring, and cloud infrastructure that keeps everything running at scale.",
  },
  {
    role: "UI/UX Designers",
    desc: "Wireframes, prototypes, and interfaces that are simple to use and look great on every screen.",
  },
  {
    role: "QA & Project Managers",
    desc: "Testing every release and keeping timelines, budgets, and communication on track.",
  },
];

const values = [
  {
    title: "Transparent communication",
    desc: "Regular updates, demos, and direct access to the people building your product — no black boxes.",
  },
  {
    title: "Quality first",
    desc: "Code reviews, automated testing, and CI/CD on every project, not just the big ones.",
  },
  {
    title: "Ownership mindset",
    desc: "We build and run our own products, so we treat yours like it matters — because it does.",
  },
  {
    title: "Long-term partnership",
    desc: "Launch is the start. We stay on for maintenance, scaling, and new features as you grow.",
  },
];

const engagementModels = [
  {
    title: "Fixed-scope project",
    desc: "Clear requirements, a fixed timeline, and a fixed price. Ideal for MVPs and well-defined builds.",
  },
  {
    title: "Dedicated team",
    desc: "A full team working as an extension of your company, scaling up or down as you need.",
  },
  {
    title: "Ongoing support",
    desc: "Monthly maintenance, monitoring, bug fixes, and feature updates for live products.",
  },
];

const industries = [
  "Startups & SaaS",
  "Retail & E-commerce",
  "Finance & Accounting",
  "Media & Entertainment",
  "Business Operations",
  "Marketing & Communication",
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "An MVP usually takes 6–12 weeks. Larger platforms are delivered in phases, with working releases every few weeks.",
  },
  {
    q: "Do you work with clients in other time zones?",
    a: "Yes. We work with clients across time zones and schedule overlap hours for calls, demos, and reviews.",
  },
  {
    q: "Who owns the code?",
    a: "You do. All source code, designs, and accounts are handed over and belong to you.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We offer ongoing maintenance, monitoring, and feature development plans for every product we ship.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const card = "p-6 rounded-2xl border border-white/[0.1] bg-black-200";

function CardGrid({
  items,
  className,
}: {
  items: { title: string; desc: string }[];
  className: string;
}) {
  return (
    <div className={`grid gap-6 mx-auto ${className}`}>
      {items.map((item) => (
        <div key={item.title} className={card}>
          <h3 className="text-white text-lg font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-white-100 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
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
            We are a software development agency that turns ideas into
            production-ready products. From full-stack web applications and
            cross-platform mobile apps to AI integrations and cloud
            infrastructure, our team handles the entire journey — planning,
            design, development, testing, and launch.
          </p>
        </section>

        <section className="pb-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8 max-w-5xl mx-auto py-8 border-y border-white/[0.1] md:divide-x md:divide-white/[0.1]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse text-center px-4">
                <dt className="mt-2 text-white-200 text-xs md:text-sm uppercase tracking-wider">
                  {s.label}
                </dt>
                <dd className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-purple bg-clip-text text-transparent">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="py-10">
          <h2 className="heading mb-12">
            What we <span className="text-purple">do</span>
          </h2>
          <CardGrid items={workExperience} className="sm:grid-cols-2 max-w-5xl" />
        </section>

        <section className="py-10">
          <h2 className="heading mb-4">
            An experienced <span className="text-purple">team</span>
          </h2>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Every project gets a cross-functional team, not a lone freelancer.
            Engineers, designers, and project managers work together from day
            one so nothing falls through the cracks.
          </p>
          <CardGrid
            items={team.map((t) => ({ title: t.role, desc: t.desc }))}
            className="sm:grid-cols-2 lg:grid-cols-3 max-w-6xl"
          />
        </section>

        <section className="py-10">
          <h2 className="heading mb-6">
            Why work <span className="text-purple">with us</span>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-white-100 text-sm md:text-base leading-relaxed mb-12">
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
          <CardGrid items={values} className="sm:grid-cols-2 max-w-5xl" />
        </section>

        <section className="py-10">
          <h2 className="heading mb-12">
            Industries we <span className="text-purple">serve</span>
          </h2>
          <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((i) => (
              <li
                key={i}
                className="px-5 py-2 rounded-full border border-purple/40 bg-purple/10 text-white text-sm"
              >
                {i}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10">
          <h2 className="heading mb-12">
            How we <span className="text-purple">engage</span>
          </h2>
          <CardGrid items={engagementModels} className="md:grid-cols-3 max-w-6xl" />
        </section>

        <TechStackComponent />
        <Process />

        <section className="py-10">
          <h2 className="heading mb-12">
            Frequently asked <span className="text-purple">questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className={`${card} group`}>
                <summary className="text-white font-semibold cursor-pointer list-none flex justify-between gap-4">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="text-purple group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="text-white-100 text-sm leading-relaxed mt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white-100 mb-8 max-w-2xl mx-auto">
            Tell us about your idea and our team will get back to you with a
            plan, timeline, and estimate.
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
