import VipHero from "@/components/vip-hero"
import VipProgress from "@/components/vip-progress"
import VipProfile from "@/components/vip-profile"
import VipPrivileges from "@/components/vip-privileges"
import VipUpgrade from "@/components/vip-upgrade"
import VipTerms from "@/components/vip-terms"
import Footer from "@/components/footer"

export default function VipPage() {
  return (
    <div className="min-h-screen bg-casino-darker">
      <VipHero />
      <VipProgress />
      <VipProfile />
      <VipPrivileges />
      <VipUpgrade />
      <VipTerms />
      <Footer />
    </div>
  )
}
