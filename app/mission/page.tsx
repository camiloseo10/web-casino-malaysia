import Footer from "@/components/footer"
import MissionHero from "@/components/mission-hero"
import MissionList from "@/components/mission-list"
import MissionRewards from "@/components/mission-rewards"
import MissionRules from "@/components/mission-rules"

export default function MissionPage() {
  return (
    <div className="bg-casino-darker min-h-screen">
      <MissionHero />
      <div className="container mx-auto px-4 py-8">
        <MissionList />
        <MissionRewards />
        <MissionRules />
      </div>
      <Footer />
    </div>
  )
}
