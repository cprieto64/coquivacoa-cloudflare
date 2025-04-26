"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Intentar reproducir cuando el usuario interactúa con la página
    const handleUserInteraction = () => {
      if (audioRef.current) {
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
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              console.error("Error playing audio:", error)
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

  return (
    <>
      {/* Elemento de audio real en el DOM */}
      <audio
        ref={audioRef}
        src="/sin-rencor.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
        style={{ display: "none" }}
      />

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
    </>
  )
}
