import { Diamond, Club, Heart, Spade } from "lucide-react"

export default function VipPrivileges() {
  return (
    <section className="py-16 bg-casino-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block px-8 py-3 border-2 border-red-600 rounded-full bg-casino-dark">
            <h2 className="text-xl font-bold text-white">VIP PRIVILEGES</h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-casino-dark border border-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b border-gray-800 text-left text-white">BENEFITS</th>
                <th className="py-3 px-4 border-b border-gray-800 text-center text-white">NORMAL</th>
                <th className="py-3 px-4 border-b border-gray-800 text-center text-white">
                  <Diamond className="h-5 w-5 mx-auto text-white" />
                </th>
                <th className="py-3 px-4 border-b border-gray-800 text-center text-white">
                  <Club className="h-5 w-5 mx-auto text-white" />
                </th>
                <th className="py-3 px-4 border-b border-gray-800 text-center text-white">
                  <Heart className="h-5 w-5 mx-auto text-white" />
                </th>
                <th className="py-3 px-4 border-b border-gray-800 text-center text-white">
                  <Spade className="h-5 w-5 mx-auto text-white" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-gray-800 text-white">LIVE REBATE</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.6</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.7</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.8</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.9</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">1</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-800 text-white">SPORT REBATE</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.35</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.45</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.55</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.65</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.75</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-800 text-white">SLOT REBATE</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.5</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.6</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.7</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.8</td>
                <td className="py-3 px-4 border-b border-gray-800 text-center text-white">0.9</td>
              </tr>
              {/* Más filas aquí */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
