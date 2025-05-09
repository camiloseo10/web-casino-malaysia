"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const bettingGuide = [
  {
    question: "What is E-Sports betting?",
    answer:
      "E-Sports betting involves placing wagers on competitive video game tournaments and matches. Just like traditional sports betting, you can bet on various outcomes such as match winners, tournament champions, and specific in-game events. E-Sports betting has grown exponentially in popularity as competitive gaming has evolved into a global phenomenon with professional leagues, teams, and massive prize pools.",
  },
  {
    question: "Which E-Sports games can I bet on?",
    answer:
      "At MMC996, we offer betting markets for all major esports titles including Dota 2, League of Legends, CS:GO, Valorant, PUBG, Overwatch, and more. Our comprehensive coverage ensures you can bet on your favorite games and tournaments year-round, from major international championships to regional qualifiers and leagues.",
  },
  {
    question: "What types of bets can I place on E-Sports?",
    answer:
      "We offer a wide range of betting options for esports, including match winners, tournament winners, handicap betting, total maps/rounds, first blood, first tower, and many game-specific markets. You can also enjoy live betting during matches, allowing you to place wagers as the action unfolds based on the current state of play.",
  },
  {
    question: "How do I start betting on E-Sports?",
    answer:
      "To start betting on esports at MMC996, simply create an account, make a deposit, and navigate to our esports section. Browse the available matches and tournaments, select your preferred market, enter your stake, and confirm your bet. We recommend familiarizing yourself with the games and teams before placing bets to make more informed decisions.",
  },
  {
    question: "Are there special promotions for E-Sports betting?",
    answer:
      "Yes, we offer exclusive promotions specifically for esports betting, including welcome bonuses, free bets, enhanced odds, and special offers during major tournaments. These promotions are designed to maximize your betting experience and provide additional value when wagering on your favorite esports events.",
  },
  {
    question: "Is E-Sports betting legal?",
    answer:
      "E-Sports betting is legal in many jurisdictions where online gambling is permitted. MMC996 operates under proper licensing and regulatory oversight to ensure a safe and legal betting environment. We recommend checking your local laws and regulations regarding online gambling and esports betting to ensure compliance.",
  },
]

export default function EsportsBettingGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            E-Sports <span className="text-casino-gold">Betting Guide</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about betting on esports at MMC996
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {bettingGuide.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-casino-gold/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left bg-casino-card hover:bg-casino-card/80 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-casino-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-4">Ready to start betting on E-Sports?</p>
          <button className="btn-red">Join MMC996 Now</button>
        </motion.div>
      </div>
    </section>
  )
}
