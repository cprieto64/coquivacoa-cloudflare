"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery/drilling-platform.png",
    alt: "Plataforma de perforación",
    title: "Operaciones en plataforma",
    description: "Manejo de equipos y materiales en plataformas de perforación",
  },
  {
    src: "/images/gallery/worker-cables.png",
    alt: "Técnico trabajando con cables",
    title: "Mantenimiento eléctrico",
    description: "Instalación y reparación de sistemas eléctricos",
  },
  {
    src: "/images/gallery/loading-materials.png",
    alt: "Carga de materiales",
    title: "Logística en campo",
    description: "Transporte y manejo de equipos y materiales",
  },
  {
    src: "/images/gallery/technician-confined.png",
    alt: "Técnico en espacio confinado",
    title: "Trabajo en espacios confinados",
    description: "Mantenimiento especializado en áreas de difícil acceso",
  },
  {
    src: "/images/gallery/filter-maintenance.png",
    alt: "Mantenimiento de filtros",
    title: "Reemplazo de filtros",
    description: "Mantenimiento preventivo de sistemas de filtración",
  },
  {
    src: "/images/gallery/engine-maintenance.png",
    alt: "Mantenimiento de motor",
    title: "Servicio a motores",
    description: "Reparación y mantenimiento de motores industriales",
  },
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showInfo, setShowInfo] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * 280 // Ancho aproximado de cada elemento + margen
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1
    setActiveIndex(newIndex)
    scrollToImage(newIndex)
  }

  const handleNext = () => {
    const newIndex = activeIndex === galleryImages.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(newIndex)
    scrollToImage(newIndex)
  }

  return (
    <section id="galeria" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro trabajo en imágenes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce nuestras operaciones en campo y el trabajo especializado que realizamos para mantener tus equipos
            funcionando de manera óptima.
          </p>
        </div>

        {/* Galería de estilo carrusel horizontal */}
        <div className="relative max-w-6xl mx-auto">
          {/* Controles de navegación */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
            aria-label="Anterior imagen"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          {/* Carrusel horizontal con scroll */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-2 -mx-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[250px] md:w-[280px] mx-3 snap-center ${
                  activeIndex === index ? "scale-105 shadow-xl" : "scale-100 shadow-md"
                } transition-all duration-300 rounded-lg overflow-hidden relative group`}
              >
                <div className="relative h-[200px] md:h-[220px] w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 250px, 280px"
                    onClick={() => setActiveIndex(index)}
                  />

                  {/* Botón de información */}
                  <button
                    className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => setShowInfo(showInfo === index ? null : index)}
                    aria-label="Ver información"
                  >
                    <Info className="h-4 w-4 text-gray-700" />
                  </button>

                  {/* Información de la imagen */}
                  {showInfo === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-end"
                    >
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                      <p className="text-gray-200 text-sm">{image.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Barra de selección */}
                <div className={`h-1 w-full ${activeIndex === index ? "bg-orange-500" : "bg-gray-200"}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de posición */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                scrollToImage(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? "bg-orange-500 w-4" : "bg-gray-300"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Descripción de la imagen activa */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800">{galleryImages[activeIndex].title}</h3>
          <p className="text-gray-600 mt-2">{galleryImages[activeIndex].description}</p>
        </div>
      </div>
    </section>
  )
}
