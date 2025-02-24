"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"

declare global {
  interface Window {
    tableau: any
  }
}

export function TableauMap() {
  const vizRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadTableau = () => {
      const divElement = vizRef.current
      if (!divElement) return

      // Limpiar contenido anterior
      while (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild)
      }

      const vizElement = document.createElement("object")
      vizElement.classList.add("tableauViz")
      vizElement.style.width = "100%"
      vizElement.style.height = "1000px" // Ajustamos la altura para mantener la proporción con el nuevo ancho
      vizElement.style.display = "none"

      const params = [
        { name: "host_url", value: "https%3A%2F%2Fpublic.tableau.com%2F" },
        { name: "embed_code_version", value: "3" },
        { name: "site_root", value: "" },
        { name: "name", value: "HistoricodedesaparicionesenColombia/Dashboard1" },
        { name: "tabs", value: "no" },
        { name: "toolbar", value: "yes" },
        { name: "animate_transition", value: "yes" },
        { name: "display_static_image", value: "no" },
        { name: "display_spinner", value: "yes" },
        { name: "display_overlay", value: "yes" },
        { name: "display_count", value: "yes" },
        { name: "language", value: "es-ES" },
        { name: "filter", value: "publish=yes" },
      ]

      params.forEach((param) => {
        const paramElement = document.createElement("param")
        paramElement.name = param.name
        paramElement.value = param.value
        vizElement.appendChild(paramElement)
      })

      divElement.appendChild(vizElement)

      const scriptElement = document.createElement("script")
      scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
      scriptElement.onload = () => {
        setIsLoading(false)
      }
      vizElement.parentNode?.insertBefore(scriptElement, vizElement)
    }

    loadTableau()
  }, [])

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center min-h-[1000px]">
          <Loader2 className="w-8 h-8 animate-spin text-white/50" />
        </div>
      )}
      <div ref={vizRef} className="w-full">
        <noscript>
          <a href="#">
            <img
              alt="Dashboard 1"
              src="https://public.tableau.com/static/images/WY/WY52MF8CR/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
      </div>
    </div>
  )
}

