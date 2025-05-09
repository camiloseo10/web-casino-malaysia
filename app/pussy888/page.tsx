import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import PussyHero from "@/components/pussy-hero"
import PussyDownload from "@/components/pussy-download"
import PussyFeatures from "@/components/pussy-features"
import PussyGames from "@/components/pussy-games"
import PussyFAQ from "@/components/pussy-faq"
import PussyGuide from "@/components/pussy-guide"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function PussyPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <PussyHero />
        <PussyDownload />
        <PussyFeatures />
        <PussyGames />
        <PussyFAQ />
        <PussyGuide />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
