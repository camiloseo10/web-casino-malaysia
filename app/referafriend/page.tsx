import ReferHero from "@/components/refer-hero"
import ReferProgram from "@/components/refer-program"
import ReferSteps from "@/components/refer-steps"
import ReferVideo from "@/components/refer-video"
import ReferFaq from "@/components/refer-faq"
import ReferCta from "@/components/refer-cta"
import Footer from "@/components/footer"

export default function ReferAFriendPage() {
  return (
    <div className="min-h-screen bg-casino-darker">
      <ReferHero />
      <ReferProgram />
      <ReferSteps />
      <ReferVideo />
      <ReferFaq />
      <ReferCta />
      <Footer />
    </div>
  )
}
