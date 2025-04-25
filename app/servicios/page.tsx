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
    </div>
  )
}
