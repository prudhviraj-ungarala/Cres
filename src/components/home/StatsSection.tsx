import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", icon: "📊" },
  { value: 50, suffix: "+", label: "Global Clients", icon: "🌍" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { value: 10, suffix: "+", label: "Years Experience", icon: "🏆" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary relative overflow-hidden">
      {/* 3D Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/10"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Driving Digital Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped businesses worldwide 
            achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              className="group perspective-1000"
            >
              <div 
                className="relative text-center p-8 bg-card shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 preserve-3d"
                style={{
                  clipPath: index % 2 === 0 
                    ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                    : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
                }}
              >
                {/* Decorative Icon */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-3xl mb-4"
                >
                  {stat.icon}
                </motion.div>
                
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>

                {/* 3D Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* 3D Shadow */}
              <div 
                className="absolute inset-0 bg-primary/5 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"
                style={{
                  clipPath: index % 2 === 0 
                    ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                    : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
