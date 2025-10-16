"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Factory, Truck, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ======================= UseCaseCard =======================
interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function UseCaseCard({ icon, title, description }: UseCaseCardProps) {
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
      <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 border-gray-700 dark:border-yellow-900/50 bg-gray-900 dark:bg-gray-900 group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-900 dark:group-hover:from-[rgba(251,147,11,0.1)] dark:group-hover:to-gray-900">
        <CardHeader className="flex flex-col items-center text-center">
          <motion.div
            animate={{ }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="mb-3"
          >
            {icon}
          </motion.div>
          <CardTitle className="text-lg font-semibold text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ======================= UseCasesSection =======================
export default function UseCasesSection() {
  const useCases = [
    {
      icon: <Factory className="h-10 w-10 text-[#FB930B]" />,
      title: "Manufacturing",
      description:
        "Intelligent assembly lines that adapt to production changes without reprogramming, reducing downtime by up to 60%.",
    },
    {
      icon: <Truck className="h-10 w-10 text-[#FB930B]" />,
      title: "Logistics",
      description:
        "Warehouse robots that understand complex instructions and optimize routing in real-time, improving efficiency by 45%.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-[#FB930B]" />,
      title: "Customer Support",
      description:
        "Physical support robots that can understand customer needs and provide assistance in retail and service environments.",
    },
  ];

  return (
    <section id="use-cases" className="py-20 relative scroll-mt-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FB930B] to-[#ffbb33] bg-clip-text text-transparent">
            Industry Use Cases
          </h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            See how our LLM-powered robotics solutions are transforming
            industries across the globe.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
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
              <UseCaseCard {...useCase} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
