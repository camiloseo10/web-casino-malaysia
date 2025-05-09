"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"

const categories = [
  { id: "all", name: "ALL" },
  { id: "game-credit", name: "Game Credit" },
  { id: "hot-deal", name: "Hot Deal" },
  { id: "phone", name: "Phone" },
  { id: "power-bank", name: "Power Bank" },
  { id: "bluetooth-speaker", name: "Bluetooth Speaker" },
]

export default function MCoinFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [priceRange, setPriceRange] = useState(25000)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center">
          <span className="text-gray-300 mr-2">Sort By:</span>
          <select className="bg-casino-card text-white border border-casino-gold/30 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-casino-gold">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Popularity</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center">
            <span className="text-gray-300 mr-2">Range From:</span>
            <div className="relative w-full md:w-auto">
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
                className="w-48 accent-casino-gold"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">0</span>
                <span className="text-xs text-gray-400">50,000</span>
              </div>
              <div className="text-center text-casino-gold font-medium mt-1">{priceRange.toLocaleString()} Points</div>
            </div>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search rewards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 bg-casino-card text-white border border-casino-gold/30 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-casino-gold"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          <button
            className="md:hidden flex items-center gap-2 text-casino-gold"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={16} />
            <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-3 md:grid-cols-6 gap-2 ${showFilters || "hidden md:grid"}`}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md text-center transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-casino-gold text-black font-medium"
                : "bg-casino-card text-gray-300 hover:bg-casino-gold/20"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
