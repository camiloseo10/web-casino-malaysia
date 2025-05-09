export default function ReferVideo() {
  return (
    <div className="bg-casino-darker py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-casino-gold">Turnover</span> Commission Explained
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Watch this short video to understand how our turnover commission works and how you can maximize your
            earnings.
          </p>
        </div>

        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-casino-gold/30">
          {/* Aquí iría el video de YouTube, pero por ahora usamos un placeholder */}
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-casino-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-16 h-16 bg-casino-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-casino-gold/80 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300">Click to play video</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Learn how our multi-tier commission structure works and see real examples of earnings.
          </p>
          <div className="inline-flex items-center bg-casino-card border border-casino-gold/30 rounded-lg px-4 py-2">
            <span className="text-casino-gold font-medium mr-2">Video Duration:</span>
            <span className="text-white">2:04</span>
          </div>
        </div>
      </div>
    </div>
  )
}
