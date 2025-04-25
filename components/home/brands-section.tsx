import Image from "next/image"

export function BrandsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Marcas con las que trabajamos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Especializados en las principales marcas de generadores industriales en todo el país.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image src="/brands/caterpillar.png" alt="Caterpillar" width={120} height={60} />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image src="/brands/john-deere.png" alt="John Deere" width={120} height={60} />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image src="/brands/cummins.png" alt="Cummins" width={120} height={60} />
          </div>
        </div>
      </div>
    </section>
  )
}
