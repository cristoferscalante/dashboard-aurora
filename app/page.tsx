"use client"

import { FileText } from "lucide-react"
import Link from "next/link"
import { NetworkBackground } from "./components/network-background"
import Image from "next/image"

function ColombiaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12C6 8 9 4.5 12 3c3 1.5 6 5 6 9s-3 7.5-6 9c-3-1.5-6-5-6-9Z" />
      <path d="M12 3c0 9 3 15 3 15" />
      <path d="M12 3c0 9-3 15-3 15" />
      <path d="M6 12h12" />
    </svg>
  )
}

export default function MainMenu() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blurred%20Figures%20in%20Motion-PtIDOhugcKWkmBowbV2dgqSpnNtDWp.jpeg)",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      <NetworkBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
        {/* Logo */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v1-eFEV1MLSC04i764BHDjxqRbhJ2lE7O.png"
              alt="Atlas Logo"
              width={128}
              height={128}
              className="filter hue-rotate-180 brightness-[2.5] contrast-[1.2] saturate-0"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-4">
            HISTÓRICO DE DESAPARICIONES EN COLOMBIA
            <span className="block text-2xl mt-2 text-gray-400">1948 - 2023</span>
          </h1>
          <div className="w-24 h-0.5 bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-16 mt-12">
          <Link href="/dashboard" className="group">
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center 
                            border border-white/10 transition-all duration-300
                            group-hover:bg-black/40 group-hover:scale-110 group-hover:border-white/20
                            shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <ColombiaIcon className="w-12 h-12" />
              </div>
              <span className="text-sm font-light tracking-wider">DASHBOARD</span>
            </div>
          </Link>

          <Link href="/documentation" className="group">
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center 
                            border border-white/10 transition-all duration-300
                            group-hover:bg-black/40 group-hover:scale-110 group-hover:border-white/20
                            shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <FileText className="w-12 h-12" />
              </div>
              <span className="text-sm font-light tracking-wider">DOCUMENTACIÓN</span>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-gray-500">
          <p>Proyecto Atlas - 2025</p>
        </div>
      </div>
    </div>
  )
}

