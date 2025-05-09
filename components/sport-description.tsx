"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function SportDescription() {
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
            Bet on Sports at <span className="text-casino-gold">MMC996</span>, Your Best Online Betting Malaysia
            Sportsbook Site
          </h2>
        </motion.div>

        <motion.div
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-6">
            We're excited to welcome you to MMC996, your ultimate Online Betting Malaysia Sportsbook site.
          </p>

          <p className="text-gray-300 mb-6">
            We've partnered with top providers like MMCSPORTS, IBC BET, and SBOBET Malaysia to deliver a high-stakes,
            thrilling sports betting experience.
          </p>

          <p className="text-gray-300 mb-6">
            Whether you're new to betting or a seasoned pro, we're here to guide you, providing expert advice and
            real-time betting on a variety of sports.
          </p>

          <p className="text-gray-300 mb-6">
            Ready to win big? Let's dive into the action-packed world of{" "}
            <Link href="#" className="text-casino-gold hover:underline">
              sports betting Malaysia
            </Link>{" "}
            at MMC996.
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
