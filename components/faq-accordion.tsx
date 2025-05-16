"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

export default function FaqAccordion() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: t("What is MMC996"),
      answer: t("MMC996 is Malaysia's premier online casino platform offering a wide range of games including slots, live casino, sports betting, and more. We provide a secure and entertaining gaming experience with 24/7 customer support and various payment options."),
      category: "general",
    },
    {
      question: t("Is MMC996 legal and licensed?"),
      answer: t("Yes, MMC996 operates under a valid gaming license and complies with all relevant regulations. We maintain strict standards of fair play and responsible gaming, ensuring a safe environment for all our players."),
      category: "general",
    },
    {
      question: t("How do I create an account?"),
      answer: t("Creating an account is simple. Click the 'Join Now' button at the top of the page, fill in your personal details, verify your email address, and set up your security questions. The entire process takes just a few minutes."),
      category: "account",
    },
    {
      question: t("I forgot my password. How can I reset it?"),
      answer: t("If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password. For security reasons, password reset links expire after 24 hours."),
      category: "account",
    },
    {
      question: t("What payment methods are available?"),
      answer: t("We offer a variety of payment methods including credit/debit cards (Visa, Mastercard), e-wallets (Skrill, Neteller), bank transfers, and cryptocurrency options. All transactions are secure and encrypted to protect your financial information."),
      category: "payments",
    },
    {
      question: t("How long do withdrawals take to process?"),
      answer: t("Withdrawal processing times vary depending on the method. E-wallets typically process within 24 hours, while bank transfers may take 3-5 business days. VIP members enjoy expedited withdrawals. All withdrawal requests are subject to security verification."),
      category: "payments",
    },
    {
      question: t("What types of games do you offer?"),
      answer: t("MMC996 offers a wide range of games including online slots, live dealer games, table games (like blackjack and roulette), sports betting, and virtual sports. We partner with top game providers to ensure high-quality graphics and gameplay."),
      category: "games",
    },
    {
      question: t("Are the games fair and random?"),
      answer: t("Yes, all our games use Random Number Generators (RNG) to ensure fair and random outcomes. We are regularly audited by independent third-party organizations to verify the integrity of our games."),
      category: "games",
    },
    {
      question: t("How do I claim welcome bonuses?"),
      answer: t("To claim your welcome bonus, create an account and make your first deposit. The bonus will be automatically credited to your account. Make sure to check the terms and conditions for wagering requirements and eligible games."),
      category: "bonuses",
    },
    {
      question: t("What are the wagering requirements for bonuses?"),
      answer: t("Wagering requirements vary by bonus. Generally, you must wager the bonus amount a certain number of times before you can withdraw any winnings. For example, if you receive a $100 bonus with a 30x wagering requirement, you must wager $3,000 before cashing out."),
      category: "bonuses",
    },
    {
      question: t("What measures do yo have for responsible gaming?"),
      answer: t("We are committed to responsible gaming. We provide tools for players to set deposit limits, self-exclude, and take breaks. Our customer support team is available 24/7 to assist with any concerns related to responsible gaming."),
      category: "security",
    },
    {
      question: t("How do you protect my personal information?"),
      answer: t("We use advanced encryption technology to protect your personal and financial information. Our platform is regularly audited by independent security firms to ensure compliance with industry standards."),
      category: "security",
    },
  ]

  const filteredFaqs = faqItems.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="bg-casino-darker py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder={t("Search for questions...")}
              className="w-full bg-casino-dark border border-casino-gold/30 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-casino-gold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-casino-gold h-5 w-5" />
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-casino-dark rounded-lg overflow-hidden border border-casino-gold/30">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-casino-gold" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-casino-gold" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">{t("faq.noResults")}</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4">{t("Still have questions?")}</p>
          <a
            href="/contact"
            className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors inline-block"
          >
            {t("Contact Our Support Team")}
          </a>
        </motion.div>
      </div>
    </div>
  )
}
