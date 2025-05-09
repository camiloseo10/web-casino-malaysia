"use client"

import { motion } from "framer-motion"

export default function PokerDescription() {
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
            What is <span className="text-casino-gold">Kaiyan</span> Gaming?
          </h2>
        </motion.div>

        <motion.div
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-6">
            A Malaysian P2P poker that features several unique games like Capsa Susun, Bull Bull, Dragon Tiger, and 3
            pictures. The game's popularity in the country is mainly because an excellent online poker platform gives
            the opportunity to users more than just entertainment but also a chance to earn money.
          </p>

          <p className="text-gray-300 mb-6">
            Kaiyan Malaysia is a popular card game in the country that is played with a 52-card deck. The main objective
            of the game is to make the best hand possible. There are several possible hands in poker, like straight,
            flush, which include a pair, two pair, three of a kind, straight, full house, straight flush, and a royal
            flush.
          </p>

          <p className="text-gray-300 mb-6">
            The game is played with a standard deck of 52 cards. The cards are ranked from highest to lowest: Ace, King,
            Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3, 2. Suits are clubs, diamonds, hearts, and spades, with no suit being
            higher than another.
          </p>

          <p className="text-gray-300 mb-6">
            After all the bets have been placed, the flop, turn, and river are revealed one after the other by the
            dealer. The goal of a poker player is to come up with the highest hand possible out of the five community
            cards and the two hole cards in their hand.
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
