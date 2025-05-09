import MegaMenuHeader from "@/components/mega-menu-header"
import HeroSection from "@/components/hero-section"
import LiveCasinoSection from "@/components/live-casino-section"
import SlotGamesSection from "@/components/slot-games-section"
import WelcomeVideoSection from "@/components/welcome-video-section"
import Footer from "@/components/footer"

export default function MegaMenuExamplePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MegaMenuHeader />
      <HeroSection />
      <LiveCasinoSection />
      <SlotGamesSection />
      <WelcomeVideoSection />
      <Footer />
    </main>
  )
}
