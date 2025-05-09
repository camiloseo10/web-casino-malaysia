"use client"

import { motion } from "framer-motion"
import { Zap, Tv, Award, TrendingUp, Smartphone, Shield } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-casino-gold" />,
    title: "Live Betting",
    description:
      "Place bets in real-time as the action unfolds with our dynamic live betting platform. React to game developments and maximize your winning potential.",
  },
  {
    icon: <Tv className="h-10 w-10 text-casino-gold" />,
    title: "Live Streaming",
    description:
      "Watch your favorite esports matches live while you bet. Our integrated streaming service ensures you never miss a moment of the action.",
  },
  {
    icon: <Award className="h-10 w-10 text-casino-gold" />,
    title: "Exclusive Promotions",
    description:
      "Enjoy esports-specific bonuses, free bets, and enhanced odds on major tournaments. Our promotions are designed to maximize your betting experience.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-casino-gold" />,
    title: "Competitive Odds",
    description:
      "We offer some of the most competitive odds in the industry, ensuring you get maximum value from your esports bets across all markets.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-casino-gold" />,
    title: "Mobile Betting",
    description:
      "Bet on esports anytime, anywhere with our mobile-optimized platform. Enjoy the full betting experience on your smartphone or tablet.",
  },
  {
    icon: <Shield className="h-10 w-10 text-casino-gold" />,
    title: "Secure Betting",
    description:
      "Your security is our priority. We use advanced encryption technology to protect your personal information and ensure safe transactions.",
  },
]

export default function EsportsFeatures() {
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
            Why Choose <span className="text-casino-gold">E-Sports</span> Betting
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of betting on esports with MMC996, your premier destination for competitive gaming
            wagers
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
          <button className="btn-gold">Start Betting Now</button>
        </motion.div>
      </div>
    </section>
  )
}
