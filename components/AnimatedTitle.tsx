"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTitleProps {
  mainTitle: string
  subTitle: string
  manualMode?: boolean
  blurAmount?: number
  borderColor?: string
  glowColor?: string
  animationDuration?: number
  pauseBetweenAnimations?: number
}

export default function AnimatedTitle({
  mainTitle,
  subTitle,
  manualMode = true,
  blurAmount = 3,
  borderColor = "#22d3ee",
  glowColor = "rgba(34, 211, 238, 0.6)",
  animationDuration = 0.3,
  pauseBetweenAnimations = 1,
}: AnimatedTitleProps) {
  const words = mainTitle.split(" ")
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 })

  // Efecto para modo automático
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev === null ? 0 : (prev + 1) % words.length))
        },
        (animationDuration + pauseBetweenAnimations) * 1000,
      )

      return () => clearInterval(interval)
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length])

  // Actualizar posición del marco
  useEffect(() => {
    if (currentIndex === null || !containerRef.current || !wordRefs.current[currentIndex]) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const wordRect = wordRefs.current[currentIndex]!.getBoundingClientRect()

    setFocusRect({
      x: wordRect.left - containerRect.left - 8, // Ajuste para el padding
      y: wordRect.top - containerRect.top - 8,
      width: wordRect.width + 16,
      height: wordRect.height + 16,
    })
  }, [currentIndex])

  return (
    <div className="relative" ref={containerRef}>
      <h1 className="text-4xl font-light mb-4">
        <div className="relative inline-flex flex-wrap gap-4 justify-center">
          {words.map((word, index) => (
            <span
              key={index}
              ref={(el) => (wordRefs.current[index] = el)}
              className="relative cursor-pointer transition-all duration-300"
              style={{
                filter: currentIndex !== null && currentIndex !== index ? `blur(${blurAmount}px)` : "none",
              }}
              onMouseEnter={() => manualMode && setCurrentIndex(index)}
              onMouseLeave={() => manualMode && setCurrentIndex(null)}
            >
              {word}
            </span>
          ))}

          <motion.div
            className="absolute pointer-events-none"
            initial={false}
            animate={{
              x: focusRect.x,
              y: focusRect.y,
              width: focusRect.width,
              height: focusRect.height,
              opacity: currentIndex !== null ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            {/* Esquinas del marco */}
            <span
              className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 rounded-sm"
              style={{ borderColor: borderColor, filter: `drop-shadow(0px 0px 4px ${glowColor})` }}
            />
            <span
              className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 rounded-sm"
              style={{ borderColor: borderColor, filter: `drop-shadow(0px 0px 4px ${glowColor})` }}
            />
            <span
              className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 rounded-sm"
              style={{ borderColor: borderColor, filter: `drop-shadow(0px 0px 4px ${glowColor})` }}
            />
            <span
              className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 rounded-sm"
              style={{ borderColor: borderColor, filter: `drop-shadow(0px 0px 4px ${glowColor})` }}
            />
          </motion.div>
        </div>
        <span className="block text-2xl mt-2 text-gray-400">{subTitle}</span>
      </h1>
    </div>
  )
}

