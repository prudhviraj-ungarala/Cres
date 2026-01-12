import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Code, Cloud, Shield, Cpu, Database, Globe, 
  ArrowRight, CheckCircle, Layers, Smartphone, 
  BarChart3, Settings
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business requirements.",
    features: [
      "Web Application Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization",
      "Quality Assurance & Testing",
    ],
    details: "Our expert developers craft scalable, maintainable software using modern technologies like React, Node.js, Python, and .NET. We follow agile methodologies to ensure rapid delivery without compromising quality.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description: "Seamlessly transition to the cloud with our comprehensive migration services.",
    features: [
      "Cloud Architecture Design",
      "AWS, Azure & GCP Solutions",
      "Cloud Migration Strategy",
      "DevOps & CI/CD Implementation",
      "Cost Optimization",
    ],
    details: "We help businesses leverage the full potential of cloud computing. From initial assessment to complete migration, our team ensures minimal downtime and maximum ROI on your cloud investment.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with our comprehensive security solutions.",
    features: [
      "Security Assessments & Audits",
      "Penetration Testing",
      "Compliance Management",
      "Incident Response",
      "Security Monitoring",
    ],
    details: "In today's threat landscape, security is paramount. Our certified security experts implement robust defenses, ensure regulatory compliance, and provide 24/7 monitoring to keep your business safe.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to drive innovation.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Systems",
      "Process Automation",
    ],
    details: "Our AI solutions transform raw data into actionable insights. From chatbots to predictive maintenance systems, we build intelligent applications that learn and improve over time.",
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform data into strategic business intelligence.",
    features: [
      "Data Warehouse Solutions",
      "Business Intelligence Dashboards",
      "ETL Pipeline Development",
      "Real-time Analytics",
      "Data Visualization",
    ],
    details: "Make data-driven decisions with our comprehensive analytics solutions. We design and implement data infrastructures that provide real-time insights and support strategic planning.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Modernize your operations for the digital age.",
    features: [
      "Digital Strategy Consulting",
      "Process Digitization",
      "Customer Experience Design",
      "Change Management",
      "Technology Roadmapping",
    ],
    details: "Digital transformation is more than technology—it's about reimagining your business. We guide organizations through comprehensive digital journeys that enhance efficiency and customer satisfaction.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Ongoing Maintenance",
    ],
    details: "Engage your customers on any device with our mobile solutions. We build high-performance apps using React Native, Flutter, and native technologies that deliver exceptional user experiences.",
  },
  {
    icon: Layers,
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT with business goals.",
    features: [
      "Technology Assessment",
      "IT Strategy Development",
      "Vendor Selection",
      "Project Management",
      "Training & Support",
    ],
    details: "Our consultants bring decades of combined experience to help you navigate complex technology decisions. We provide objective, vendor-agnostic advice that puts your interests first.",
  },
];

const ServiceCard = ({ 
  service, 
  index,
  isSelected,
  onSelect
}: { 
  service: typeof services[0]; 
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className={`cursor-pointer group relative perspective-1000 ${isSelected ? 'lg:col-span-2' : ''}`}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`preserve-3d h-full p-8 rounded-2xl border transition-all duration-500 ${
          isSelected 
            ? 'bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20' 
            : 'bg-card border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`flex-1 ${isSelected ? 'lg:border-r lg:border-primary-foreground/20 lg:pr-8' : ''}`}>
            {/* Icon */}
            <motion.div
              animate={{ y: isHovered ? -5 : 0 }}
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                isSelected 
                  ? 'bg-primary-foreground/20' 
                  : 'bg-gradient-to-br from-primary to-accent'
              }`}
            >
              <service.icon className={`w-7 h-7 ${isSelected ? 'text-primary-foreground' : 'text-primary-foreground'}`} />
            </motion.div>

            {/* Content */}
            <h3 className={`text-xl font-heading font-bold mb-3 transition-colors ${
              isSelected ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'
            }`}>
              {service.title}
            </h3>
            <p className={`leading-relaxed ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {service.description}
            </p>

            {!isSelected && (
              <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </div>

          {/* Expanded Content */}
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-primary-foreground/90 mb-6">{service.details}</p>
              <h4 className="font-heading font-bold text-primary-foreground mb-4">Key Features:</h4>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-primary-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Comprehensive IT Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From custom software development to cloud migration and AI integration, 
              we deliver end-to-end technology solutions that drive growth.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Click on a service to learn more
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each of our services is designed to address specific business challenges 
              while integrating seamlessly with your existing infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                isSelected={selectedService === index}
                onSelect={() => setSelectedService(selectedService === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              How We Deliver Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and objectives" },
              { step: "02", title: "Strategy", desc: "Designing the optimal solution approach" },
              { step: "03", title: "Execution", desc: "Agile development with continuous feedback" },
              { step: "04", title: "Support", desc: "Ongoing maintenance and optimization" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary mx-auto flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-heading font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-background mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-background/70 mb-10">
              Contact us today for a free consultation. Let's discuss how we can 
              help transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
