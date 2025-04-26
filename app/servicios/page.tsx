import type { Metadata } from "next"
import Header from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsappButton } from "@/components/layout/whatsapp-button"
import { HeroSection } from "@/components/servicios/hero-section"
import { MantenimientoSection } from "@/components/servicios/mantenimiento-section"
import { ReparacionSection } from "@/components/servicios/reparacion-section"
import { DiagnosticoSection } from "@/components/servicios/diagnostico-section"
import { ServicioEnSitioSection } from "@/components/servicios/servicio-en-sitio-section"
import { MarcasSection } from "@/components/servicios/marcas-section"
import { CTASection } from "@/components/servicios/cta-section"
import Script from "next/script"
import { AudioPlayer } from "@/components/audio-player"

export const metadata: Metadata = {
  title: "Servicios de Mantenimiento y Reparación de Generadores | Coquivacoa C.A.",
  description:
    "Ofrecemos servicios especializados de mantenimiento preventivo, reparación, diagnóstico técnico y atención en sitio para generadores industriales en toda Venezuela.",
  keywords:
    "mantenimiento preventivo, reparación de generadores, diagnóstico técnico, servicio en sitio, Caterpillar, John Deere, Cummins",
  openGraph: {
    title: "Servicios de Mantenimiento y Reparación de Generadores | Coquivacoa C.A.",
    description:
      "Servicios especializados para generadores industriales en Venezuela: mantenimiento preventivo, reparación, diagnóstico y atención en sitio.",
    url: "https://coquivacoaservicios.com/servicios",
    images: [
      {
        url: "/images/hero-servicios.png",
        width: 1200,
        height: 630,
        alt: "Servicios de mantenimiento de generadores",
      },
    ],
  },
}

export default function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/servicios" />

      <main>
        <HeroSection />
        <MantenimientoSection />
        <ReparacionSection />
        <DiagnosticoSection />
        <ServicioEnSitioSection />
        <MarcasSection />
        <CTASection />
      </main>

      <WhatsappButton />
      <Footer />
      <AudioPlayer />
      <Script id="schema-services" type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Mantenimiento Preventivo de Generadores",
            "url": "https://coquivacoaservicios.com/servicios#mantenimiento",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Coquivacoa C.A."
            },
            "description": "Planes de mantenimiento periódicos para garantizar el funcionamiento estable de generadores industriales."
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Reparación de Generadores",
            "url": "https://coquivacoaservicios.com/servicios#reparacion",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Coquivacoa C.A."
            },
            "description": "Soluciones rápidas y efectivas para cualquier falla en generadores industriales."
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "Diagnóstico Técnico",
            "url": "https://coquivacoaservicios.com/servicios#diagnostico",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Coquivacoa C.A."
            },
            "description": "Diagnósticos precisos con tecnología avanzada para detectar el origen de cualquier fallo."
          },
          {
            "@type": "Service",
            "position": 4,
            "name": "Servicio en Sitio",
            "url": "https://coquivacoaservicios.com/servicios#servicio-en-sitio",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Coquivacoa C.A."
            },
            "description": "Atención directa donde se encuentra tu equipo en cualquier parte de Venezuela."
          }
        ]
      }
    `}
      </Script>
    </div>
  )
}
