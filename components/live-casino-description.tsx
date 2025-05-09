"use client"

import { motion } from "framer-motion"

export default function LiveCasinoDescription() {
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
            Experience The Best Online <span className="text-casino-gold">Live Casino</span> Malaysia at MMC996, Your
            Trusted Live Casino Gambling Site
          </h2>
        </motion.div>

        <motion.div
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-6">
            Welcome to MMC996, your reliable online live casino in Malaysia. Apart from slot games, MMC996 is also well
            known for providing wonderful gaming options for live dealers best games in the realm of live casino online
            Malaysia.
          </p>

          <p className="text-gray-300 mb-6">
            Our live casino platform brings the authentic casino experience directly to your screen. Interact with
            professional dealers in real-time, enjoy crystal-clear HD streaming, and immerse yourself in the atmosphere
            of a premium casino from the comfort of your home.
          </p>

          <p className="text-gray-300 mb-6">
            We've partnered with the industry's leading providers including Evolution Gaming, Pragmatic Play, and SA
            Gaming to offer you a diverse selection of live dealer games. From classic table games like Baccarat,
            Roulette, and Blackjack to innovative game shows, we have something for every type of player.
          </p>

          <p className="text-gray-300 mb-6">
            Join thousands of satisfied players who trust MMC996 for a secure, fair, and thrilling live casino
            experience. Our platform is optimized for both desktop and mobile play, ensuring you never miss out on the
            action.
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
