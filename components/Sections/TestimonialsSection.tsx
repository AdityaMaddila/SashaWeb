"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

// --- Testimonial Card ---
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: { type: "spring", stiffness: 200, damping: 18 },
      }}
    >
      <Card className="h-full shadow-md transition-all duration-300 border-[#FB930Bff]/30 dark:border-yellow-900/50 bg-gray-900 dark:bg-gray-800 hover:shadow-lg hover:border-[#FB930Bff]/50">
        <CardContent className="pt-6 relative">
          <Quote className="h-8 w-8 text-[#FB930Bff] absolute top-4 left-4 opacity-30" />
          <div className="pt-6">
            <p className="text-gray-300 italic">"{quote}"</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// --- Main Section ---
export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "RoboLLM has transformed our manufacturing process, reducing errors by 75% and increasing throughput by 40%.",
      author: "Sarah Chen",
      role: "CTO, GlobalTech Manufacturing",
    },
    {
      quote:
        "The natural language interface has made our warehouse operations accessible to all staff, regardless of technical background.",
      author: "Marcus Johnson",
      role: "Operations Director, LogiSmart",
    },
    {
      quote:
        "Customer satisfaction scores increased by 35% after deploying RoboLLM's interactive support systems in our stores.",
      author: "Priya Patel",
      role: "Customer Experience Lead, RetailPlus",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            See what our clients have to say about our revolutionary technology.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        
      </div>
    </section>
  );
};
