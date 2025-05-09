"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Trophy, Users, Clock } from "lucide-react"

const upcomingTournaments = [
  {
    id: 1,
    name: "The International 2023",
    game: "Dota 2",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=200&width=350",
    date: "October 12-29, 2023",
    prize: "$40,000,000",
    teams: 18,
    location: "Seattle, USA",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "League of Legends World Championship",
    game: "League of Legends",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=200&width=350",
    date: "September 25 - November 4, 2023",
    prize: "$2,225,000",
    teams: 24,
    location: "South Korea",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "PGL Major Stockholm",
    game: "CS:GO",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=200&width=350",
    date: "November 10-21, 2023",
    prize: "$2,000,000",
    teams: 24,
    location: "Stockholm, Sweden",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Valorant Champions Tour",
    game: "Valorant",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=200&width=350",
    date: "August 31 - September 17, 2023",
    prize: "$1,000,000",
    teams: 16,
    location: "Los Angeles, USA",
    status: "Live",
  },
]

export default function UpcomingTournaments() {
  const [hoveredTournament, setHoveredTournament] = useState<number | null>(null)

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
            Upcoming <span className="text-casino-gold">Tournaments</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest tournaments and place your bets on the biggest esports events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className="bg-casino-card rounded-lg overflow-hidden border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTournament(tournament.id)}
              onMouseLeave={() => setHoveredTournament(null)}
            >
              <div className="relative h-48">
                <Image
                  src={tournament.image || "/placeholder.svg"}
                  alt={tournament.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center">
                  <div className="h-10 w-10 relative mr-2">
                    <Image
                      src={tournament.logo || "/placeholder.svg"}
                      alt={tournament.game}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-white">{tournament.game}</span>
                </div>
                {tournament.status === "Live" && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative ml-1">LIVE</span>
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{tournament.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2 text-casino-gold" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2 text-casino-gold" />
                    <span>Prize Pool: {tournament.prize}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2 text-casino-gold" />
                    <span>{tournament.teams} Teams</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-2 text-casino-gold" />
                    <span>{tournament.status}</span>
                  </div>
                </div>
                <button className="w-full bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 rounded-md transition-all duration-300">
                  View Markets
                </button>
              </div>

              {hoveredTournament === tournament.id && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="btn-gold transform hover:scale-105 transition-transform duration-300">
                    Bet Now
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="btn-red">View All Tournaments</button>
        </div>
      </div>
    </section>
  )
}
