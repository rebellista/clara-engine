import Link from "next/link";

export default function Home() {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "🎥",
      color: "from-red-500 to-red-600",
      description: "Watch our analysis videos"
    },
    {
      name: "Etsy",
      url: "https://etsy.com",
      icon: "🎨",
      color: "from-orange-400 to-orange-500",
      description: "Digital art collections"
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "📘",
      color: "from-blue-500 to-blue-600",
      description: "Connect with our community"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "📸",
      color: "from-pink-500 to-purple-600",
      description: "Visual stories and insights"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Clara Engine
            </h1>
            <div className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              🧬 A mythic-grade forensic dashboard
            </div>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Built for creators, journalists, educators, and analysts who decode digital collapse in real time. 
              Clara captures the moment charisma fractures, the instant myth collapses, the timestamp of truth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link 
                href="/shop" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Explore Digital Art
              </Link>
              <Link 
                href="/blog" 
                className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border border-white/20"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float">🎨</div>
        <div className="absolute top-32 right-20 text-4xl animate-float" style={{animationDelay: '1s'}}>🔍</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{animationDelay: '2s'}}>✨</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/10 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔍",
                title: "Deception Profiling",
                description: "Contradiction loops, microexpressions, charisma spikes"
              },
              {
                icon: "🎭",
                title: "Persona Mapping",
                description: "Clothing symbolism, tonal pivots, archetypal triggers"
              },
              {
                icon: "🎵",
                title: "Motif Tracking",
                description: "Emotional beats, symbolic props, audience manipulation tactics"
              },
              {
                icon: "📝",
                title: "Clip Logging",
                description: "Timestamped annotation for exposé scripting and documentary storyboarding"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Connect With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div 
                  className={`bg-gradient-to-br ${social.color} p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-5xl mb-4 group-hover:animate-float">{social.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                  <p className="text-white/90">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Decode Digital Collapse?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join the movement. Build myth, decode charisma, engineer emotional systems.
          </p>
          <Link 
            href="/shop" 
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
