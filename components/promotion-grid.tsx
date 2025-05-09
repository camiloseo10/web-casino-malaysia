"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Info } from "lucide-react"

const promotions = [
  {
    id: 1,
    title: "100% SLOT WELCOME BONUS",
    description: "100% Slot Welcome Bonus Up To MYR 688!",
    image: "/placeholder.svg?height=200&width=400",
    category: "welcome",
    featured: true,
  },
  {
    id: 2,
    title: "288% SLOT WELCOME BONUS",
    description: "288% Slot Welcome Bonus Up To MYR 2880!",
    image: "/placeholder.svg?height=200&width=400",
    category: "welcome",
    featured: true,
  },
  {
    id: 3,
    title: "88% LIVE CASINO WELCOME BONUS",
    description: "88% Live Casino Welcome Bonus Up To MYR 880!",
    image: "/placeholder.svg?height=200&width=400",
    category: "welcome",
    featured: true,
  },
  {
    id: 4,
    title: "BIRTHDAY BONANZA",
    description: "Birthday Bonanza Up To MYR 1888!",
    image: "/placeholder.svg?height=200&width=400",
    category: "birthday",
    featured: false,
  },
  {
    id: 5,
    title: "0.6% DAILY REBATE LIVE CASINO",
    description: "Daily Rebate Live Casino Up To 1%!",
    image: "/placeholder.svg?height=200&width=400",
    category: "rebate",
    featured: false,
  },
  {
    id: 6,
    title: "0.35% DAILY REBATE SPORTBOOK",
    description: "Daily Rebate Sportbook Up To 0.75%!",
    image: "/placeholder.svg?height=200&width=400",
    category: "rebate",
    featured: false,
  },
  {
    id: 7,
    title: "0.5% DAILY REBATE SLOT GAME",
    description: "Daily Rebate Slot Game Up To 0.9%!",
    image: "/placeholder.svg?height=200&width=400",
    category: "rebate",
    featured: false,
  },
  {
    id: 8,
    title: "10% SPECIAL BONUS",
    description: "10% Special Bonus for selected games!",
    image: "/placeholder.svg?height=200&width=400",
    category: "special",
    featured: false,
  },
  {
    id: 9,
    title: "20% BONUS",
    description: "20% Bonus on your deposits!",
    image: "/placeholder.svg?height=200&width=400",
    category: "special",
    featured: false,
  },
  {
    id: 10,
    title: "RISK FREE SPORTBOOKS",
    description: "Risk-Free Sportbooks 1st Bet Up To RM250!",
    image: "/placeholder.svg?height=200&width=400",
    category: "riskfree",
    featured: false,
  },
  {
    id: 11,
    title: "IMPORTANT NOTICE",
    description: "Important information for all players",
    image: "/placeholder.svg?height=200&width=400",
    category: "important",
    featured: false,
  },
  {
    id: 12,
    title: "M COIN REDEMPTION",
    description: "Redeem your M Coins for exciting rewards!",
    image: "/placeholder.svg?height=200&width=400",
    category: "mcoin",
    featured: false,
  },
]

export default function PromotionGrid() {
  const [hoveredPromotion, setHoveredPromotion] = useState<number | null>(null)
  const [selectedPromotion, setSelectedPromotion] = useState<number | null>(null)

  return (
    <div>
      {/* Featured Promotions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Promotions</h2>
        <div className="grid grid-cols-1 gap-6">
          {promotions
            .filter((promo) => promo.featured)
            .map((promotion) => (
              <motion.div
                key={promotion.id}
                className="relative overflow-hidden rounded-lg bg-casino-dark border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredPromotion(promotion.id)}
                onMouseLeave={() => setHoveredPromotion(null)}
              >
                <div className="relative h-[200px]">
                  <Image
                    src={promotion.image || "/placeholder.svg"}
                    alt={promotion.title}
                    fill
                    className="object-cover"
                    priority={promotion.featured}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{promotion.title}</h3>
                    <p className="text-gray-300">{promotion.description}</p>
                  </div>
                </div>

                {hoveredPromotion === promotion.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 mr-4"
                      onClick={() => setSelectedPromotion(promotion.id)}
                    >
                      View Details
                    </button>
                    <button className="btn-red transform hover:scale-105 transition-transform duration-300">
                      Claim Now
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
        </div>
      </div>

      {/* All Promotions */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">All Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions
            .filter((promo) => !promo.featured)
            .map((promotion) => (
              <motion.div
                key={promotion.id}
                className="relative overflow-hidden rounded-lg bg-casino-dark border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredPromotion(promotion.id)}
                onMouseLeave={() => setHoveredPromotion(null)}
              >
                <div className="relative h-[180px]">
                  <Image
                    src={promotion.image || "/placeholder.svg"}
                    alt={promotion.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{promotion.title}</h3>
                    <p className="text-sm text-gray-300">{promotion.description}</p>
                  </div>
                </div>

                {hoveredPromotion === promotion.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md text-sm transition-all duration-300 transform hover:scale-105 mr-3"
                      onClick={() => setSelectedPromotion(promotion.id)}
                    >
                      View Details
                    </button>
                    <button className="bg-casino-red hover:bg-casino-darkred text-white font-bold py-2 px-4 rounded-md text-sm transition-all duration-300 transform hover:scale-105">
                      Claim Now
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
        </div>
      </div>

      {/* Promotion Detail Modal */}
      {selectedPromotion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            className="bg-casino-dark border border-casino-gold rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-casino-gold">
                  {promotions.find((p) => p.id === selectedPromotion)?.title}
                </h3>
                <button className="text-gray-400 hover:text-white" onClick={() => setSelectedPromotion(null)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={promotions.find((p) => p.id === selectedPromotion)?.image || ""}
                  alt={promotions.find((p) => p.id === selectedPromotion)?.title || ""}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-6">
                <p className="text-gray-300 mb-4">{promotions.find((p) => p.id === selectedPromotion)?.description}</p>

                <div className="bg-casino-darker p-4 rounded-lg border border-casino-gold/30 mb-4">
                  <div className="flex items-start mb-2">
                    <Info className="h-5 w-5 text-casino-gold mr-2 flex-shrink-0 mt-0.5" />
                    <h4 className="text-lg font-bold text-white">Terms & Conditions</h4>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Minimum deposit of MYR 50 is required to claim this bonus.</li>
                    <li>The bonus is subject to a 25x wagering requirement before withdrawal.</li>
                    <li>This promotion is valid for new players only until December 31, 2025.</li>
                    <li>MMC996 reserves the right to modify or cancel this promotion at any time.</li>
                    <li>General terms and conditions apply.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-red w-full sm:w-auto">Claim Now</button>
                <button
                  className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 w-full sm:w-auto"
                  onClick={() => setSelectedPromotion(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
