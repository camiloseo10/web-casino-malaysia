import Image from "next/image"
import Link from "next/link"
import { Users, Gift, TrendingUp } from "lucide-react"

export default function ReferHero() {
  return (
    <div className="relative overflow-hidden bg-casino-dark border-b border-casino-gold/30">
      {/* Fondo con efecto de partículas */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-casino-gold/20 rounded-full px-3 py-1 text-sm font-medium text-casino-gold mb-4">
              EXCLUSIVE PROGRAM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-casino-gold">Refer</span> Your Friends,{" "}
              <span className="text-casino-gold">Earn</span> Together
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Invite your friends to join MMC996 and earn up to <span className="text-casino-gold font-bold">0.3%</span>{" "}
              commission on their turnover. The more friends you refer, the more you earn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#refer-program" className="btn-gold text-center px-8 py-3 text-lg font-medium">
                Start Earning Now
              </Link>
              <Link
                href="#how-it-works"
                className="bg-transparent border border-casino-gold text-casino-gold hover:bg-casino-gold/10 transition-all duration-300 rounded-md px-8 py-3 text-lg font-medium text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Efectos de luz/glow contenidos dentro del contenedor */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-casino-gold/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-casino-gold/10 rounded-full blur-2xl -z-0"></div>

              {/* Contenedor de la imagen con posición relativa */}
              <div className="relative z-10 p-4">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Refer A Friend Program"
                  width={500}
                  height={400}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-casino-card border border-casino-gold/20 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-casino-gold/50">
            <div className="bg-casino-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-casino-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Unlimited Referrals</h3>
            <p className="text-gray-400">
              No limit on how many friends you can refer. More referrals mean more earnings.
            </p>
          </div>
          <div className="bg-casino-card border border-casino-gold/20 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-casino-gold/50">
            <div className="bg-casino-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-casino-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Rewards</h3>
            <p className="text-gray-400">Commissions are credited directly to your account. No waiting period.</p>
          </div>
          <div className="bg-casino-card border border-casino-gold/20 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-casino-gold/50">
            <div className="bg-casino-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-casino-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lifetime Commission</h3>
            <p className="text-gray-400">Earn commission for as long as your referred friends play on MMC996.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
