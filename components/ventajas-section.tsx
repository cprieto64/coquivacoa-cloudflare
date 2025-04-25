import { Clock3, Search, Phone } from "lucide-react"
import Link from "next/link"

export function VentajasSection() {
  return (
    <section id="ventajas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos diferenciamos por brindar un servicio técnico confiable, directo y especializado, con la experiencia y
            la responsabilidad que esperan nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-2 bg-orange-500"></div>
            <div className="p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Más de 15 años de experiencia</h3>
              <p className="text-gray-600">
                Amplia trayectoria en el área industrial con conocimiento especializado en generadores de las
                principales marcas del mercado.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/servicios"
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span className="font-medium">Conoce más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-2 bg-orange-500"></div>
            <div className="p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Equipos de diagnóstico profesional</h3>
              <p className="text-gray-600">
                Contamos con tecnología avanzada para diagnósticos precisos y eficientes que permiten solucionar
                problemas de forma rápida.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/servicios"
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span className="font-medium">Conoce más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-2 bg-orange-500"></div>
            <div className="p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Respuesta rápida</h3>
              <p className="text-gray-600">
                Atendemos tus necesidades con prontitud para minimizar tiempos de inactividad y mantener tus operaciones
                funcionando sin interrupciones.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/servicios"
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span className="font-medium">Conoce más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
