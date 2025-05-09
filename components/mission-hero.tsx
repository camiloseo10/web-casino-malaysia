import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function MissionHero() {
  return (
    <div className="relative bg-casino-dark overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 opacity-60 z-10"></div>

      {/* Background with casino elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content container */}
      <div className="relative container mx-auto px-4 py-16 sm:py-24 flex flex-col md:flex-row items-center z-20">
        {/* Text section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-casino-gold">DAILY</span> MISSION
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Complete daily missions to earn activity points and unlock exclusive rewards. The more missions you
            complete, the more rewards you earn!
          </p>
          <Link
            href="/lucky-spin"
            className="btn-red inline-flex items-center text-lg px-8 py-3 rounded-md transition-transform hover:scale-105"
          >
            LUCKY SPIN
          </Link>
        </div>

        {/* Visual element */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-casino-gold/20 rounded-full blur-3xl"></div>

            {/* Check mark container */}
            <div className="relative w-full h-full">
              {/* Pulsing border */}
              <div className="absolute top-0 left-0 w-full h-full animate-pulse">
                <div className="w-full h-full rounded-full border-4 border-casino-gold/30"></div>
              </div>

              {/* Check mark */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                <div className="w-full h-full rounded-full bg-casino-gold/20 flex items-center justify-center">
                  <CheckCircle className="text-casino-gold w-32 h-32" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
