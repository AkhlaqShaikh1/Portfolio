"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Screen {
  label: string
  image: string
}

interface ComingSoonProps {
  id?: string
  name: string
  tagline: string
  description: string
  screens: Screen[]
}

export default function ComingSoon({
  id,
  name,
  tagline,
  description,
  screens,
}: ComingSoonProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [screens.length])

  return (
    <section
      id={id}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#000319" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl border border-white/[0.1] overflow-hidden"
          style={{
            minHeight: "500px",
          }}
        >
          {/* Background cycling images */}
          {screens.map((screen, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: active === i ? 1 : 0,
                zIndex: 0,
              }}
            >
              <Image
                src={screen.image}
                alt={`${name} - ${screen.label}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Frosted glass overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 3, 25, 0.75) 0%, rgba(17, 25, 40, 0.65) 40%, rgba(0, 3, 25, 0.8) 100%)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          />

          {/* Subtle glow accents */}
          <div
            className="absolute -top-32 -left-32 w-72 h-72 rounded-full pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(203, 172, 249, 0.1) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(203, 172, 249, 0.08) 0%, transparent 70%)",
            }}
          />

          {/* Content on top of glass */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 py-20 md:py-28"
            style={{ minHeight: "500px" }}
          >
            <span
              className="inline-block px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold tracking-widest uppercase mb-6 border"
              style={{
                color: "#CBACF9",
                borderColor: "rgba(203, 172, 249, 0.4)",
                background:
                  "linear-gradient(135deg, rgba(203, 172, 249, 0.2) 0%, rgba(203, 172, 249, 0.06) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 0 30px rgba(203, 172, 249, 0.2)",
                letterSpacing: "0.15em",
              }}
            >
              Coming Soon
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {name}
            </h2>

            <p
              className="text-lg md:text-2xl font-medium mb-4"
              style={{ color: "#CBACF9" }}
            >
              {tagline}
            </p>

            <p
              className="text-sm md:text-base max-w-xl mx-auto"
              style={{ color: "rgba(190, 193, 221, 0.9)" }}
            >
              {description}
            </p>

            {/* Dot indicators showing images cycling behind */}
            <div className="flex justify-center gap-2 mt-10">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? "24px" : "8px",
                    height: "8px",
                    backgroundColor:
                      active === i ? "#CBACF9" : "rgba(203, 172, 249, 0.25)",
                  }}
                  aria-label={`View ${screens[i].label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
