import FortuneHero from "@/components/fortune-hero"
import FortuneWheel from "@/components/fortune-wheel"
import FortunePrizes from "@/components/fortune-prizes"
import FortuneRules from "@/components/fortune-rules"

export default function FortuneWheelPage() {
  return (
    <div className="min-h-screen bg-casino-darker pb-16">
      <FortuneHero />
      <FortuneWheel />
      <FortunePrizes />
      <FortuneRules />
    </div>
  )
}
