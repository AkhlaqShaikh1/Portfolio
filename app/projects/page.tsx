import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { navItems, projects } from "@/data";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects & Case Studies - Web, Mobile & AI Development",
  description:
    "Explore projects delivered by Coms Advance Engineering: AI recruitment platforms, blockchain e-commerce, audiobook platforms, delivery apps, and more built with React, Next.js, Flutter, and Node.js.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects & Case Studies | Coms Advance Engineering",
    description:
      "Web apps, mobile apps, and AI platforms we've designed, built, and shipped for clients worldwide.",
    url: absoluteUrl("/projects"),
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Coms Advance Engineering",
  itemListElement: projects.map((project, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: project.title,
    url: project.link,
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
      name: "Projects",
      item: absoluteUrl("/projects"),
    },
  ],
};

export default function ProjectsPage() {
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
            <span className="text-purple">Projects</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-purple">Projects</span>
          </h1>
          <p className="text-white-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            A selection of web applications, mobile apps, and platforms we have
            designed, built, and shipped — from AI-powered recruitment tools to
            blockchain e-commerce and audiobook platforms.
          </p>
        </section>

        <section className="pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-2xl border border-white/[0.1] bg-black-200 overflow-hidden hover:border-purple/40 transition-colors"
              >
                <div className="relative w-full aspect-video bg-[#13162d]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-white text-lg font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white-100 text-sm leading-relaxed flex-1">
                    {project.des}
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                      {project.iconLists.map((icon, idx) => (
                        <div
                          key={idx}
                          style={{ transform: `translateX(-${6 * idx}px)` }}
                          className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                        >
                          <Image
                            src={icon}
                            alt=""
                            width={20}
                            height={20}
                            className="p-1"
                          />
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-purple hover:underline"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
