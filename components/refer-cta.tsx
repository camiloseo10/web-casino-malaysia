import Link from "next/link"
import { Users, ArrowRight } from "lucide-react"

export default function ReferCta() {
  return (
    <div className="bg-casino-darker py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-casino-card to-casino-dark border border-casino-gold/30 rounded-xl p-8 md:p-12 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-casino-gold/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-casino-gold/5 rounded-full -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <div className="inline-flex items-center justify-center bg-casino-gold/20 rounded-full px-4 py-1 mb-4">
                <Users className="h-5 w-5 text-casino-gold mr-2" />
                <span className="text-sm font-medium text-casino-gold">Start Referring Today</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to <span className="text-casino-gold">Boost</span> Your Earnings?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Join our Refer A Friend program today and start earning commissions on your friends' gameplay. The more
                friends you refer, the more you earn!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="btn-gold px-8 py-3 text-lg font-medium flex items-center justify-center">
                Get My Referral Link
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-transparent border border-casino-gold text-casino-gold hover:bg-casino-gold/10 transition-all duration-300 rounded-md px-8 py-3 text-lg font-medium text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
