"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react"

export default function ContactInfo() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      id: "email",
      name: "Email Support",
      value: "support@mmc996.com",
      icon: <Mail className="h-6 w-6 text-casino-gold" />,
      description: "For general inquiries and support",
    },
    {
      id: "phone",
      name: "Phone Support",
      value: "+60 123 456 789",
      icon: <Phone className="h-6 w-6 text-casino-gold" />,
      description: "Available 24/7 for urgent matters",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      value: "+60 123 456 789",
      icon: <MessageCircle className="h-6 w-6 text-casino-gold" />,
      description: "Quick responses via WhatsApp",
    },
    {
      id: "live-chat",
      name: "Live Chat",
      value: "Available 24/7",
      icon: <Clock className="h-6 w-6 text-casino-gold" />,
      description: "Instant support through our live chat",
    },
  ]

  return (
    <motion.div
      className="bg-casino-dark rounded-lg p-6 border border-casino-gold/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

      <div className="space-y-6">
        {contactMethods.map((method) => (
          <div key={method.id} className="flex items-start">
            <div className="flex-shrink-0 bg-casino-card p-3 rounded-full">{method.icon}</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">{method.name}</h3>
              <p className="text-casino-gold font-bold">{method.value}</p>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-casino-card p-3 rounded-full">
            <MapPin className="h-6 w-6 text-casino-gold" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Our Location</h3>
            <p className="text-gray-400">
              MMC996 Headquarters
              <br />
              123 Casino Boulevard
              <br />
              Kuala Lumpur, Malaysia
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <a
          href="#"
          id="live-chat"
          className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-4 rounded-full hover:bg-casino-gold hover:text-black transition-colors text-center"
        >
          Start Live Chat
        </a>
        <a
          href="https://wa.me/60123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-casino-gold text-casino-gold font-bold py-2 px-4 rounded-full hover:bg-casino-gold hover:text-black transition-colors text-center"
        >
          WhatsApp Us
        </a>
      </div>
    </motion.div>
  )
}
