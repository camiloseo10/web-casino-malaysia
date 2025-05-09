"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe, ChevronDown, MessageCircle, Download, Calendar, Info } from "lucide-react"

// Menú principal agrupado por categorías
const mainNavItems = [
  { name: "Home", href: "#", icon: null },
  { name: "Sportsbook", href: "#", icon: null },
  { name: "Live Casino", href: "#", icon: null },
  { name: "Slots", href: "#", icon: null },
  {
    name: "Games",
    href: "#",
    icon: <ChevronDown className="ml-1 h-4 w-4" />,
    submenu: [
      { name: "Poker", href: "#", icon: null },
      { name: "4D", href: "#", icon: null },
      { name: "Fast Game", href: "#", icon: null },
      { name: "E-Sports", href: "#", icon: null },
      { name: "918Kiss", href: "#", icon: null },
      { name: "Pussy888", href: "#", icon: null },
    ],

  },
  { name: "Promotions", href: "#", icon: null },
  {
    name: "More",
    href: "#",
    icon: <ChevronDown className="ml-1 h-4 w-4" />,
    submenu: [
      { name: "Downloads", href: "#", icon: <Download className="mr-2 h-4 w-4" /> },
      { name: "Events", href: "#", icon: <Calendar className="mr-2 h-4 w-4" /> },
    ],
  },
]

// Menú de contacto/soporte
const contactItems = [
  { name: "WhatsApp", href: "#", icon: <MessageCircle className="mr-1 h-4 w-4" /> },
  { name: "WeChat", href: "#", icon: <MessageCircle className="mr-1 h-4 w-4" /> },
]

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ms", name: "Bahasa Melayu" },
  { code: "th", name: "ไทย" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(name)
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
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="nav-link flex items-center" onClick={() => item.submenu && toggleSubmenu(item.name)}>
                  {item.name}
                  {item.icon}
                </button>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-casino-dark ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-casino-gold hover:text-black"
                        >
                          {subitem.icon}
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Contact, Language, Login, Join */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {contactItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-300 hover:text-casino-gold px-2 py-1 text-sm"
              >
                {item.icon}
                <span className="sr-only md:not-sr-only">{item.name}</span>
              </Link>
            ))}

            <div className="relative">
              <button
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe className="mr-1 h-4 w-4" />
                <span className="sr-only md:not-sr-only">Language</span>
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-casino-dark" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavItems.map((item) => (
              <div key={item.name}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {item.submenu && activeSubmenu === item.name && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                      >
                        {subitem.icon}
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 pb-3 border-t border-gray-700">
              <p className="px-3 py-2 text-base font-medium text-gray-400">Contact</p>
              {contactItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
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
