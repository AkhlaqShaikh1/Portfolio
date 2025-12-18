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
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }
    
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }, 4000) // Change slide every 4 seconds

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
      className="relative min-h-screen overflow-hidden py-12 sm:py-16 md:py-20 px-2 sm:px-4" 
      style={{ backgroundColor: "#000319" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            A small selection of{" "}
          </span>
          <span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" 
            style={{ color: "#CBACF9" }}
          >
            recent projects
          </span>
        </h1>

        <div className="relative w-full max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px]">
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
                    w-[92vw] sm:w-[80vw] md:w-[650px] lg:w-[750px] max-w-[750px]"
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
                    {/* Image container - wider on mobile, big on desktop */}
                    <div className="relative flex items-center justify-center 
                      w-[85vw] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px]
                      h-[30vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] 
                      overflow-hidden mb-6 sm:mb-8 md:mb-10"
                    >
                      <div
                        className="relative overflow-hidden w-full h-full rounded-2xl sm:rounded-3xl"
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

                    <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl text-white line-clamp-1 mb-2 sm:mb-3">
                      {project.title}
                    </h1>

                    <p
                      style={{ color: "#BEC1DD" }}
                      className="text-sm sm:text-base md:text-lg font-light line-clamp-3 mb-5 sm:mb-6 md:mb-7"
                    >
                      {project.des}
                    </p>

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center">
                        {project.iconLists.map((icon, idx) => (
                          <div
                            key={idx}
                            style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                            className="border border-white/[0.2] rounded-full bg-black 
                              w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12
                              flex justify-center items-center"
                          >
                            <img 
                              src={icon || "/placeholder.svg"} 
                              alt={`icon-${idx}`} 
                              className="p-1.5 sm:p-2" 
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p 
                          className="flex text-sm sm:text-sm md:text-base whitespace-nowrap" 
                          style={{ color: "#CBACF9" }}
                        >
                          Check Live Site
                        </p>
                        <FaLocationArrow 
                          className="ms-2 sm:ms-3" 
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

        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
          <button
            onClick={goToPrev}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 
              rounded-full flex items-center justify-center 
              transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: "rgba(19, 22, 45, 0.9)",
              border: "1px solid rgba(203, 172, 249, 0.3)",
            }}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex 
                    ? (isMobile ? "8px" : "10px") 
                    : (isMobile ? "6px" : "8px"),
                  height: index === currentIndex 
                    ? (isMobile ? "8px" : "10px") 
                    : (isMobile ? "6px" : "8px"),
                  backgroundColor: index === currentIndex ? "#CBACF9" : "#4B5563",
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 
              rounded-full flex items-center justify-center 
              transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: "rgba(19, 22, 45, 0.9)",
              border: "1px solid rgba(203, 172, 249, 0.3)",
            }}
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}