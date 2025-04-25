import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coquivacoa C.A. | Mantenimiento y Reparación de Generadores Industriales en Venezuela",
  description:
    "Empresa especializada en mantenimiento preventivo, reparación y diagnóstico de generadores industriales Caterpillar, John Deere y Cummins en todo Venezuela. Servicio técnico en sitio y taller.",
  keywords:
    "generadores industriales, mantenimiento de generadores, reparación de generadores, Caterpillar, John Deere, Cummins, Venezuela, Zulia",
  authors: [{ name: "Coquivacoa C.A." }],
  creator: "Coquivacoa C.A.",
  publisher: "Coquivacoa C.A.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://coquivacoaservicios.com/",
    title: "Coquivacoa C.A. | Mantenimiento y Reparación de Generadores Industriales",
    description:
      "Servicio especializado en mantenimiento y reparación de generadores industriales en Venezuela. Atención en equipos Caterpillar, John Deere y Cummins.",
    siteName: "Coquivacoa C.A.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coquivacoa C.A. - Mantenimiento de Generadores",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="canonical" href="https://coquivacoaservicios.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
