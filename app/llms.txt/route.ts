import { products } from "@/lib/products";
import { getAllPosts } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const productLines = products
    .map((p) => {
      const liveLink = p.link ? ` (app: ${p.link})` : " (coming soon)";
      return `- [${p.name}](${absoluteUrl(`/products/${p.slug}`)}): ${p.tagline} — ${p.description}${liveLink}`;
    })
    .join("\n");

  const blogLines = getAllPosts()
    .map(
      (post) =>
        `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.description}`
    )
    .join("\n");

  const body = `# ${siteConfig.name}

> Software engineering company specializing in full-stack development, mobile applications, and AI integration. Creators of ORBS, Emailify, and BudgetGuard.

Coms Advance Engineering is a software development company that builds web applications, mobile apps, and enterprise solutions. We prioritize client collaboration and are flexible with time zone communications.

## Pages

- [Home](${siteConfig.url}): Company overview, products, and recent work
- [About](${absoluteUrl("/about")}): Who we are, services, tech stack, and development process
- [Products](${absoluteUrl("/products")}): All software products we build and maintain
- [Projects](${absoluteUrl("/projects")}): Portfolio of client and personal projects
- [Blog](${absoluteUrl("/blog")}): Articles on web development, mobile apps, and building software products
- [Contact](${absoluteUrl("/contact")}): Contact form to start a project
- [Privacy Policy](${absoluteUrl("/privacy-policy")}): Privacy policy for our apps and services

## Products

${productLines}

## Services

- Full-Stack Web Development (React, Next.js, NestJS, Django, Express)
- Mobile Application Development (Flutter for iOS and Android)
- Blockchain Development (Ethereum, Solidity)
- AI/ML Integration (OpenAI, TensorFlow, Hugging Face)
- Cloud & DevOps (AWS, Azure, Docker)
- Database Design (PostgreSQL, MongoDB, MySQL)

## Blog Posts

${blogLines}

## Projects

Full portfolio: ${absoluteUrl("/projects")}

- RecruitEasy: AI-powered recruitment platform for candidate matching
- Commercio: Blockchain-based e-commerce platform
- ShipGo: Luggage delivery service web and mobile apps
- SabSuno: Collaborative audiobook platform with web, portal, and mobile apps
- GermanExcel: Online German language exam preparation platform
- HTTP Server in Rust: Custom HTTP server implementation

## Contact

- Website: ${siteConfig.url}
- Contact form: ${absoluteUrl("/contact")}
- LinkedIn: ${siteConfig.linkedin}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
