import { Users, Star, Award, MapPin } from "lucide-react";

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  featured?: boolean;
}

// Simplified Team Card for Landing Page
const TeamCard = ({ image, name, position, bio, featured = false }: TeamCardProps) => {
  return (
    <div className={`group relative bg-gray-900 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 dark:hover:from-[rgba(251,147,11,0.1)] dark:hover:to-gray-900 ${featured ? 'ring-2 ring-[#FB930Bff]' : 'border border-gray-700'}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-[#FB930Bff] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="h-3 w-3" />
            Lead
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-[#FB930Bff] font-semibold text-sm mb-2">
          {position}
        </p>
        <p className="text-sm text-gray-300 dark:text-gray-300 leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

// Landing Page Team Section
const TeamSection = () => {
  const teamMembers = [
    {
      image: "/api/placeholder/300/300",
      name: "Dr. Sarah Chen",
      position: "CEO & Founder",
      bio: "15+ years in AI & Robotics. Former MIT researcher with 50+ published papers and multiple successful tech ventures.",
      featured: true
    },
    {
      image: "/api/placeholder/300/300",
      name: "Marcus Rodriguez",
      position: "CTO",
      bio: "Former Google & Tesla engineer. Expert in large-scale systems and autonomous technologies with 12+ years experience.",
      featured: true
    },
    {
      image: "/api/placeholder/300/300",
      name: "Dr. Aisha Patel",
      position: "Head of AI Research",
      bio: "Leading researcher in NLP and computer vision. Published in Nature and Science with 10+ years in AI research."
    },
    {
      image: "/api/placeholder/300/300",
      name: "James Thompson",
      position: "Director of Operations",
      bio: "Operations expert with Wharton MBA. Specializes in scaling tech companies and robotics manufacturing."
    }
  ];

  return (
    <section id="team" className="py-16 ">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-400 max-w-[600px] mx-auto">
            Our world-class team combines decades of experience in AI, robotics, and innovation to deliver breakthrough solutions.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 text-center shadow-md border border-gray-700">
            <div className="text-2xl font-bold text-[#FB930Bff] mb-1">24+</div>
            <div className="text-sm text-gray-400 dark:text-gray-400">Expert Team Members</div>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 text-center shadow-md border border-gray-700">
            <div className="text-2xl font-bold text-[#FB930Bff] mb-1">150+</div>
            <div className="text-sm text-gray-400 dark:text-gray-400">Years Combined Experience</div>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 text-center shadow-md border border-gray-700">
            <div className="text-2xl font-bold text-[#FB930Bff] mb-1">18</div>
            <div className="text-sm text-gray-400 dark:text-gray-400">Advanced Degrees</div>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 text-center shadow-md border border-gray-700">
            <div className="text-2xl font-bold text-[#FB930Bff] mb-1">8</div>
            <div className="text-sm text-gray-400 dark:text-gray-400">Countries Represented</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center border border-gray-700 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 dark:hover:from-[rgba(251,147,11,0.1)] dark:hover:to-gray-900 transition-all duration-300">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 md:block hidden text-[#FB930Bff]" />
            <h3 className="text-2xl font-bold text-white">Trusted by Industry Leaders</h3>
          </div>
          <p className="text-gray-400 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team's expertise is recognized globally. We've worked with Fortune 500 companies, 
            leading research institutions, and government agencies worldwide.
          </p>
          
          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FB930Bff] mb-2">100+</div>
              <div className="text-sm text-gray-400 dark:text-gray-400">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FB930Bff] mb-2">25+</div>
              <div className="text-sm text-gray-400 dark:text-gray-400">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FB930Bff] mb-2">50+</div>
              <div className="text-sm text-gray-400 dark:text-gray-400">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;