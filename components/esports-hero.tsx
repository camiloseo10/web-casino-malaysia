"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function EsportsHero() {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4">
      {/* Fondo con efecto de lujo */}
      <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=700&width=1400')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-casino-gold/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-casino-gold">E-Sports</span> Betting
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Bet on your favorite teams and players across the most popular competitive gaming tournaments worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="btn-red">Bet Now</button>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-md h-[200px] md:h-[300px] overflow-hidden rounded-lg border-2 border-casino-gold/50 shadow-lg shadow-casino-gold/20">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="E-Sports Betting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="inline-block bg-casino-gold text-black font-bold px-4 py-2 rounded-md">
                Get 100% Welcome Bonus
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
