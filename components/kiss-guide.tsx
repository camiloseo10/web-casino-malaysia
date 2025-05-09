"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function KissGuide() {
  return (
    <section className="py-16 bg-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-casino-gold">918KISS</span> Beginner's Guide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know to get started with 918KISS mobile casino
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Getting Started with 918KISS</h3>

            <div className="space-y-4 mb-8">
              <p className="text-gray-300">
                918KISS is a popular mobile casino gaming application available for Android and iOS devices. You can
                download the APK file directly from our website and install it on your smartphone or tablet.
              </p>
              <p className="text-gray-300">
                The app offers a wide variety of slot games with engaging themes and high-quality graphics. You'll find
                classic fruit machines alongside modern video slots featuring multiple paylines and bonus features.
              </p>
              <p className="text-gray-300">
                To start playing, simply create an account or log in with your existing credentials. Once logged in, you
                can make a deposit and start enjoying your favorite games.
              </p>
            </div>

            <h4 className="text-xl font-bold mb-4 text-white">Tips for New Players</h4>

            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-casino-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Start with smaller bets to get familiar with the games before increasing your wager
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-casino-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Take advantage of welcome bonuses and promotions to maximize your playing time
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-casino-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">Set a budget and stick to it to ensure responsible gambling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-casino-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Try the free play mode to learn game mechanics before playing with real money
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-casino-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Join our community forums to learn tips and strategies from experienced players
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-casino-gold/30">
                <Image src="/placeholder.svg?height=400&width=300" alt="918KISS Guide" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Ready to Play?</h4>
                  <p className="text-gray-300 mb-4">Download 918KISS now and claim your welcome bonus</p>
                  <button className="btn-red w-full">Download Now</button>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-casino-gold text-black text-sm font-bold px-4 py-2 rounded-md transform rotate-6">
                MYR 918 BONUS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
