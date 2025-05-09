"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Which Kaiyan Games is Best in Malaysia?",
    answer:
      "Bull Bull is the best Kaiyan game to play in Malaysia. The game is highly familiar compared to other Kaiyan games. It is almost certainly best unless the Bull 9 Bull 7, Bull 8, Bull 6, Bull 5, Bull 4, Bull 3, Bull 2, Bull 1, Bull 0, and No Bull. The winning hands are arranged from highest to lowest. Special cases are Bull Nian and Bull Mei.",
  },
  {
    question: "Can I Get Money From Kaiyan?",
    answer:
      "Yes, you can win real money playing Kaiyan poker games. But it's best for a person to play the game for fun or sport at first. When we consider that Bull is the best hand, some players may find it thrilling to beat higher or lower hands. Our online casino offers many bonuses in terms of promotions and bonuses. So, we encourage players to take advantage of the promotions to increase their chances of winning.",
  },
  {
    question: "How Do I Play Kaiyan?",
    answer:
      "If you're new to Kaiyan gaming, the best way to start is by playing Kaiyan games. The games are modern and provide players great opportunities for their casino action and winning. For Bull 1, Bull 2, Bull 3, Bull 4, Bull 5, Bull 6, Bull 7, Bull 8, and Bull 9, the winning hands are arranged from lowest to highest. Special cases are Bull Nian and Bull Mei.",
  },
  {
    question: "Is Kaiyan Gaming Legal in Malaysia?",
    answer:
      "Yes, Kaiyan gaming is legal in Malaysia as long as you play through licensed online casinos like MMC996. We operate under strict regulatory compliance and ensure all games are fair and transparent. Our platform provides a safe and legal environment for Malaysian players to enjoy Kaiyan poker games.",
  },
  {
    question: "What Are the Minimum Deposits for Kaiyan Games?",
    answer:
      "The minimum deposit for Kaiyan games at MMC996 is typically MYR 50. We offer flexible deposit options to accommodate players with different budgets. For VIP players, we recommend higher deposits to take advantage of our exclusive bonuses and promotions.",
  },
  {
    question: "Can I Play Kaiyan Games on Mobile?",
    answer:
      "Yes, all our Kaiyan games are fully optimized for mobile play. You can enjoy the complete Kaiyan gaming experience on your smartphone or tablet with the same features and functionality as the desktop version. Our mobile platform supports both iOS and Android devices.",
  },
]

export default function PokerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            <span className="text-casino-gold">FAQs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about Kaiyan Poker at MMC996
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
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
                <span className="text-lg font-medium text-white">{faq.question}</span>
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
                <p className="text-gray-300">{faq.answer}</p>
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
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}
