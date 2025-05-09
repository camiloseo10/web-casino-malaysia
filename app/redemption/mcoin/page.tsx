import MCoinHero from "@/components/mcoin-hero"
import MCoinFilter from "@/components/mcoin-filter"
import MCoinProducts from "@/components/mcoin-products"
import MCoinInfo from "@/components/mcoin-info"
import Footer from "@/components/footer"

export default function MCoinPage() {
  return (
    <div className="min-h-screen bg-casino-darker">
      <MCoinHero />
      <div className="container mx-auto px-4 py-8">
        <MCoinFilter />
        <MCoinProducts />
        <MCoinInfo />
      </div>
      <Footer />
    </div>
  )
}
