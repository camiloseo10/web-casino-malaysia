"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const sportProviders = [
  {
    id: 1,
    name: "MMCSPORTS",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mmc-sports-mmc996-betting-afXFCTLU1j8QcJJ407eKHjxFJspAT5.webp",
    description: "Premium sports betting with competitive odds",
  },
  {
    id: 2,
    name: "ONE WORKS",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/one-works-mmc996-sports-DKT3bWoVS9Tg1fSMBbRxHoKbaeraY0.webp",
    description: "Extensive coverage of global sports events",
  },
  {
    id: 3,
    name: "SBOBET",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sbobet-mmc996-sports-DPyqlTDTpdyaSpXocU9yoRSYb6O1yf.webp",
    description: "Live betting with real-time statistics",
  },
  {
    id: 4,
    name: "PINNACLE",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pinnacle-mmc996-betting-E8y1T9xeL4lK88si4vRN2ehfvnbPrs.webp",
    description: "Best odds and highest limits for professional bettors",
  },
]

export default function SportProviders() {
  const [hoveredProvider, setHoveredProvider] = useState<number | null>(null)

  return (
    <section className="py-16 bg-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-casino-gold">Sportsbook</span> Providers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our selection of premium sports betting platforms with competitive odds and extensive coverage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sportProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              className="relative overflow-hidden rounded-lg border border-casino-gold/30 bg-gradient-to-br from-casino-dark to-casino-darker hover:border-casino-gold transition-all duration-300"
              onMouseEnter={() => setHoveredProvider(provider.id)}
              onMouseLeave={() => setHoveredProvider(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-casino-gold mb-4">{provider.name}</h3>
                <p className="text-gray-300 mb-6">{provider.description}</p>

                <div className="relative h-48 rounded-lg overflow-hidden mb-6 bg-gray-800">
                  <img
                    src={provider.imageUrl || "/placeholder.svg"}
                    alt={provider.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <button className="w-full mt-4 bg-casino-gold text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
                  Play Now
                </button>
              </div>

              {hoveredProvider === provider.id && (
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-[50%] rotate-45 bg-casino-gold text-black font-bold py-1 px-10 text-xs">
                    POPULAR
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
