import { Trophy, Gift, Coins, Zap, Star, Award } from "lucide-react"

// Definición de los premios
const prizes = [
  {
    id: 1,
    name: "M COINS",
    icon: <Coins className="h-8 w-8 text-yellow-500" />,
    description: "Win up to 1000 M COINS that you can use to redeem exclusive items and bonuses in our M COIN store.",
    redemption: "M COINS are automatically credited to your account and can be used immediately.",
  },
  {
    id: 2,
    name: "FREE SPINS",
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    description: "Get free spins for selected slot games. Try your luck without risking your own money!",
    redemption: "Free spins are credited automatically and can be used on eligible games for 7 days.",
  },
  {
    id: 3,
    name: "DEPOSIT BONUS",
    icon: <Gift className="h-8 w-8 text-red-500" />,
    description: "Receive bonus credits of up to 100% on your next deposit. More value for your money!",
    redemption: "Bonus codes are valid for 48 hours. Enter the code during your next deposit to claim.",
  },
  {
    id: 4,
    name: "JACKPOT",
    icon: <Trophy className="h-8 w-8 text-casino-gold" />,
    description: "The grand prize! Win a massive cash reward that will be credited directly to your account.",
    redemption: "Jackpot winnings are credited to your account within 24 hours after verification.",
  },
  {
    id: 5,
    name: "MYSTERY PRIZE",
    icon: <Star className="h-8 w-8 text-blue-500" />,
    description: "A surprise reward that could be anything from exclusive tournament entries to physical merchandise.",
    redemption: "You will be contacted by our team within 48 hours with details on how to claim your mystery prize.",
  },
]

export default function FortunePrizes() {
  return (
    <div className="py-16 bg-casino-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-casino-gold">AVAILABLE</span> PRIZES
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Spin the wheel for a chance to win these amazing prizes. Each prize has its own redemption process and
            validity period.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className="bg-casino-darker rounded-xl p-6 border border-casino-gold/20 hover:border-casino-gold/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-casino-gold/10 p-3 rounded-full mr-4">{prize.icon}</div>
                <h3 className="text-xl font-bold text-white">{prize.name}</h3>
              </div>

              <p className="text-gray-300 mb-4">{prize.description}</p>

              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm font-medium text-casino-gold mb-1">How to Redeem:</p>
                <p className="text-sm text-gray-400">{prize.redemption}</p>
              </div>
            </div>
          ))}

          <div className="bg-casino-darker rounded-xl p-6 border border-casino-gold/20 flex flex-col items-center justify-center text-center">
            <Award className="h-16 w-16 text-casino-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Special Events</h3>
            <p className="text-gray-300">
              During special events and holidays, the wheel may feature limited-time exclusive prizes with higher
              values!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
