"use client"

import { useState, useEffect } from "react"
import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const getCardPosition = (index: number) => {
    const total = projects.length
    let diff = index - currentIndex

    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    return diff
  }

  const getTransform = (position: number, isCenter: boolean) => {
    if (isCenter) return "translateX(0) scale(1)"
    
    const offset = isMobile ? 70 : 85
    const scale = isMobile ? 0.8 : 0.85
    
    return position < 0
      ? `translateX(-${offset}%) scale(${scale})`
      : `translateX(${offset}%) scale(${scale})`
  }

  return (
    <section 
      className="relative min-h-min overflow-hidden 
        py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-2 sm:px-4 md:px-6 lg:px-8" 
      style={{ backgroundColor: "#000319" }}
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <h1 className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 px-4">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            A small selection of{" "}
          </span>
          <span 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" 
            style={{ color: "#CBACF9" }}
          >
            recent projects
          </span>
        </h1>

        {/* Reduced height container */}
        <div className="relative w-full max-w-[1400px] mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12
          h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[580px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => {
              const position = getCardPosition(index)
              const isCenter = position === 0
              const isAdjacent = Math.abs(position) === 1
              const isVisible = isMobile ? isCenter : Math.abs(position) <= 1

              return (
                <div
                  key={project.id}
                  className="absolute transition-all duration-500 ease-out 
                    w-[85vw] sm:w-[70vw] md:w-[480px] lg:w-[520px] xl:w-[580px]
                    max-w-[85vw] sm:max-w-[70vw] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px]"
                  style={{
                    transform: getTransform(position, isCenter),
                    opacity: isCenter ? 1 : (isMobile ? 0 : isAdjacent ? 0.4 : 0),
                    zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                    pointerEvents: isVisible ? "auto" : "none",
                    visibility: isVisible ? "visible" : "hidden",
                  }}
                >
                  <PinContainer 
                    title={project.title} 
                    href={project.link}
                    containerClassName={!isLargeScreen ? "pointer-events-none" : ""}
                  >
                    {/* Smaller image container */}
                    <div className="relative flex items-center justify-center 
                      w-[78vw] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]
                      h-[25vh] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px]
                      min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[260px] xl:min-h-[300px]
                      max-h-[220px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px] xl:max-h-[360px]
                      overflow-hidden mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                    >
                      <div
                        className="relative overflow-hidden w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl"
                        style={{ backgroundColor: "#13162d" }}
                      >
                        <img 
                          src="/bg.png" 
                          alt="background" 
                          className="w-full h-full object-cover" 
                        />
                        <img
                          src={project.img || "/placeholder.svg"}
                          alt={project.title}
                          className="z-30 absolute bottom-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Smaller text */}
                    <h1 className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-white line-clamp-1 
                      mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3">
                      {project.title}
                    </h1>

                    <p
                      style={{ color: "#BEC1DD" }}
                      className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-light line-clamp-2 
                        mb-4 sm:mb-4 md:mb-5 lg:mb-6"
                    >
                      {project.des}
                    </p>

                    {/* Smaller icons and link */}
                    <div className="flex items-center justify-between gap-2 lg:gap-3">
                      <div className="flex items-center">
                        {project.iconLists.map((icon, idx) => (
                          <div
                            key={idx}
                            style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                            className="border border-white/[0.2] rounded-full bg-black 
                              w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-10 xl:h-10
                              flex justify-center items-center"
                          >
                            <img 
                              src={icon || "/placeholder.svg"} 
                              alt={`icon-${idx}`} 
                              className="p-1 sm:p-1.5 lg:p-2" 
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p 
                          className="flex text-xs sm:text-sm md:text-sm lg:text-base xl:text-base whitespace-nowrap" 
                          style={{ color: "#CBACF9" }}
                        >
                          Check Live Site
                        </p>
                        <FaLocationArrow 
                          className="ms-1.5 sm:ms-2 lg:ms-3 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" 
                          color="#CBACF9" 
                        />
                      </div>
                    </div>
                  </PinContainer>
                </div>
              )
            })}
          </div>
        </div>

        {/* Smaller navigation */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[1400px] mx-auto pt-4 sm:pt-0">
          <button
            onClick={goToPrev}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12
              rounded-full flex items-center justify-center 
              transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: "rgba(19, 22, 45, 0.9)",
              border: "1px solid rgba(203, 172, 249, 0.3)",
            }}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex 
                    ? (isMobile ? "7px" : "8px") 
                    : (isMobile ? "5px" : "6px"),
                  height: index === currentIndex 
                    ? (isMobile ? "7px" : "8px") 
                    : (isMobile ? "5px" : "6px"),
                  backgroundColor: index === currentIndex ? "#CBACF9" : "#4B5563",
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12
              rounded-full flex items-center justify-center 
              transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: "rgba(19, 22, 45, 0.9)",
              border: "1px solid rgba(203, 172, 249, 0.3)",
            }}
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}