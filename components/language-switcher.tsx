"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => setLanguage("en")}
        className="transition hover:opacity-80 rounded-full mr-[10px]"
        style={language === "en" ? { border: "1px solid #D4AF37" } : {}}
        aria-label="Switch to English"
      >
        <Image
          src="/flags/uk.svg"
          alt="English"
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </button>

      <button
        onClick={() => setLanguage("ms")}
        className="transition hover:opacity-80 rounded-full mr-[20px]"
        style={language === "ms" ? { border: "1px solid #D4AF37" } : {}}
        aria-label="Tukar ke Bahasa Malaysia"
      >
        <Image
          src="/flags/malaysia.svg"
          alt="Malay"
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </button>
    </div>
  )
}
