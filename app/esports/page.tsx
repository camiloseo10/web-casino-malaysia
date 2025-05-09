import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import EsportsHero from "@/components/esports-hero"
import EsportsProviders from "@/components/esports-providers"
import PopularEsportsGames from "@/components/popular-esports-games"
import UpcomingTournaments from "@/components/upcoming-tournaments"
import EsportsFeatures from "@/components/esports-features"
import EsportsBettingGuide from "@/components/esports-betting-guide"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function EsportsPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <EsportsHero />
        <EsportsProviders />
        <PopularEsportsGames />
        <UpcomingTournaments />
        <EsportsFeatures />
        <EsportsBettingGuide />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
