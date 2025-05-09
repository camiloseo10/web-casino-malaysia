"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const popularGames = [
  {
    id: 1,
    name: "Great Blue",
    image: "/placeholder.svg?height=200&width=300",
    category: "Video Slots",
    rtp: "96.5%",
    isHot: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Ocean King",
    image: "/placeholder.svg?height=200&width=300",
    category: "Arcade Games",
    rtp: "95.8%",
    isHot: true,
    isNew: false,
  },
  {
    id: 3,
    name: "Dragon Tiger",
    image: "/placeholder.svg?height=200&width=300",
    category: "Table Games",
    rtp: "97.3%",
    isHot: false,
    isNew: true,
  },
  {
    id: 4,
    name: "Highway Kings",
    image: "/placeholder.svg?height=200&width=300",
    category: "Video Slots",
    rtp: "96.2%",
    isHot: true,
    isNew: false,
  },
  {
    id: 5,
    name: "Jin Qian Wa",
    image: "/placeholder.svg?height=200&width=300",
    category: "Video Slots",
    rtp: "95.9%",
    isHot: false,
    isNew: true,
  },
  {
    id: 6,
    name: "Dolphin Reef",
    image: "/placeholder.svg?height=200&width=300",
    category: "Video Slots",
    rtp: "96.7%",
    isHot: true,
    isNew: false,
  },
  {
    id: 7,
    name: "Bonus Bears",
    image: "/placeholder.svg?height=200&width=300",
    category: "Video Slots",
    rtp: "95.5%",
    isHot: true,
    isNew: false,
  },
  {
    id: 8,
    name: "Fortune Gods",
    image: "/placeholder.svg?height=200&width=300",
    category: "Video Slots",
    rtp: "96.8%",
    isHot: false,
    isNew: true,
  },
]

export default function KissGames() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)

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
            Popular <span className="text-casino-gold">918KISS</span> Games
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of exciting slot games with massive jackpots and thrilling gameplay
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularGames.map((game, index) => (
            <motion.div
              key={game.id}
              className="relative overflow-hidden rounded-lg bg-casino-card border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative h-40">
                <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex space-x-2">
                  {game.isHot && <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>}
                  {game.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{game.name}</h3>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>{game.category}</span>
                  <span>RTP: {game.rtp}</span>
                </div>
                <button className="w-full bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 rounded-md transition-all duration-300">
                  Play Now
                </button>
              </div>

              {hoveredGame === game.id && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105">
                    Play Now
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="btn-red">View All Games</button>
        </div>
      </div>
    </section>
  )
}
