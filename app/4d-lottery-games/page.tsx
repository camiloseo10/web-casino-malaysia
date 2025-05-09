import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import LotteryHero from "@/components/lottery-hero"
import LuckyNumberSpinner from "@/components/lucky-number-spinner"
import LotteryGames from "@/components/lottery-games"
import DrawResults from "@/components/draw-results"
import LotteryDescription from "@/components/lottery-description"
import GameProviders from "@/components/game-providers"
import Footer from "@/components/footer"

export default function LotteryPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <LotteryHero />
        <LuckyNumberSpinner />
        <LotteryGames />
        <DrawResults />
        <LotteryDescription />
        <GameProviders />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
