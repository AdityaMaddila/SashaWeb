"use client";

import { useState } from "react";
import {
  Award,
  Calendar,
  DollarSign,
  Users,
  Trophy,
  Star,
  Medal,
  Crown,
} from "lucide-react";

// Grant Card Component
interface GrantCardProps {
  icon: React.ReactNode;
  title: string;
  amount: string;
  date: string;
  description: string;
  organization: string;
  status?: "completed" | "ongoing" | "pending";
}

const GrantCard = ({
  icon,
  title,
  amount,
  date,
  description,
  organization,
  status = "completed",
}: GrantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    ongoing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full relative overflow-hidden border-2 backdrop-blur-xl bg-white/10 border-white/20 rounded-2xl p-6 transition-all duration-500"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(251,147,11,0.15) 0%, rgba(251,147,11,0.05) 100%)"
            : "rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background:
              "radial-gradient(circle at 50% 0%, #FB930Bff, transparent 70%)",
          }}
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 whitespace-nowrap ${statusColors[status]}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>

        {/* Header with Icon and Title */}
        <div className="flex items-start gap-4 mb-4 relative z-10 pr-24">
          <div
            className="p-3 rounded-xl bg-gradient-to-br from-[#FB930B]/30 to-[#FB930B]/10 inline-block shadow-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 flex-shrink-0"
            style={{
              boxShadow: isHovered
                ? "0 0 20px rgba(251, 147, 11, 0.4)"
                : "0 0 10px rgba(251, 147, 11, 0.2)",
            }}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-white transition-colors duration-300 group-hover:text-[#FB930B] line-clamp-2">
              {title}
            </h3>
          </div>
        </div>

        {/* Organization */}
        <div className="mb-4 relative z-10">
          <p className="text-sm font-medium text-[#FB930B] transition-all duration-300 group-hover:text-[#FB930B]/80">
            {organization}
          </p>
        </div>

        {/* Amount and Date */}
        <div
          className="flex items-center justify-between mb-4 rounded-lg p-3 relative z-10 border border-white/10 transition-all duration-300"
          style={{
            background: isHovered
              ? "rgba(251, 147, 11, 0.1)"
              : "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-400 flex-shrink-0" />
            <span className="font-bold text-green-400 transition-colors duration-300 group-hover:text-green-300">
              {amount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300 whitespace-nowrap">
              {date}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed relative z-10 transition-colors duration-300 group-hover:text-gray-100">
          {description}
        </p>


      </div>
    </div>
  );
};

// Main Grants Section
export const GrantsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const grants = [
    {
      icon: <Crown className="h-6 w-6 text-[#FB930B]" />,
      title: "Advanced Robotics Innovation Grant",
      amount: "$500,000",
      date: "2024",
      organization: "National Science Foundation",
      description:
        "Funding for breakthrough research in AI-powered robotic systems with natural language processing capabilities for industrial automation.",
      status: "ongoing" as const,
    },
    {
      icon: <Trophy className="h-6 w-6 text-[#FB930B]" />,
      title: "Technology Innovation Award",
      amount: "$250,000",
      date: "2023",
      organization: "Department of Technology",
      description:
        "Recognition and funding for innovative AI solutions that bridge the gap between human communication and machine understanding.",
      status: "completed" as const,
    },
    {
      icon: <Medal className="h-6 w-6 text-[#FB930B]" />,
      title: "Small Business Innovation Research",
      amount: "$150,000",
      date: "2023",
      organization: "Small Business Administration",
      description:
        "SBIR Phase II funding for developing next-generation human-robot interaction interfaces for manufacturing environments.",
      status: "completed" as const,
    },
    {
      icon: <Star className="h-6 w-6 text-[#FB930B]" />,
      title: "Green Technology Initiative",
      amount: "$200,000",
      date: "2024",
      organization: "Environmental Protection Agency",
      description:
        "Grant for developing sustainable robotics solutions that reduce energy consumption in automated systems.",
      status: "ongoing" as const,
    },
    {
      icon: <Award className="h-6 w-6 text-[#FB930B]" />,
      title: "Industry Partnership Grant",
      amount: "$100,000",
      date: "2022",
      organization: "Manufacturing Innovation Hub",
      description:
        "Collaborative funding for research partnerships with leading manufacturing companies to implement AI-driven automation solutions.",
      status: "completed" as const,
    },
    {
      icon: <Users className="h-6 w-6 text-[#FB930B]" />,
      title: "Workforce Development Grant",
      amount: "$75,000",
      date: "2024",
      organization: "Department of Labor",
      description:
        "Training and development programs for workers transitioning to AI-enhanced manufacturing environments.",
      status: "pending" as const,
    },
  ];

  const totalFunding = grants.reduce((sum, grant) => {
    const amount = parseInt(grant.amount.replace(/[$,]/g, ""));
    return sum + amount;
  }, 0);

  return (
    <section id="grants" className="py-20 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-[#FB930B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Grants & Recognition
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto mb-8">
            We're proud to be recognized by leading organizations for our
            innovative work in AI-powered robotics and automation solutions.
          </p>

          {/* Total Funding Stats */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg max-w-sm mx-auto border border-white/20 transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(251,147,11,0.2)] group">
            <div className="flex items-center gap-3 justify-center">
              <div className="p-3 rounded-lg bg-green-500/20 transition-all duration-300 group-hover:bg-green-500/30 group-hover:scale-110">
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Total Funding Received</p>
                <p className="text-3xl font-bold text-green-400">
                  ${totalFunding.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grants.map((grant, i) => (
            <GrantCard key={i} {...grant} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border-2 border-white/20 transition-all duration-500 group hover:border-white/30 hover:bg-white/15 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(999)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                opacity: hoveredCard === 999 ? 0.15 : 0,
                background:
                  "radial-gradient(circle at 50% 0%, #FB930Bff, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-[#FB930B]">
                Interested in Partnership?
              </h3>
              <p className="text-gray-300 mb-6 transition-colors duration-300 group-hover:text-gray-100">
                We're always looking for collaboration opportunities with research
                institutions, government agencies, and industry partners.
              </p>
              <button className="bg-gradient-to-r from-[#FB930B] to-yellow-500 hover:from-[#FB930B]/90 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(251,147,11,0.4)] shadow-lg">
                Contact Us for Partnerships
              </button>
            </div>

            {/* Bottom accent line */}
            <div
              className="mt-6 h-0.5 w-0 bg-gradient-to-r from-[#FB930B] to-yellow-500 rounded-full transition-all duration-500 group-hover:w-full mx-auto"
              style={{
                boxShadow: hoveredCard === 999
                  ? "0 0 10px rgba(251, 147, 11, 0.5)"
                  : "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};