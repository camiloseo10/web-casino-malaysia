"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function KissHero() {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4">
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

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-casino-gold">918KISS</span> Mobile Casino
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Malaysia's hottest mobile slot games with massive jackpots and exciting bonuses
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="btn-red">Download Now</button>
            <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden border border-casino-gold/30">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="918KISS Mobile Casino"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
