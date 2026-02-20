import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems } from "@/data";

// Lazy load heavy components for better performance
const Grid = dynamic(() => import("./components/Grid"), {
  loading: () => <div className="h-screen" />,
});
const TechStackComponent = dynamic(() => import("./components/TechStack"));
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
        <RecentProjects />
        {/* <Experience /> */}
        <Process />
        <Footer />
      </div>
    </main>
  );
}
