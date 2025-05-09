"use client"

import { useLanguage } from "@/contexts/language-context"

export default function WelcomeSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-casino-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.welcome.title")}</h2>

        <p className="text-gray-300 mb-8 text-lg">{t("home.welcome.description")}</p>

        <button className="btn-gold">{t("home.welcome.cta")}</button>
      </div>
    </section>
  )
}
