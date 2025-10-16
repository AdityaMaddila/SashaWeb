"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ClientSectionProps {
  children: ReactNode
  delay?: number
}

export function ClientSection({ children, delay = 0 }: ClientSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96, rotateX: -6, filter: "blur(4px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1], // a smoother “spring-like” ease
        },
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}
