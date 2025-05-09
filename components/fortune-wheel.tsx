"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Trophy, Gift, Coins, Zap, Clock, Award, Star, Target, Users } from "lucide-react"

// Definición de los premios
const prizes = [
  {
    id: 1,
    name: "500 M COINS",
    icon: <Coins className="h-6 w-6" />,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  { id: 2, name: "FREE SPIN", icon: <Zap className="h-6 w-6" />, color: "bg-purple-500", textColor: "text-purple-500" },
  { id: 3, name: "50% BONUS", icon: <Gift className="h-6 w-6" />, color: "bg-red-500", textColor: "text-red-500" },
  {
    id: 4,
    name: "1000 M COINS",
    icon: <Coins className="h-6 w-6" />,
    color: "bg-yellow-600",
    textColor: "text-yellow-600",
  },
  {
    id: 5,
    name: "JACKPOT",
    icon: <Trophy className="h-6 w-6" />,
    color: "bg-casino-gold",
    textColor: "text-casino-gold",
  },
  { id: 6, name: "100% BONUS", icon: <Gift className="h-6 w-6" />, color: "bg-green-500", textColor: "text-green-500" },
  {
    id: 7,
    name: "200 M COINS",
    icon: <Coins className="h-6 w-6" />,
    color: "bg-yellow-400",
    textColor: "text-yellow-400",
  },
  {
    id: 8,
    name: "MYSTERY PRIZE",
    icon: <Star className="h-6 w-6" />,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
]

export default function FortuneWheel() {
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [prize, setPrize] = useState<null | (typeof prizes)[0]>(null)
  const [spinsLeft, setSpinsLeft] = useState(3)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [prizeHistory, setPrizeHistory] = useState<Array<{ prize: (typeof prizes)[0]; date: string }>>([])
  const wheelRef = useRef<HTMLDivElement>(null)

  // Función para girar la rueda
  const spinWheel = () => {
    if (spinning || spinsLeft <= 0) return

    // Simular verificación de login (en un caso real, verificaríamos el estado de autenticación)
    const isLoggedIn = Math.random() > 0.3 // Simulación: 70% de probabilidad de estar "logueado"

    if (!isLoggedIn) {
      setShowLoginModal(true)
      return
    }

    setSpinning(true)
    setPrize(null)

    // Seleccionar un premio aleatorio
    const selectedPrizeIndex = Math.floor(Math.random() * prizes.length)
    const selectedPrize = prizes[selectedPrizeIndex]

    // Calcular la rotación para que la rueda se detenga en el premio seleccionado
    // Cada segmento es de 360/8 = 45 grados
    const segmentAngle = 360 / prizes.length
    // Calculamos el ángulo central del segmento seleccionado
    const prizeAngle = selectedPrizeIndex * segmentAngle
    // Añadimos rotaciones adicionales (5 vueltas completas + el ángulo del premio)
    const newRotation = rotation + 1800 + (360 - prizeAngle)

    setRotation(newRotation)

    // Después de la animación, mostrar el premio y actualizar el historial
    setTimeout(() => {
      setPrize(selectedPrize)
      setSpinsLeft((prev) => prev - 1)
      setSpinning(false)

      // Añadir al historial
      const now = new Date()
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
      setPrizeHistory((prev) => [{ prize: selectedPrize, date: formattedDate }, ...prev])
    }, 5000) // 5 segundos de animación
  }

  // Función para reiniciar los giros (solo para demostración)
  const resetSpins = () => {
    setSpinsLeft(3)
  }

  // Efecto para crear partículas cuando se gana un premio
  useEffect(() => {
    if (prize) {
      // Aquí se podría implementar un efecto de partículas o confeti
      // Para simplificar, solo mostramos el premio
    }
  }, [prize])

  return (
    <div id="wheel-section" className="py-16 bg-casino-darker">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda: Historial de premios */}
          <div className="bg-casino-dark rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-casino-gold" />
              Prize History
            </h3>

            <div className="h-[400px] overflow-y-auto pr-2 space-y-3">
              {prizeHistory.length > 0 ? (
                prizeHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-casino-card rounded-lg border border-casino-gold/10"
                  >
                    <div className={`p-2 rounded-full ${item.prize.color} mr-3`}>{item.prize.icon}</div>
                    <div>
                      <p className={`font-bold ${item.prize.textColor}`}>{item.prize.name}</p>
                      <p className="text-sm text-gray-400">{item.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Award className="h-12 w-12 mx-auto mb-2 opacity-30" />
                  <p>No prizes yet. Spin the wheel!</p>
                </div>
              )}
            </div>
          </div>

          {/* Columna central: Rueda de la fortuna */}
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              {/* Indicador de premio */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-casino-gold"></div>
              </div>

              {/* Rueda */}
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <motion.div
                  ref={wheelRef}
                  className="w-full h-full rounded-full border-8 border-casino-gold relative overflow-hidden"
                  style={{
                    backgroundImage: `conic-gradient(
                      ${prizes
                        .map(
                          (prize, i) =>
                            `${prize.color} ${i * (360 / prizes.length)}deg ${(i + 1) * (360 / prizes.length)}deg`,
                        )
                        .join(", ")}
                    )`,
                  }}
                  animate={{ rotate: rotation }}
                  transition={{ duration: 5, ease: "easeOut" }}
                >
                  {/* Divisiones de la rueda */}
                  {prizes.map((prize, i) => (
                    <div
                      key={prize.id}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * (360 / prizes.length) + (360 / prizes.length) / 2}deg)`,
                      }}
                    >
                      <div
                        className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center"
                        style={{ transform: `rotate(${-rotation}deg)` }}
                      >
                        <div className="bg-black/30 p-2 rounded-full mb-1">{prize.icon}</div>
                        <p className="text-xs md:text-sm font-bold text-white bg-black/30 px-2 py-1 rounded whitespace-nowrap">
                          {prize.name}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Centro de la rueda */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-casino-dark rounded-full border-4 border-casino-gold flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-casino-gold" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Controles */}
            <div className="flex flex-col items-center space-y-4">
              {/* Mostrar premio ganado */}
              {prize && (
                <div className="bg-casino-dark p-4 rounded-xl border border-casino-gold animate-pulse mb-4">
                  <p className="text-white text-lg">You won:</p>
                  <p className={`text-2xl font-bold ${prize.textColor} flex items-center justify-center`}>
                    {prize.icon}
                    <span className="ml-2">{prize.name}</span>
                  </p>
                </div>
              )}

              {/* Botón de giro */}
              <button
                onClick={spinWheel}
                disabled={spinning || spinsLeft <= 0}
                className={`btn-gold px-8 py-3 text-lg font-bold flex items-center ${
                  spinning || spinsLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {spinning ? "SPINNING..." : "SPIN NOW"}
              </button>

              {/* Giros restantes */}
              <div className="flex items-center space-x-2">
                <p className="text-white">Spins left:</p>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${i < spinsLeft ? "bg-casino-gold" : "bg-gray-600"}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Botón para reiniciar giros (solo para demostración) */}
              {spinsLeft === 0 && (
                <button onClick={resetSpins} className="text-sm text-casino-gold underline mt-2">
                  Reset spins (demo only)
                </button>
              )}
            </div>
          </div>

          {/* Columna derecha: Información de giros */}
          <div className="bg-casino-dark rounded-xl p-6 border border-casino-gold/20">
            <h3 className="text-xl font-bold text-white mb-4">How to Get More Spins</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-casino-gold/20 p-2 rounded-full mr-3 mt-1">
                  <Trophy className="h-5 w-5 text-casino-gold" />
                </div>
                <div>
                  <p className="font-bold text-white">Daily Login</p>
                  <p className="text-gray-300">Get 3 free spins every day just by logging in.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-casino-gold/20 p-2 rounded-full mr-3 mt-1">
                  <Target className="h-5 w-5 text-casino-gold" />
                </div>
                <div>
                  <p className="font-bold text-white">Complete Daily Missions</p>
                  <p className="text-gray-300">Earn additional spins by completing daily missions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-casino-gold/20 p-2 rounded-full mr-3 mt-1">
                  <Coins className="h-5 w-5 text-casino-gold" />
                </div>
                <div>
                  <p className="font-bold text-white">Make a Deposit</p>
                  <p className="text-gray-300">Get 1 extra spin for every $50 deposited.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-casino-gold/20 p-2 rounded-full mr-3 mt-1">
                  <Users className="h-5 w-5 text-casino-gold" />
                </div>
                <div>
                  <p className="font-bold text-white">Refer Friends</p>
                  <p className="text-gray-300">Earn 5 spins for each friend who joins using your referral code.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-casino-gold/20">
              <h4 className="text-lg font-bold text-white mb-2">VIP Members</h4>
              <p className="text-gray-300 mb-4">VIP members receive additional daily spins based on their level:</p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-casino-card p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Silver</p>
                  <p className="text-white font-bold">+1 Spin</p>
                </div>
                <div className="bg-casino-card p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Gold</p>
                  <p className="text-white font-bold">+2 Spins</p>
                </div>
                <div className="bg-casino-card p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Platinum</p>
                  <p className="text-white font-bold">+3 Spins</p>
                </div>
                <div className="bg-casino-card p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Diamond</p>
                  <p className="text-white font-bold">+5 Spins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de inicio de sesión */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-casino-dark border border-casino-gold rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Login Required</h3>
            <p className="text-gray-300 mb-6">Please log in or create an account to spin the wheel and win prizes.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-transparent hover:bg-casino-gold/10 text-casino-gold border border-casino-gold px-6 py-2 rounded-md font-medium transition-all duration-300 flex-1"
                onClick={() => setShowLoginModal(false)}
              >
                Login
              </button>
              <button className="btn-red flex-1" onClick={() => setShowLoginModal(false)}>
                Register Now
              </button>
            </div>

            <button
              className="mt-4 text-gray-400 hover:text-white text-sm w-full"
              onClick={() => setShowLoginModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
