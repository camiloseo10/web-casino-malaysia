"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function WelcomeVideoSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="py-16 bg-casino-darker rounded-lg mx-4 my-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Best Online Casino in <span className="text-casino-gold">Malaysia</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            MMC996 offers the ultimate online casino experience with a wide range of games, secure transactions, and
            exceptional customer service. Join thousands of satisfied players and discover why we're Malaysia's premier
            gaming destination.
          </p>
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

        <div className="mt-8 text-center">
          <button className="border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-black transition-colors duration-300 py-2 px-6 rounded-full">
            Join Now & Get Welcome Bonus
          </button>
        </div>
      </div>
    </section>
  )
}
