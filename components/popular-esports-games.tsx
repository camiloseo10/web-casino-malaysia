"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const esportsGames = [
  {
    id: "dota2",
    name: "Dota 2",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Dota 2 is a multiplayer online battle arena (MOBA) game where two teams of five players compete to destroy the opposing team's Ancient, a large structure within their base.",
    tournaments: ["The International", "ESL One", "DreamLeague", "ONE Esports Singapore Major"],
    teams: ["Team Secret", "PSG.LGD", "Evil Geniuses", "OG", "Team Liquid"],
  },
  {
    id: "lol",
    name: "League of Legends",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "League of Legends is a team-based strategy game where two teams of five champions face off to destroy the other's base. Players control a champion with unique abilities and battle against a team of other players or AI-controlled units.",
    tournaments: ["World Championship", "Mid-Season Invitational", "LCS", "LEC", "LCK"],
    teams: ["T1", "DWG KIA", "G2 Esports", "Cloud9", "Royal Never Give Up"],
  },
  {
    id: "csgo",
    name: "CS:GO",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Counter-Strike: Global Offensive is a first-person shooter where two teams, Terrorists and Counter-Terrorists, compete in different game modes to complete objectives or eliminate the enemy team.",
    tournaments: ["Major Championships", "ESL Pro League", "BLAST Premier", "IEM Katowice"],
    teams: ["Natus Vincere", "Astralis", "Team Vitality", "Gambit Esports", "Heroic"],
  },
  {
    id: "valorant",
    name: "Valorant",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Valorant is a tactical first-person shooter where two teams of five players compete to plant or defuse a bomb, known as the Spike. Each player selects an agent with unique abilities to help their team accomplish the objective.",
    tournaments: ["Valorant Champions Tour", "Masters", "Challengers", "First Strike"],
    teams: ["Sentinels", "Vision Strikers", "Fnatic", "Team Liquid", "100 Thieves"],
  },
  {
    id: "pubg",
    name: "PUBG",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "PlayerUnknown's Battlegrounds is a battle royale game where up to 100 players parachute onto an island, scavenge for weapons and equipment, and fight to be the last person or team standing as the playable area shrinks.",
    tournaments: ["PUBG Global Championship", "PUBG Continental Series", "PUBG Nations Cup"],
    teams: ["Gen.G", "4AM", "Infantry", "Soniqs", "Virtus.pro"],
  },
  {
    id: "overwatch",
    name: "Overwatch",
    logo: "/placeholder.svg?height=60&width=60",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Overwatch is a team-based multiplayer first-person shooter where players select from a roster of heroes, each with unique abilities, and work together to secure and defend control points or escort a payload across the map.",
    tournaments: ["Overwatch League", "Overwatch Contenders", "Overwatch World Cup"],
    teams: ["Shanghai Dragons", "Dallas Fuel", "San Francisco Shock", "Seoul Dynasty", "Florida Mayhem"],
  },
]

export default function PopularEsportsGames() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

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
            Popular <span className="text-casino-gold">E-Sports</span> Games
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bet on the most popular competitive gaming titles with extensive markets and competitive odds
          </p>
        </motion.div>

        <Tabs defaultValue="dota2" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-transparent mb-8">
            {esportsGames.map((game) => (
              <TabsTrigger
                key={game.id}
                value={game.id}
                className="bg-casino-card border border-casino-gold/30 hover:border-casino-gold data-[state=active]:bg-casino-gold data-[state=active]:text-black"
              >
                {game.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {esportsGames.map((game) => (
            <TabsContent key={game.id} value={game.id}>
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative h-[250px] rounded-lg overflow-hidden border border-casino-gold/30 hover:border-casino-gold transition-all duration-300"
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center">
                    <div className="h-12 w-12 relative mr-3">
                      <Image src={game.logo || "/placeholder.svg"} alt={game.name} fill className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                  </div>
                  {hoveredGame === game.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="btn-gold transform hover:scale-105 transition-transform duration-300">
                        Bet Now
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-gray-300 mb-6">{game.description}</p>
                  <div className="mb-6">
                    <h4 className="text-casino-gold font-bold mb-3">Major Tournaments:</h4>
                    <ul className="space-y-2">
                      {game.tournaments.map((tournament, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="inline-block w-2 h-2 bg-casino-gold rounded-full mr-2"></span>
                          {tournament}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-casino-gold font-bold mb-3">Top Teams:</h4>
                    <div className="flex flex-wrap gap-2">
                      {game.teams.map((team, index) => (
                        <span
                          key={index}
                          className="inline-block bg-casino-card border border-casino-gold/30 px-3 py-1 rounded-full text-sm"
                        >
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-red">Bet on {game.name}</button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
