"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function LiveCasinoSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-casino-dark to-casino-darker rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Casino Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the thrill of a real casino from the comfort of your home with our live dealer games.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-casino-card rounded-xl overflow-hidden border-2 border-casino-gold">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baccarat-vip-mmc996-OaZ10aUB4g5D7JP0GgUpGWeqsYVzV8.webp"
                alt="Baccarat VIP"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Baccarat VIP</h3>
              <p className="text-gray-400 text-sm">Evolution Gaming</p>
            </div>
          </div>

          <div className="bg-casino-card rounded-xl overflow-hidden border-2 border-casino-gold">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roulette-pro-mmc996-0zK3D9cLBIp2gIpvbid09s2U7iiL9V.webp"
                alt="Roulette Pro"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Roulette Pro</h3>
              <p className="text-gray-400 text-sm">Playtech</p>
            </div>
          </div>

          <div className="bg-casino-card rounded-xl overflow-hidden border-2 border-casino-gold">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackjack-elite-mmc996-OCSYHzLT3NPKmZXgUOhU4pDl5F4BZl.webp"
                alt="Blackjack Elite"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Blackjack Elite</h3>
              <p className="text-gray-400 text-sm">SA Gaming</p>
            </div>
          </div>

          <div className="bg-casino-card rounded-xl overflow-hidden border-2 border-casino-gold">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sic-bo-master-mmc996-HizPciIDIZLXTPHMqJ5WG5H9cCnh1F.webp"
                alt="Sic Bo Master"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Sic Bo Master</h3>
              <p className="text-gray-400 text-sm">Ezugi</p>
            </div>
          </div>

          <div className="bg-casino-card rounded-xl overflow-hidden border-2 border-casino-gold">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dragon-tiger-mmc996-fJxDUkdSfN3dtIsyOEjImGdqmcowqL.webp"
                alt="Dragon Tiger"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Dragon Tiger</h3>
              <p className="text-gray-400 text-sm">Evolution Gaming</p>
            </div>
          </div>

          <div className="bg-casino-card rounded-xl overflow-hidden border-2 border-casino-gold">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/live-poker-mmc996-Kv4GCF9tV5Y5kWEXVjT9QL1m1pSzwz.webp"
                alt="Live Poker"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="bg-casino-gold hover:bg-casino-darkgold text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Live Poker</h3>
              <p className="text-gray-400 text-sm">Playtech</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/livecasino"
            className="inline-block bg-transparent border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            View All Live Games
          </a>
        </div>
      </div>
    </section>
  )
}
