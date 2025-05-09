"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, LogIn, Monitor, Smartphone, Apple } from "lucide-react"

const downloadClients = [
  {
    id: 1,
    name: "Playtech Slot",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "windows", label: "Download for Windows" }],
  },
  {
    id: 2,
    name: "Playtech Live Casino",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "android", label: "Download for Android" }],
  },
  {
    id: 3,
    name: "Joker Slot",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [
      { type: "android", label: "Download for Android" },
      { type: "ios", label: "Download for iOS" },
    ],
  },
  {
    id: 4,
    name: "Game Play Live Casino",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "android", label: "Download for Android" }],
  },
  {
    id: 5,
    name: "XPro Gaming Live Casino",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "android", label: "Download for Android" }],
  },
  {
    id: 6,
    name: "Dream Gaming Live Casino",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "mobile", label: "Download for Mobile" }],
  },
  {
    id: 7,
    name: "918Kiss Slot",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "mobile", label: "Download for Mobile" }],
  },
  {
    id: 8,
    name: "Mega888 Slot",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [
      { type: "android", label: "Download for Android" },
      { type: "ios", label: "Download for iOS" },
    ],
  },
  {
    id: 9,
    name: "Pussy888 Slot",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "mobile", label: "Download for Mobile" }],
  },
  {
    id: 10,
    name: "QTech Slot",
    image: "/placeholder.svg?height=200&width=350",
    platforms: [{ type: "android", label: "Download for Android" }],
  },
]

export default function DownloadsGrid() {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)
  const [showLoginPrompt, setShowLoginPrompt] = useState<number | null>(null)

  const handleDownloadClick = (clientId: number) => {
    // In a real implementation, you would check if the user is logged in
    // For this demo, we'll just show the login prompt
    setShowLoginPrompt(clientId)
  }

  const getPlatformIcon = (type: string) => {
    switch (type) {
      case "windows":
        return <Monitor className="h-5 w-5" />
      case "android":
        return <Smartphone className="h-5 w-5" />
      case "ios":
        return <Apple className="h-5 w-5" />
      case "mobile":
        return <Smartphone className="h-5 w-5" />
      default:
        return <Download className="h-5 w-5" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        className="text-3xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Download <span className="text-casino-gold">Clients</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloadClients.map((client, index) => (
          <motion.div
            key={client.id}
            className="bg-casino-dark rounded-lg overflow-hidden border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => setHoveredClient(client.id)}
            onMouseLeave={() => setHoveredClient(null)}
          >
            <div className="relative h-48">
              <Image src={client.image || "/placeholder.svg"} alt={client.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{client.name}</h3>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-400 mb-4 text-sm">Kindly login to continue.</p>

              <div className="space-y-3">
                {client.platforms.map((platform, idx) => (
                  <button
                    key={idx}
                    className="flex items-center justify-between w-full bg-casino-darker hover:bg-casino-darker/80 border border-casino-gold/50 text-white px-4 py-2 rounded-md transition-all duration-300 group"
                    onClick={() => handleDownloadClick(client.id)}
                  >
                    <div className="flex items-center">
                      {getPlatformIcon(platform.type)}
                      <span className="ml-2 text-sm">{platform.label}</span>
                    </div>
                    <span className="bg-casino-gold text-black text-xs font-bold px-2 py-1 rounded group-hover:bg-casino-darkgold transition-colors duration-300">
                      Download Now
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {hoveredClient === client.id && showLoginPrompt === client.id && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                <div className="bg-casino-dark p-6 rounded-lg border border-casino-gold max-w-xs w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold text-casino-gold">Login Required</h4>
                    <button
                      className="text-gray-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowLoginPrompt(null)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">Please login or register to download this client.</p>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 rounded-md transition-all duration-300 flex items-center justify-center">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </button>
                    <button className="flex-1 btn-red">Register</button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
