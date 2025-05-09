"use client"
import { motion } from "framer-motion"

export default function BaccaratVIP() {
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
            <span className="text-casino-gold">Baccarat</span> VIP Room
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the ultimate luxury with our exclusive high-stakes Baccarat tables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[400px] w-full">
              <img
                src="/images/baccarat-vip-mmc996.webp"
                alt="Baccarat VIP Table"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-casino-gold">Exclusive VIP Experience</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-casino-gold mr-2">✓</span>
                <span>Higher betting limits for serious players</span>
              </li>
              <li className="flex items-start">
                <span className="text-casino-gold mr-2">✓</span>
                <span>Private tables with professional dealers</span>
              </li>
              <li className="flex items-start">
                <span className="text-casino-gold mr-2">✓</span>
                <span>Dedicated VIP host and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-casino-gold mr-2">✓</span>
                <span>Exclusive bonuses and promotions</span>
              </li>
              <li className="flex items-start">
                <span className="text-casino-gold mr-2">✓</span>
                <span>Luxurious gaming environment</span>
              </li>
            </ul>
            <div className="mt-8">
              <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-3 px-8 rounded-md transition-all duration-300">
                Join VIP Room
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
