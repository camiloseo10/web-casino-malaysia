"use client"

import { motion } from "framer-motion"
import { Smartphone, Coins, Zap, Shield, Gift, Clock } from "lucide-react"

const features = [
  {
    icon: <Smartphone className="h-10 w-10 text-casino-gold" />,
    title: "Mobile Compatible",
    description:
      "Play your favorite slot games anytime, anywhere with our fully optimized mobile app designed for both Android and iOS devices.",
  },
  {
    icon: <Coins className="h-10 w-10 text-casino-gold" />,
    title: "High Jackpots",
    description:
      "Win life-changing jackpots with progressive prize pools that grow with every spin until someone hits the winning combination.",
  },
  {
    icon: <Zap className="h-10 w-10 text-casino-gold" />,
    title: "Fast Gameplay",
    description:
      "Enjoy quick and responsive gameplay with smooth animations and fast-loading games that provide an immersive gaming experience.",
  },
  {
    icon: <Shield className="h-10 w-10 text-casino-gold" />,
    title: "Secure Platform",
    description:
      "Play with peace of mind on our secure platform that uses advanced encryption technology to protect your personal and financial information.",
  },
  {
    icon: <Gift className="h-10 w-10 text-casino-gold" />,
    title: "Generous Bonuses",
    description:
      "Take advantage of our generous welcome bonuses, daily rewards, and promotional offers designed to boost your bankroll and extend your gameplay.",
  },
  {
    icon: <Clock className="h-10 w-10 text-casino-gold" />,
    title: "24/7 Support",
    description:
      "Access our dedicated customer support team 24/7 via live chat, email, or phone for immediate assistance with any questions or concerns.",
  },
]

export default function PussyFeatures() {
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
            Why Choose <span className="text-casino-gold">PUSSY888</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of playing on Malaysia's premier mobile casino platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-casino-card p-6 rounded-lg border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="btn-red">Download PUSSY888 Now</button>
        </motion.div>
      </div>
    </section>
  )
}
