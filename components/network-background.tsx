"use client"

import { useEffect, useRef } from "react"

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const isMouseInCanvasRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const points: { x: number; y: number; vx: number; vy: number; baseSize: number }[] = []
    const POINT_COUNT = 45
    const CONNECTION_DISTANCE = 150
    const BASE_POINT_SIZE = 2.5 // Aumentado a 2.5 píxeles
    const MOUSE_RADIUS = 20 // Reducido a 20 píxeles
    const MAX_SPEED = 0.4

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * MAX_SPEED,
        vy: (Math.random() - 0.5) * MAX_SPEED,
        baseSize: BASE_POINT_SIZE,
      })
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function handleMouseEnter() {
      isMouseInCanvasRef.current = true
    }

    function handleMouseLeave() {
      isMouseInCanvasRef.current = false
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        let isNearMouse = false
        if (isMouseInCanvasRef.current) {
          const dx = mouseRef.current.x - point.x
          const dy = mouseRef.current.y - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < MOUSE_RADIUS) {
            isNearMouse = true
            const force = (1 - distance / MOUSE_RADIUS) * 0.3
            point.x -= dx * force
            point.y -= dy * force
          }
        }

        ctx.beginPath()
        ctx.arc(point.x, point.y, isNearMouse ? BASE_POINT_SIZE * 1.5 : BASE_POINT_SIZE, 0, Math.PI * 2)
        ctx.fillStyle = isNearMouse ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)" // Aumentada la opacidad
        ctx.fill()
      })

      points.forEach((point, i) => {
        points.slice(i + 1).forEach((otherPoint) => {
          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)

            let opacity = 0.15 * (1 - distance / CONNECTION_DISTANCE) // Aumentada la opacidad base

            if (isMouseInCanvasRef.current) {
              const mouseDx = mouseRef.current.x - (point.x + otherPoint.x) / 2
              const mouseDy = mouseRef.current.y - (point.y + otherPoint.y) / 2
              const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

              if (mouseDistance < MOUSE_RADIUS) {
                opacity = Math.min(opacity * 3, 1) // Aumenta la opacidad cerca del ratón, máximo 1
              }
            }

            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.8 // Aumentado ligeramente el grosor de las líneas
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1]" style={{ background: "transparent" }} />
}

