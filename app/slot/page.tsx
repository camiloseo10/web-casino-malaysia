import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import SlotHero from "@/components/slot-hero"
import SlotProviders from "@/components/slot-providers"
import SlotDescription from "@/components/slot-description"
import PopularSlotGames from "@/components/popular-slot-games"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function SlotPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <SlotHero />
        <SlotProviders />
        <PopularSlotGames />
        <SlotDescription />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
