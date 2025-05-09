"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe, ChevronDown } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ms", name: "Bahasa Melayu" },
  { code: "th", name: "ไทย" },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  return (
    <nav className="bg-casino-dark border-b border-casino-gold/30 sticky top-0 z-50">
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
          <div className="hidden md:flex md:items-center md:space-x-4">
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

            <button className="btn-gold">Register</button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-casino-dark" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <p className="text-gray-300 px-3 py-2 text-sm font-medium">Language</p>
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {lang.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-2 pt-4 pb-2">
              <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
                Login
              </button>

              <button className="btn-gold">Register</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
