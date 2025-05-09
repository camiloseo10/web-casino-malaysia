import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import PokerHero from "@/components/poker-hero"
import PokerVariants from "@/components/poker-variants"
import PokerDescription from "@/components/poker-description"
import PokerAdvantages from "@/components/poker-advantages"
import PokerFAQ from "@/components/poker-faq"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function PokerPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <PokerHero />
        <PokerVariants />
        <PokerDescription />
        <PokerAdvantages />
        <PokerFAQ />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
