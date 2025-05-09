"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download } from "lucide-react"

export default function KissDownload() {
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
            Download <span className="text-casino-gold">918KISS</span> APK
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get instant access to hundreds of exciting slot games on your mobile device
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-casino-dark/50 to-casino-darker/50 p-8 rounded-lg border border-casino-gold/30">
              <h3 className="text-2xl font-bold mb-6 text-white">Download Steps</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                    <Download className="h-6 w-6 text-casino-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Download the APK</h4>
                    <p className="text-gray-300">Click the download button to get the latest version of 918KISS APK</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                    <Download className="h-6 w-6 text-casino-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Install the App</h4>
                    <p className="text-gray-300">
                      Allow installation from unknown sources and follow the installation instructions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                    <Download className="h-6 w-6 text-casino-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Register & Play</h4>
                    <p className="text-gray-300">
                      Create an account or log in with your existing credentials and start playing
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                    <Download className="h-6 w-6 text-casino-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Claim Your Bonus</h4>
                    <p className="text-gray-300">
                      New players receive a welcome bonus of up to MYR 918 on their first deposit
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="btn-red flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download for Android
                </button>
                <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download for iOS
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-casino-dark/30 to-casino-darker/30 rounded-3xl border-8 border-casino-dark shadow-lg shadow-casino-gold/20"></div>
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=250"
                  alt="918KISS Mobile App"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-casino-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                NEW VERSION
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
