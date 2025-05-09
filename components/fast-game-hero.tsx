"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FastGameHero() {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/fastgame-hero.webp"
          alt="Fast Games Background"
          fill
          className="object-cover object-center"
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-casino-gold/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-casino-gold">Fast Games</span> for Quick Wins
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience the thrill of instant gameplay with massive rewards in minutes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="btn-red">Play Now</button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 right-8 z-20 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] overflow-hidden rounded-full border-4 border-casino-gold/70 shadow-lg shadow-casino-gold/30">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fastgame-hero-win-kbysjoxGWJzavQaqe8G3pzkPKQI2Ll.webp"
              alt="Fast Games Jackpot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 bg-casino-gold text-black font-bold px-3 py-1.5 rounded-full text-center text-sm md:text-base shadow-md">
            Win in Minutes!
          </div>
        </motion.div>
      </div>
    </div>
  )
}
