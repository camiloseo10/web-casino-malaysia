"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 z-10"></div>

        {/* Hero image */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-home-mmc996-B21qsi6XpRHoFvSaiRRyQuk4hz8fjJ.webp"
          alt="Elegant woman at roulette table in luxury casino"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-4 text-center text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-casino-gold">288%</span> {t("home.hero.title")}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-8 text-center text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("home.hero.subtitle")}
        </motion.p>

        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-casino-dark/80 p-3 rounded-full border-2 border-casino-gold mb-2 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-casino-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-base text-center text-white text-shadow-sm">
                {t("home.hero.steps.register")}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-casino-dark/80 p-3 rounded-full border-2 border-casino-gold mb-2 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-casino-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-base text-center text-white text-shadow-sm">
                {t("home.hero.steps.deposit")}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-casino-dark/80 p-3 rounded-full border-2 border-casino-gold mb-2 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-casino-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-base text-center text-white text-shadow-sm">
                {t("home.hero.steps.play")}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-casino-dark/80 p-3 rounded-full border-2 border-casino-gold mb-2 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-casino-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-base text-center text-white text-shadow-sm">
                {t("home.hero.steps.withdraw")}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors">
            {t("home.hero.cta")}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
