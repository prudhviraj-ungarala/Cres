import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Shield, Cpu, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web apps to enterprise systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for optimal performance and cost efficiency.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation and data-driven insights powered by cutting-edge AI technologies.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable business intelligence with our analytics solutions.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "End-to-end digital strategies to modernize operations and enhance customer experiences.",
  },
];

const ServiceCard = ({ 
  service, 
  index 
}: { 
  service: typeof services[0]; 
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Alternate card shapes for uniqueness
  const getClipPath = (idx: number) => {
    const shapes = [
      "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)", // Bottom-right corner cut
      "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)", // Top-left corner cut
      "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)", // Top-right corner cut
      "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)", // Bottom-left corner cut
      "polygon(0 5%, 5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%)", // Dual corner
      "polygon(5% 0, 95% 0, 100% 5%, 100% 100%, 0 100%, 0 5%)", // Top dual corner
    ];
    return shapes[idx % shapes.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative perspective-1000"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.03 : 1,
          z: isHovered ? 50 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative preserve-3d h-full"
      >
        {/* Main Card with Unique Shape */}
        <div 
          className="relative p-8 bg-card border border-border/50 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 h-full"
          style={{ clipPath: getClipPath(index) }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ clipPath: getClipPath(index) }}
          />

          {/* 3D Floating Corner Accent */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 45 : 0
            }}
            className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"
          />

          {/* Icon with 3D Transform */}
          <motion.div
            animate={{ 
              y: isHovered ? -8 : 0,
              rotateZ: isHovered ? 5 : 0
            }}
            className="relative mb-6"
          >
            <div 
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" // Octagon
              }}
            >
              <service.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            {/* Icon Glow Effect */}
            <motion.div
              animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 0.5 : 0 }}
              className="absolute inset-0 bg-primary/30 blur-xl"
            />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
            {service.description}
          </p>

          {/* Link with Animated Arrow */}
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-semibold group/link relative z-10"
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
          />
        </div>

        {/* 3D Shadow Layer */}
        <div 
          className="absolute inset-0 bg-foreground/5 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"
          style={{ clipPath: getClipPath(index) }}
        />
      </motion.div>
    </motion.div>
  );
};

export const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-80 h-80 border border-accent/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold mb-4"
            style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/services" className="group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
