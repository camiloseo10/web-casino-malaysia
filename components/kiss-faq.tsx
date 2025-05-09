"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is 918KISS?",
    answer:
      "918KISS is a popular mobile casino gaming application available for Android and iOS devices. It offers a wide variety of slot games with engaging themes and high-quality graphics. Players can enjoy classic fruit machines alongside modern video slots featuring multiple paylines and bonus features.",
  },
  {
    question: "How do I download and install 918KISS?",
    answer:
      "To download 918KISS, click on the download button on our website for either Android or iOS. For Android users, you'll need to allow installation from unknown sources in your device settings. Once downloaded, follow the on-screen instructions to complete the installation process. After installation, open the app and either register a new account or log in with your existing credentials.",
  },
  {
    question: "Is 918KISS safe to play?",
    answer:
      "Yes, 918KISS is safe to play when downloaded from trusted sources like MMC996. The app uses advanced encryption technology to protect your personal and financial information. Additionally, all games are regularly audited for fairness by independent testing agencies to ensure random and fair outcomes for all players.",
  },
  {
    question: "What types of games are available on 918KISS?",
    answer:
      "918KISS offers a diverse selection of games including video slots, classic slots, table games, arcade games, and fishing games. Popular titles include Great Blue, Ocean King, Highway Kings, Dolphin Reef, and many more. Each game features unique themes, bonus features, and jackpot opportunities.",
  },
  {
    question: "How do I make deposits and withdrawals on 918KISS?",
    answer:
      "You can make deposits and withdrawals through the MMC996 platform. We support various payment methods including bank transfers, e-wallets, and mobile banking. The minimum deposit is typically MYR 30, while the minimum withdrawal is MYR 50. Deposits are processed instantly, and withdrawals are usually completed within 24 hours.",
  },
  {
    question: "Are there any bonuses for 918KISS players?",
    answer:
      "Yes, 918KISS players can enjoy various bonuses through MMC996. New players receive a welcome bonus of up to MYR 918 on their first deposit. We also offer daily reload bonuses, cashback offers, and special promotions during holidays and major events. Make sure to check our promotions page regularly for the latest offers.",
  },
]

export default function KissFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            <span className="text-casino-gold">Frequently</span> Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about 918KISS mobile casino
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
          <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}
