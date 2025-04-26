"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioError, setAudioError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // URL externa del archivo de audio proporcionada por el usuario
  const audioUrl = "https://litmarket.co/slidecf/wp-content/uploads/2025/04/sin-rencor.mp3"

  useEffect(() => {
    // Crear el elemento de audio programáticamente
    const audio = new Audio()

    // Configurar los manejadores de eventos antes de asignar la fuente
    audio.addEventListener("canplaythrough", () => {
      console.log("Audio can play through")
      setAudioLoaded(true)

      // Intentar reproducir automáticamente cuando el audio esté listo
      tryAutoplay(audio)
    })

    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e)
      setAudioError("Error al cargar el audio")
    })

    audio.addEventListener("play", () => setIsPlaying(true))
    audio.addEventListener("pause", () => setIsPlaying(false))

    // Configurar el audio
    audio.src = audioUrl
    audio.preload = "auto"
    audio.loop = true

    // Asignar la referencia
    audioRef.current = audio

    // Función para intentar el autoplay
    const tryAutoplay = (audioElement: HTMLAudioElement) => {
      const playPromise = audioElement.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay successful")
            setIsPlaying(true)
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error)
            // No mostrar error, es normal que el autoplay sea bloqueado
          })
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""

        // Eliminar los event listeners
        audio.removeEventListener("canplaythrough", () => {})
        audio.removeEventListener("error", () => {})
        audio.removeEventListener("play", () => {})
        audio.removeEventListener("pause", () => {})
      }
    }
  }, [audioUrl])

  // Efecto para manejar la interacción del usuario y habilitar el autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && audioLoaded && !isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              // Eliminar los event listeners después de reproducir exitosamente
              cleanup()
            })
            .catch((error) => {
              console.log("Play after interaction prevented:", error)
            })
        }
      }
    }

    const cleanup = () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
    }

    // Solo agregar los listeners si el audio está cargado pero no reproduciendo
    if (audioLoaded && !isPlaying) {
      document.addEventListener("click", handleUserInteraction)
      document.addEventListener("touchstart", handleUserInteraction)
      document.addEventListener("keydown", handleUserInteraction)

      return cleanup
    }

    return () => {}
  }, [audioLoaded, isPlaying])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              console.error("Error playing audio:", error)
              setAudioError(`Error al reproducir: ${error.message}`)
            })
        }
      }
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  // Si hay un error, mostrar un mensaje más discreto
  if (audioError) {
    console.error("Audio player error:", audioError)
    return null // No mostrar el reproductor si hay un error
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-orange-200">
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      <button
        onClick={toggleMute}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors"
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <div className="text-xs text-gray-600 px-2 hidden sm:block">Coquivacoa - Sin Rencor</div>
    </div>
  )
}
