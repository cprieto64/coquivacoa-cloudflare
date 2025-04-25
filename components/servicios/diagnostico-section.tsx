import { CheckCircle, Search, Settings, Wrench } from "lucide-react"

export function DiagnosticoSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Diagnóstico técnico preciso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnología avanzada para diagnósticos exactos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilizamos equipos de medición y análisis para detectar con exactitud el origen de cualquier fallo,
            permitiéndonos tomar decisiones rápidas y efectivas en cualquier parte del territorio nacional.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-orange-50 transform -skew-y-6 z-0"></div>
          <div className="relative z-10 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Análisis electrónico</h3>
                <p className="text-gray-600 mb-6">
                  Utilizamos equipos computarizados para analizar el funcionamiento de los sistemas de control y
                  detectar anomalías.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Lectura de códigos de error</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Análisis de parámetros operativos</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Verificación de sistemas electrónicos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 transform rotate-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pruebas de rendimiento</h3>
                <p className="text-gray-600 mb-6">
                  Evaluamos el funcionamiento del generador bajo diferentes condiciones de carga para identificar
                  problemas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Pruebas de carga variable</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Medición de potencia real</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Análisis de eficiencia energética</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Inspección mecánica</h3>
                <p className="text-gray-600 mb-6">
                  Revisamos componentes mecánicos para detectar desgaste, fugas o daños que puedan afectar el
                  rendimiento.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Análisis de vibraciones</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Inspección termográfica</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    <span>Verificación de alineación</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
