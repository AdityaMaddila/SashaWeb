import { useState } from "react";
import { Users, Star, Sparkles, Trophy, Rocket, Brain, Zap, Globe } from "lucide-react";

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  featured?: boolean;
  emoji?: string;
  funFact?: string;
}

const TeamCard = ({ image, name, position, bio, featured = false, emoji, funFact }: TeamCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-96 cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-[#FB930Bff]/20 transition-all duration-300 hover:border-[#FB930Bff]/70 group">
          
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FB930Bff]/5 via-transparent to-purple-500/5"></div>

          {/* Image section */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FB930Bff]/10 to-purple-600/10 z-10"></div>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

            {/* Badge - Featured */}
            {featured && (
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-[#FB930Bff] to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Star className="h-3.5 w-3.5 fill-white" />
                  Lead
                </div>
              </div>
            )}

            {/* Emoji Badge */}
            {emoji && (
              <div className="absolute top-4 left-4 z-20 text-3xl drop-shadow-lg">
                {emoji}
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="relative p-6 h-40">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-950"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#FB930Bff] transition-colors duration-300">
                  {name}
                </h3>
                <p className="text-[#FB930Bff] font-semibold text-xs mb-3 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  {position}
                </p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{bio}</p>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-2 right-4 text-[#FB930Bff] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to flip →
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#FB930Bff] via-orange-500 to-orange-600 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-orange-400/50 overflow-hidden">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-5xl mb-3 drop-shadow-lg">✨</div>
            <h4 className="text-white font-bold text-lg mb-3">Fun Fact!</h4>
            <p className="text-white text-sm leading-relaxed mb-5">{funFact}</p>
            <div className="text-xs text-white/90 italic bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block border border-white/30">
              ← Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=90",
    name: "Dr. Sarah Chen",
    position: "CEO & Founder",
    bio: "15+ years in AI & Robotics. Former MIT researcher with 50+ published papers and multiple successful ventures.",
    featured: true,
    emoji: "🚀",
    funFact: "Built her first robot at 12 and once won a dance-off against a Boston Dynamics robot!"
  },
  {
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=400&q=90",
    name: "Marcus Rodriguez",
    position: "CTO",
    bio: "Former Google & Tesla engineer. Expert in large-scale systems and autonomous technologies.",
    featured: true,
    emoji: "⚡",
    funFact: "Can solve a Rubik’s cube in under 30 seconds and has debugged code while skydiving!"
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=90",
    name: "Dr. Aisha Patel",
    position: "Head of AI Research",
    bio: "Leading researcher in NLP and computer vision. Published in Nature and Science with 10+ years in AI research.",
    emoji: "🧠",
    funFact: "Speaks 6 languages and taught an AI to write haikus."
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=90",
    name: "James Thompson",
    position: "Director of Operations",
    bio: "Operations expert with Wharton MBA. Specializes in scaling tech companies and robotics manufacturing.",
    emoji: "🎯",
    funFact: "Former professional chess player and optimized a pizza delivery route that saved 10,000 hours annually!"
  }
];



  const stats = [
    { value: "24+", label: "Expert Team Members", icon: Users, color: "from-blue-500 to-cyan-500" },
    { value: "150+", label: "Years Combined Experience", icon: Trophy, color: "from-purple-500 to-pink-500" },
    { value: "18", label: "Advanced Degrees", icon: Brain, color: "from-green-500 to-emerald-500" },
    { value: "8", label: "Countries Represented", icon: Globe, color: "from-orange-500 to-red-500" }
  ];

  const achievements = [
    { value: "100+", label: "Research Publications", icon: Rocket },
    { value: "25+", label: "Patents Filed", icon: Zap },
    { value: "50+", label: "Industry Awards", icon: Trophy }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-[#FB930Bff]/10 border border-[#FB930Bff]/30 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#FB930Bff]" />
              <span className="text-[#FB930Bff] text-sm font-semibold">World-Class Team</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-400 max-w-[700px] mx-auto">
            Our world-class team combines decades of experience in AI, robotics, and innovation. 
            <span className="text-[#FB930Bff] font-semibold"> Click any card</span> to discover fun facts! 🎉
          </p>
        </div>

        {/* Interactive Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`relative bg-gray-900 rounded-xl p-6 text-center shadow-lg border-2 border-gray-700 cursor-pointer transition-all duration-300 overflow-hidden ${
                  hoveredStat === index ? 'border-[#FB930Bff] -translate-y-2 shadow-2xl shadow-[#FB930Bff]/30' : 'hover:border-gray-600'
                }`}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 ${hoveredStat === index ? 'opacity-10' : ''}`}></div>
                
                <div className="relative z-10">
                  <IconComponent className={`h-8 w-8 mx-auto mb-3 transition-all duration-300 ${hoveredStat === index ? 'text-[#FB930Bff] scale-125 rotate-12' : 'text-gray-500'}`} />
                  <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${hoveredStat === index ? 'text-[#FB930Bff] scale-110' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>

        {/* Achievements Section */}
        <div className="relative py-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-2">Our Achievements</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-[#FB930Bff] to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-gray-700 hover:border-[#FB930Bff]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FB930Bff]/20 hover:-translate-y-2"
                >
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FB930Bff]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#FB930Bff]/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <IconComponent className="relative h-12 w-12 text-[#FB930Bff] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#FB930Bff] transition-colors duration-300">
                      {achievement.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;