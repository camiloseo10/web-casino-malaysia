"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const pokerVariants = [
  {
    id: "kaiyan",
    name: "Kaiyan Poker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kaiyan-poker-BCIiHA4kQlxN9Z1bMngZxlMnQTBDNL.webp",
    description:
      "A Malaysian P2P poker that features several unique games like Capsa Susun, Bull Bull, Dragon Tiger, and 3 pictures. The game's popularity in the country is mainly because an excellent online poker platform gives the opportunity to users more than just entertainment but also a chance to earn money.",
    features: [
      "Multiple game modes",
      "Live dealers",
      "Mobile compatible",
      "Secure transactions",
      "24/7 customer support",
    ],
  },
  {
    id: "bull-bull",
    name: "Bull Bull",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bull-bull-poker-gKreqA6GrdGdIWJJeOoplwvefH2jcX.webp",
    description:
      "Also known as Niu Niu or Gou Niu, Bull Bull is a Chinese variation of poker that is usually played in the casino industry. The game features real dealers and cards. Gamblers don't compete against each other but the house. It is a type of traditional poker that isn't hard to play.",
    features: ["Simple rules", "Fast-paced gameplay", "High winning potential", "Multiple betting options"],
  },
  {
    id: "capsa-susun",
    name: "Capsa Susun",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capsa-susun-poker-H75j8gzs0Um5yWGyMnqDIZL1N6qW3Y.webp",
    description:
      "Capsa Susun (also known as Big Two or Thirteen) is a popular card game in Southeast Asia. Players arrange 13 cards into three poker hands, with the objective to create stronger combinations than their opponents.",
    features: ["Strategic gameplay", "Skill-based", "Popular in Asia", "Multiple variations"],
  },
  {
    id: "dragon-tiger",
    name: "Dragon Tiger",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dragon-tiger-poker-icSWXhBis3Qd6Wi8XWsiUB9JLtbfre.webp",
    description:
      "A simplified version of Baccarat, Dragon Tiger is a fast-paced card game where players bet on whether the Dragon or Tiger card will be higher. With just two cards dealt, it's one of the simplest and quickest casino games available.",
    features: ["Simple rules", "Quick rounds", "High payout potential", "Live dealer options"],
  },
]

export default function PokerVariants() {
  const [hoveredVariant, setHoveredVariant] = useState<string | null>(null)

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
            <span className="text-casino-gold">Poker</span> Game Variants
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of exciting poker variants with unique rules and massive rewards
          </p>
        </motion.div>

        <Tabs defaultValue="kaiyan" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            {pokerVariants.map((variant) => (
              <TabsTrigger
                key={variant.id}
                value={variant.id}
                className="bg-casino-card border border-casino-gold/30 hover:border-casino-gold data-[state=active]:bg-casino-gold data-[state=active]:text-black"
              >
                {variant.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {pokerVariants.map((variant) => (
            <TabsContent key={variant.id} value={variant.id}>
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative h-[250px] rounded-lg overflow-hidden border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
                  onMouseEnter={() => setHoveredVariant(variant.id)}
                  onMouseLeave={() => setHoveredVariant(null)}
                >
                  <Image
                    src={variant.image || "/placeholder.svg"}
                    alt={variant.name}
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{variant.name}</h3>
                  </div>
                  {hoveredVariant === variant.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors transform hover:scale-105 transition-all duration-300">
                        Play Now
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-gray-300 mb-6">{variant.description}</p>
                  <h4 className="text-casino-gold font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {variant.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="inline-block w-2 h-2 bg-casino-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
                      Play {variant.name} Now
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
