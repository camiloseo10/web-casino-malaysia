import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import LiveCasinoHero from "@/components/live-casino-hero"
import LiveCasinoProviders from "@/components/live-casino-providers"
import LiveCasinoDescription from "@/components/live-casino-description"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function LiveCasinoPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <LiveCasinoHero />
        <LiveCasinoProviders />
        <LiveCasinoDescription />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
