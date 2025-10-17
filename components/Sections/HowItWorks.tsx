"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, FastForward, Layers } from "lucide-react";

// --------------------
// Animated How It Works Card
// --------------------
interface HowItWorksCardProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowItWorksCard = ({
  step,
  icon,
  title,
  description,
}: HowItWorksCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <Card
        className="h-full relative overflow-hidden border-2 backdrop-blur-xl
bg-grey/10
bg-grey/15
bg-grey/20
border-white/15
border-white/20
border-white/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background:
              "radial-gradient(circle at 50% 0%, #FB930Bff, transparent 70%)",
          }}
        />

        {/* Step Badge */}
        <div className="absolute z-10">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full bg-[#FB930Bff] animate-ping"
              style={{ animationDuration: "2s" }}
            />
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[#FB930Bff] to-[#d97a08] flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {step}
            </div>
          </div>
        </div>

        <CardHeader className="relative pt-8 pb-4">
          {/* Icon Animation */}
          <div
            className="mb-4 inline-block transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1)]"
            style={{
              transform: isHovered
                ? "perspective(600px) rotateY(360deg) scale(1)"
                : "perspective(600px) rotateY(0deg) scale(1)",
            }}
          >
            <div
              className={`p-3 mt-6 rounded-xl bg-gradient-to-br from-[#FB930B]/20 to-[#FB930B]/10 inline-block shadow-lg transition-shadow duration-500 ${
                isHovered ? "shadow-[#FB930B]/60" : "shadow-black/40"
              }`}
            >
              {icon}
            </div>
          </div>

          <CardTitle className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#FB930Bff]">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 leading-relaxed">{description}</p>
          <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#FB930Bff] to-[#d97a08] rounded-full transition-all duration-500 group-hover:w-full" />
        </CardContent>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="#FB930Bff" />
          </svg>
        </div>
      </Card>
    </div>
  );
};

// --------------------
// Full Section Wrapper
// --------------------
export const HowItWorks= () => {
  const steps = [
    {
      step: "01",
      icon: <Cpu className="h-10 w-10 text-[#FB930Bff]" />,
      title: "Integration",
      description:
        "Connect our LLM system to your existing robotic infrastructure through our simple API or hardware adapters.",
    },
    {
      step: "02",
      icon: <Layers className="h-10 w-10 text-[#FB930Bff]" />,
      title: "Training",
      description:
        "Customize the system to understand your specific industry terminology and operational requirements.",
    },
    {
      step: "03",
      icon: <FastForward className="h-10 w-10 text-[#FB930Bff]" />,
      title: "Deployment",
      description:
        "Deploy the trained system to production with continuous monitoring and improvement cycles.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            Our three-step process makes implementing LLM-powered robotics
            simple and effective.
          </p>
        </div>

        {/* Grid of Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <HowItWorksCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
