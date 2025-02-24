"use client"

import { Home, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TableauMap } from "@/components/tableau-map"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silhouetted%20Figures%20in%20Fog-eEVdUv9TgiAMSzgfPyxoVwBIyVjFw0.jpeg)",
            filter: "blur(3px) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-20 border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blurred%20Figures%20in%20Motion-PtIDOhugcKWkmBowbV2dgqSpnNtDWp.jpeg)",
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white/90 hover:text-white hover:bg-white/10">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <div className="h-6 w-px bg-white/10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v1-eFEV1MLSC04i764BHDjxqRbhJ2lE7O.png"
              alt="Atlas Logo"
              width={32}
              height={32}
              className="filter hue-rotate-180 brightness-[2.5] contrast-[1.2] saturate-0"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm font-light opacity-75">Dashboard</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-16 min-h-screen z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <Map className="w-6 h-6 text-white/80" />
            </div>
            <h1 className="text-2xl font-light">
              Histórico de Desapariciones en Colombia
              <span className="block text-sm text-gray-400 mt-1">1948 - 2023</span>
            </h1>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
        </header>

        {/* Tableau Visualization */}
        <section className="pb-8 flex justify-center">
          <div className="w-[1800px] bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden shadow-2xl">
            <TableauMap />
          </div>
        </section>
      </main>
    </div>
  )
}

