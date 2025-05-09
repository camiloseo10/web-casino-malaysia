import { Coins, Gift, Clock, Trophy } from "lucide-react"

export default function MCoinInfo() {
  return (
    <div className="bg-casino-card border border-casino-gold/20 rounded-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About M COIN Rewards</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-casino-dark p-5 rounded-lg border border-casino-gold/10">
          <div className="bg-casino-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Coins className="text-casino-gold h-6 w-6" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Earn M COINS</h3>
          <p className="text-gray-400">Earn M COINS with every bet you place across all our games and platforms.</p>
        </div>

        <div className="bg-casino-dark p-5 rounded-lg border border-casino-gold/10">
          <div className="bg-casino-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Gift className="text-casino-gold h-6 w-6" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Redeem Rewards</h3>
          <p className="text-gray-400">
            Exchange your M COINS for gaming credits, electronics, and exclusive merchandise.
          </p>
        </div>

        <div className="bg-casino-dark p-5 rounded-lg border border-casino-gold/10">
          <div className="bg-casino-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Clock className="text-casino-gold h-6 w-6" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">No Expiration</h3>
          <p className="text-gray-400">Your M COINS never expire as long as your account remains active.</p>
        </div>

        <div className="bg-casino-dark p-5 rounded-lg border border-casino-gold/10">
          <div className="bg-casino-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Trophy className="text-casino-gold h-6 w-6" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">VIP Benefits</h3>
          <p className="text-gray-400">
            VIP members earn M COINS at accelerated rates and get access to exclusive rewards.
          </p>
        </div>
      </div>

      <div className="bg-casino-dark p-6 rounded-lg border border-casino-gold/10">
        <h3 className="text-xl font-bold text-white mb-4">How to Earn M COINS</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-casino-gold text-black font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
              1
            </div>
            <div>
              <h4 className="text-white font-medium">Play Games</h4>
              <p className="text-gray-400">Earn 1 M COIN for every RM1 wagered on slots and casino games.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-casino-gold text-black font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
              2
            </div>
            <div>
              <h4 className="text-white font-medium">Sports Betting</h4>
              <p className="text-gray-400">Earn 1 M COIN for every RM2 wagered on sports betting.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-casino-gold text-black font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
              3
            </div>
            <div>
              <h4 className="text-white font-medium">Refer Friends</h4>
              <p className="text-gray-400">
                Earn 5,000 M COINS for each friend who signs up and makes their first deposit.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-casino-gold text-black font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
              4
            </div>
            <div>
              <h4 className="text-white font-medium">Special Promotions</h4>
              <p className="text-gray-400">Participate in special events and promotions to earn bonus M COINS.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300">Ready to start earning and redeeming M COINS?</p>
            <button className="btn-red whitespace-nowrap">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
