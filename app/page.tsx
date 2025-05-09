"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import LiveCasinoSection from "@/components/live-casino-section"
import SlotGamesSection from "@/components/slot-games-section"
import WelcomeVideoSection from "@/components/welcome-video-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"


export default function Home() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>
        <HeroSection />
        <LiveCasinoSection />
        <SlotGamesSection />
        <WelcomeVideoSection />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
