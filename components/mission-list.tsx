import { Star, Gift } from "lucide-react"

const missions = [
  {
    id: 1,
    title: "Daily Login",
    points: 5,
    icon: <Star className="h-8 w-8 text-casino-gold" />,
  },
  {
    id: 2,
    title: "Daily Deposit RM50 or more (Accumulated)",
    points: 15,
    icon: <Gift className="h-8 w-8 text-casino-gold" />,
  },
  {
    id: 3,
    title: "Daily Deposit RM100 or more (Accumulated)",
    points: 25,
    icon: <Gift className="h-8 w-8 text-casino-gold" />,
  },
  {
    id: 4,
    title: "Daily Deposit RM300 or more (Accumulated)",
    points: 55,
    icon: <Gift className="h-8 w-8 text-casino-gold" />,
  },
  {
    id: 5,
    title: "Daily Deposit RM500 or more (Accumulated)",
    points: 100,
    icon: <Gift className="h-8 w-8 text-casino-gold" />,
  },
  {
    id: 6,
    title: "Daily Deposit RM1000 or more (Accumulated)",
    points: 250,
    icon: <Gift className="h-8 w-8 text-casino-gold" />,
  },
]

export default function MissionList() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-casino-gold/30 pb-4">Daily Mission</h2>

      <div className="space-y-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-casino-card border border-casino-gold/20 rounded-lg p-4 flex items-center justify-between hover:border-casino-gold transition-all duration-300"
          >
            <div className="flex items-center">
              <div className="bg-casino-dark p-3 rounded-lg mr-4">{mission.icon}</div>
              <div>
                <h3 className="text-white font-medium">{mission.title}</h3>
                <p className="text-casino-gold text-sm">Activity Point: {mission.points} point(s)</p>
              </div>
            </div>
            <button className="bg-casino-gold/10 hover:bg-casino-gold/20 text-casino-gold border border-casino-gold/30 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
              On Going
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
