import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HowItWorksProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function HowItWorks({ step, icon, title, description }: HowItWorksProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <Card
        className="h-full relative overflow-hidden border-2 border-gray-700 transition-all duration-500 hover:border-[#FB930Bff] hover:-translate-y-2 hover:shadow-2xl bg-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(251, 147, 11, 0.15) 0%, rgba(31, 41, 55, 1) 100%)'
            : 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        }}
      >
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: 'radial-gradient(circle at 50% 0%, #FB930Bff, transparent 70%)',
          }}
        />

        {/* Step number badge with pulse animation */}
        <div className="absolute z-10">
          <div className="relative">
            {/* Outer pulse ring */}
            <div
              className="absolute inset-0 rounded-full bg-[#FB930Bff] animate-ping"
              style={{ animationDuration: '2s' }}
            />
            {/* Main badge */}
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[#FB930Bff] to-[#d97a08] flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {step}
            </div>
          </div>
        </div>

        <CardHeader className="relative pt-8 pb-4">
          {/* Icon container with rotation animation */}
          <div
            className="mb-4 inline-block transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1)]"
            style={{
              transform: isHovered
                ? 'perspective(600px) rotateY(360deg) scale(1)'
                : 'perspective(600px) rotateY(0deg) scale(1)',
            }}
          >
            <div
              className={`p-3 mt-6 rounded-xl bg-gradient-to-br from-[#FB930B]/20 to-[#FB930B]/10 inline-block shadow-lg transition-shadow duration-500 ${
                isHovered ? 'shadow-[#FB930B]/60' : 'shadow-black/40'
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

          {/* Animated bottom accent bar */}
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
}