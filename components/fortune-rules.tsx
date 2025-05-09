import { Info, AlertTriangle, CheckCircle } from "lucide-react"

export default function FortuneRules() {
  return (
    <div className="py-16 bg-casino-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-casino-gold">RULES</span> & CONDITIONS
            </h2>
            <p className="text-gray-300">
              Please read and understand the following rules and conditions before participating in the Lucky Spin
              promotion.
            </p>
          </div>

          <div className="bg-casino-dark rounded-xl p-6 md:p-8 border border-casino-gold/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Info className="h-5 w-5 text-casino-gold mr-2" />
                  General Rules
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Each registered user receives 3 free spins daily at 00:00 (GMT+8).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unused spins do not carry over to the next day.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Additional spins can be earned through deposits, completing missions, and referrals.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>VIP members receive additional daily spins based on their VIP level.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Info className="h-5 w-5 text-casino-gold mr-2" />
                  Prize Redemption
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>M COINS and Free Spins are credited automatically to your account.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deposit Bonus codes must be used within 48 hours of winning.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Jackpot and Mystery Prize winners will be contacted by our team for verification.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-casino-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      All prizes are subject to standard wagering requirements as per our general terms and conditions.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-lg p-4">
                <h3 className="text-lg font-bold text-yellow-500 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Important Notice
                </h3>
                <p className="text-gray-300">
                  MMC996 reserves the right to modify, suspend, or terminate the Lucky Spin promotion at any time. Any
                  suspected abuse of the promotion may result in disqualification and account suspension.
                </p>
              </div>

              <div className="pt-4 border-t border-casino-gold/20">
                <p className="text-sm text-gray-400">
                  By participating in the Lucky Spin promotion, you acknowledge that you have read and agree to these
                  rules and conditions. For any questions or concerns, please contact our customer support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
