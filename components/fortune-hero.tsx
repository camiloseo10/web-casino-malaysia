import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function FortuneHero() {
  return (
    <div className="relative bg-casino-dark py-16 overflow-hidden">
      {/* Fondo con efecto de partículas doradas */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-casino-gold/10 via-casino-dark to-casino-darker"></div>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      {/* Contenido del hero */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 text-casino-gold mr-2" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            <span className="text-casino-gold">LUCKY</span> SPIN
          </h1>
          <Sparkles className="h-8 w-8 text-casino-gold ml-2" />
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Spin the wheel of fortune and win amazing prizes! Get up to 3 free spins daily and unlock exclusive rewards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#wheel-section" className="btn-gold px-8 py-3 text-lg font-bold flex items-center">
            <Sparkles className="mr-2 h-5 w-5" />
            SPIN NOW
          </Link>

          <Link
            href="/mission"
            className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-8 py-3 rounded-md text-lg font-bold transition-all duration-300"
          >
            EARN MORE SPINS
          </Link>
        </div>
      </div>
    </div>
  )
}
