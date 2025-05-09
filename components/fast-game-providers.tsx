"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fastGameProviders = [
  {
    id: "jili",
    name: "JILI",
    logo: "/placeholder.svg?height=60&width=120",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jili-fastgame-r3HyJn7YU5POr97oADGe1auCxfDTj2.webp",
    description:
      "JILI offers a wide range of fast-paced games with stunning graphics and immersive gameplay. Their portfolio includes popular titles like Fortune Mouse, Lucky Neko, and Golden Empire.",
    features: [
      "Instant gameplay with no download required",
      "High RTP (Return to Player) percentages",
      "Multiple themes including Asian, Fantasy, and Adventure",
      "Mobile-friendly interface",
      "Regular tournaments with massive prize pools",
    ],
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    logo: "/placeholder.svg?height=60&width=120",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pragmatic-fastgame-BKQ9qMneiVW3t5U2HKBNhAcudxw4oV.webp",
    description:
      "Pragmatic Play delivers high-quality fast games with innovative features and engaging mechanics. Their games are known for their reliability, fair play, and exciting bonus features.",
    features: [
      "Award-winning game design",
      "Unique bonus features and mechanics",
      "Certified random number generator",
      "Multi-platform compatibility",
      "Regular new game releases",
    ],
  },
  {
    id: "spadegaming",
    name: "Spadegaming",
    logo: "/placeholder.svg?height=60&width=120",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spadegaming-fastgame-TDq0fS4S5W7Z9oINM2YlVYhM23Pk0s.webp",
    description:
      "Spadegaming specializes in creating fast games with Asian themes and cultural elements. Their games feature stunning visuals, engaging soundtracks, and innovative gameplay mechanics.",
    features: [
      "Asian-themed games with cultural elements",
      "High volatility options for big wins",
      "Unique bonus features",
      "Smooth gameplay experience",
      "Progressive jackpots",
    ],
  },
  {
    id: "habanero",
    name: "Habanero",
    logo: "/placeholder.svg?height=60&width=120",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habanero-fastgame-uTLZGuHE5mEOFOarlNW8QUUt3f3neZ.webp",
    description:
      "Habanero creates fast games with a focus on quality over quantity. Their games feature stunning graphics, innovative mechanics, and engaging themes that keep players coming back for more.",
    features: [
      "HTML5 technology for cross-platform play",
      "Unique math models for each game",
      "Engaging storylines and characters",
      "Regular feature updates",
      "Multi-language support",
    ],
  },
]

export default function FastGameProviders() {
  const [hoveredProvider, setHoveredProvider] = useState<string | null>(null)

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
            <span className="text-casino-gold">Premium</span> Fast Game Providers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the best fast games from top providers with stunning graphics and massive rewards
          </p>
        </motion.div>

        <Tabs defaultValue="jili" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            {fastGameProviders.map((provider) => (
              <TabsTrigger
                key={provider.id}
                value={provider.id}
                className="bg-casino-card border border-casino-gold/30 hover:border-casino-gold data-[state=active]:bg-casino-gold data-[state=active]:text-black"
              >
                {provider.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {fastGameProviders.map((provider) => (
            <TabsContent key={provider.id} value={provider.id}>
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative h-[250px] rounded-lg overflow-hidden border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
                  onMouseEnter={() => setHoveredProvider(provider.id)}
                  onMouseLeave={() => setHoveredProvider(null)}
                >
                  <img
                    src={provider.image || "/placeholder.svg"}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {hoveredProvider === provider.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
                        Play Now
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-gray-300 mb-6">{provider.description}</p>
                  <h4 className="text-casino-gold font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {provider.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="inline-block w-2 h-2 bg-casino-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
                      Play {provider.name} Games
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
