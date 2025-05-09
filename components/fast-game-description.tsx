"use client"

import { motion } from "framer-motion"

export default function FastGameDescription() {
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
            Experience the Thrill of <span className="text-casino-gold">Fast Games</span> at MMC996
          </h2>
        </motion.div>

        <motion.div
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-6">
            At MMC996, we understand that sometimes you want the excitement of casino gaming without the extended time
            commitment. That's why we've curated an exceptional collection of fast games that deliver instant thrills
            and rewards in just minutes.
          </p>

          <p className="text-gray-300 mb-6">
            Our fast games category features titles from industry-leading providers like JILI, Pragmatic Play,
            Spadegaming, and Habanero. Each game is designed with stunning graphics, engaging mechanics, and the
            potential for substantial rewards, all packaged in a quick, accessible format.
          </p>

          <p className="text-gray-300 mb-6">
            Whether you're a busy professional looking for quick entertainment during a break, a casual player who
            prefers shorter gaming sessions, or someone who simply enjoys the adrenaline rush of rapid results, our fast
            games collection has something perfect for you.
          </p>

          <p className="text-gray-300 mb-6">
            What sets our fast games apart is not just their speed, but also their variety. From Asian-themed adventures
            to fantasy quests, from simple mechanics to feature-rich experiences, we offer a diverse range that caters
            to all preferences while maintaining the quick, rewarding nature that defines this category.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-gold">Join Now</button>
            <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md text-sm font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
