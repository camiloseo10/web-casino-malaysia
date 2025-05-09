"use client"

import { useLanguage } from "@/contexts/language-context"

const slotGames = [
  {
    id: 1,
    name: "Dragon Fortune",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dragon-fortune-mmc996-5QwSlI3Hb0RZynAFxxZbYuGfDSh0bA.webp",
    provider: "Pragmatic Play",
    borderColor: "border-pink-500",
  },
  {
    id: 2,
    name: "Golden Wealth",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/golden-wealth-mmc996-nMdRQACIQXovp3Xu6heN29H3pVENjf.webp",
    provider: "SpadeGaming",
    borderColor: "border-blue-500",
  },
  {
    id: 3,
    name: "Lucky Panda",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lucky-panda-mmc996-2GbxhMnkssZGypf2ZPB01ehavQWq9v.webp",
    provider: "JILI",
    borderColor: "border-green-500",
  },
  {
    id: 4,
    name: "Mystic Treasures",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mystic-treasures-mmc996-IzlFaUs6vptqGmRD2s4nWi4jljzg7S.webp",
    provider: "Pragmatic Play",
    borderColor: "border-purple-500",
  },
  {
    id: 5,
    name: "Phoenix Rise",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phoenix-rise-mmc996-JtYlzvwPDvA9tXlnXLHiEEQkp8XMDm.webp",
    provider: "SpadeGaming",
    borderColor: "border-red-500",
  },
  {
    id: 6,
    name: "Tiger's Glory",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tigers-glory-mmc996-3MGbQMyHuCme5lVZeM3ro1xQyXBEdH.webp",
    provider: "JILI",
    borderColor: "border-yellow-500",
  },
  {
    id: 7,
    name: "Mega Moolah",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mega-moolah-mmc996-vwiNHBWM9lhkEsyzlDJJP44m67iChp.webp",
    provider: "Pragmatic Play",
    borderColor: "border-teal-500",
  },
  {
    id: 8,
    name: "Fortune Coins",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune-coins-mmc996-fjk6tMeFFwYtXLK9RxDXzXY8tP7sIf.webp",
    provider: "SpadeGaming",
    borderColor: "border-orange-500",
  },
]

export default function SlotGamesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-casino-darker to-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Slot Games</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most popular slot games with amazing graphics and exciting bonus features.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {slotGames.map((game) => (
            <div key={game.id} className={`card-game group ${game.borderColor} rounded-xl overflow-hidden`}>
              <div className="relative">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  className="w-full h-40 object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{game.name}</h3>
                <span className="text-sm text-gray-400">{game.provider}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/slot"
            className="inline-block bg-transparent border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            View All Slot Games
          </a>
        </div>
      </div>
    </section>
  )
}
