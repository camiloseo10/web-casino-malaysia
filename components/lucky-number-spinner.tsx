"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LuckyNumberSpinner() {
  const [numbers, setNumbers] = useState<number[]>([3, 9, 2, 9])
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinComplete, setSpinComplete] = useState(false)

  const spinNumbers = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setSpinComplete(false)

    // Generate new random numbers
    const newNumbers: number[] = []
    const spinDurations = [2000, 2300, 2600, 2900] // Different durations for each digit

    // Start spinning animation for each digit
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setNumbers((prev) => {
          const newArray = [...prev]
          newArray[i] = Math.floor(Math.random() * 10)
          return newArray
        })

        // Check if this is the last digit to finish spinning
        if (i === 3) {
          setTimeout(() => {
            setIsSpinning(false)
            setSpinComplete(true)
          }, 500)
        }
      }, spinDurations[i])
    }

    // Simulate spinning by changing numbers rapidly
    const spinInterval = setInterval(() => {
      setNumbers((prev) => {
        return prev.map((_, index) => {
          // Only update digits that are still spinning
          if (
            (index === 0 && Date.now() < spinDurations[0]) ||
            (index === 1 && Date.now() < spinDurations[1]) ||
            (index === 2 && Date.now() < spinDurations[2]) ||
            (index === 3 && Date.now() < spinDurations[3])
          ) {
            return Math.floor(Math.random() * 10)
          }
          return prev[index]
        })
      })
    }, 100)

    // Clear the interval after the longest duration
    setTimeout(
      () => {
        clearInterval(spinInterval)
      },
      Math.max(...spinDurations) + 500,
    )
  }

  return (
    <section className="py-12 bg-casino-dark rounded-lg mx-4 my-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-0 w-40 h-40 rounded-full bg-gray-400 blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 w-40 h-40 rounded-full bg-gray-400 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-casino-gold">LUCKY NUMBER OF TODAY</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {numbers.map((number, index) => (
              <div
                key={index}
                className="w-16 h-20 md:w-20 md:h-24 bg-gradient-to-b from-gray-800 to-black border border-casino-gold/50 rounded-lg flex items-center justify-center overflow-hidden relative"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${index}-${number}-${isSpinning}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                  >
                    {number}
                  </motion.span>
                </AnimatePresence>
                {isSpinning && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={spinNumbers}
            disabled={isSpinning}
            className={`px-8 py-2 rounded-md font-bold transition-all duration-300 transform ${
              isSpinning
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-casino-gold text-black hover:bg-casino-darkgold hover:scale-105"
            }`}
          >
            {isSpinning ? "SPINNING..." : "SPIN"}
          </button>

          {spinComplete && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-center">
              <p className="text-casino-gold text-lg">
                Your lucky number is: <span className="font-bold">{numbers.join("")}</span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
