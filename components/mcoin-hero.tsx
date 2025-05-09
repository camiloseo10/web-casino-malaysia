import Image from "next/image"

export default function MCoinHero() {
  return (
    <div className="relative bg-casino-dark overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-casino-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] bg-casino-gold/5 rounded-full blur-3xl"></div>
      </div>

      {/* Overlay para consistencia */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-xl">
              <Image src="/placeholder.svg?height=60&width=150" alt="MMC996" width={150} height={60} className="mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                <span className="text-casino-gold">M COIN</span> REDEMPTION
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Exchange your M COINS for exclusive rewards, gaming credits, and premium products. The more you play,
                the more you earn!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-red">Join Now to Earn M COINS</button>
                <button className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-3 rounded-md text-sm font-medium transition-all duration-300">
                  How to Earn M COINS
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full overflow-visible p-4">
              <div className="absolute -z-10 top-1/4 right-1/4 w-[200px] h-[200px] bg-casino-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 left-1/4 w-[150px] h-[150px] bg-red-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 w-full h-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="M COIN Rewards"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />

                {/* Monedas flotantes decorativas */}
                <div className="absolute top-10 left-10 w-16 h-16 animate-float-slow">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Gold Coin" width={64} height={64} />
                </div>
                <div className="absolute top-1/4 right-1/4 w-20 h-20 animate-float">
                  <Image src="/placeholder.svg?height=80&width=80" alt="Gold Coin" width={80} height={80} />
                </div>
                <div className="absolute bottom-1/3 left-1/3 w-14 h-14 animate-float-slow">
                  <Image src="/placeholder.svg?height=56&width=56" alt="Gold Coin" width={56} height={56} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
