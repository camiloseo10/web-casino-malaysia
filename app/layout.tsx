import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MMC996 - Online Casino Malaysia",
  description: "Malaysia's premier online casino offering slots, live casino, sports betting and more.",
  robots: "noindex, nofollow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-casino-darker text-white`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
