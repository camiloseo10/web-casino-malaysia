import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import DownloadsHero from "@/components/downloads-hero"
import DownloadsGrid from "@/components/downloads-grid"
import DownloadGuide from "@/components/download-guide"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function DownloadsPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <DownloadsHero />
        <DownloadsGrid />
        <DownloadGuide />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
