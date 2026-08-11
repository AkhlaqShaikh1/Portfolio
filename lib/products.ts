import {
  orbsFeatures,
  emailifyFeatures,
  budgetScreens,
} from "@/data";

export interface ProductHighlight {
  title: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: { label: string; image: string }[];
  link?: string;
  comingSoon?: boolean;
  category: string;
  keywords: string[];
  highlights: ProductHighlight[];
  faqs: ProductFaq[];
}

export const products: Product[] = [
  {
    slug: "orbs",
    name: "ORBS",
    tagline: "Manage Your Business. All in One Place.",
    description:
      "Add, organize, and monitor every aspect of your business while maintaining complete control over roles, inventory, accounting, and sales.",
    longDescription:
      "ORBS is an all-in-one business management platform that brings your team, inventory, accounting, purchases, and sales into a single dashboard. Instead of juggling spreadsheets and disconnected tools, ORBS gives you one source of truth for your entire operation — with role-based access control so every team member sees exactly what they need.",
    features: orbsFeatures,
    link: "https://orbs.comengineering.services",
    category: "BusinessApplication",
    keywords: [
      "business management software",
      "inventory management",
      "accounting software",
      "sales tracking",
      "team management platform",
      "ORBS",
    ],
    highlights: [
      {
        title: "Unified Dashboard",
        description:
          "See sales, purchases, inventory levels, and team activity at a glance — no more switching between disconnected tools.",
      },
      {
        title: "Role-Based Team Management",
        description:
          "Invite your team and control exactly what each role can view and edit, from accounting to inventory.",
      },
      {
        title: "Accounting Built In",
        description:
          "Track income, expenses, purchases, and sales in one ledger that stays in sync with the rest of your business.",
      },
      {
        title: "Inventory Control",
        description:
          "Monitor stock levels in real time, record purchases, and never oversell or lose track of products again.",
      },
    ],
    faqs: [
      {
        question: "What is ORBS?",
        answer:
          "ORBS is an all-in-one business management platform by Coms Advance Engineering that combines team management, inventory, accounting, purchases, and sales in a single dashboard.",
      },
      {
        question: "Who is ORBS for?",
        answer:
          "ORBS is built for small and medium businesses that want to replace spreadsheets and disconnected tools with one system for managing their entire operation.",
      },
      {
        question: "Can I control what my team members see in ORBS?",
        answer:
          "Yes. ORBS includes role-based access control, so you can define roles and decide exactly which modules — accounting, inventory, sales, purchases — each team member can access.",
      },
    ],
  },
  {
    slug: "emailify",
    name: "Emailify",
    tagline: "Professional Email Signatures That Work Everywhere",
    description:
      "Choose from 50+ stunning templates, customize your brand identity, and deploy pixel-perfect signatures across every email platform instantly.",
    longDescription:
      "Emailify is an email signature management platform for teams and businesses. Design a signature once from 50+ professional templates, apply your brand identity, and roll it out across your whole team — with click tracking, automatic syncing, and pixel-perfect rendering on every major email client.",
    features: emailifyFeatures,
    link: "https://emailify.comengineering.services",
    category: "BusinessApplication",
    keywords: [
      "email signature generator",
      "email signature management",
      "team email signatures",
      "professional email signature",
      "signature templates",
      "Emailify",
    ],
    highlights: [
      {
        title: "50+ Professional Templates",
        description:
          "Start from beautifully designed templates and customize colors, logos, and layout to match your brand.",
      },
      {
        title: "Click Tracking",
        description:
          "Know which links in your signatures get clicked, and turn every email your team sends into a measurable channel.",
      },
      {
        title: "Team-Wide Deployment",
        description:
          "Manage signatures for your whole organization centrally and keep everyone consistent and on-brand.",
      },
      {
        title: "Works on Every Platform",
        description:
          "Signatures render pixel-perfect across Gmail, Outlook, Apple Mail, and every major email client, with automatic syncing.",
      },
    ],
    faqs: [
      {
        question: "What is Emailify?",
        answer:
          "Emailify is an email signature management platform by Coms Advance Engineering. It lets individuals and teams create professional email signatures from 50+ templates and deploy them across all major email platforms.",
      },
      {
        question: "Does Emailify work with Gmail and Outlook?",
        answer:
          "Yes. Emailify signatures are built to render correctly across every major email client, including Gmail, Outlook, and Apple Mail, and sync automatically.",
      },
      {
        question: "Can I manage email signatures for my whole team?",
        answer:
          "Yes. Emailify includes team management, so you can centrally control branding and deploy consistent signatures across your entire organization.",
      },
    ],
  },
  {
    slug: "budgetguard",
    name: "BudgetGuard",
    tagline: "Privacy-First Budget Management",
    description:
      "An all-local, no ads, privacy-first financial budget maker. Track income, expenses, and get smart insights — all without your data ever leaving your device.",
    longDescription:
      "BudgetGuard is a privacy-first personal budgeting app. All of your financial data stays on your device — no cloud accounts, no ads, no tracking. Record income and expenses, monitor transactions live, and get clear reports and insights into your spending, with your privacy guaranteed by design.",
    features: budgetScreens,
    comingSoon: true,
    category: "FinanceApplication",
    keywords: [
      "budget app",
      "privacy-first budgeting",
      "expense tracker",
      "personal finance app",
      "offline budget app",
      "BudgetGuard",
    ],
    highlights: [
      {
        title: "100% Local & Private",
        description:
          "Your financial data never leaves your device. No accounts, no cloud sync, no ads, no tracking — privacy by design.",
      },
      {
        title: "Income & Expense Tracking",
        description:
          "Record every transaction quickly and keep a clear picture of where your money goes each month.",
      },
      {
        title: "Smart Reports & Insights",
        description:
          "Visual reports break down your spending by category and over time, so you can spot trends and adjust.",
      },
      {
        title: "Live Tracking",
        description:
          "Watch your budget update in real time as you log transactions, and stay ahead of overspending.",
      },
    ],
    faqs: [
      {
        question: "What is BudgetGuard?",
        answer:
          "BudgetGuard is a privacy-first budget management app by Coms Advance Engineering. It tracks income, expenses, and spending insights entirely on your device — no ads and no data collection.",
      },
      {
        question: "Does BudgetGuard send my financial data to the cloud?",
        answer:
          "No. BudgetGuard is all-local: your financial data is stored only on your device and never leaves it.",
      },
      {
        question: "When will BudgetGuard be available?",
        answer:
          "BudgetGuard is currently in development and coming soon. Follow Coms Advance Engineering for launch updates.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
