import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden ">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FB930Bff]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FB930Bff]/50 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10"></div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-[#FB930Bff]/30 group-hover:border-[#FB930Bff]/60 transition-colors duration-500 z-10"></div>

            <Image
              src="/About.webp"
              alt="Team working on robotics"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-5"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB930Bff] to-orange-600">Sasha Innoworks</span>
              </motion.h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FB930Bff] to-orange-600 rounded-full"></div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed backdrop-blur-sm">
                <span className="font-semibold text-white">SASHA INNOWORKS PRIVATE LIMITED</span> is a deep-tech company headquartered at BITS Pilani – Hyderabad (Telangana, India). Founded in August 2024 by Prof. Sandip S. Deshmukh and Mr. Kaki Ramesh, it blends academic excellence with industry experience.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We specialize in intelligent automation using <span className="text-[#FB930Bff] font-semibold">AI, robotics, and computer vision</span> to eliminate manual errors and boost efficiency. Our solutions serve key sectors like logistics, automotive, and manufacturing, driving the future of industrial innovation.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed italic border-l-3 border-[#FB930Bff]/50 pl-4">
                Our mission is to democratize advanced robotics by making systems that understand human intent, adapt to changing environments, and collaborate seamlessly with human workers.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { number: "50+", label: "Engineers" },
                { number: "100+", label: "Deployments" },
                { number: "12", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FB930Bff]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Border */}
                  <div className="absolute inset-0 border border-[#FB930Bff]/20 group-hover:border-[#FB930Bff]/50 rounded-xl transition-colors duration-300"></div>

                  <div className="relative p-4 text-center backdrop-blur-sm">
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FB930Bff] to-orange-600 transition-transform duration-300"
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-2 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}