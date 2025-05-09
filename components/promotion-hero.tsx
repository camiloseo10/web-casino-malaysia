"use client"

import { motion } from "framer-motion"

export default function PromotionHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4">
      {/* Fondo con efecto de lujo */}
      <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=700&width=1400')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-casino-gold/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-casino-gold/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-casino-gold/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Exclusive <span className="text-casino-gold">Promotions</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-8 text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Boost your gameplay with our generous bonuses and special offers
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="btn-red">Join Now & Claim Bonuses</button>
        </motion.div>
      </div>
    </div>
  )
}
