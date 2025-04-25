import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-zinc-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-800/80 to-zinc-900/80 z-10"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/hero-servicios.png"
          alt="Técnico trabajando en generador industrial"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <Link href="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver al inicio
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Servicios <span className="text-orange-500">especializados</span> para generadores industriales
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Soluciones técnicas completas basadas en experiencia, precisión y atención personalizada para cada necesidad
            operativa en todo el territorio nacional.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#mantenimiento"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
            >
              Ver servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://wa.me/584241234567"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
