export default function Shop() {
  const artPieces = [
    {
      id: 1,
      title: "Charisma Fracture #001",
      price: "$199",
      image: "🎨",
      description: "A digital representation of the moment authenticity breaks",
      tags: ["NFT", "Digital Art", "Emotional Analysis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Deception Matrix",
      price: "$299",
      image: "🔍",
      description: "Visualization of contradiction patterns in real-time streams",
      tags: ["Data Art", "Analysis", "Interactive"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Persona Shift Study",
      price: "$149",
      image: "🎭",
      description: "Archetypal trigger mapping in digital personas",
      tags: ["Psychology", "Digital", "Behavioral"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Mythic Collapse Timeline",
      price: "$399",
      image: "⚡",
      description: "The anatomy of digital myth dissolution",
      tags: ["Timeline", "Forensic", "Documentary"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Truth Timestamp Series",
      price: "$249",
      image: "⏰",
      description: "Moments of authentic revelation captured in digital form",
      tags: ["Series", "Authentic", "Moments"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Emotional Beat Map",
      price: "$179",
      image: "🎵",
      description: "Musical representation of emotional manipulation patterns",
      tags: ["Audio", "Emotional", "Pattern"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const categories = [
    "All",
    "NFT Collection",
    "Data Visualization",
    "Emotional Analysis",
    "Forensic Art",
    "Interactive Pieces"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Digital Art Shop
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Forensic art pieces that capture the essence of digital collapse, charisma fractures, and mythic moments. 
            Each piece tells a story of truth in the age of spectacle.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 backdrop-blur text-white/80 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Art Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece, index) => (
            <div 
              key={piece.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                {/* Image/Icon Area */}
                <div className={`h-64 bg-gradient-to-br ${piece.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl opacity-80 group-hover:animate-float">
                    {piece.image}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur rounded-full px-3 py-1 text-sm font-medium text-white">
                    {piece.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {piece.title}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {piece.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {piece.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                      Purchase
                    </button>
                    <button className="px-4 py-2 bg-white/10 text-white/80 rounded-lg border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-black/20 backdrop-blur rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Clara Engine Art?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Authenticated",
                description: "Each piece comes with forensic authenticity verification"
              },
              {
                icon: "💎",
                title: "Limited Edition",
                description: "Exclusive digital art pieces with limited availability"
              },
              {
                icon: "📊",
                title: "Data-Driven",
                description: "Created using real forensic analysis and emotional data"
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-6">Get notified when new forensic art pieces are released</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}