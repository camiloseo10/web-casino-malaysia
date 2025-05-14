"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ContactFaq() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: "How can I create an account?",
      answer:
        "Creating an account is easy! Click on the 'Join Now' button at the top of the page, fill in your details, and follow the verification process. Once completed, you can start playing immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards (Visa, Mastercard), e-wallets (Skrill, Neteller), bank transfers, and cryptocurrency. All transactions are secure and encrypted.",
    },
    {
      question: "How long do withdrawals take to process?",
      answer:
        "Withdrawal processing times vary depending on the method. E-wallets are typically processed within 24 hours, while bank transfers may take 3-5 business days. VIP members enjoy expedited withdrawals.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take security very seriously. We use advanced encryption technology to protect all personal and financial information. Our platform is regularly audited by independent security firms.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "If you forget your password, simply click on the 'Forgot Password' link on the login page. We'll send you instructions to reset your password to your registered email address.",
    },
    {
      question: "How do I claim bonuses and promotions?",
      answer:
        "To claim bonuses, visit our Promotions page, select the bonus you want, and follow the instructions. Some bonuses are automatically credited, while others may require a bonus code or contacting support.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-4 py-12 bg-casino-darker">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact-form"
            className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-6 rounded-full hover:bg-casino-gold hover:text-black transition-colors inline-block"
          >
            Contact Our Support Team
          </a>
        </div>
      </motion.div>
    </div>
  )
}
