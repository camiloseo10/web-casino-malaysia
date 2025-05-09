import type React from "react"
import Image from "next/image"

// Definición de tipos para los proveedores de slots
interface SlotProvider {
  id: number
  name: string
  games: number
  imageUrl: string
}

// Lista de proveedores de slots
const providers: SlotProvider[] = [
  {
    id: 1,
    name: "Pragmatic Play",
    games: 250,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pragmatic-play-slot-pZw0eEPOQEDycIFzURVJPsl1f9NDoI.webp",
  },
  {
    id: 2,
    name: "Microgaming",
    games: 300,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microgaming-slot-bbFfGL3UlBQgJnVhglZhTbN2d8e8Fj.webp",
  },
  {
    id: 3,
    name: "NetEnt",
    games: 200,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netent-slot-0u6ZuKX6EUMdi09xZBXKXATfUqvFfe.webp",
  },
  {
    id: 4,
    name: "Play'n GO",
    games: 180,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playngo-slot-9AHJwxOP0jMQj5vuuFEydypOUQ61vg.webp",
  },
  {
    id: 5,
    name: "Yggdrasil",
    games: 120,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yggdrasil-slot-VOwn2UQNjNaXlUU037Mi6ge7qw3oLR.webp",
  },
  {
    id: 6,
    name: "Quickspin",
    games: 100,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quickspin-slot-EcYqU6HLS6XDVQ3yuPFj3kaqv3YMEA.webp",
  },
  {
    id: 7,
    name: "Red Tiger",
    games: 150,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red-tiger-slot-IST1y7Y4AGoaQUDG10971hC7gt8wPS.webp",
  },
  {
    id: 8,
    name: "Habanero",
    games: 130,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habanero-slot-fcMhzNFJgAe2PqM9BmrZRsXSuZuuHS.webp",
  },
]

// Componente SlotProviders
const SlotProviders: React.FC = () => {
  return (
    <section className="py-12 bg-casino-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Top Slot Game Providers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-casino-card rounded-lg p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 border border-casino-gold/30 hover:border-casino-gold"
            >
              <div className="w-full h-48 relative mb-4 overflow-hidden rounded">
                <Image
                  src={provider.imageUrl || "/placeholder.svg"}
                  alt={`${provider.name} slot machines`}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <h3 className="text-white text-lg font-medium">{provider.name}</h3>
              <p className="text-casino-gold text-sm">{provider.games} Games</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SlotProviders
