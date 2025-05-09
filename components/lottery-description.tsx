"use client"

import { motion } from "framer-motion"

export default function LotteryDescription() {
  return (
    <section className="py-12 bg-gradient-to-b from-casino-darker to-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-casino-gold">4D Lotto Online Malaysia</span> - Providing Lotto 4D results & GD Lotto
            4D results today
          </h2>
        </motion.div>

        <motion.div
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-6">
            It is very popular that 4D online Malaysia games have its roots in the form of Kuda. People named that the
            4D game was originally started by a schoolboy who decided to raffle his bicycle for a 3-4 ticket, each
            containing four unique digits. This event propelled the concept of 2D lottery where people would purchase
            tickets for the raffle and wait for a favorable draw bonus. Later came 3D lottery, which in turn, gave rise
            to 4D betting games in Southeast Asia.
          </p>

          <p className="text-gray-300 mb-6">
            At MMC996, we offer the most comprehensive and up-to-date 4D lottery results from all major Malaysian
            lottery providers. Our platform allows you to check results, place bets, and participate in various lottery
            games all in one convenient location.
          </p>

          <p className="text-gray-300 mb-6">
            Our 4D lottery platform features games from Magnum, Da Ma Cai, Sports Toto, GD Lotto, Singapore Pools, Sabah
            88, STC 4D, and Special CashSweep. Each provider offers unique prize structures and drawing schedules,
            giving you multiple opportunities to win big every day.
          </p>

          <div className="mt-8 text-center">
            <button className="btn-gold">Start Playing Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
