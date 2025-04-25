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
    </div>
  )
}
