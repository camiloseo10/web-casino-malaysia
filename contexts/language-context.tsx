"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import enTranslations from "@/locales/en.json"
import msTranslations from "@/locales/ms.json"

type Language = "en" | "ms"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: enTranslations,
  ms: msTranslations,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Try to get the language from localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ms")) {
        setLanguage(savedLanguage)
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split("-")[0]
        if (browserLang === "ms") {
          setLanguage("ms")
        }
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    // Si el valor es un objeto, devolvemos la clave para evitar renderizar objetos
    if (typeof value === "object" && value !== null) {
      console.warn(`Translation key "${key}" refers to an object, not a string`)
      return key
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
