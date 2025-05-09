"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Home,
  BarChart3,
  Dice1Icon as Dice,
  PlaySquare,
  Spade,
  Gamepad2,
  Gift,
  Download,
  MessageCircle,
  Info,
  User,
  LogIn,
  Joystick,
  ClubIcon as Clubs,
  Puzzle,
  Calendar,
  Users,
  Coins,
  Crown,
  Target,
  Sparkles,
} from "lucide-react"

// Estructura del menú lateral con los enlaces exactos de la imagen
const sidebarCategories = [
  {
    name: "HOME",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "SPORTBOOK",
    href: "/sport",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    name: "LIVE CASINO",
    href: "/livecasino",
    icon: <Dice className="h-5 w-5" />,
  },
  {
    name: "SLOT",
    href: "/slot",
    icon: <PlaySquare className="h-5 w-5" />,
  },
  {
    name: "POKER",
    href: "/poker",
    icon: <Spade className="h-5 w-5" />,
  },
  {
    name: "4D",
    href: "/4d-lottery-games",
    icon: <Clubs className="h-5 w-5" />,
  },
  {
    name: "FAST GAME",
    href: "/fastgame",
    icon: <Puzzle className="h-5 w-5" />,
  },
  {
    name: "E-SPORTS",
    href: "/esports",
    icon: <Joystick className="h-5 w-5" />,
  },
  {
    name: "918KISS",
    href: "/918kiss",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "PUSSY888",
    href: "/pussy888",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "PROMOTION",
    href: "/promotion",
    icon: <Gift className="h-5 w-5" />,
  },
  {
    name: "DOWNLOADS",
    href: "/downloads",
    icon: <Download className="h-5 w-5" />,
  },
  {
    name: "EVENT",
    icon: <Calendar className="h-5 w-5" />,
    submenu: [
      { name: "Refer A Friend", href: "/referafriend", icon: <Users className="h-4 w-4 mr-2" /> },
      { name: "M COIN", href: "/redemption/mcoin", icon: <Coins className="h-4 w-4 mr-2" /> },
      { name: "VIP", href: "/vip", icon: <Crown className="h-4 w-4 mr-2" /> },
      { name: "Daily Mission", href: "/mission", icon: <Target className="h-4 w-4 mr-2" /> },
      { name: "Lucky Spin", href: "/reward/fortunewheel", icon: <Sparkles className="h-4 w-4 mr-2" /> },
    ],
  },
]

// Modificado: Solo English y Bahasa Melayu
const languages = [
  { code: "en", name: "English" },
  { code: "ms", name: "Bahasa Melayu" },
]

export default function SidebarMenuLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // Cierra el sidebar al cambiar el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  return (
    <div className="flex h-screen overflow-hidden bg-casino-darker">
      {/* Sidebar para desktop - siempre visible en lg */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-casino-dark border-r border-casino-gold/30">
            <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-casino-dark border-b border-casino-gold/30">
              <Image
  src="/logos/mmc996-casino-logo.png"
  alt="MMC996 Logo"
  className="h-20 w-auto max-w-full object-contain"
/>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {sidebarCategories.map((category) => (
                  <div key={category.name}>
                    {category.submenu ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md group"
                          onClick={() => toggleCategory(category.name)}
                        >
                          <div className="flex items-center">
                            {category.icon}
                            <span className="ml-3">{category.name}</span>
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expandedCategories.includes(category.name) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expandedCategories.includes(category.name) && (
                          <div className="pl-10 space-y-1 mt-1">
                            {category.submenu.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md"
                              >
                                {item.icon}
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={category.href || "#"}
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md group"
                      >
                        {category.icon}
                        <span className="ml-3">{category.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-4 border-t border-casino-gold/30">
                <div className="flex items-center justify-between mb-4">
                  <Link href="#" className="flex items-center text-gray-300 hover:text-casino-gold text-sm">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    <span>WhatsApp</span>
                  </Link>
                  <Link href="#" className="flex items-center text-gray-300 hover:text-casino-gold text-sm">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    <span>WeChat</span>
                  </Link>
                </div>
                <div className="relative">
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md"
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  >
                    <div className="flex items-center">
                      <Globe className="h-5 w-5" />
                      <span className="ml-3">Language</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${languageMenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  {languageMenuOpen && (
                    <div className="mt-2 w-full rounded-md shadow-lg bg-casino-card ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {/* Solo English y Bahasa Melayu */}
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-casino-gold hover:text-black"
                          role="menuitem"
                          onClick={() => setLanguageMenuOpen(false)}
                        >
                          English
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-casino-gold hover:text-black"
                          role="menuitem"
                          onClick={() => setLanguageMenuOpen(false)}
                        >
                          Bahasa Melayu
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar móvil - se muestra con overlay */}
      <div
        className={`fixed inset-0 flex z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-casino-dark">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-casino-dark border-b border-casino-gold/30">
            <Image
              src="/logos/mmc996-casino-logo.png"
              alt="MMC996 Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex-1 h-0 overflow-y-auto">
            <nav className="px-2 py-4 space-y-1">
              {sidebarCategories.map((category) => (
                <div key={category.name}>
                  {category.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md group"
                        onClick={() => toggleCategory(category.name)}
                      >
                        <div className="flex items-center">
                          {category.icon}
                          <span className="ml-3">{category.name}</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedCategories.includes(category.name) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedCategories.includes(category.name) && (
                        <div className="pl-10 space-y-1 mt-1">
                          {category.submenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md"
                            >
                              {item.icon}
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={category.href || "#"}
                      className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-800 rounded-md group"
                    >
                      {category.icon}
                      <span className="ml-3">{category.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 border-t border-casino-gold/30">
              <div className="flex items-center justify-between mb-4">
                <Link href="#" className="flex items-center text-gray-300 hover:text-casino-gold text-sm">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <span>WhatsApp</span>
                </Link>
                <Link href="#" className="flex items-center text-gray-300 hover:text-casino-gold text-sm">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <span>WeChat</span>
                </Link>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="px-3 py-2 text-base font-medium text-gray-400">Language</p>
                {/* Solo English y Bahasa Melayu */}
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                >
                  English
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-casino-gold hover:bg-gray-700 rounded-md"
                >
                  Bahasa Melayu
                </a>
              </div>
              <div className="pt-4 space-y-2">
                <button className="w-full bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </button>
                <button className="w-full btn-red flex items-center justify-center">
                  <User className="mr-2 h-4 w-4" />
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Barra superior para móvil y tablet */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-casino-dark border-b border-casino-gold/30 lg:hidden">
          <button
            type="button"
            className="px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-casino-gold lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-center px-4 lg:px-0">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/logos/mmc996-casino-logo.png"
                alt="MMC996 Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="flex items-center pr-2 sm:pr-4 lg:hidden">
            <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 mr-2">
              Login
            </button>
            <button className="text-gray-300 hover:text-casino-gold p-1">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
      </div>
    </div>
  )
}
