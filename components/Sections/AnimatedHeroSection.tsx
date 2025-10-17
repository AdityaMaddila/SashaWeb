"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function AnimatedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/main_stock.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="/Hero.jpg" alt="Hero background" className="w-full h-full object-cover" />
        </video>
        
        {/* Dark overlay with gradient
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        
        {/* Animated gradient overlay */}
        {/* <div 
          className="absolute inset-0 bg-gradient-to-r from-[#FB930Bff]/20 via-transparent to-yellow-500/20 animate-gradientShift"
        ></div> */} 
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with staggered animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {/* Use inline-flex with gap so spacing is consistent across breakpoints and wraps nicely */}
            <span
              className={`inline-flex items-center gap-3 flex-wrap justify-center transition-all duration-1000 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <span className="inline-block">
                Welcome to
              </span>

              <span
                className={`inline-block bg-gradient-to-r from-[#FB930Bff] via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-gradientText transition-all duration-1000 ${
                  isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                Sasha Innoworks
              </span>
            </span>
          </h1>

          {/* Subheading with fade-in */}
          <p
            className={`text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            Transform your business with cutting-edge innovation and technology
            solutions
          </p>

          {/* Buttons with slide-up animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <Link href="#contact">
              <button className="group relative bg-[#FB930Bff] hover:bg-[#FB930Bff]/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(251,147,11,0.5)] overflow-hidden">
                {/* Animated background glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#FB930Bff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>

            <Link href="#features">
              <button className="group relative border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                {/* Animated border glow */}
                <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Floating particles/indicators */}
          <div
            className={`mt-16 flex justify-center gap-2 transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "1.2s" }}
      >
        <Link href="#features">
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
              Scroll to explore
            </span>
            <svg 
              className="w-6 h-6 text-white/80 animate-bounce group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Link>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-50%);
          }
          50% {
            opacity: 0.5;
            transform: translateX(50%);
          }
        }

        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradientShift {
          animation: gradientShift 8s ease-in-out infinite;
        }

        .animate-gradientText {
          background-size: 200% auto;
          animation: gradientText 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}