import Header from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsappButton } from "@/components/layout/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { QueHacemosSection } from "@/components/home/que-hacemos-section"
import { VentajasSection } from "@/components/ventajas-section"
import { CoberturaSection } from "@/components/home/cobertura-section"
import { GallerySection } from "@/components/gallery-section"
import { BrandsSection } from "@/components/home/brands-section"
import { ContactSection } from "@/components/home/contact-section"
import Script from "next/script"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/" />

      <main>
        <HeroSection />
        <QueHacemosSection />
        <VentajasSection />
        <CoberturaSection />
        <GallerySection />
        <BrandsSection />
        <ContactSection />
      </main>

      <WhatsappButton />
      <Footer />
      <Script id="schema-organization" type="application/ld+json">
        {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Coquivacoa C.A.",
      "image": "https://coquivacoaservicios.com/coquivacoa-header.png",
      "url": "https://coquivacoaservicios.com",
      "telephone": "+58 04146564333",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4 Bocas",
        "addressLocality": "Bachaquero",
        "addressRegion": "Zulia",
        "postalCode": "4019",
        "addressCountry": "VE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.201,
        "longitude": -71.331
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/coquivacoa",
        "https://www.instagram.com/coquivacoa"
      ],
      "description": "Empresa especializada en mantenimiento y reparación de generadores industriales en Venezuela. Servicio técnico para equipos Caterpillar, John Deere y Cummins."
    }
  `}
      </Script>
    </div>
  )
}
