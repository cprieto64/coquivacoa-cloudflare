"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const carouselImages = [
  "/images/technician1.jpg",
  "/images/technician2.jpg",
  "/images/technicians-working.jpg",
  "/images/generator2.jpg",
  "/images/control-panel.jpg",
  "/images/onsite-service.jpg",
]

export function QueHacemosSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
    }, 4000)
  }

  useEffect(() => {
    startCarousel()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const servicios = [
    "Mantenimiento preventivo de generadores",
    "Reparación especializada de equipos",
    "Diagnóstico técnico con equipos avanzados",
    "Atención en sitio o en nuestro taller",
    "Servicio especializado para marcas Caterpillar, John Deere y Cummins",
    "Respuesta rápida para emergencias en todo el país",
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué hacemos?</h2>
            <p className="text-gray-700 mb-8">
              Ofrecemos mantenimiento y reparación profesional para generadores eléctricos y equipos industriales en
              todo el territorio venezolano. Nuestro equipo de técnicos especializados trabaja tanto en nuestro taller
              como en el lugar donde se encuentre el equipo, brindando soluciones rápidas y efectivas para mantener la
              operatividad de tus sistemas de generación eléctrica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {servicios.map((servicio, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{servicio}</p>
                </div>
              ))}
            </div>

            <a href="https://wa.me/584146564333" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">
                Solicita una cotización
              </Button>
            </a>
          </div>

          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Sutil gradiente en la parte inferior para mejorar legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>

                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Servicio de mantenimiento ${index + 1}`}
                  fill
                  className="object-cover z-0"
                />
              </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-orange-500" : "bg-white/50"}`}
                  onClick={() => {
                    setCurrentImage(index)
                    if (intervalRef.current) {
                      clearInterval(intervalRef.current)
                    }
                    startCarousel()
                  }}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
