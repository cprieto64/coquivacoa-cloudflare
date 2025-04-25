import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ReparacionSection() {
  return (
    <section id="reparacion" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-zinc-800 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Reparaciones especializadas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Soluciones rápidas y efectivas para cualquier falla</h2>
            <p className="text-gray-300 mb-8">
              Cuando un equipo presenta problemas, actuamos con rapidez y conocimiento. Diagnosticamos y reparamos
              averías mecánicas, eléctricas o electrónicas con precisión y eficiencia en cualquier parte de Venezuela.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-800/50 p-5 rounded-xl">
                <h4 className="font-bold text-orange-400 mb-2">Motores</h4>
                <p className="text-gray-300 text-sm">Reparación de componentes mecánicos y sistemas de combustión</p>
              </div>
              <div className="bg-zinc-800/50 p-5 rounded-xl">
                <h4 className="font-bold text-orange-400 mb-2">Alternadores</h4>
                <p className="text-gray-300 text-sm">Solución de problemas en sistemas de generación eléctrica</p>
              </div>
              <div className="bg-zinc-800/50 p-5 rounded-xl">
                <h4 className="font-bold text-orange-400 mb-2">Control</h4>
                <p className="text-gray-300 text-sm">Reparación de sistemas electrónicos y paneles de control</p>
              </div>
              <div className="bg-zinc-800/50 p-5 rounded-xl">
                <h4 className="font-bold text-orange-400 mb-2">Sistemas auxiliares</h4>
                <p className="text-gray-300 text-sm">Mantenimiento de sistemas de refrigeración y combustible</p>
              </div>
            </div>

            <a
              href="https://wa.me/584241234567"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Solicitar servicio de reparación
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/images/gallery/engine-maintenance.png"
                  alt="Técnico realizando mantenimiento de motor de generador industrial"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="aspect-square relative mt-8">
                <Image
                  src="/images/gallery/technician-confined.png"
                  alt="Especialista trabajando en espacio confinado para reparación de generador"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="aspect-square relative -mt-8">
                <Image
                  src="/images/gallery/worker-cables.png"
                  alt="Técnico reparando cableado eléctrico de panel de control"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/images/gallery/drilling-platform.png"
                  alt="Plataforma de trabajo para mantenimiento de sistemas de generación"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-600 p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-sm opacity-80">Tiempo promedio</p>
                <p className="text-2xl font-bold">24-48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
