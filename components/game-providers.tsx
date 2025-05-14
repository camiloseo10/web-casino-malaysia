import Image from "next/image"

const providers = [
  { name: "Evolution Gaming", logo: "/logos/evolution-gaming.png" },
  { name: "Pragmatic Play", logo: "/logos/pragmatic-play.png" },
  { name: "SpadeGaming", logo: "/logos/spadegaming.png" },
  { name: "JILI", logo: "/logos/jili.png" },
  { name: "Playtech", logo: "/logos/playtech.png" },
  { name: "Microgaming", logo: "/logos/microgaming.png" },
  { name: "Joker", logo: "/logos/joker.png" },
  { name: "SBOBET", logo: "/logos/sbobet.png" },
  { name: "EvoPlay", logo: "/logos/evoplay.png" },
  { name: "XPG", logo: "/logos/xpg.png" },
  { name: "AG", logo: "/logos/ag.png" },
  { name: "GamePlay", logo: "/logos/gameplay.png" },
]

const paymentMethods = [
  { name: "Maybank", logo: "/logos/maybank.png" },
  { name: "CIMB", logo: "/logos/cimb.png" },
  { name: "Hong Leong Bank", logo: "/logos/hong-leong.png" },
  { name: "RHB", logo: "/logos/rhb.png" },
  { name: "AmBank", logo: "/logos/ambank.png" },
  { name: "Bank Islam", logo: "/logos/bank-islam.png" },
]

export default function GameProviders() {
  return (
    <section className="py-12 bg-casino-darker rounded-lg mx-4 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-casino-gold mb-2">Our Trusted Partners</h3>
          <p className="text-gray-400 text-sm">
            We work with the best in the industry to provide you with a premium experience
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-10">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="w-[120px] h-[40px] flex items-center justify-center mx-auto"
            >
              <Image
                src={provider.logo}
                alt={provider.name}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-8 mt-12">
          <h3 className="text-xl font-bold text-casino-gold mb-2">Payment Methods</h3>
          <p className="text-gray-400 text-sm">Fast and secure payment options for your convenience</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="w-[120px] h-[40px] flex items-center justify-center mx-auto"
            >
              <Image
                src={method.logo}
                alt={method.name}
                width={120}
                height={40}
                className="object-contain"
              />

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 MMC996. All rights reserved. Licensed and regulated by the Gaming Authority.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Image
              src="/18-plus-badge.png"
              alt="18+ Badge"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src="/responsible-gaming.png"
              alt="Responsible Gaming Badge"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src="/100-secure-payment.png"
              alt="Secure Payment Badge"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}