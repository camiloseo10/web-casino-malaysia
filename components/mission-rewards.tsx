import { Gift, Award, Coins } from "lucide-react"

const rewards = [
  {
    points: 50,
    rewards: ["5 Free Spins", "RM5 Bonus Credit"],
    icon: <Gift className="h-10 w-10 text-casino-gold" />,
  },
  {
    points: 150,
    rewards: ["15 Free Spins", "RM15 Bonus Credit", "50 M Coins"],
    icon: <Award className="h-10 w-10 text-casino-gold" />,
  },
  {
    points: 300,
    rewards: ["30 Free Spins", "RM30 Bonus Credit", "100 M Coins"],
    icon: <Coins className="h-10 w-10 text-casino-gold" />,
  },
]

export default function MissionRewards() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-casino-gold/30 pb-4">Mission Rewards</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-casino-card border border-casino-gold/20 rounded-lg p-6 flex flex-col h-full hover:border-casino-gold transition-all duration-300"
          >
            <div className="text-center mb-4">
              <div className="bg-casino-dark p-4 rounded-full inline-flex items-center justify-center mb-4">
                {reward.icon}
              </div>
              <h3 className="text-xl font-bold text-casino-gold mb-4">{reward.points} Points</h3>
            </div>

            <div className="min-h-[120px]">
              <ul className="text-white space-y-2 pl-2">
                {reward.rewards.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-casino-gold rounded-full mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-auto bg-casino-gold hover:bg-casino-gold/80 text-black px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 w-full">
              Claim Reward
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
