"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown } from "lucide-react"

const categories = [
  { id: "all", name: "All Promotions" },
  { id: "welcome", name: "Welcome Bonus" },
  { id: "rebate", name: "Rebate" },
  { id: "birthday", name: "Birthday Bonanza" },
  { id: "special", name: "Special Bonus" },
  { id: "important", name: "Important Notice" },
  { id: "mcoin", name: "M Coins" },
  { id: "riskfree", name: "Risk Free" },
]

export default function PromotionFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showCategories, setShowCategories] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="bg-casino-dark rounded-lg border border-casino-gold/30 overflow-hidden">
      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search promotions..."
            className="w-full bg-casino-darker border border-casino-gold/30 rounded-md py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-casino-gold/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-casino-gold text-black p-1 rounded-md">
            <Filter className="h-3 w-3" />
          </button>
        </div>

        <div className="border-t border-casino-gold/30 pt-4">
          <button
            className="flex items-center justify-between w-full text-white font-medium"
            onClick={() => setShowCategories(!showCategories)}
          >
            <span className="text-casino-gold">Filter by Category</span>
            <ChevronDown
              className={`h-5 w-5 text-casino-gold transition-transform duration-300 ${
                showCategories ? "rotate-180" : ""
              }`}
            />
          </button>

          {showCategories && (
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? "bg-casino-gold text-black font-medium"
                      : "text-gray-300 hover:bg-casino-gold/10 hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
