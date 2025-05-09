"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

// Datos de ejemplo para los productos
const products = [
  {
    id: "credit-rm888",
    name: "CREDIT RM888",
    points: 12888,
    image: "/placeholder.svg?height=200&width=200",
    category: "game-credit",
    isHot: true,
  },
  {
    id: "credit-rm1888",
    name: "CREDIT RM1888",
    points: 18888,
    image: "/placeholder.svg?height=200&width=200",
    category: "game-credit",
  },
  {
    id: "credit-rm2888",
    name: "CREDIT RM2888",
    points: 23888,
    image: "/placeholder.svg?height=200&width=200",
    category: "game-credit",
  },
  {
    id: "credit-rm3888",
    name: "CREDIT RM3888",
    points: 28888,
    image: "/placeholder.svg?height=200&width=200",
    category: "game-credit",
  },
  {
    id: "credit-rm5888",
    name: "CREDIT RM5888",
    points: 38888,
    image: "/placeholder.svg?height=200&width=200",
    category: "game-credit",
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max 256GB",
    points: 188888,
    image: "/placeholder.svg?height=200&width=200",
    category: "phone",
    isHot: true,
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro 512GB",
    points: 178888,
    image: "/placeholder.svg?height=200&width=200",
    category: "phone",
  },
  {
    id: "samsung-fold5",
    name: "SAMSUNG FOLD5 256GB",
    points: 168888,
    image: "/placeholder.svg?height=200&width=200",
    category: "phone",
  },
  {
    id: "huawei-p60-pro",
    name: "HUAWEI P60 Pro",
    points: 158888,
    image: "/placeholder.svg?height=200&width=200",
    category: "phone",
  },
  {
    id: "xiaomi-14-ultra",
    name: "XIAOMI 14 Ultra",
    points: 151999,
    image: "/placeholder.svg?height=200&width=200",
    category: "phone",
  },
  {
    id: "dyson-supersonic",
    name: "Dyson Supersonic",
    points: 72999,
    image: "/placeholder.svg?height=200&width=200",
    category: "hot-deal",
    isHot: true,
  },
  {
    id: "lofree-swift-se",
    name: "Lofree Swift SE",
    points: 9999,
    image: "/placeholder.svg?height=200&width=200",
    category: "hot-deal",
  },
  {
    id: "lofree-swift-special",
    name: "Lofree Swift Special",
    points: 11999,
    image: "/placeholder.svg?height=200&width=200",
    category: "hot-deal",
  },
  {
    id: "dyson-gleam",
    name: "Dyson Gleam",
    points: 39999,
    image: "/placeholder.svg?height=200&width=200",
    category: "hot-deal",
  },
  {
    id: "xiaomi-water-ionic",
    name: "Xiaomi Water Ionic",
    points: 24999,
    image: "/placeholder.svg?height=200&width=200",
    category: "hot-deal",
  },
  {
    id: "baseus-20w",
    name: "Baseus 20W 10000mAh",
    points: 9999,
    image: "/placeholder.svg?height=200&width=200",
    category: "power-bank",
  },
  {
    id: "energizer-10000mah",
    name: "Energizer 10000mAh",
    points: 12999,
    image: "/placeholder.svg?height=200&width=200",
    category: "power-bank",
  },
  {
    id: "baseus-65w",
    name: "Baseus 65W 20000mAh",
    points: 17999,
    image: "/placeholder.svg?height=200&width=200",
    category: "power-bank",
    isHot: true,
  },
  {
    id: "sony-cp-v10",
    name: "Sony CP-V10 10000mAh",
    points: 14999,
    image: "/placeholder.svg?height=200&width=200",
    category: "power-bank",
  },
  {
    id: "ugreen-140w",
    name: "UGREEN 140W 25000mAh",
    points: 27999,
    image: "/placeholder.svg?height=200&width=200",
    category: "power-bank",
  },
  {
    id: "mi-portable",
    name: "Mi Portable",
    points: 19999,
    image: "/placeholder.svg?height=200&width=200",
    category: "bluetooth-speaker",
  },
  {
    id: "jbl-horizon-2",
    name: "JBL Horizon 2",
    points: 42999,
    image: "/placeholder.svg?height=200&width=200",
    category: "bluetooth-speaker",
    isHot: true,
  },
  {
    id: "edifier-g2000",
    name: "Edifier G2000 - Titanium",
    points: 31999,
    image: "/placeholder.svg?height=200&width=200",
    category: "bluetooth-speaker",
  },
  {
    id: "harman-kardon",
    name: "Harman Kardon Aura Studio",
    points: 34999,
    image: "/placeholder.svg?height=200&width=200",
    category: "bluetooth-speaker",
  },
  {
    id: "marshall-woburn-iii",
    name: "Marshall Woburn III",
    points: 51999,
    image: "/placeholder.svg?height=200&width=200",
    category: "bluetooth-speaker",
  },
]

export default function MCoinProducts() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [showLoginModal, setShowLoginModal] = useState(false)

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const handleRedeem = () => {
    // En un caso real, verificaríamos si el usuario está logueado
    setShowLoginModal(true)
  }

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-casino-card border border-casino-gold/20 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-casino-gold/10"
          >
            <div className="relative">
              <div className="aspect-square bg-white p-4 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
              <button
                className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart
                  className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                />
              </button>
              {product.isHot && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  HOT DEAL
                </div>
              )}
            </div>

            <div className="p-4 bg-black">
              <h3 className="text-white font-medium mb-1">{product.name}</h3>
              <p className="text-casino-gold font-bold mb-4">{product.points.toLocaleString()} Coins</p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleRedeem}
                  className="bg-casino-gold hover:bg-casino-gold/90 text-black font-medium py-2 rounded text-sm transition-colors duration-300"
                >
                  Redeem
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 py-2 rounded text-sm transition-colors duration-300">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de inicio de sesión */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-casino-dark border border-casino-gold/30 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Login Required</h3>
            <p className="text-gray-300 mb-6">Please login to your account to redeem this item.</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-casino-gold hover:bg-casino-gold/90 text-black font-medium py-3 rounded transition-colors duration-300">
                Login
              </button>
              <button
                onClick={() => setShowLoginModal(false)}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 py-3 rounded transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
