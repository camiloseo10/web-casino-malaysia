import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import LiveCasinoSection from "@/components/live-casino-section"
import SlotGamesSection from "@/components/slot-games-section"
import WelcomeVideoSection from "@/components/welcome-video-section"
import Footer from "@/components/footer"

export default function SidebarExamplePage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <HeroSection />
        <LiveCasinoSection />
        <SlotGamesSection />
        <WelcomeVideoSection />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
