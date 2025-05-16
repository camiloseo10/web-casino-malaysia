"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { CreditCard, Users, Gift, HelpCircle, Shield, Gamepad2 } from "lucide-react"

export default function FaqCategories() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("general")

  const categories = [
    {
      id: "general",
      name: t("General"),
      icon: <HelpCircle className="h-6 w-6" />,
    },
    {
      id: "account",
      name: t("Account"),
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: "payments",
      name: t("Payments"),
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      id: "games",
      name: t("Games"),
      icon: <Gamepad2 className="h-6 w-6" />,
    },
    {
      id: "bonuses",
      name: t("Bonuses"),
      icon: <Gift className="h-6 w-6" />,
    },
    {
      id: "security",
      name: t("Security"),
      icon: <Shield className="h-6 w-6" />,
    },
  ]

  return (
    <div className="bg-casino-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                activeCategory === category.id
                  ? "bg-casino-gold text-black"
                  : "bg-casino-card text-white hover:bg-casino-gold/20"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div
                className={`p-3 rounded-full mb-2 ${activeCategory === category.id ? "bg-black/20" : "bg-casino-dark"}`}
              >
                {category.icon}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
