"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Home,
  Users,
  MapPin,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentPath?: string
}

export default function Header({ currentPath = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const menuTriggerRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      setActiveSubmenu(null)
    }
  }

  const openSubmenu = (menu: string) => {
    setActiveSubmenu(menu)
  }

  const goBack = () => {
    setActiveSubmenu(null)
  }

  const handleMegaMenuToggle = (menu: string) => {
    if (openMegaMenu === menu) {
      setOpenMegaMenu(null)
    } else {
      setOpenMegaMenu(menu)
    }
  }

  // Cerrar menú al cambiar de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
        document.body.style.overflow = "auto"
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Cerrar mega menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        menuTriggerRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !menuTriggerRef.current.contains(event.target as Node)
      ) {
        setOpenMegaMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-gradient-to-r from-white to-gray-200 sticky top-0 z-50 shadow-md">
      {/* Barra superior */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4 text-sm border-b border-gray-300 hidden md:flex">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3 text-orange-600" />
            <span className="text-gray-700">Lunes a viernes: 8:00 a.m. - 5:00 p.m.</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-3 w-3 text-orange-600" />
            <span className="text-gray-700">+58 424 123 4567</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-3 w-3 text-orange-600" />
            <span className="text-gray-700">contacto@coquivacoa.com.ve</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <Image src="/coquivacoa-header.png" alt="Coquivacoa C.A." width={180} height={60} className="mr-8" />
        </div>

        {/* Menú de escritorio mejorado */}
        <div className="hidden md:flex space-x-1 text-gray-700 font-medium">
          <Link
            href="/"
            className={
              currentPath === "/"
                ? "text-orange-600 px-4 py-2 rounded-md bg-orange-50 flex items-center"
                : "hover:text-orange-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all flex items-center"
            }
          >
            <Home className="h-4 w-4 mr-2" />
            <span>Inicio</span>
          </Link>

          {/* Servicios con mega menú */}
          <div className="relative" ref={menuTriggerRef}>
            <button
              onClick={() => handleMegaMenuToggle("servicios")}
              className={`flex items-center ${
                currentPath === "/servicios"
                  ? "text-orange-600 px-4 py-2 rounded-md bg-orange-50"
                  : "hover:text-orange-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <span>Servicios</span>
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${openMegaMenu === "servicios" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mega Menú de Servicios */}
            {openMegaMenu === "servicios" && (
              <div
                ref={megaMenuRef}
                className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 transition-all duration-200 ease-in-out"
              >
                <div className="grid grid-cols-3 gap-0">
                  {/* Columna principal */}
                  <div className="col-span-1 bg-orange-50 p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-gray-800 mb-1">Nuestros Servicios</h3>
                      <p className="text-sm text-gray-600">Soluciones completas para generadores</p>
                    </div>

                    <Link
                      href="/servicios"
                      className="flex items-center justify-between p-3 rounded-lg bg-white text-orange-700 mb-4 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-orange-600"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Todos los servicios</span>
                          <p className="text-xs text-orange-600">Ver página completa</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-orange-400" />
                    </Link>

                    <div className="mt-6">
                      <Link
                        href="/servicios#reparacion"
                        className="flex items-center justify-between p-3 rounded-lg bg-zinc-100 text-zinc-800 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-purple-600"
                            >
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Servicios de diagnóstico</span>
                            <p className="text-xs text-gray-600">Análisis técnico avanzado</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </Link>
                    </div>
                  </div>

                  {/* Columna de servicios principales */}
                  <div className="col-span-1 p-6 border-r border-gray-100">
                    <h3 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                      Servicios Principales
                    </h3>

                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/servicios#mantenimiento"
                          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-600"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Mantenimiento preventivo</span>
                            <p className="text-xs text-gray-500">Prevenir fallas y extender vida útil</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios#reparacion"
                          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-red-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-red-600"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="m15 9-6 6" />
                              <path d="m9 9 6 6" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Reparación especializada</span>
                            <p className="text-xs text-gray-500">Solución de fallas y averías</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios#servicio-en-sitio"
                          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                            <Truck className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <span className="font-medium">Servicios en sitio</span>
                            <p className="text-xs text-gray-500">Atención directa donde se encuentra tu equipo</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Columna de marcas */}
                  <div className="col-span-1 p-6">
                    <h3 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                      Marcas Especializadas
                    </h3>

                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/servicios#marcas"
                          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-yellow-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3 group-hover:bg-yellow-200 transition-colors">
                            <span className="text-yellow-600 font-bold text-xs">CAT</span>
                          </div>
                          <div>
                            <span className="font-medium">Caterpillar</span>
                            <p className="text-xs text-gray-500">Servicio especializado certificado</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios#marcas"
                          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                            <span className="text-green-600 font-bold text-xs">JD</span>
                          </div>
                          <div>
                            <span className="font-medium">John Deere</span>
                            <p className="text-xs text-gray-500">Repuestos y servicio técnico</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios#marcas"
                          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-red-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                            <span className="text-red-600 font-bold text-xs">CUM</span>
                          </div>
                          <div>
                            <span className="font-medium">Cummins</span>
                            <p className="text-xs text-gray-500">Mantenimiento y reparación</p>
                          </div>
                        </Link>
                      </li>
                    </ul>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/servicios"
                        className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center"
                      >
                        Ver todos los servicios
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#ventajas"
            className="hover:text-orange-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all flex items-center"
          >
            <Users className="h-4 w-4 mr-2" />
            <span>Nosotros</span>
          </Link>

          <Link
            href="/#cobertura"
            className="hover:text-orange-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all flex items-center"
          >
            <MapPin className="h-4 w-4 mr-2" />
            <span>Cobertura</span>
          </Link>

          <Link
            href="/#contacto"
            className="hover:text-orange-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all flex items-center"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            <span>Contacto</span>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white md:block">
            <span className="hidden md:inline">Solicita una cotización</span>
            <span className="md:hidden">Contacto</span>
          </Button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 focus:outline-none"
            aria-label="Menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil completamente rediseñado */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-hidden">
          {/* Menú principal */}
          <div
            className={`absolute inset-0 transition-transform duration-300 ${activeSubmenu ? "-translate-x-full" : "translate-x-0"}`}
          >
            {/* Cabecera del menú */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex items-center">
                <Image src="/coquivacoa-header.png" alt="Coquivacoa C.A." width={160} height={50} />
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-gray-100 text-gray-700"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenido del menú principal */}
            <div className="overflow-y-auto h-[calc(100%-70px)] bg-gradient-to-b from-white to-gray-50">
              <div className="p-4">
                <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-100">
                  <h3 className="font-bold text-orange-800 mb-1">Servicio Nacional</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Mantenimiento y reparación de generadores en todo el país
                  </p>
                  <Link
                    href="/#contacto"
                    className="text-orange-600 text-sm font-medium flex items-center"
                    onClick={toggleMenu}
                  >
                    Contáctanos
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <nav>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/"
                        className={`flex items-center p-3 rounded-lg ${
                          currentPath === "/" ? "bg-orange-50 text-orange-600" : "text-gray-700"
                        }`}
                        onClick={toggleMenu}
                      >
                        <Home className="h-5 w-5 mr-3" />
                        <span className="font-medium">Inicio</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => openSubmenu("servicios")}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-3"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                          <span className="font-medium">Servicios</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </button>
                    </li>
                    <li>
                      <Link
                        href="/#ventajas"
                        className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                        onClick={toggleMenu}
                      >
                        <Users className="h-5 w-5 mr-3" />
                        <span className="font-medium">Nosotros</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#cobertura"
                        className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                        onClick={toggleMenu}
                      >
                        <MapPin className="h-5 w-5 mr-3" />
                        <span className="font-medium">Cobertura</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#contacto"
                        className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                        onClick={toggleMenu}
                      >
                        <MessageSquare className="h-5 w-5 mr-3" />
                        <span className="font-medium">Contacto</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Botón de WhatsApp en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
                <a
                  href="https://wa.me/584241234567"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                  onClick={toggleMenu}
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
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Submenú de servicios */}
          <div
            className={`absolute inset-0 bg-white transition-transform duration-300 ${activeSubmenu === "servicios" ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center p-4 border-b border-gray-100">
              <button onClick={goBack} className="p-2 mr-2 rounded-full bg-gray-100 text-gray-700" aria-label="Volver">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <h2 className="font-bold text-gray-800">NUESTROS SERVICIOS</h2>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-70px)]">
              <div className="mb-4">
                <Link
                  href="/servicios"
                  className="flex items-center justify-between p-3 rounded-lg bg-orange-50 text-orange-700 mb-2"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-600"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Todos los servicios</span>
                      <p className="text-xs text-orange-600">Ver página completa</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-orange-400" />
                </Link>

                <Link
                  href="/servicios#reparacion"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-100 text-zinc-800 hover:shadow-md transition-all mt-4"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Servicios de diagnóstico</span>
                      <p className="text-xs text-gray-600">Análisis técnico avanzado</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
