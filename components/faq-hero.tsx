"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function FaqHero() {
  const { t } = useLanguage()

  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-casino-dark via-casino-dark/80 to-casino-dark"></div>
        <div className="absolute inset-0 bg-[url('/faq-hero-image.png')] bg-cover bg-center opacity-30"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Frequently Asked Questions")}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("Find answers to the most common questions about our services, games, and platform")}
        </motion.p>
      </div>
    </div>
  )
}
