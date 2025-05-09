import type React from "react"
import Image from "next/image"

// Definición de tipos para los juegos de slots
interface SlotGame {
  id: number
  name: string
  imageUrl: string
  provider: string
  rtp: string
  volatility: "Low" | "Medium" | "High"
  minBet: string
  maxWin: string
}

// Lista de juegos populares de slots
const popularGames: SlotGame[] = [
  {
    id: 1,
    name: "Gates of Olympus",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gates-of-olympus-slot-sNh2ezVTiKiAkqmmq2s8lFnVhurYHp.webp",
    provider: "Pragmatic Play",
    rtp: "96.5%",
    volatility: "High",
    minBet: "RM0.20",
    maxWin: "5,000x",
  },
  {
    id: 2,
    name: "Sweet Bonanza",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweet-bonanza-slot-mEuFV5T2MccaEGeIotYfEjysBNMUPn.webp",
    provider: "Pragmatic Play",
    rtp: "96.48%",
    volatility: "High",
    minBet: "RM0.20",
    maxWin: "21,100x",
  },
  {
    id: 3,
    name: "Starlight Princess",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/starlight-princess-g9cAlZnuzlyOo8XagMnyn7TP9LaPMw.webp",
    provider: "Pragmatic Play",
    rtp: "96.5%",
    volatility: "High",
    minBet: "RM0.20",
    maxWin: "5,000x",
  },
  {
    id: 4,
    name: "Wild West Gold",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wild-west-gold-slot-sPYLdPWj3BEtglSbn87shaT2aUp1pX.webp",
    provider: "Pragmatic Play",
    rtp: "96.51%",
    volatility: "High",
    minBet: "RM0.20",
    maxWin: "5,000x",
  },
  {
    id: 5,
    name: "Book of Dead",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-of-dead-slot-jIWodNw5ZiLdp95U87YXYDSG7dno6T.webp",
    provider: "Play'n GO",
    rtp: "96.21%",
    volatility: "High",
    minBet: "RM0.10",
    maxWin: "5,000x",
  },
  {
    id: 6,
    name: "Gonzo's Quest",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gonzos-quest-slot-9zWRBJlhNtL6id4rQIirn78FW1bNCz.webp",
    provider: "NetEnt",
    rtp: "95.97%",
    volatility: "Medium",
    minBet: "RM0.20",
    maxWin: "2,500x",
  },
]

// Componente PopularSlotGames
const PopularSlotGames: React.FC = () => {
  return (
    <section className="py-12 bg-casino-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Popular Slot Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <div
              key={game.id}
              className="bg-casino-card rounded-xl overflow-hidden transition-transform hover:scale-105 border border-casino-gold/30 hover:border-casino-gold"
            >
              <div className="relative">
                <Image
                  src={game.imageUrl || "/placeholder.svg"}
                  alt={game.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              </div>
              <div className="p-4">
                <h3 className="text-white text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-casino-gold text-sm mb-2">Provider: {game.provider}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-400">RTP:</p>
                    <p className="text-white">{game.rtp}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Volatility:</p>
                    <p className="text-white">{game.volatility}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Min Bet:</p>
                    <p className="text-white">{game.minBet}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Max Win:</p>
                    <p className="text-white">{game.maxWin}</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-casino-gold text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/slot"
            className="inline-block bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors"
          >
            View All Slot Games
          </a>
        </div>
      </div>
    </section>
  )
}

export default PopularSlotGames
