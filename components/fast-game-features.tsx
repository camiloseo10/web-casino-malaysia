"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Trophy, Coins, Smartphone, Shield } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-casino-gold" />,
    title: "Instant Results",
    description:
      "Experience the thrill of immediate outcomes with our fast games. No waiting, just instant excitement and rewards.",
  },
  {
    icon: <Clock className="h-10 w-10 text-casino-gold" />,
    title: "Quick Gameplay",
    description:
      "Perfect for players on the go, our fast games can be completed in minutes, fitting into even the busiest schedules.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-casino-gold" />,
    title: "Massive Rewards",
    description:
      "Despite their quick nature, our fast games offer substantial prizes and jackpots that can change your life in an instant.",
  },
  {
    icon: <Coins className="h-10 w-10 text-casino-gold" />,
    title: "Low Entry Stakes",
    description:
      "Start playing with minimal investment. Our fast games accommodate all budgets while maintaining the potential for big wins.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-casino-gold" />,
    title: "Mobile Optimized",
    description:
      "Enjoy our fast games anywhere, anytime. Our mobile-optimized platform ensures a seamless experience on any device.",
  },
  {
    icon: <Shield className="h-10 w-10 text-casino-gold" />,
    title: "Fair Play Guaranteed",
    description:
      "All our fast games use certified random number generators, ensuring completely fair and transparent results every time.",
  },
]

export default function FastGameFeatures() {
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
            Why Choose <span className="text-casino-gold">Fast Games</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of our fast-paced games that deliver instant excitement and rewards
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
          <button className="btn-gold">Start Playing Now</button>
        </motion.div>
      </div>
    </section>
  )
}
