import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const FloatingIcon = ({ 
  Icon, 
  delay, 
  className 
}: { 
  Icon: React.ElementType; 
  delay: number; 
  className: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 4 + delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card/90 backdrop-blur-xl shadow-xl border border-border/50 flex items-center justify-center"
    >
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
    </motion.div>
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-accent">
      {/* Background Logo - Transparent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.img
          src={logo}
          alt="CGS Logo Background"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[80%] max-w-4xl object-contain mix-blend-overlay"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full rounded-full border border-primary-foreground/10" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full"
        >
          <div className="w-full h-full rounded-full border border-primary-foreground/10" />
        </motion.div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <FloatingIcon Icon={Code} delay={0.2} className="top-24 left-[10%] hidden md:block" />
      <FloatingIcon Icon={Cloud} delay={0.4} className="top-32 right-[15%] hidden md:block" />
      <FloatingIcon Icon={Shield} delay={0.6} className="bottom-32 left-[15%] hidden md:block" />
      <FloatingIcon Icon={Cpu} delay={0.8} className="bottom-24 right-[10%] hidden md:block" />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Innovating the Digital Future
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
          >
            Transforming Ideas Into
            <br />
            <span className="relative">
              Digital Excellence
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  d="M2 10C50 2 150 2 298 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-primary-foreground/50"
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Crestonix Global Solutions delivers cutting-edge IT services, 
            empowering businesses with innovative software solutions, 
            cloud infrastructure, and digital transformation strategies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/services" className="group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-primary-foreground/20"
          >
            <p className="text-primary-foreground/60 text-sm mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {["TechCorp", "InnovateCo", "DataFlow", "CloudNine", "SecureNet"].map((company, index) => (
                <motion.span
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-primary-foreground/40 font-heading font-bold text-lg hover:text-primary-foreground/70 transition-colors cursor-default"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
