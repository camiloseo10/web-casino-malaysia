import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import PromotionHero from "@/components/promotion-hero"
import PromotionFilter from "@/components/promotion-filter"
import PromotionGrid from "@/components/promotion-grid"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function PromotionPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <PromotionHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <PromotionFilter />
            </div>
            <div className="lg:col-span-3">
              <PromotionGrid />
            </div>
          </div>
        </div>
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
