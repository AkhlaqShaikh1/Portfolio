"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
     <a
      href="#contact"
      className={`fixed top-4 right-2 sm:top-6 sm:right-4 md:right-6 z-50 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-white text-[12px] sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
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