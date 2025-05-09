"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function VideoSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="py-16 bg-casino-darker">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience <span className="text-casino-gold">MMC996</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Watch our video to see what makes us the best online casino</p>
        </div>

        <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-casino-gold/30">
          {!videoPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[url('/placeholder.svg?height=500&width=900')] bg-cover bg-center opacity-70"></div>
              <button
                className="absolute z-10 bg-casino-gold/90 hover:bg-casino-gold text-black rounded-full p-4 transition-all duration-300 transform hover:scale-110 animate-pulse-gold"
                onClick={() => setVideoPlaying(true)}
              >
                <Play className="h-10 w-10 fill-current" />
              </button>
            </div>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="MMC996 Casino Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">© 2023 MMC996. All games are fair and regulated. Play responsibly.</p>
        </div>
      </div>
    </section>
  )
}
