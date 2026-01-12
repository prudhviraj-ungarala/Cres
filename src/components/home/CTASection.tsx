import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* 3D Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Rotating Hexagon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          }}
        />
        
        {/* Pulsing Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/10"
            style={{
              width: 30 + i * 15,
              height: 30 + i * 15,
              top: `${20 + i * 12}%`,
              left: `${5 + i * 15}%`,
              clipPath: i % 2 === 0 
                ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 mb-8"
            style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-semibold text-sm">
              Start Your Digital Journey
            </span>
          </motion.div>

          {/* Headline with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
          >
            Ready to Transform Your
            <span className="text-primary"> Business?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how our cutting-edge solutions can drive your success. 
            Schedule a free consultation with our experts today.
          </motion.p>

          {/* CTA Buttons with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <Button variant="default" size="xl" asChild className="relative z-10">
                <Link to="/contact" className="group/btn">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* Button Shadow */}
              <div className="absolute inset-0 bg-primary/30 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10 rounded-lg" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <Button variant="outline" size="xl" asChild className="relative z-10">
                <Link to="/services">
                  Explore Solutions
                </Link>
              </Button>
              {/* Button Shadow */}
              <div className="absolute inset-0 bg-border/50 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10 rounded-lg" />
            </motion.div>
          </motion.div>

          {/* Trust Badge with 3D Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 inline-flex items-center gap-6 px-6 py-3 bg-secondary/50 border border-border"
            style={{ clipPath: "polygon(2% 0, 98% 0, 100% 50%, 98% 100%, 2% 100%, 0 50%)" }}
          >
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="text-primary">✓</span> No obligations
            </span>
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="text-primary">✓</span> Free assessment
            </span>
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="text-primary">✓</span> Expert guidance
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
