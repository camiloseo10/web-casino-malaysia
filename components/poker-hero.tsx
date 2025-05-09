"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PokerHero() {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poker-hero-tcGiG9XQuDcSoIfLOWJ7mMpTYqNlLC.webp"
          alt="Kaiyan Poker Experience"
          fill
          className="object-cover"
          priority
          unoptimized={true}
        />
      </div>

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-casino-gold/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-casino-gold">Kaiyan</span> Poker
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience the thrill of Malaysia's premier online poker platform with exclusive games and massive rewards
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
              Play Now
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 right-8 z-20 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] overflow-hidden rounded-full border-4 border-casino-gold/70 shadow-lg shadow-casino-gold/30">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bonus-hero-poker-6fBR7F3mSqa19xs48kgfnJsV68eh8c.webp"
              alt="Poker Welcome Bonus"
              fill
              className="object-cover"
              priority
              unoptimized={true}
            />
          </div>
          <div className="mt-2 bg-casino-gold text-black font-bold px-3 py-1.5 rounded-full text-center text-sm md:text-base shadow-md">
            100% Welcome Bonus
          </div>
        </motion.div>
      </div>
    </div>
  )
}
