"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

type ContactHeroProps = {
  backgroundImage?: string
  title?: string
  subtitle?: string
}

export default function ContactHero({
  backgroundImage = "/images/contact-casino.png",
  title,
  subtitle,
}: ContactHeroProps) {
  const { t } = useLanguage()

  const displayTitle = title || (
    <>
      <span className="text-casino-gold">24/7</span> {t("contact.hero.title")}
    </>
  )

  const displaySubtitle = subtitle || t("contact.hero.subtitle")

  return (
    <div className="relative bg-casino-dark rounded-lg overflow-hidden mx-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-casino-dark via-casino-dark/80 to-casino-dark"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>

      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-4 text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayTitle}
        </motion.h1>

        <motion.p
          className="max-w-xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {displaySubtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact-form"
            className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors"
          >
            {t("contact.hero.cta.contact")}
          </a>
          <a
            href="#live-chat"
            className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors"
          >
            {t("contact.hero.cta.livechat")}
          </a>
        </motion.div>
      </div>
    </div>
  )
}