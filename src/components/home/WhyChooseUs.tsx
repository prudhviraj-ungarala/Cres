import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Users, Zap, Trophy, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and frameworks to build future-proof solutions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of certified professionals brings decades of combined experience.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "150+ successful projects delivered across diverse industries worldwide.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on meeting deadlines without compromising quality.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you at every step.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control ensure flawless deliverables.",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-foreground overflow-hidden relative">
      {/* 3D Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-background/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-primary/10 rounded-full"
        />
        
        {/* Floating Hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/5"
            style={{
              width: 40 + i * 10,
              height: 40 + i * 10,
              top: `${15 + i * 12}%`,
              right: `${5 + i * 8}%`,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold mb-4"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-background mb-6">
              Partner with Industry Leaders
            </h2>
            <p className="text-lg text-background/70 mb-8 leading-relaxed">
              At Crestonix Global Solutions, we don't just deliver projects – we build 
              lasting partnerships. Our commitment to excellence, innovation, and 
              client success sets us apart in the competitive IT landscape.
            </p>

            {/* Feature List with 3D Cards */}
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-start gap-4 p-4 bg-background/5 border border-background/10 backdrop-blur-sm hover:bg-background/10 transition-all duration-300"
                  style={{
                    clipPath: "polygon(0 0, 98% 0, 100% 50%, 98% 100%, 0 100%)"
                  }}
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center bg-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-background mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-background/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 5
                }}
                className="group relative p-6 bg-background/5 border border-background/10 backdrop-blur-sm hover:bg-background/10 transition-all duration-300 perspective-1000"
                style={{
                  clipPath: index % 2 === 0 
                    ? "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
                    : "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                }}
              >
                {/* Floating Glow */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                />
                
                <div 
                  className="w-14 h-14 flex items-center justify-center bg-primary/20 mb-4 group-hover:bg-primary transition-colors duration-300"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                  }}
                >
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-heading font-bold text-background mb-2 relative z-10">
                  {feature.title}
                </h4>
                <p className="text-background/60 text-sm relative z-10">{feature.description}</p>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="col-span-2 p-8 bg-primary text-primary-foreground text-center relative overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
              }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-primary-foreground rounded-full"
                    style={{
                      width: 100 + i * 100,
                      height: 100 + i * 100,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                  />
                ))}
              </motion.div>
              
              <p className="font-heading font-bold text-2xl mb-2 relative z-10">Ready to Transform?</p>
              <p className="text-primary-foreground/80 relative z-10">
                Let's discuss how we can help your business thrive in the digital age.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
