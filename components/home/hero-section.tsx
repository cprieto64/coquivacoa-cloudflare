import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-zinc-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      <Image
        src="/hero-bg.jpg"
        alt="Técnico trabajando en generador industrial"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Mantenimiento y reparación de generadores industriales a nivel nacional
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Atención especializada en equipos Caterpillar, John Deere y Cummins. Servicio en sitio o en taller en todo
            el territorio venezolano.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-md">
            Contáctanos por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
