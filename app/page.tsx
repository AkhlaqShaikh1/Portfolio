import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems, orbsFeatures, emailifyFeatures, budgetScreens } from "@/data";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Lazy load heavy components for better performance
const Grid = dynamic(() => import("./components/Grid"), {
  loading: () => <div className="h-screen" />,
});
const TechStackComponent = dynamic(() => import("./components/TechStack"));
const ProductShowcase = dynamic(() => import("./components/ProductShowcase"));
const ComingSoon = dynamic(() => import("./components/ComingSoon"));
const RecentProjects = dynamic(() => import("./components/RecentProjects"));
const Process = dynamic(() => import("./components/Process"));
const Footer = dynamic(() => import("./components/Footer"));

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="relative bg-black-100 flex justify-center overflow-hidden  overflow-y-hidden items-center flex-col  mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechStackComponent />

        <ProductShowcase
          id="orbs"
          name="ORBS"
          tagline="Manage Your Business. All in One Place."
          description="Add, organize, and monitor every aspect of your business while maintaining complete control over roles, inventory, accounting, and sales."
          features={orbsFeatures}
          link="https://orbs.comengineering.services"
          detailHref="/products/orbs"
        />

        <ProductShowcase
          id="emailify"
          name="Emailify"
          tagline="Professional Email Signatures That Work Everywhere"
          description="Choose from 50+ stunning templates, customize your brand identity, and deploy pixel-perfect signatures across every email platform instantly."
          features={emailifyFeatures}
          link="https://emailify.comengineering.services"
          detailHref="/products/emailify"
        />

        <ComingSoon
          id="budgetguard"
          name="BudgetGuard"
          tagline="Privacy-First Budget Management"
          description="An all-local, no ads, privacy-first financial budget maker. Track income, expenses, and get smart insights — all without your data ever leaving your device."
          screens={budgetScreens}
          detailHref="/products/budgetguard"
        />

        <RecentProjects />
        {/* <Experience /> */}
        <Process />

        {latestPosts.length > 0 && (
          <section className="w-full py-20">
            <h2 className="heading mb-12">
              From our <span className="text-purple">blog</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-2xl border border-white/[0.1] bg-black-200 p-6 hover:border-purple/40 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs text-white-200 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-purple transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-white-100 text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple text-sm mt-4 hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full text-sm font-medium border border-purple/40 text-white hover:scale-105 transition-all bg-purple/10"
              >
                View All Posts
              </Link>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  );
}
