"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

declare global {
  interface Window {
    tableau: any
  }
}

export function TableauViz() {
  const vizRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const vizURL = "https://public.tableau.com/views/HistoricodedesaparicionesenColombia/Dashboard1"

    const initViz = () => {
      if (vizRef.current && window.tableau) {
        new window.tableau.Viz(vizRef.current, vizURL, {
          hideTabs: true,
          hideToolbar: false,
          width: "100%",
          height: "800px",
        })
      }
    }

    // Load Tableau JavaScript API if not already loaded
    if (!window.tableau) {
      const script = document.createElement("script")
      script.src = "https://public.tableau.com/javascripts/api/tableau-2.min.js"
      script.onload = initViz
      document.head.appendChild(script)
    } else {
      initViz()
    }
  }, [])

  return (
    <Card className="bg-black/30 backdrop-blur-md border-white/10 w-full h-[800px] overflow-hidden">
      <div ref={vizRef} className="w-full h-full" />
    </Card>
  )
}

