"use client"

import { motion } from "framer-motion"

export default function SlotDescription() {
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
            Exciting Online <span className="text-casino-gold">Slot Malaysia</span> for Real Money Games at MMC996
            Casino
          </h2>
        </motion.div>

        <motion.div
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-6">
            Welcome to the exciting world of online slot games at MMC996 Casino! As industry insiders, we've explored
            the best slot games and providers, offering you an edge in your gaming strategy.
          </p>

          <p className="text-gray-300 mb-6">
            From 3-reel slots to progressive jackpots, we'll arm you with insider tips and jargon to boost your chances
            of winning.
          </p>

          <p className="text-gray-300 mb-6">
            Dive in with us and let's conquer the reels together at MMC996, the trusted platform for online slot
            Malaysia.
          </p>

          <p className="text-gray-300 mb-6">
            Our platform features games from the industry's leading providers including Microgaming, Playtech, JILI,
            Pragmatic Play, NextSpin, and Live22. Each provider brings their unique style and innovative features to
            create an unmatched gaming experience.
          </p>

          <p className="text-gray-300 mb-6">
            Whether you're a casual player or a high roller, our diverse selection of slot games caters to all
            preferences and budgets. From classic fruit machines to modern video slots with immersive themes and bonus
            features, there's something for everyone at MMC996.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-gold">Join Now</button>
            <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
