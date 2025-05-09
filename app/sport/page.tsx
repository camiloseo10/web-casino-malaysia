import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import SportHero from "@/components/sport-hero"
import SportProviders from "@/components/sport-providers"
import SportDescription from "@/components/sport-description"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function SportPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <SportHero />
        <SportProviders />
        <SportDescription />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
