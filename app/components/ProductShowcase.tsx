"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface Feature {
  label: string
  image: string
}

interface ProductShowcaseProps {
  id?: string
  name: string
  tagline: string
  description: string
  features: Feature[]
  link?: string
}

export default function ProductShowcase({
  id,
  name,
  tagline,
  description,
  features,
  link,
}: ProductShowcaseProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [features.length, paused])

  const handleManualSelect = useCallback(
    (i: number) => {
      setActive(i)
      setPaused(true)
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
      pauseTimeout.current = setTimeout(() => setPaused(false), 8000)
    },
    []
  )

  useEffect(() => {
    return () => {
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
    }
  }, [])

  return (
    <section
      id={id}
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "#000319" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {name}
          </h2>
          <p
            className="text-lg md:text-xl font-medium"
            style={{ color: "#CBACF9" }}
          >
            {tagline}
          </p>
          <p
            className="text-sm md:text-base mt-3 max-w-2xl mx-auto"
            style={{ color: "#BEC1DD" }}
          >
            {description}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border border-[#CBACF9] text-white hover:scale-105"
              style={{
                backgroundColor: "rgba(203, 172, 249, 0.15)",
                boxShadow: "0 0 20px rgba(203, 172, 249, 0.2)",
              }}
            >
              Visit Live Site
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Feature tabs — active one follows auto-scroll */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => handleManualSelect(i)}
              className="relative px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 border"
              style={{
                borderColor:
                  active === i
                    ? "rgba(203, 172, 249, 0.6)"
                    : "rgba(255, 255, 255, 0.1)",
                backgroundColor:
                  active === i
                    ? "rgba(203, 172, 249, 0.15)"
                    : "rgba(17, 25, 40, 0.75)",
                color: active === i ? "#fff" : "rgba(255, 255, 255, 0.5)",
                boxShadow:
                  active === i
                    ? "0 0 20px rgba(203, 172, 249, 0.3)"
                    : "none",
                transform: active === i ? "scale(1.05)" : "scale(1)",
              }}
            >
              {feature.label}
            </button>
          ))}
        </div>

        {/* Image display */}
        <div
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full aspect-[3/4] sm:aspect-square">
            {features.map((feature, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scale(1)" : "scale(0.97)",
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <Image
                  src={feature.image}
                  alt={`${name} - ${feature.label}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualSelect(i)}
              className="rounded-full transition-all duration-500"
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                backgroundColor: active === i ? "#CBACF9" : "#4B5563",
              }}
              aria-label={`View ${features[i].label}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
