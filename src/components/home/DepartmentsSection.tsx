import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
} from "lucide-react";
import itDepartmentBg from "@/assets/it-department-bg.jpg";
import nonItDepartmentBg from "@/assets/nonit-department-bg.jpg";
import { services as allServices } from "@/lib/services";

const ServiceCard = ({ 
  service, 
  index,
}: { 
  service: typeof allServices[0]; 
  index: number; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 80
      }}
      className="group perspective-1000 cursor-pointer"
    >
      <Link to={`/services/${service.slug}`} className="block h-full">
        <motion.div 
          whileHover={{ 
            rotateY: 8,
            rotateX: -5,
            z: 50,
            scale: 1.05
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative h-full preserve-3d"
        >
          {/* Unique Diamond/Rhombus Shape with 3D Effect */}
          <div 
            className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-sm shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-500 h-full"
            style={{
              clipPath: index % 3 === 0 
                ? "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" 
                : index % 3 === 1
                ? "polygon(10% 0, 100% 5%, 90% 100%, 0 95%)"
                : "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
              transform: "translateZ(20px)"
            }}
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* 3D Floating Accent */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative p-6 pt-8 pb-10">
              {/* Hexagonal Icon Container with 3D Effect */}
              <div className="relative mb-5 h-16">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-cover"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    transform: "translateZ(30px)"
                  }}
                  whileHover={{ rotateZ: 10 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Icon Glow */}
                <div className="absolute inset-0 w-16 h-16 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body mb-4">
                {service.description}
              </p>

              {/* View Details Button */}
              <motion.div 
                className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
          
          {/* 3D Shadow Layer */}
          <div 
            className="absolute inset-0 bg-primary/10 -z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            style={{
              clipPath: index % 3 === 0 
                ? "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" 
                : index % 3 === 1
                ? "polygon(10% 0, 100% 5%, 90% 100%, 0 95%)"
                : "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const DepartmentsSection = () => {
  const [activeTab, setActiveTab] = useState<"it" | "non-it">("it");

  const services = allServices.filter((s) => s.type === activeTab);
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 tracking-tight">
            Comprehensive{" "}
            <span className="relative">
              <span className="text-primary">Solutions</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            Click on any service to explore detailed information and see how we can help transform your business.
          </p>
        </motion.div>

        {/* 3D Tab Toggle - Isometric Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="relative flex gap-2 p-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
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

        {/* Featured Image Banner with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 perspective-1000"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-banner"}
              initial={{ opacity: 0, rotateX: 15 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -15 }}
              transition={{ duration: 0.5 }}
              className="relative h-48 md:h-64 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)"
              }}
            >
              <img
                src={backgroundImage}
                alt={activeTab === "it" ? "IT Department Environment" : "Non-IT Department Environment"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <div>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-2">
                    {activeTab === "it" ? "Technology & Innovation" : "Business Excellence"}
                  </h3>
                  <p className="text-muted-foreground max-w-md font-body">
                    {activeTab === "it"
                      ? "Cutting-edge IT solutions powering your digital transformation"
                      : "Professional services driving your business growth"}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Services Grid with 3D Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

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
