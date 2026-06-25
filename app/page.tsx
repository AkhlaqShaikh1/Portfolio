import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems, orbsFeatures, emailifyFeatures, budgetScreens } from "@/data";

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

export default function Home() {
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
        />

        <ProductShowcase
          id="emailify"
          name="Emailify"
          tagline="Professional Email Signatures That Work Everywhere"
          description="Choose from 50+ stunning templates, customize your brand identity, and deploy pixel-perfect signatures across every email platform instantly."
          features={emailifyFeatures}
          link="https://emailify.comengineering.services"
        />

        <ComingSoon
          id="budgetguard"
          name="BudgetGuard"
          tagline="Privacy-First Budget Management"
          description="An all-local, no ads, privacy-first financial budget maker. Track income, expenses, and get smart insights — all without your data ever leaving your device."
          screens={budgetScreens}
        />

        <RecentProjects />
        {/* <Experience /> */}
        <Process />
        <Footer />
      </div>
    </main>
  );
}
