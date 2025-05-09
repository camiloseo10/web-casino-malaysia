"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const popularFastGames = [
  {
    id: 1,
    name: "Fortune Mouse",
    provider: "JILI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jili-fastgame-r3HyJn7YU5POr97oADGe1auCxfDTj2.webp",
    isHot: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Golden Empire",
    provider: "JILI",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spadegaming-fastgame-aE3JlvSPjbYPxwtfyKeFU7c5TMgBjl.webp",
    isHot: true,
    isNew: false,
  },
  {
    id: 3,
    name: "Lucky Neko",
    provider: "Pragmatic Play",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pragmatic-fastgame-BKQ9qMneiVW3t5U2HKBNhAcudxw4oV.webp",
    isHot: false,
    isNew: true,
  },
  {
    id: 4,
    name: "Dragon Hatch",
    provider: "Spadegaming",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spadegaming-fastgame-TDq0fS4S5W7Z9oINM2YlVYhM23Pk0s.webp",
    isHot: true,
    isNew: false,
  },
  {
    id: 5,
    name: "Wealth God",
    provider: "JILI",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habanero-fastgame-uTLZGuHE5mEOFOarlNW8QUUt3f3neZ.webp",
    isHot: false,
    isNew: true,
  },
  {
    id: 6,
    name: "Gem Saviour",
    provider: "Pragmatic Play",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habanero-fastgame-nW2ps4yM9JnYGzTJAPSp9kDTPhCSBz.webp",
    isHot: true,
    isNew: false,
  },
  {
    id: 7,
    name: "Candy Burst",
    provider: "Habanero",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pragmatic-fastgame-ACoq1tNy0Vm2yWC6otewuPNVmNnlar.webp",
    isHot: true,
    isNew: false,
  },
  {
    id: 8,
    name: "Ninja Ways",
    provider: "Spadegaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jili-fastgame-0F8RLNH3Nk1MLPP0aRY86NlmKk3qgX.webp",
    isHot: false,
    isNew: true,
  },
  {
    id: 9,
    name: "Wild Trucks",
    provider: "Habanero",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fastgame-hero-win-kbysjoxGWJzavQaqe8G3pzkPKQI2Ll.webp",
    isHot: true,
    isNew: false,
  },
  {
    id: 10,
    name: "Mystic Fortune",
    provider: "JILI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fastgame-hero-xFaeP9eCpfsIYDW4xFEkk2Wa9NDiYs.webp",
    isHot: false,
    isNew: true,
  },
  {
    id: 11,
    name: "Dragon Tiger",
    provider: "Pragmatic Play",
    image: "/dragon-tiger-casino.png",
    isHot: true,
    isNew: false,
  },
  {
    id: 12,
    name: "Golden Lotus",
    provider: "Spadegaming",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spadegaming-fastgame-TDq0fS4S5W7Z9oINM2YlVYhM23Pk0s.webp",
    isHot: false,
    isNew: true,
  },
]

export default function PopularFastGames() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { current } = containerRef
      const scrollAmount = direction === "left" ? -current.clientWidth / 2 : current.clientWidth / 2
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-casino-darker to-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="text-casino-gold">Fast Games</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our collection of exciting fast games with instant results and massive rewards
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 focus:outline-none hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div ref={containerRef} className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide snap-x snap-mandatory">
            {popularFastGames.map((game, index) => (
              <motion.div
                key={game.id}
                className="relative flex-shrink-0 w-64 snap-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div className="relative h-40 rounded-t-lg overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex space-x-2">
                    {game.isHot && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                    )}
                    {game.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-casino-card rounded-b-lg border-t-0 border border-casino-gold/30">
                  <h3 className="font-bold text-lg mb-1">{game.name}</h3>
                  <span className="text-sm text-gray-400">{game.provider}</span>
                  <button className="mt-3 w-full bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 rounded-md transition-all duration-300">
                    Play Now
                  </button>
                </div>

                {hoveredGame === game.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <button className="btn-gold transform hover:scale-105 transition-transform duration-300">
                      Play Now
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 focus:outline-none hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <button className="btn-red">View All Fast Games</button>
        </div>
      </div>
    </section>
  )
}
