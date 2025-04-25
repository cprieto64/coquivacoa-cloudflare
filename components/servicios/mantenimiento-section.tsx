import Image from "next/image"
import { CheckCircle, Clock } from "lucide-react"

export function MantenimientoSection() {
  return (
    <section id="mantenimiento" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Mantenimiento preventivo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prevenir es mejor que reparar</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Diseñamos planes de mantenimiento periódicos para garantizar que tus generadores funcionen de forma estable,
            prolongando su vida útil y evitando paradas inesperadas en cualquier parte del país.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="bg-orange-600/10 absolute inset-0 rounded-3xl transform rotate-3"></div>
            <div className="bg-orange-600/10 absolute inset-0 rounded-3xl transform -rotate-3"></div>
            <div className="relative">
              <Image
                src="/images/gallery/filter-maintenance.png"
                alt="Mantenimiento preventivo"
                width={600}
                height={400}
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-500">Mantenimiento cada</p>
                    <p className="font-bold">250 horas de uso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">¿Qué incluye nuestro mantenimiento?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Revisión de sistemas</h4>
                    <p className="text-gray-600">Inspección completa de componentes mecánicos y eléctricos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Cambio de consumibles</h4>
                    <p className="text-gray-600">
                      Reemplazo de filtros, aceites y refrigerantes según especificaciones
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Verificación de control</h4>
                    <p className="text-gray-600">Prueba de sistemas de automatización y monitoreo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Programación</h4>
                    <p className="text-gray-600">Calendario de mantenimientos según horas de operación</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-700 italic">
                  "Un mantenimiento preventivo adecuado puede extender la vida útil de un generador hasta en un 40% y
                  reducir costos de reparación."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
