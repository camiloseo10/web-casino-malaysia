"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const liveCasinoProviders = [
  {
    id: 1,
    name: "Dream Gaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/game-play-RAngk2XnlLi6Ffaq3jUVJLe9GGW0N5.webp",
    borderColor: "border-red-500",
  },
  {
    id: 2,
    name: "Evolution Gaming",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evolution-gaming-gdjfelfmyIZrB3hAcrbeJAkvASK45j.webp",
    borderColor: "border-blue-500",
  },
  {
    id: 3,
    name: "Play Tech",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playtech-lscmxTqgdWv9vjNiH1hGpWsu8DB36b.webp",
    borderColor: "border-purple-500",
  },
  {
    id: 4,
    name: "SA Gaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sa-gaming-VshzWR4vf5rRYqakQo8yEOt6OFYWgU.webp",
    borderColor: "border-pink-500",
  },
  {
    id: 5,
    name: "Game Play",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/game-play-RAngk2XnlLi6Ffaq3jUVJLe9GGW0N5.webp",
    borderColor: "border-green-500",
  },
  {
    id: 6,
    name: "Pragmatic Play",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pragmatic-play-3D7p7PV1gfg9kkIzqhXlym0TYF0ei4.webp",
    borderColor: "border-yellow-500",
  },
  {
    id: 7,
    name: "Asia Gaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asia-gaming-1CnLZGQp9ziQThxOZqUIGJN5DgUOLT.webp",
    borderColor: "border-teal-500",
  },
  {
    id: 8,
    name: "XPG Gaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xpg-gaming-N1Og6TtdRfo9oR0lO0sBK929QiifnR.webp",
    borderColor: "border-orange-500",
  },
  {
    id: 9,
    name: "Ho Gaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baccarat-vip-l4oHAQ1mfXbvbbQLASIXwniv72445a.webp",
    borderColor: "border-indigo-500",
    isVIP: true,
    vipLabel: "Baccarat VIP",
  },
  {
    id: 10,
    name: "All Bet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/all-bet-9eDHBo5i7kwDmdBigXjL1pZ4bYLEqA.webp",
    borderColor: "border-cyan-500",
  },
  {
    id: 11,
    name: "Yeebet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yeebet-DS00yZ0xiB6gWSrYdcizhkb49Pf99H.webp",
    borderColor: "border-amber-500",
  },
]

export default function LiveCasinoProviders() {
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
            <span className="text-casino-gold">Live Casino</span> Providers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the thrill of real-time gaming with our professional live dealers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveCasinoProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              className={`relative overflow-hidden rounded-lg border ${provider.borderColor} bg-casino-card hover:shadow-lg hover:shadow-${provider.borderColor}/20 transition-all duration-300`}
              onMouseEnter={() => setHoveredProvider(provider.id)}
              onMouseLeave={() => setHoveredProvider(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative h-48">
                <Image
                  src={provider.image || "/placeholder.svg?height=200&width=300"}
                  alt={provider.name}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                {provider.isVIP && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">VIP</div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex justify-end">
                    <span className="text-xs text-white/80">{provider.isVIP ? "VIP Room" : "Live Casino"}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">{provider.isVIP ? provider.vipLabel : provider.name}</h3>
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-1 px-4 rounded-md text-sm transition-all duration-300">
                  Play Now
                </button>
              </div>

              {hoveredProvider === provider.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="btn-gold transform hover:scale-105 transition-transform duration-300">
                    Play Now
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
