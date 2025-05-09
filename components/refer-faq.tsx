"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I get my referral link?",
    answer:
      "Log in to your MMC996 account, navigate to the 'Refer A Friend' section, and you'll find your unique referral link ready to be copied and shared.",
  },
  {
    question: "When and how are commissions paid?",
    answer:
      "Commissions are calculated daily based on your referrals' turnover and are credited directly to your MMC996 account. You can withdraw these earnings at any time, subject to our standard withdrawal terms.",
  },
  {
    question: "Is there a limit to how many friends I can refer?",
    answer:
      "No, there is no limit to the number of friends you can refer. The more friends you refer, the more potential earnings you can generate through our multi-tier commission structure.",
  },
  {
    question: "Do my referrals need to make a deposit to be counted?",
    answer:
      "Yes, your referrals need to register using your link and make at least one deposit to be counted in your referral network. Only active players generate commissions.",
  },
  {
    question: "How long will I earn commissions from my referrals?",
    answer:
      "You will earn commissions from your referrals for as long as they remain active players at MMC996. This is a lifetime commission structure with no expiration date.",
  },
  {
    question: "Can I track my referrals and earnings?",
    answer:
      "Yes, you can track all your referrals and earnings in real-time through your MMC996 account dashboard. The dashboard provides detailed information about your network's activity and your commission earnings.",
  },
]

export default function ReferFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-casino-dark py-16 md:py-24 border-t border-casino-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-casino-gold">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our Refer A Friend program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-casino-gold/30 rounded-lg overflow-hidden bg-casino-card">
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-casino-gold transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
