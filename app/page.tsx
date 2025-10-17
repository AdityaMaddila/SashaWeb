"use client";
import ClientSection  from "@/components/Sections/ClientSection";
import { FeaturesSection } from "@/components/Sections/FeatureSection";
import {HowItWorks}  from "@/components/Sections/HowItWorks";
import  UseCaseCard  from "@/components/Sections/UseCasesSection";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";
import { GrantsSection } from "@/components/Sections/GrantsSection";
import TeamSection from "@/components/Sections/TeamSection";
import { FuturisticNavbar } from "@/components/FuturisticNavbar";
import { AnimatedHeroSection } from "@/components/Sections/AnimatedHeroSection";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/Sections/ContactForm";
import AboutUsSection from "@/components/Sections/AboutUsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Global Background Styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% {
            background-position: 200% 0;
          }
          50% {
            background-position: -200% 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        /* Global dark background with grid */
        body {
          background: #0a0a0a;
        }
      `}</style>

      {/* Global Background Elements - Fixed position to cover entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Circuit-like grid pattern - LIGHTER YELLOW */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 147, 11, 0.4) 2px, transparent 2px),
              linear-gradient(90deg, rgba(251, 147, 11, 0.4) 2px, transparent 2px),
              linear-gradient(rgba(251, 147, 11, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 147, 11, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
          }}
        />
        
        {/* Glowing nodes at grid intersections - LIGHTER YELLOW */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(251, 147, 11, 0.8) 1.5px, transparent 1.5px)`,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.9) 100%)',
          }}
        />
        
        {/* Moving light effect */}
        {/* <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(251, 147, 11, 0.2) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 10s ease-in-out infinite',
          }}
        />
         */}
        {/* Glow spots */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(251, 147, 11, 0.15) 0%, transparent 70%)',
              animation: 'float 8s ease-in-out infinite',
            }} 
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(251, 147, 11, 0.12) 0%, transparent 70%)',
              animation: 'float 10s ease-in-out infinite reverse',
            }} 
          />
          <div 
            className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(251, 147, 11, 0.1) 0%, transparent 70%)',
              animation: 'float 12s ease-in-out infinite',
              animationDelay: '2s',
            }} 
          />
        </div>
      </div>

      {/* Futuristic Navbar with integrated hamburger menu */}
      <div className="relative z-50">
        <FuturisticNavbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <AnimatedHeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Grants Section */}
        <GrantsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Use Cases Section */}
        <UseCaseCard />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Clients Section */}
        <ClientSection />

        {/* About Us Section */}
        <AboutUsSection/>

        {/* Contact Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}