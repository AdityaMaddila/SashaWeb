"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Brain,
  Cpu,
  Factory,
  FastForward,
  Headphones,
  Layers,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ClientSection } from "@/components/client-section";
import { FeaturesSection } from "@/components/feature-card";
import { HowItWorks } from "@/components/how-it-works";
import  UseCaseCard  from "@/components/use-case-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { GrantsSection } from "@/components/GrantsSection";
import TeamSection from "@/components/TeamSection";
import { FuturisticNavbar } from "@/components/FuturisticNavbar";
import { AnimatedHeroSection } from "@/components/AnimatedHeroSection";

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
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(251, 147, 11, 0.2) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 10s ease-in-out infinite',
          }}
        />
        
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
        <section id="how-it-works" className="py-20 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
                Our three-step process makes implementing LLM-powered robotics
                simple and effective.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ClientSection>
                <HowItWorks
                  step="01"
                  icon={<Cpu className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Integration"
                  description="Connect our LLM system to your existing robotic infrastructure through our simple API or hardware adapters."
                />
              </ClientSection>

              <ClientSection>
                <HowItWorks
                  step="02"
                  icon={<Layers className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Training"
                  description="Customize the system to understand your specific industry terminology and operational requirements."
                />
              </ClientSection>

              <ClientSection>
                <HowItWorks
                  step="03"
                  icon={<FastForward className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Deployment"
                  description="Deploy the trained system to production with continuous monitoring and improvement cycles."
                />
              </ClientSection>
            </div>
          </div>
        </section>

        {/* Grants Section */}
        <GrantsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Use Cases Section */}
        <UseCaseCard />

        {/* Testimonials Section */}
        <section className="py-20 relative ">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
                See what our clients have to say about our revolutionary
                technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ClientSection>
                <TestimonialCard
                  quote="RoboLLM has transformed our manufacturing process, reducing errors by 75% and increasing throughput by 40%."
                  author="Sarah Chen"
                  role="CTO, GlobalTech Manufacturing"
                />
              </ClientSection>

              <ClientSection>
                <TestimonialCard
                  quote="The natural language interface has made our warehouse operations accessible to all staff, regardless of technical background."
                  author="Marcus Johnson"
                  role="Operations Director, LogiSmart"
                />
              </ClientSection>

              <ClientSection>
                <TestimonialCard
                  quote="Customer satisfaction scores increased by 35% after deploying RoboLLM's interactive support systems in our stores."
                  author="Priya Patel"
                  role="Customer Experience Lead, RetailPlus"
                />
              </ClientSection>
            </div>
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-8 text-center text-white">
                Our Clients
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-32 bg-gray-800 backdrop-blur-sm border border-[#FB930B]/20 rounded-md flex items-center justify-center hover:border-[#FB930B]/50 transition-colors duration-300"
                  >
                    <span className="text-gray-400 font-medium">
                      Logo {i}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 relative ">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[#FB930B]/20">
                <Image
                  src="/About.webp"
                  alt="Team working on robotics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white">
                  About Sasha Innoworks
                </h2>
                <p className="text-lg text-gray-300">
                  SASHA INNOWORKS PRIVATE LIMITED is a deep-tech company
                  headquartered at BITS Pilani – Hyderabad (Telangana, India).
                  Founded in August 2024 by Prof. Sandip S. Deshmukh and Mr.
                  Kaki Ramesh, it blends academic excellence with industry
                  experience. We specialize in intelligent automation using AI,
                  robotics, and computer vision to eliminate manual errors and
                  boost efficiency. Our solutions serve key sectors like
                  logistics, automotive, and manufacturing, driving the future
                  of industrial innovation.
                </p>
                <p className="text-lg text-gray-300">
                  Our mission is to democratize advanced robotics by making
                  systems that understand human intent, adapt to changing
                  environments, and collaborate seamlessly with human workers.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#FB930Bff]">50+</h3>
                    <p className="text-sm text-gray-400">Engineers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#FB930Bff]">
                      100+
                    </h3>
                    <p className="text-sm text-gray-400">Deployments</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#FB930Bff]">12</h3>
                    <p className="text-sm text-gray-400">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative ">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-xl text-gray-400">
                  Get in touch with our team to schedule a demo and see how
                  Sasha innoworks future‑proof your operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#FB930B]/20 backdrop-blur-sm border border-[#FB930B]/30 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#FB930Bff]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Sales Team</h3>
                      <p className="text-sm text-gray-400">
                        sales@sasha.tech
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#FB930B]/20 backdrop-blur-sm border border-[#FB930B]/30 flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-[#FB930Bff]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Support</h3>
                      <p className="text-sm text-gray-400">
                        support@sasha.tech
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="shadow-lg bg-gray-900 border-[#FB930B]/30">
                <CardHeader>
                  <CardTitle className="text-white">Contact Us</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium text-gray-300"
                        >
                          First Name
                        </label>
                        <Input id="first-name" placeholder="" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium text-gray-300"
                        >
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="robert@example.com"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company
                      </label>
                      <Input id="company" placeholder="Your company" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and requirements..."
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#FB930Bff] to-orange-600 hover:from-orange-600 hover:to-[#FB930Bff] text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#FB930B]/20 py-12 bg-gray-950/50 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2 md:space-y-4">
              <div>
                <Image
                  src="/SASHA_LOGO.png"
                  alt="LOGO"
                  width={24}
                  height={24}
                  className="lg:hidden block mb-1"
                />
                <div className="flex md:items-center gap-2 text-left">
                  <Image
                    src="/SASHA_LOGO.png"
                    alt="LOGO"
                    width={24}
                    height={24}
                    className="lg:block hidden"
                  />
                  <span className="font-bold text-white">SASHA INNOWORKS</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-wrap">
                Empowering Automation through AI, Robotics & Vision.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#FB930B]/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SASHA INNOWORKS. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FB930Bff] transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}