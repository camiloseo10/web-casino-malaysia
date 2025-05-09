import { Diamond, Club, Heart, Spade } from "lucide-react"

export default function VipProgress() {
  return (
    <section className="py-16 bg-casino-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block px-8 py-3 border-2 border-casino-gold rounded-full bg-casino-dark">
            <h2 className="text-xl font-bold text-white">CURRENT LEVEL</h2>
          </div>
        </div>

        <div className="relative mb-16">
          {/* Barra de progreso */}
          <div className="h-2 bg-gray-800 rounded-full">
            <div className="h-2 bg-gradient-to-r from-casino-gold to-yellow-500 rounded-full w-1/5"></div>
          </div>

          {/* Niveles */}
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <div className="w-8 h-8 bg-casino-dark border-2 border-casino-gold rounded-full flex items-center justify-center mx-auto">
                <span className="text-casino-gold font-bold">N</span>
              </div>
              <p className="text-white text-xs mt-2">Normal</p>
              <p className="text-gray-400 text-xs">0 - 50K</p>
            </div>

            <div className="text-center">
              <div className="w-8 h-8 bg-casino-dark border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto">
                <Diamond className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-400 text-xs mt-2">Diamond</p>
              <p className="text-gray-500 text-xs">50K - 400K</p>
            </div>

            <div className="text-center">
              <div className="w-8 h-8 bg-casino-dark border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto">
                <Club className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-400 text-xs mt-2">Club</p>
              <p className="text-gray-500 text-xs">400K - 1M</p>
            </div>

            <div className="text-center">
              <div className="w-8 h-8 bg-casino-dark border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-400 text-xs mt-2">Heart</p>
              <p className="text-gray-500 text-xs">1M - 4M</p>
            </div>

            <div className="text-center">
              <div className="w-8 h-8 bg-casino-dark border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto">
                <Spade className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-400 text-xs mt-2">Spade</p>
              <p className="text-gray-500 text-xs">4M & Above</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
