import { Percent, Trophy, Coins } from "lucide-react"

export default function ReferProgram() {
  return (
    <div id="refer-program" className="bg-casino-darker py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-casino-gold">Turnover</span> Commission Program
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our multi-tier commission structure rewards you for every friend you bring to MMC996. The more active your
            network, the higher your earnings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-casino-card to-casino-dark border border-casino-gold/30 rounded-xl p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-casino-gold/5 rounded-full -mr-20 -mt-20 transition-all duration-500 group-hover:bg-casino-gold/10"></div>
            <div className="relative z-10">
              <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Percent className="h-8 w-8 text-casino-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">First Generation</h3>
              <div className="text-4xl font-bold text-casino-gold mb-4">0.3%</div>
              <p className="text-gray-400 mb-6">
                Earn 0.3% commission on the turnover of friends you directly refer to MMC996.
              </p>
              <div className="pt-4 border-t border-casino-gold/20">
                <p className="text-sm text-gray-400">Example: If your friend wagers RM10,000, you earn RM30.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-casino-card to-casino-dark border border-casino-gold/30 rounded-xl p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-casino-gold/5 rounded-full -mr-20 -mt-20 transition-all duration-500 group-hover:bg-casino-gold/10"></div>
            <div className="relative z-10">
              <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-casino-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Second Generation</h3>
              <div className="text-4xl font-bold text-casino-gold mb-4">0.2%</div>
              <p className="text-gray-400 mb-6">
                Earn 0.2% commission on the turnover of friends referred by your direct referrals.
              </p>
              <div className="pt-4 border-t border-casino-gold/20">
                <p className="text-sm text-gray-400">
                  Example: If your friend's friend wagers RM10,000, you earn RM20.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-casino-card to-casino-dark border border-casino-gold/30 rounded-xl p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-casino-gold/5 rounded-full -mr-20 -mt-20 transition-all duration-500 group-hover:bg-casino-gold/10"></div>
            <div className="relative z-10">
              <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Coins className="h-8 w-8 text-casino-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Third Generation</h3>
              <div className="text-4xl font-bold text-casino-gold mb-4">0.1%</div>
              <p className="text-gray-400 mb-6">
                Earn 0.1% commission on the turnover of the third level of referrals in your network.
              </p>
              <div className="pt-4 border-t border-casino-gold/20">
                <p className="text-sm text-gray-400">
                  Example: If your friend's friend's friend wagers RM10,000, you earn RM10.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-casino-card border border-casino-gold/30 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Earning?</h3>
              <p className="text-gray-400">
                Join our Refer A Friend program today and start building your network of players.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold px-8 py-3 text-lg font-medium">Get My Referral Link</button>
              <button className="bg-transparent border border-casino-gold text-casino-gold hover:bg-casino-gold/10 transition-all duration-300 rounded-md px-8 py-3 text-lg font-medium">
                View My Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
