"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [audioError, setAudioError] = useState<string | null>(null)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Crear el elemento de audio programáticamente
    const audio = new Audio()
    audio.src = "/sin-rencor.mp3"
    audio.preload = "auto"
    audio.loop = true

    // Manejar eventos
    audio.addEventListener("canplaythrough", () => {
      console.log("Audio can play through")
      setAudioLoaded(true)
    })

    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e)
      setAudioError("Error al cargar el audio")
    })

    audio.addEventListener("play", () => setIsPlaying(true))
    audio.addEventListener("pause", () => setIsPlaying(false))

    audioRef.current = audio

    // Verificar si el archivo existe
    fetch("/sin-rencor.mp3")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Archivo no encontrado: ${response.status}`)
        }
        console.log("Archivo de audio encontrado")
      })
      .catch((error) => {
        console.error("Error verificando archivo de audio:", error)
        setAudioError(`No se pudo cargar el archivo: ${error.message}`)
      })

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current.remove()
      }
    }
  }, [])

  useEffect(() => {
    // Intentar reproducir cuando el usuario interactúa con la página
    const handleUserInteraction = () => {
      if (audioRef.current && audioLoaded) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              // Eliminar los event listeners después de reproducir exitosamente
              cleanup()
            })
            .catch((error) => {
              console.log("Autoplay prevented:", error)
            })
        }
      }
    }

    const cleanup = () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)
    document.addEventListener("keydown", handleUserInteraction)

    return cleanup
  }, [audioLoaded])

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
