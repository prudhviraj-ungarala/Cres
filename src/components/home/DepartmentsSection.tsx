import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import itDepartmentBg from "@/assets/it-department-bg.jpg";
import nonItDepartmentBg from "@/assets/nonit-department-bg.jpg";



export const DepartmentsSection = () => {
  const [activeTab, setActiveTab] = useState<"it" | "non-it">("it");

  const backgroundImage = activeTab === "it" ? itDepartmentBg : nonItDepartmentBg;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={backgroundImage}
            alt={activeTab === "it" ? "IT Department" : "Non-IT Department"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        </motion.div>
      </AnimatePresence>

      {/* Animated Geometric Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 border border-accent/10 rounded-full"
        />
        
        {/* Floating 3D Cubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border border-primary/20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              transform: "rotate(45deg)"
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [45, 55, 45],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="relative flex justify-center gap-2 p-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
            <motion.button
              onClick={() => setActiveTab("it")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative z-10 px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "it"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10">IT Department</span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab("non-it")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative z-10 px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "non-it"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10">Non-IT Department</span>
            </motion.button>
          </div>
        </motion.div>


        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center gap-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 ${i === 2 ? "bg-primary" : "bg-primary/30"}`}
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              animate={{ rotate: 45 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
