"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, Rocket, Shield, Wifi, Zap } from "lucide-react";

const companies = [
  { name: "TechNova", icon: Cpu },
  { name: "HyperLink", icon: Wifi },
  { name: "SafeAI", icon: Shield },
  { name: "RocketWare", icon: Rocket },
  { name: "VoltLabs", icon: Zap },
  { name: "MetaConstruct", icon: Building2 },
];

// duplicate list for seamless looping
const duplicatedCompanies = [...companies, ...companies];

export default function ClientSection() {
  return (
    <div className="relative w-full overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Clients
          </motion.h2>

          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powering innovation for companies across AI, robotics, and enterprise technology.
          </motion.p>
        </motion.div>

        {/* Infinite carousel */}
<div className="relative overflow-x-hidden overflow-y-visible py-4">
  <motion.div
    className="flex min-w-max gap-8"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    }}
  >
            {duplicatedCompanies.map((company, i) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={`${company.name}-${i}`}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 w-64 group"
                >
                  <div className="relative h-40 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 flex flex-col items-center justify-center gap-4 overflow-hidden transition-all duration-300 hover:bg-slate-800/80 hover:border-slate-600 hover:shadow-2xl hover:shadow-yellow-500/20">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-12 h-12 text-yellow-700 group-hover:text-yellow-300 transition-colors duration-300" />
                    </motion.div>

                    {/* Company name */}
                    <span className="relative z-10 text-lg font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300">
                      {company.name}
                    </span>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-yellow-500/0 group-hover:border-yellow-500/50 rounded-tl-2xl transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-yellow-500/0 group-hover:border-yellow-500/50 rounded-br-2xl transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-2 mt-12"
        >
          {companies.map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-slate-700"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
