"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download, Shield, Smartphone, Monitor, Settings, HelpCircle, LogIn } from "lucide-react"

export default function DownloadGuide() {
  return (
    <section className="py-16 bg-gradient-to-b from-casino-darker to-casino-dark rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download <span className="text-casino-gold">Guide</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to download and install our casino clients on your device
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                  <LogIn className="h-6 w-6 text-casino-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Step 1: Login or Register</h3>
                  <p className="text-gray-300">
                    Login to your MMC996 account or register if you don't have an account yet. This is required to
                    access our download links.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                  <Download className="h-6 w-6 text-casino-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Step 2: Download the Client</h3>
                  <p className="text-gray-300">
                    Choose your preferred game client and platform, then click the "Download Now" button to start the
                    download process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                  <Settings className="h-6 w-6 text-casino-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Step 3: Install the Application</h3>
                  <p className="text-gray-300">
                    For Android users, you may need to allow installation from unknown sources. For iOS users, follow
                    the on-screen instructions to trust the developer.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-casino-gold/20 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-casino-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Step 4: Login and Play</h3>
                  <p className="text-gray-300">
                    Open the installed application, login with your MMC996 credentials, and start enjoying your favorite
                    casino games.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">System Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-casino-card p-4 rounded-lg border border-casino-gold/30">
                  <div className="flex items-center mb-2">
                    <Monitor className="h-5 w-5 text-casino-gold mr-2" />
                    <h4 className="font-bold text-white">Windows</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>Windows 7 or higher</li>
                    <li>2GB RAM minimum</li>
                    <li>500MB free disk space</li>
                    <li>Internet connection</li>
                  </ul>
                </div>
                <div className="bg-casino-card p-4 rounded-lg border border-casino-gold/30">
                  <div className="flex items-center mb-2">
                    <Smartphone className="h-5 w-5 text-casino-gold mr-2" />
                    <h4 className="font-bold text-white">Mobile</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>Android 5.0 or higher</li>
                    <li>iOS 11.0 or higher</li>
                    <li>100MB free storage</li>
                    <li>Internet connection</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="relative h-[500px] rounded-lg overflow-hidden border border-casino-gold/30">
                <Image src="/placeholder.svg?height=500&width=350" alt="Download Guide" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Need Help?</h4>
                  <p className="text-gray-300 mb-4">
                    Our support team is available 24/7 to assist you with any download or installation issues
                  </p>
                  <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 w-full flex items-center justify-center">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </button>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-casino-gold text-black text-sm font-bold px-4 py-2 rounded-md transform rotate-6">
                24/7 SUPPORT
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
