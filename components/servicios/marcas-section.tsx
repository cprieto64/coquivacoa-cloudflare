import Image from "next/image"
import { CheckCircle, Award } from "lucide-react"

export function MarcasSection() {
  return (
    <section id="marcas" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center bg-zinc-800 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Especialización
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertos en las mejores marcas</h2>
            <p className="text-gray-300 mb-8">
              Contamos con amplia experiencia trabajando con las marcas más reconocidas del mercado. Conocemos sus
              sistemas, componentes y recomendaciones técnicas de fábrica.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                <Image
                  src="/brands/caterpillar.png"
                  alt="Caterpillar"
                  width={120}
                  height={60}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                <Image
                  src="/brands/john-deere.png"
                  alt="John Deere"
                  width={120}
                  height={60}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                <Image
                  src="/brands/cummins.png"
                  alt="Cummins"
                  width={120}
                  height={60}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl">
              <div className="flex items-start">
                <Award className="h-10 w-10 text-white/90 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Técnicos certificados</h3>
                  <p className="text-white/80">
                    Nuestro personal cuenta con certificaciones y capacitación continua para garantizar un servicio de
                    calidad en todas las marcas con las que trabajamos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center bg-zinc-800 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Cobertura
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicio en todo el territorio nacional</h2>
            <p className="text-gray-300 mb-8">
              Ofrecemos servicio en todo el país, desplazándonos hasta donde se requiera. Nuestro equipo está preparado
              para atender emergencias y mantenimientos programados en cualquier ubicación de Venezuela.
            </p>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-600/5 rounded-xl"></div>
              <div className="relative p-6">
                <div className="flex justify-center mb-8">
                  <Image
                    src="/map-venezuela.png"
                    alt="Mapa de Venezuela"
                    width={300}
                    height={300}
                    className="opacity-90"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-2">Región Capital</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Caracas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Miranda</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-2">Región Occidental</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Zulia</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Falcón</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-2">Región Central</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Carabobo</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Aragua</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-2">Región Oriental</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Anzoátegui</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Bolívar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
