import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import FastGameHero from "@/components/fast-game-hero"
import FastGameProviders from "@/components/fast-game-providers"
import PopularFastGames from "@/components/popular-fast-games"
import FastGameDescription from "@/components/fast-game-description"
import FastGameFeatures from "@/components/fast-game-features"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function FastGamePage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <FastGameHero />
        <FastGameProviders />
        <PopularFastGames />
        <FastGameFeatures />
        <FastGameDescription />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
