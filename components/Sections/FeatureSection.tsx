"use client"

import { motion } from "framer-motion"
import { Brain, Lightbulb, ShieldCheck, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(251,147,11,0.15)",
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      className="h-full group"
    >
      <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-md
backdrop-blur-xl
bg-grey/10
bg-grey/15
bg-grey/20
border-white/15
border-white/20
border-white/30">
        <CardHeader className="flex flex-col items-center text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="mb-3"
          >
            {icon}
          </motion.div>
          <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-[#FB930B]" />,
      title: "Natural Language Control",
      description:
        "Control robotic systems using natural language commands that are interpreted contextually.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#FB930B]" />,
      title: "Adaptive Learning",
      description:
        "Systems that learn from interactions and improve performance over time through continuous feedback.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#FB930B]" />,
      title: "Enhanced Safety",
      description:
        "Advanced predictive algorithms that anticipate and prevent potential safety issues.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#FB930B]" />,
      title: "Real-time Processing",
      description:
        "Process and respond to complex inputs in milliseconds for seamless human-machine interaction.",
    },
  ]

  return (
    <section
      id="features"
      className="py-20 scroll-mt-20 "
    >
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FB930B] to-[#ffbb33] bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            Our platform combines cutting-edge LLM technology with advanced
            robotics to deliver unprecedented automation capabilities.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}