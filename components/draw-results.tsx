"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, ChevronDown } from "lucide-react"

// Lottery providers
const lotteryProviders = [
  {
    id: "magnum",
    name: "Magnum",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["3441", "5014", "6394", "-", "-"],
      consolationPrizes: ["2218", "5182", "2465", "-", "-"],
    },
  },
  {
    id: "damacai",
    name: "Da Ma Cai 1+3D",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["0409", "3079", "6394", "-", "-"],
      consolationPrizes: ["0486", "8574", "7554", "-", "-"],
    },
  },
  {
    id: "sportstoto",
    name: "Sports Toto",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["0355", "0987", "6141", "-", "-"],
      consolationPrizes: ["1542", "8639", "7554", "-", "-"],
    },
  },
  {
    id: "gdlotto",
    name: "GD Lotto",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "3267",
      secondPrize: "9264",
      thirdPrize: "7271",
      specialPrizes: ["5468", "1411", "-", "-", "-"],
      consolationPrizes: ["0276", "8037", "-", "-", "-"],
    },
  },
  {
    id: "singapore",
    name: "Singapore",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["-", "-", "-", "-", "-"],
      consolationPrizes: ["-", "-", "-", "-", "-"],
    },
  },
  {
    id: "sabah88",
    name: "Sabah 88",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["-", "-", "-", "-", "-"],
      consolationPrizes: ["-", "-", "-", "-", "-"],
    },
  },
  {
    id: "stc",
    name: "STC 4D",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["-", "-", "-", "-", "-"],
      consolationPrizes: ["-", "-", "-", "-", "-"],
    },
  },
  {
    id: "cashsweep",
    name: "Special CashSweep",
    logo: "/placeholder.svg?height=40&width=100",
    date: "11/04/2023 (Fri)",
    results: {
      firstPrize: "1234",
      secondPrize: "5678",
      thirdPrize: "9012",
      specialPrizes: ["-", "-", "-", "-", "-"],
      consolationPrizes: ["-", "-", "-", "-", "-"],
    },
  },
]

export default function DrawResults() {
  const [selectedDate, setSelectedDate] = useState("11/04/2023 (Fri)")
  const [expandedProvider, setExpandedProvider] = useState<string | null>("magnum")
  const [showDatePicker, setShowDatePicker] = useState(false)

  const toggleProvider = (providerId: string) => {
    setExpandedProvider(expandedProvider === providerId ? null : providerId)
  }

  return (
    <section className="py-12 bg-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-casino-gold">DRAW RESULTS</h2>
        </motion.div>

        <div className="mb-8">
          <div className="relative w-full max-w-md mx-auto">
            <div
              className="flex items-center justify-between bg-casino-card border border-casino-gold/30 rounded-md p-2 cursor-pointer"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-casino-gold mr-2" />
                <span>{selectedDate}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-casino-gold transition-transform duration-300 ${
                  showDatePicker ? "rotate-180" : ""
                }`}
              />
            </div>
            {showDatePicker && (
              <div className="absolute z-10 mt-1 w-full bg-casino-card border border-casino-gold/30 rounded-md shadow-lg">
                <div className="p-2">
                  <div
                    className="p-2 hover:bg-casino-gold/10 rounded cursor-pointer"
                    onClick={() => {
                      setSelectedDate("11/04/2023 (Fri)")
                      setShowDatePicker(false)
                    }}
                  >
                    11/04/2023 (Fri)
                  </div>
                  <div
                    className="p-2 hover:bg-casino-gold/10 rounded cursor-pointer"
                    onClick={() => {
                      setSelectedDate("10/04/2023 (Thu)")
                      setShowDatePicker(false)
                    }}
                  >
                    10/04/2023 (Thu)
                  </div>
                  <div
                    className="p-2 hover:bg-casino-gold/10 rounded cursor-pointer"
                    onClick={() => {
                      setSelectedDate("09/04/2023 (Wed)")
                      setShowDatePicker(false)
                    }}
                  >
                    09/04/2023 (Wed)
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="text-center text-sm text-gray-400 mt-2">Last Updated: 11/04/2023 (Fri) 08:30 PM</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lotteryProviders.map((provider) => (
            <motion.div
              key={provider.id}
              className={`bg-casino-card rounded-lg overflow-hidden border ${
                expandedProvider === provider.id ? "border-casino-gold" : "border-casino-gold/30"
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleProvider(provider.id)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs text-white">{provider.id.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{provider.name}</h3>
                    <p className="text-xs text-gray-400">{provider.date}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-casino-gold transition-transform duration-300 ${
                    expandedProvider === provider.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedProvider === provider.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 border-t border-casino-gold/30">
                  <div className="mb-4">
                    <div className="bg-casino-gold/10 p-2 rounded-t-md">
                      <p className="text-center text-sm font-bold">1ST PRIZE</p>
                    </div>
                    <div className="bg-casino-card border border-casino-gold/30 p-2 rounded-b-md">
                      <p className="text-center text-xl font-bold text-casino-gold">{provider.results.firstPrize}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="bg-casino-gold/10 p-2 rounded-t-md">
                      <p className="text-center text-sm font-bold">2ND PRIZE</p>
                    </div>
                    <div className="bg-casino-card border border-casino-gold/30 p-2 rounded-b-md">
                      <p className="text-center text-xl font-bold text-white">{provider.results.secondPrize}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="bg-casino-gold/10 p-2 rounded-t-md">
                      <p className="text-center text-sm font-bold">3RD PRIZE</p>
                    </div>
                    <div className="bg-casino-card border border-casino-gold/30 p-2 rounded-b-md">
                      <p className="text-center text-xl font-bold text-white">{provider.results.thirdPrize}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="bg-casino-gold/10 p-2 rounded-t-md">
                      <p className="text-center text-sm font-bold">SPECIAL PRIZE</p>
                    </div>
                    <div className="bg-casino-card border border-casino-gold/30 p-2 rounded-b-md">
                      <div className="grid grid-cols-5 gap-2">
                        {provider.results.specialPrizes.map((prize, index) => (
                          <p key={index} className="text-center font-bold text-white">
                            {prize}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-casino-gold/10 p-2 rounded-t-md">
                      <p className="text-center text-sm font-bold">CONSOLATION PRIZE</p>
                    </div>
                    <div className="bg-casino-card border border-casino-gold/30 p-2 rounded-b-md">
                      <div className="grid grid-cols-5 gap-2">
                        {provider.results.consolationPrizes.map((prize, index) => (
                          <p key={index} className="text-center font-bold text-white">
                            {prize}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
