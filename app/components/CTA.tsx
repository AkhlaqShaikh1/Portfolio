"use client";

import { ArrowUpRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <a
      href="#contact"
      className="absolute top-4 left-1/2 -translate-x-1/2 
        sm:left-auto sm:translate-x-0 sm:right-6 sm:top-6 
        md:top-8 md:right-8 z-50
        px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
        rounded-full
        text-white text-[12px] sm:text-base font-medium
        transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
        flex items-center gap-2"
      style={{
        background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)",
        border: "1px solid rgba(203, 172, 249, 0.3)",
      }}
    >
      Turn Your Idea Into Reality
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </a>
  );
};

export default ContactCTA;