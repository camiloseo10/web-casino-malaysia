"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const lotteryGames = [
  {
    id: 1,
    name: "Magnum 4D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magnum-4d-uh1hGmLgYf9Gfvw8fv5YulUwFihRAH.webp",
    description: "Malaysia's most popular 4D lottery game with multiple prize categories.",
  },
  {
    id: 2,
    name: "Grand Dragon",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grand-dragon-4d-lottery-kauPhDtwQT5TNSFzXKp814E7Wfpsi5.webp",
    description: "Exciting lottery with dragon-themed prizes and special jackpots.",
  },
  {
    id: 3,
    name: "3Win",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3win-4d-KHRvUjBld81LcZ6Up6X5QAW8LGRKJc.webp",
    description: "Fast-paced lottery game with three daily draws and instant results.",
  },
]

export default function LotteryGames() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)

  return (
    <section className="py-12 bg-gradient-to-b from-casino-darker to-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lotteryGames.map((game, index) => (
            <motion.div
              key={game.id}
              className="bg-casino-card rounded-lg overflow-hidden border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="relative h-48">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{game.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">{game.description}</p>
                <div className="flex justify-between">
                  <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-4 py-1 rounded-md text-sm font-medium transition-all duration-300">
                    PAYOUT TABLE
                  </button>
                  <button className="bg-casino-gold hover:bg-casino-darkgold text-black px-4 py-1 rounded-md text-sm font-medium transition-all duration-300">
                    BET NOW
                  </button>
                </div>
              </div>

              {hoveredGame === game.id && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
