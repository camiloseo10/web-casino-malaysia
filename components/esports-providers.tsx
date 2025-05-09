"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const esportsProviders = [
  {
    id: 1,
    name: "IM Esports",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=350",
    description:
      "IM Esports offers comprehensive coverage of major tournaments with competitive odds and in-play betting options.",
    features: ["Live streaming", "In-play betting", "Early cashout", "Statistics and analysis"],
  },
  {
    id: 2,
    name: "TF Gaming",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=350",
    description: "TF Gaming specializes in Asian esports tournaments with extensive markets and competitive odds.",
    features: ["Asian tournament focus", "Multiple betting markets", "Fast payouts", "Mobile-friendly interface"],
  },
  {
    id: 3,
    name: "BTi Sports",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=350",
    description:
      "BTi Sports provides a premium esports betting experience with advanced features and competitive odds.",
    features: ["Advanced bet builder", "Live match tracker", "Virtual esports", "24/7 customer support"],
  },
  {
    id: 4,
    name: "M8 Sports",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=350",
    description: "M8 Sports offers a wide range of esports markets with competitive odds and exclusive promotions.",
    features: ["Exclusive promotions", "Wide market selection", "Competitive odds", "VIP rewards program"],
  },
]

export default function EsportsProviders() {
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
            Our <span className="text-casino-gold">E-Sports</span> Providers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our selection of premium esports betting platforms with competitive odds and extensive coverage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {esportsProviders.map((provider, index) => (
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
                <div className="h-12 w-32 relative mb-4">
                  <Image
                    src={provider.logo || "/placeholder.svg"}
                    alt={provider.name}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{provider.name}</h3>
                <p className="text-gray-300 mb-6">{provider.description}</p>

                <div className="mb-6">
                  <h4 className="text-casino-gold font-bold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="inline-block w-2 h-2 bg-casino-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <Image src={provider.image || "/placeholder.svg"} alt={provider.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <button className="btn-gold w-full">Bet Now</button>
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
