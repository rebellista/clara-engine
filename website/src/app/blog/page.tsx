import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Anatomy of Digital Charisma: How Authenticity Fractures in Real Time",
      excerpt: "An in-depth analysis of the precise moments when online personas crack under pressure, revealing the true self beneath the carefully constructed digital mask.",
      author: "Clara Research Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["Digital Psychology", "Authenticity", "Analysis"],
      featured: true,
      icon: "🔍"
    },
    {
      id: 2,
      title: "Mapping Emotional Manipulation: The Science Behind Parasocial Engineering",
      excerpt: "How content creators use specific emotional triggers to build artificial intimacy with their audience, and the forensic tools we've developed to detect these patterns.",
      author: "Dr. Sarah Chen",
      date: "December 12, 2024",
      readTime: "12 min read",
      tags: ["Emotional Analysis", "Parasocial", "Research"],
      featured: false,
      icon: "🧠"
    },
    {
      id: 3,
      title: "The Clothing Code: Symbolic Communication in Livestreams",
      excerpt: "Decoding the intentional and subconscious wardrobe choices that signal psychological states, tribal affiliations, and emotional availability in digital spaces.",
      author: "Marcus Rivera",
      date: "December 10, 2024",
      readTime: "6 min read",
      tags: ["Symbolic Analysis", "Fashion", "Psychology"],
      featured: false,
      icon: "👕"
    },
    {
      id: 4,
      title: "Contradiction Loops: When Digital Personas Eat Themselves",
      excerpt: "The fascinating phenomenon of content creators becoming trapped in logical contradictions of their own making, and how we track these recursive patterns.",
      author: "Alex Thompson",
      date: "December 8, 2024",
      readTime: "10 min read",
      tags: ["Logic Analysis", "Contradiction", "Patterns"],
      featured: false,
      icon: "🔄"
    },
    {
      id: 5,
      title: "The Myth Machine: How Legends Are Born and Die in Digital Time",
      excerpt: "A forensic timeline of how digital myths form, propagate, and eventually collapse under the weight of their own contradictions.",
      author: "Clara Research Team",
      date: "December 5, 2024",
      readTime: "15 min read",
      tags: ["Mythology", "Digital Culture", "Timeline Analysis"],
      featured: true,
      icon: "⚡"
    },
    {
      id: 6,
      title: "Microexpressions in 4K: Reading Truth Through Pixels",
      excerpt: "Advanced computer vision techniques for detecting micro-emotions and involuntary facial expressions in high-resolution streaming content.",
      author: "Dr. Emily Zhang",
      date: "December 3, 2024",
      readTime: "9 min read",
      tags: ["Computer Vision", "Microexpressions", "Technology"],
      featured: false,
      icon: "📷"
    }
  ];

  const categories = [
    "All Posts",
    "Digital Psychology",
    "Forensic Analysis",
    "Research Findings",
    "Technical Deep Dives",
    "Case Studies"
  ];

  const featuredPost = blogPosts.find(post => post.featured && post.id === 1);
  const otherPosts = blogPosts.filter(post => post.id !== 1);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Clara Engine Blog
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Insights, research findings, and deep dives into the forensic analysis of digital personas, 
            emotional manipulation, and the collapse of online authenticity.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 backdrop-blur text-white/80 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Featured
                  </span>
                  <span className="text-6xl">{featuredPost.icon}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 cursor-pointer">
                  {featuredPost.title}
                </h2>
                
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-white/60">By {featuredPost.author}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{featuredPost.date}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{featuredPost.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                {/* Header */}
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{post.icon}</span>
                    {post.featured && (
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-purple-400 hover:text-purple-300 font-medium text-sm hover:underline transition-colors duration-200"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur rounded-3xl p-12 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest research findings, forensic insights, and deep dives into digital authenticity 
            delivered straight to your inbox. Join our community of digital forensic enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Research Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Behavioral Analysis",
              description: "Deep dives into digital behavior patterns and psychological profiling",
              icon: "🧠",
              color: "from-green-500 to-teal-500"
            },
            {
              title: "Technical Research",
              description: "Computer vision, AI analysis, and forensic tool development",
              icon: "⚙️",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Cultural Studies",
              description: "Digital mythology, online culture evolution, and social dynamics",
              icon: "🌍",
              color: "from-purple-500 to-pink-500"
            }
          ].map((category) => (
            <div 
              key={category.title}
              className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-white/80 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}