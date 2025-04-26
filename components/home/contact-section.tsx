import Image from "next/image"
import { Phone, Clock, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 bg-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estamos listos para atender tus necesidades de mantenimiento y reparación de generadores en cualquier parte
            de Venezuela.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-700 p-8 rounded-lg text-center hover:bg-zinc-600 transition-colors">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Llámanos</h3>
            <p className="text-gray-300 mb-4">Atención directa y personalizada</p>
            <a href="tel:+584146564333" className="inline-flex items-center text-orange-400 hover:text-orange-300">
              +58 04146564333
            </a>
          </div>

          <div className="bg-zinc-700 p-8 rounded-lg text-center hover:bg-zinc-600 transition-colors">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visítanos</h3>
            <p className="text-gray-300 mb-4">Nuestro taller especializado</p>
            <p className="text-orange-400">
              4 Bocas, <br />
              Bachaquero, Zulia
            </p>
          </div>

          <div className="bg-zinc-700 p-8 rounded-lg text-center hover:bg-zinc-600 transition-colors">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Horario</h3>
            <p className="text-gray-300 mb-4">Estamos para servirte</p>
            <p className="text-orange-400">
              Lunes a viernes: 8:00 a.m. - 5:00 p.m.
              <br />
              Sábado: 8:00 a.m. - 12:00 p.m.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-orange-700 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-[70%]">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas atención inmediata?</h3>
              <p className="text-gray-200 mb-6">
                Contáctanos por WhatsApp y recibe respuesta en minutos. Estamos listos para atender emergencias y
                consultas técnicas en cualquier parte del país.
              </p>
              <a
                href="https://wa.me/584146564333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
            <div className="w-full md:w-[30%]">
              <Image
                src="/images/yellow-generator.jpg"
                alt="Servicio técnico"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
