import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CoberturaSection() {
  return (
    <section id="cobertura" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-orange-600 text-white rounded-lg p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Cobertura Nacional</h2>
              <p className="text-lg mb-4">
                Atendemos en todo el territorio venezolano. Nuestro equipo está disponible para brindar soporte en
                cualquier estado del país, ya sea en campo o desde nuestras instalaciones centrales.
              </p>
              <p className="text-lg mb-8">
                Desde Zulia hasta Bolívar, desde Táchira hasta Nueva Esparta, llevamos nuestro servicio especializado a
                donde lo necesites.
              </p>
              <a href="https://wa.me/584146564333" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 mb-8 md:mb-0">Solicitar servicio</Button>
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
              <Image src="/map-venezuela.png" alt="Mapa de Venezuela" width={250} height={250} className="opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
