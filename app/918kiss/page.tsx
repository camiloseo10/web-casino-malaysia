import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import KissHero from "@/components/kiss-hero"
import KissDownload from "@/components/kiss-download"
import KissFeatures from "@/components/kiss-features"
import KissGames from "@/components/kiss-games"
import KissFAQ from "@/components/kiss-faq"
import KissGuide from "@/components/kiss-guide"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function KissPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <KissHero />
        <KissDownload />
        <KissFeatures />
        <KissGames />
        <KissFAQ />
        <KissGuide />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
