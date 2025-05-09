import { ClipboardCopy, Send, UserPlus, Coins } from "lucide-react"

export default function ReferSteps() {
  return (
    <div id="how-it-works" className="bg-casino-dark py-16 md:py-24 border-y border-casino-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="text-casino-gold">Works</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Start earning commissions in just a few simple steps. It's easy to join and even easier to earn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Paso 1 */}
          <div className="relative">
            <div className="bg-casino-card border border-casino-gold/30 rounded-xl p-6 h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center text-black font-bold text-xl">
                1
              </div>
              <div className="pt-6">
                <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <ClipboardCopy className="h-8 w-8 text-casino-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Get Your Unique Link</h3>
                <p className="text-gray-400">
                  Log in to your MMC996 account and navigate to the Refer A Friend section to get your unique referral
                  link.
                </p>
              </div>
            </div>
            {/* Conector */}
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-casino-gold/50"></div>
          </div>

          {/* Paso 2 */}
          <div className="relative">
            <div className="bg-casino-card border border-casino-gold/30 rounded-xl p-6 h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center text-black font-bold text-xl">
                2
              </div>
              <div className="pt-6">
                <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-casino-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Share With Friends</h3>
                <p className="text-gray-400">
                  Share your referral link with friends via social media, messaging apps, or email.
                </p>
              </div>
            </div>
            {/* Conector */}
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-casino-gold/50"></div>
          </div>

          {/* Paso 3 */}
          <div className="relative">
            <div className="bg-casino-card border border-casino-gold/30 rounded-xl p-6 h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center text-black font-bold text-xl">
                3
              </div>
              <div className="pt-6">
                <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <UserPlus className="h-8 w-8 text-casino-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Friends Join & Play</h3>
                <p className="text-gray-400">
                  Your friends sign up using your link and start playing their favorite games on MMC996.
                </p>
              </div>
            </div>
            {/* Conector */}
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-casino-gold/50"></div>
          </div>

          {/* Paso 4 */}
          <div className="relative">
            <div className="bg-casino-card border border-casino-gold/30 rounded-xl p-6 h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center text-black font-bold text-xl">
                4
              </div>
              <div className="pt-6">
                <div className="bg-casino-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Coins className="h-8 w-8 text-casino-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Earn Commissions</h3>
                <p className="text-gray-400">
                  Earn commissions based on your friends' turnover. Commissions are automatically credited to your
                  account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Track your referrals and earnings in real-time through your MMC996 account dashboard.
          </p>
          <button className="btn-gold px-8 py-3 text-lg font-medium">Join The Program Now</button>
        </div>
      </div>
    </div>
  )
}
