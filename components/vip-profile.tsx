import Image from "next/image"

export default function VipProfile() {
  return (
    <section className="py-12 bg-casino-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full border-2 border-casino-gold overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="User Avatar"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-red-500 text-sm">
              * Once activity period ended, your member level will be refreshed on the next 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <p className="w-1/3 text-white">Current Rank</p>
              <div className="w-2/3 bg-casino-dark border border-casino-gold/50 rounded-md px-4 py-2 text-white">
                Normal
              </div>
            </div>

            <div className="flex items-center">
              <p className="w-1/3 text-white">Current Deposit</p>
              <div className="w-2/3 bg-casino-dark border border-casino-gold/50 rounded-md px-4 py-2 text-white">
                MYR 0.00
              </div>
            </div>

            <div className="flex items-center">
              <p className="w-1/3 text-white">Amount Required To Next Rank</p>
              <div className="w-2/3 bg-casino-dark border border-casino-gold/50 rounded-md px-4 py-2 text-white">
                MYR 0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
