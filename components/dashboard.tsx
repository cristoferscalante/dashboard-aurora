"use client"

import { Home } from "lucide-react"
import Link from "next/link"
import Aurora from "./aurora"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TableauViz } from "./tableau-viz"

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MBAXzr9nOPiAU3dMLYzg9da5d08sRz.png)",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Aurora Effect */}
      <Aurora colorStops={["#FFD700", "#4169E1", "#FF4500"]} amplitude={0.5} />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm">
              <Home className="h-5 w-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </nav>

        {/* Dashboard Content */}
        <main className="container mx-auto p-6 space-y-6">
          <Card className="bg-black/30 backdrop-blur-md border-white/10 text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Histórico de Desapariciones en Colombia</h1>
            <p className="text-white/80">Visualización de datos históricos sobre desapariciones en Colombia</p>
          </Card>

          {/* Tableau Visualization */}
          <TableauViz />
        </main>
      </div>
    </div>
  )
}

