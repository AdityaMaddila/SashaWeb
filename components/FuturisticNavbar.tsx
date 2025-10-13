"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function FuturisticNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



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
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-black/20 backdrop-blur-xl border-b border-white/20"
            : "bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex items-center gap-3 transition-all duration-300 relative z-10 ${
              scrolled ? "scale-95" : ""
            }`}
          >
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "drop-shadow-[0_0_15px_rgba(251,147,11,0.5)]" : ""
              }`}
            >
              <Image src="/SASHA_LOGO.png" alt="LOGO" width={40} height={40} className="relative z-10" />
              {scrolled && (
                <div className="absolute inset-0 bg-[#FB930Bff] rounded-full blur-2xl opacity-40 animate-pulse"></div>
              )}
            </div>
            <span
              className={`font-bold tracking-tight transition-all duration-300 text-base lg:text-xl ${
                scrolled
                  ? "text-white drop-shadow-[0_2px_10px_rgba(251,147,11,0.3)]"
                  : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              }`}
            >
              Sasha Innoworks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center relative">
            <div
              className={`flex items-center gap-1 rounded-2xl px-4 py-2.5 transition-all duration-500 relative overflow-hidden ${
                scrolled
                  ? "bg-white/15 dark:bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(251,147,11,0.15)]"
                  : "bg-white/5 backdrop-blur-md border border-white/20"
              }`}
            >
              {scrolled && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FB930Bff]/10 via-yellow-500/10 to-[#FB930Bff]/10 animate-shimmer"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                </>
              )}
              
              <NavLink href="#features" scrolled={scrolled} onClick={handleSmoothScroll}>Features</NavLink>
              <NavLink href="#how-it-works" scrolled={scrolled} onClick={handleSmoothScroll}>How It Works</NavLink>
              <NavLink href="#grants" scrolled={scrolled} onClick={handleSmoothScroll}>Grants</NavLink>
              <NavLink href="#team" scrolled={scrolled} onClick={handleSmoothScroll}>Team</NavLink>
              <NavLink href="#use-cases" scrolled={scrolled} onClick={handleSmoothScroll}>Use Cases</NavLink>
              <NavLink href="#about" scrolled={scrolled} onClick={handleSmoothScroll}>About Us</NavLink>
              <NavLink href="#contact" scrolled={scrolled} onClick={handleSmoothScroll}>Contact</NavLink>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className={`w-11 h-11 flex flex-col items-center justify-center gap-[5px] z-[100] md:hidden rounded-xl transition-all duration-500 ${
              scrolled
                ? "bg-white/15 dark:bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(251,147,11,0.15)]"
                : "bg-white/5 backdrop-blur-md border border-white/20"
            }`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {scrolled && (
              <div className="absolute inset-0 bg-[#FB930Bff] rounded-xl blur-lg opacity-10 animate-pulse"></div>
            )}

            <span
              className={`block h-[2.5px] rounded-full transition-all duration-300 ease-out relative z-10 bg-white w-6 shadow-[0_0_10px_rgba(255,255,255,0.5)] ${
                menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] rounded-full transition-all duration-300 ease-out relative z-10 bg-white w-6 shadow-[0_0_10px_rgba(255,255,255,0.5)] ${
                menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            <span
              className={`block h-[2.5px] rounded-full transition-all duration-300 ease-out relative z-10 bg-white w-6 shadow-[0_0_10px_rgba(255,255,255,0.5)] ${
                menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </div>

        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FB930Bff] to-transparent opacity-60 animate-pulse"></div>
        )}
      </header>

      {/* Mobile Menu */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-md z-[90] md:hidden transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <nav
          className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen z-[95] md:hidden transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-800/90 backdrop-blur-3xl border-l-2 border-white/40 dark:border-white/30 shadow-[-10px_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
            
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#FB930Bff]/8 via-yellow-500/8 to-transparent pointer-events-none"
              style={{ animation: "shimmerMenu 4s ease-in-out infinite" }}
            ></div>
            
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FB930Bff] rounded-full blur-3xl opacity-15 animate-pulse"></div>
            <div 
              className="absolute bottom-20 -left-10 w-56 h-56 bg-yellow-500 rounded-full blur-3xl opacity-12 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Menu Header */}
            <div className="relative flex items-center justify-between p-6 border-b-2 border-gray-200/60 dark:border-white/20 backdrop-blur-xl bg-white/30 dark:bg-gray-900/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FB930Bff] to-yellow-500 flex items-center justify-center shadow-lg shadow-[#FB930Bff]/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Navigation
                </span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="relative overflow-y-auto" style={{ maxHeight: "calc(100vh - 160px)" }}>
              <ul className="flex flex-col py-6 px-4 space-y-1.5">
                <MobileNavLink href="#features" onClick={handleSmoothScroll} delay="0.1s">Features</MobileNavLink>
                <MobileNavLink href="#how-it-works" onClick={handleSmoothScroll} delay="0.15s">How It Works</MobileNavLink>
                <MobileNavLink href="#grants" onClick={handleSmoothScroll} delay="0.2s">Grants</MobileNavLink>
                <MobileNavLink href="#team" onClick={handleSmoothScroll} delay="0.25s">Team</MobileNavLink>
                <MobileNavLink href="#use-cases" onClick={handleSmoothScroll} delay="0.3s">Use Cases</MobileNavLink>
                <MobileNavLink href="#about" onClick={handleSmoothScroll} delay="0.35s">About Us</MobileNavLink>
                <MobileNavLink href="#contact" onClick={handleSmoothScroll} delay="0.4s">Contact</MobileNavLink>
              </ul>

              {/* Decorative footer */}
              <div className="p-5 mt-6 mx-4 mb-6 rounded-2xl bg-gradient-to-br from-[#FB930Bff]/15 to-yellow-500/15 border-2 border-[#FB930Bff]/30 backdrop-blur-xl shadow-lg">
                <p className="text-gray-800 dark:text-gray-200 text-sm text-center font-semibold">
                  Powered by{" "}
                  <span className="text-[#FB930Bff] font-bold text-base">Sasha Innoworks</span>
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 bg-gradient-to-br from-[#FB930Bff] to-yellow-500 rounded-full animate-bounce shadow-lg shadow-[#FB930Bff]/50"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>

      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); opacity: 0.3; }
          50% { transform: translateX(100%); opacity: 0.6; }
        }
        @keyframes shimmerMenu {
          0%, 100% { opacity: 0.4; transform: translateX(-10%); }
          50% { opacity: 0.7; transform: translateX(10%); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-shimmer { animation: shimmer 4s ease-in-out infinite; }
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
      className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group ${
        scrolled ? "text-white hover:text-[#FB930Bff]" : "text-white hover:text-[#FB930Bff]"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute inset-0 rounded-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/0 group-hover:bg-white/20 group-hover:shadow-lg group-hover:shadow-[#FB930Bff]/30"
            : "bg-white/0 group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-[#FB930Bff]/30"
        }`}
      ></span>
      <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#FB930Bff] to-yellow-500 transition-all duration-300 group-hover:w-3/4 shadow-[0_0_10px_rgba(251,147,11,0.5)]"></span>
      {scrolled && (
        <span className="absolute inset-0 rounded-xl bg-[#FB930Bff] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25"></span>
      )}
    </a>
  );
}

function MobileNavLink({ href, onClick, children, delay = "0s" }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e, href);
  };

  return (
    <li
      style={{
        animation: "slideIn 0.4s ease-out",
        animationDelay: delay,
        animationFillMode: "both",
      }}
    >
      <a
        href={href}
        onClick={handleClick}
        className="group relative block px-5 py-4 rounded-xl text-gray-800 dark:text-gray-100 font-semibold text-base transition-all duration-300 hover:scale-[1.02] overflow-hidden"
      >
        <span className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-br group-hover:from-yellow-100/70 group-hover:to-orange-100/60 dark:group-hover:from-yellow-900/50 dark:group-hover:to-orange-900/40 rounded-xl transition-all duration-300 backdrop-blur-xl border border-transparent group-hover:border-[#FB930Bff]/40 shadow-none group-hover:shadow-lg group-hover:shadow-[#FB930Bff]/20"></span>
        <span className="absolute inset-0 rounded-xl bg-[#FB930Bff] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-15"></span>

        <span className="relative flex items-center justify-between z-10">
          <span className="group-hover:text-[#FB930Bff] transition-colors duration-300 font-semibold drop-shadow-sm">
            {children}
          </span>
          <svg
            className="w-5 h-5 text-gray-400 dark:text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#FB930Bff] transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>

        <span className="absolute bottom-1 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#FB930Bff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 shadow-[0_0_10px_rgba(251,147,11,0.5)]"></span>
      </a>
    </li>
  );
}
