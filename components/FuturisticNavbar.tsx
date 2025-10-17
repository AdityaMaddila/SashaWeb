"use client";

import { useState, useEffect } from "react";

export function FuturisticNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    const navbarHeight = 80;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex justify-center pt-6 px-4">
          {/* Main Navbar Container */}
          <div className={`transition-all duration-500 ease-in-out px-8 py-4 rounded-full backdrop-blur-md border ${
            scrolled
              ? "bg-white/10 border-white/20 shadow-lg shadow-black/30"
              : "bg-white/10 border-white/15"
          }`}>
            <div className="flex items-center gap-12">
              {/* Logo */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-3 font-bold text-lg transition-all duration-300 relative z-10 group whitespace-nowrap text-white hover:scale-105"
              >
                <div className={`relative transition-all duration-300 ${
                  scrolled ? "drop-shadow-[0_0_15px_rgba(251,147,11,0.5)]" : "group-hover:drop-shadow-[0_0_15px_rgba(251,147,11,0.5)]"
                }`}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white relative z-10 bg-gradient-to-br from-[#FB930B] to-yellow-500 group-hover:scale-110 transition-transform duration-300">
                    <img src="./SASHA_LOGO.png" alt="Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  {(scrolled || !scrolled) && (
                    <div className={`absolute inset-0 bg-[#FB930Bff] rounded-lg blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-pulse`}></div>
                  )}
                </div>
                <span className="tracking-tight transition-all duration-300 text-base lg:text-xl text-white drop-shadow-[0_2px_10px_rgba(251,147,11,0.3)]">
                  Sasha Innoworks
                </span>
              </a>

              {/* Desktop Navigation - Hidden on mobile */}
              <nav className="hidden lg:flex items-center gap-8">
                <NavLink href="#features" scrolled={scrolled} onClick={handleSmoothScroll}>Features</NavLink>
                <NavLink href="#how-it-works" scrolled={scrolled} onClick={handleSmoothScroll}>How It Works</NavLink>
                <NavLink href="#grants" scrolled={scrolled} onClick={handleSmoothScroll}>Grants</NavLink>
                <NavLink href="#team" scrolled={scrolled} onClick={handleSmoothScroll}>Team</NavLink>
                <NavLink href="#use-cases" scrolled={scrolled} onClick={handleSmoothScroll}>Use Cases</NavLink>
                <NavLink href="#about" scrolled={scrolled} onClick={handleSmoothScroll}>About Us</NavLink>
                <NavLink href="#contact" scrolled={scrolled} onClick={handleSmoothScroll}>Contact</NavLink>
              </nav>

              {/* Mobile Hamburger Button */}
              <button
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[100] ml-auto group relative"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FB930B] to-yellow-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-500 relative z-10 bg-white shadow-lg ${
                  menuOpen ? "rotate-45 translate-y-2.5 shadow-[0_0_10px_rgba(251,147,11,0.6)]" : "group-hover:shadow-[0_0_10px_rgba(251,147,11,0.4)]"
                }`} />
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-500 relative z-10 bg-white shadow-lg ${
                  menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100 group-hover:shadow-[0_0_10px_rgba(251,147,11,0.4)]"
                }`} />
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-500 relative z-10 bg-white shadow-lg ${
                  menuOpen ? "-rotate-45 -translate-y-2.5 shadow-[0_0_10px_rgba(251,147,11,0.6)]" : "group-hover:shadow-[0_0_10px_rgba(251,147,11,0.4)]"
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <nav
          className={`fixed top-24 left-4 right-4 z-[95] lg:hidden transition-all duration-300 ease-out ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden relative">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FB930B]/5 via-transparent to-yellow-500/5 pointer-events-none"></div>
            
            <ul className="flex flex-col py-4 relative z-10">
              <MobileNavLink href="#features" onClick={handleSmoothScroll}>Features</MobileNavLink>
              <MobileNavLink href="#how-it-works" onClick={handleSmoothScroll}>How It Works</MobileNavLink>
              <MobileNavLink href="#grants" onClick={handleSmoothScroll}>Grants</MobileNavLink>
              <MobileNavLink href="#team" onClick={handleSmoothScroll}>Team</MobileNavLink>
              <MobileNavLink href="#use-cases" onClick={handleSmoothScroll}>Use Cases</MobileNavLink>
              <MobileNavLink href="#about" onClick={handleSmoothScroll}>About Us</MobileNavLink>
              <MobileNavLink href="#contact" onClick={handleSmoothScroll}>Contact</MobileNavLink>
            </ul>
          </div>
        </nav>
      </>

      <style jsx global>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 200% center; }
          50% { background-position: -200% center; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children, scrolled, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e, href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-sm font-medium transition-all duration-300 group px-3 py-2 rounded-lg"
    >
      {/* Background hover effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#FB930B]/0 via-[#FB930B]/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
      
      {/* Text */}
      <span className="relative text-white/90 group-hover:text-[#FB930B] transition-colors duration-300">
        {children}
      </span>
      
      {/* Bottom underline animation */}
      <span
        className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-[#FB930B] to-yellow-500 transition-all duration-300 group-hover:w-3/4 rounded-full shadow-[0_0_8px_rgba(251,147,11,0.5)]"
      ></span>

      {/* Blur glow on hover */}
      <span className="absolute inset-0 rounded-lg bg-[#FB930B] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-10 -z-10"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e, href);
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="block px-6 py-4 font-medium text-white relative group overflow-hidden transition-all duration-300 hover:translate-x-1"
      >
        {/* Animated background on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#FB930B]/0 via-[#FB930B]/15 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        
        {/* Content */}
        <span className="relative flex items-center justify-between z-10">
          <span className="group-hover:text-[#FB930B] transition-colors duration-300">
            {children}
          </span>
          <svg
            className="w-5 h-5 text-[#FB930B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>

        {/* Bottom line animation */}
        <span className="absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#FB930B] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 shadow-[0_0_10px_rgba(251,147,11,0.5)]"></span>
      </a>
    </li>
  );
}