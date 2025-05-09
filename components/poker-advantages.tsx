"use client"

import { motion } from "framer-motion"
import { Trophy, Shield, Gift, Clock, CreditCard, Users } from "lucide-react"

const advantages = [
  {
    icon: <Trophy className="h-10 w-10 text-casino-gold" />,
    title: "Many Games Variation",
    description:
      "Our platform has the most game variations in addition to Malaysian gaming. We have three specialized platforms, a large collection of casino slot themes, live dealer games, and fishing games.",
  },
  {
    icon: <Shield className="h-10 w-10 text-casino-gold" />,
    title: "Safe Payment & Withdrawal Methods",
    description:
      "Members can make online casino gambling Malaysia ID card and bank BCA payments, as well as Kaiyan gaming deposit/withdrawal via bank transfer, e-wallet, and mobile banking.",
  },
  {
    icon: <Gift className="h-10 w-10 text-casino-gold" />,
    title: "Easy Payment & Withdrawal Methods",
    description:
      "We provide the most convenient banking options including banking transfer and ATM. It is also easy for players to withdraw their winnings, thanks to our highly reliable and secure withdrawal process.",
  },
  {
    icon: <Clock className="h-10 w-10 text-casino-gold" />,
    title: "Fast Registration & Bonus for New Members",
    description:
      "The registration process is simple and quick, and new players are ready to begin. Our customer service team is available 24/7 to assist with any questions or concerns.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-casino-gold" />,
    title: "Secure Transactions",
    description:
      "All financial transactions are protected by state-of-the-art encryption technology. Your money and personal information are always safe with us.",
  },
  {
    icon: <Users className="h-10 w-10 text-casino-gold" />,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist with any questions or issues you may have. We're committed to providing the best gaming experience possible.",
  },
]

export default function PokerAdvantages() {
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
            Advantages of Betting Online Casino in <span className="text-casino-gold">MMC996</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the key benefits players stand to enjoy when playing Malaysian gaming in our gambling site
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-casino-card p-6 rounded-lg border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{advantage.title}</h3>
              <p className="text-gray-300">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
            Join MMC996 Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
