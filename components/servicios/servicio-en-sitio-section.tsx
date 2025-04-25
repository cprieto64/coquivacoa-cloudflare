import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck, Settings, Clock } from "lucide-react"

export function ServicioEnSitioSection() {
  return (
    <section id="servicio-en-sitio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-100 rounded-full opacity-50"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Image
                      src="/images/gallery/loading-materials.png"
                      alt="Servicio en sitio"
                      width={600}
                      height={300}
                      className="rounded-xl object-cover w-full h-48"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/gallery/drilling-platform.png"
                      alt="Unidad móvil"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover w-full h-32"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/gallery/technician-confined.png"
                      alt="Taller"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover w-full h-32"
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h4 className="font-bold text-orange-600 mb-1">Servicio en sitio</h4>
                    <p className="text-sm text-gray-600">Atención directa donde se encuentra tu equipo</p>
                  </div>
                  <div className="bg-zinc-50 p-4 rounded-xl">
                    <h4 className="font-bold text-zinc-700 mb-1">Servicio en taller</h4>
                    <p className="text-sm text-gray-600">Reparaciones mayores en nuestras instalaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Atención flexible
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicio donde lo necesites</h2>
            <p className="text-gray-600 mb-8">
              Nos adaptamos a tu situación. Podemos trabajar directamente en tu planta o recibir los equipos en nuestro
              taller especializado para intervenciones más profundas, en cualquier parte del territorio nacional.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unidades móviles equipadas</h3>
                  <p className="text-gray-600">
                    Contamos con unidades completamente equipadas para realizar diagnósticos y reparaciones en tu
                    ubicación, sin importar en qué parte del país te encuentres.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Settings className="h-6 w-6 text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Taller especializado</h3>
                  <p className="text-gray-600">
                    Instalaciones con equipamiento avanzado para reparaciones complejas y reconstrucciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Respuesta rápida</h3>
                  <p className="text-gray-600">
                    Atendemos emergencias con prontitud para minimizar tiempos de inactividad en tus operaciones.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Solicitar servicio</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
