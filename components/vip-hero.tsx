export default function VipHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-casino-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-casino-dark via-casino-dark to-casino-darker opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      {/* Efectos de luz */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-casino-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-casino-gold/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="text-casino-gold">EXCLUSIVE</span> VIP PROGRAM
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Experience the ultimate luxury with our exclusive VIP program. Enjoy premium benefits, personalized service,
          and exclusive rewards designed for our most valued players.
        </p>
        <button className="btn-red text-lg px-8 py-3">Join VIP Program</button>
      </div>
    </section>
  )
}
