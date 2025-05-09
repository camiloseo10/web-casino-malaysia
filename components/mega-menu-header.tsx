"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe, ChevronDown, MessageCircle, Info } from "lucide-react"

// Estructura del mega menú
const megaMenuCategories = [
  {
    name: "Casino",
    items: [
      { name: "Live Casino", href: "#", featured: true, image: "/placeholder.svg?height=80&width=120" },
      { name: "Slots", href: "#", featured: true, image: "/placeholder.svg?height=80&width=120" },
      { name: "Poker", href: "#" },
      { name: "4D", href: "#" },
      { name: "Fast Game", href: "#" },
      { name: "918Kiss", href: "#" },
      { name: "Pussy888", href: "#" },
    ],
  },
  {
    name: "Sports",
    items: [
      { name: "Sportsbook", href: "#", featured: true, image: "/placeholder.svg?height=80&width=120" },
      { name: "E-Sports", href: "#", featured: true, image: "/placeholder.svg?height=80&width=120" },
      { name: "Virtual Sports", href: "#" },
      { name: "Horse Racing", href: "#" },
    ],
  },
  {
    name: "Promotions & Support",
    items: [
      { name: "Promotions", href: "#", featured: true, image: "/placeholder.svg?height=80&width=120" },
      { name: "VIP Program", href: "#" },
      { name: "Events", href: "#" },
      { name: "Downloads", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
]

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ms", name: "Bahasa Melayu" },
  { code: "th", name: "ไทย" },
]

export default function MegaMenuHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null)

  const toggleMobileCategory = (name: string) => {
    if (activeMobileCategory === name) {
      setActiveMobileCategory(null)
    } else {
      setActiveMobileCategory(name)
    }
  }

  return (
    <header className="bg-casino-dark border-b border-casino-gold/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="MMC996 Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <button
              className="nav-link flex items-center"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              aria-expanded={megaMenuOpen}
            >
              All Games
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
            </button>
            <Link href="#" className="nav-link">
              Promotions
            </Link>
          </div>

          {/* Right side - Contact, Language, Login, Join */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="#" className="flex items-center text-gray-300 hover:text-casino-gold px-2 py-1 text-sm">
              <MessageCircle className="mr-1 h-4 w-4" />
              <span>Contact</span>
            </Link>

            <div className="relative">
              <button
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe className="mr-1 h-4 w-4" />
                <span>Language</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-casino-dark ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-casino-gold hover:text-black"
                        role="menuitem"
                        onClick={() => setLanguageMenuOpen(false)}
                      >
                        {lang.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-4 py-1 rounded-md text-sm font-medium transition-all duration-300">
              Login
            </button>

            <button className="btn-red">Join Now</button>

            <button className="text-gray-300 hover:text-casino-gold p-1">
              <Info className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-3 py-1 rounded-md text-sm font-medium transition-all duration-300">
              Login
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {megaMenuOpen && (
        <div className="hidden md:block absolute left-0 w-full bg-casino-dark border-b border-casino-gold/30 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              {megaMenuCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-casino-gold font-bold text-lg mb-4">{category.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {category.items
                      .filter((item) => item.featured)
                      .map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group block rounded-lg overflow-hidden bg-casino-card hover:bg-casino-card/80 transition-colors"
                        >
                          <div className="relative h-20">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-2 left-2 text-white font-medium">{item.name}</div>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <ul className="space-y-2">
                    {category.items
                      .filter((item) => !item.featured)
                      .map((item) => (
                        <li key={item.name}>
                          <Link href={item.href} className="text-gray-300 hover:text-casino-gold text-sm">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-casino-dark" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
            >
              Home
            </Link>

            {megaMenuCategories.map((category) => (
              <div key={category.name}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                  onClick={() => toggleMobileCategory(category.name)}
                >
                  <span>{category.name}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeMobileCategory === category.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMobileCategory === category.name && (
                  <div className="pl-4 space-y-1 mt-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
            >
              Promotions
            </Link>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact
              </Link>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <p className="px-3 py-2 text-base font-medium text-gray-400">Language</p>
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                >
                  {lang.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button className="w-full btn-red">Join Now</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
