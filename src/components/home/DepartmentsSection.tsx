import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cloud,
  Shield,
  Brain,
  BarChart3,
  Smartphone,
  GitBranch,
  Globe,
  Database,
  Lightbulb,
  FileCode,
  Users,
  Building2,
  FileText,
  Keyboard,
  Headphones,
  Search,
  PenTool,
  CheckCircle,
  ClipboardList,
  X,
  ArrowRight,
} from "lucide-react";
import itDepartmentBg from "@/assets/it-department-bg.jpg";
import nonItDepartmentBg from "@/assets/nonit-department-bg.jpg";

// IT Service Images
import softwareDev from "@/assets/services/software-development.jpg";
import cloudComputing from "@/assets/services/cloud-computing.jpg";
import cybersecurity from "@/assets/services/cybersecurity.jpg";
import aiMl from "@/assets/services/ai-ml.jpg";
import dataAnalytics from "@/assets/services/data-analytics.jpg";
import mobileDev from "@/assets/services/mobile-development.jpg";
import devops from "@/assets/services/devops.jpg";
import webDev from "@/assets/services/web-development.jpg";
import database from "@/assets/services/database.jpg";
import itConsulting from "@/assets/services/it-consulting.jpg";

// Non-IT Service Images
import xmlProcessing from "@/assets/services/xml-processing.jpg";
import leadGeneration from "@/assets/services/lead-generation.jpg";
import bpo from "@/assets/services/bpo.jpg";
import documentManagement from "@/assets/services/document-management.jpg";
import dataEntry from "@/assets/services/data-entry.jpg";
import customerSupport from "@/assets/services/customer-support.jpg";
import marketResearch from "@/assets/services/market-research.jpg";
import contentWriting from "@/assets/services/content-writing.jpg";
import qualityAssurance from "@/assets/services/quality-assurance.jpg";
import adminSupport from "@/assets/services/admin-support.jpg";

const itServices = [
  { 
    name: "Software Development", 
    icon: Code, 
    description: "Custom software solutions tailored to your needs",
    image: softwareDev,
    details: "We build scalable, secure, and high-performance software solutions using cutting-edge technologies. Our expert developers create everything from web applications to enterprise systems, ensuring your business stays ahead in the digital landscape.",
    features: ["Custom Web Applications", "Enterprise Software", "API Development", "Legacy System Modernization"]
  },
  { 
    name: "Cloud Computing", 
    icon: Cloud, 
    description: "Scalable cloud infrastructure & migration",
    image: cloudComputing,
    details: "Transform your business with our comprehensive cloud solutions. We help you migrate, optimize, and manage cloud infrastructure across AWS, Azure, and Google Cloud platforms for maximum efficiency and cost savings.",
    features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Multi-Cloud Strategy"]
  },
  { 
    name: "Cybersecurity", 
    icon: Shield, 
    description: "Advanced security solutions & threat protection",
    image: cybersecurity,
    details: "Protect your digital assets with our comprehensive cybersecurity services. From threat detection to incident response, we ensure your business remains secure against evolving cyber threats.",
    features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance Management"]
  },
 
  { 
    name: "AI & Machine Learning", 
    icon: Brain, 
    description: "Intelligent automation & predictive analytics",
    image: aiMl,
    details: "Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions. Our AI solutions help you unlock new business opportunities.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Process Automation"]
  },
  { 
    name: "Data Analytics & BI", 
    icon: BarChart3, 
    description: "Business intelligence & data visualization",
    image: dataAnalytics,
    details: "Turn your data into actionable insights with our analytics solutions. We help you visualize, analyze, and leverage data to drive strategic business decisions.",
    features: ["Data Visualization", "Real-time Dashboards", "Predictive Modeling", "Data Warehousing"]
  },
  { 
    name: "Mobile App Development", 
    icon: Smartphone, 
    description: "iOS & Android application development",
    image: mobileDev,
    details: "Create engaging mobile experiences for your users. We develop native and cross-platform applications that deliver seamless performance and exceptional user experience.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"]
  },
  { 
    name: "DevOps & CI/CD", 
    icon: GitBranch, 
    description: "Continuous integration & deployment pipelines",
    image: devops,
    details: "Accelerate your software delivery with our DevOps practices. We implement automated pipelines, infrastructure as code, and continuous monitoring for faster, reliable releases.",
    features: ["Pipeline Automation", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"]
  },
  { 
    name: "Web Development", 
    icon: Globe, 
    description: "Modern, responsive web applications",
    image: webDev,
    details: "Build stunning, high-performance websites that engage your audience. We create responsive, SEO-optimized web solutions using the latest frameworks and best practices.",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"]
  },
  { 
    name: "Database Management", 
    icon: Database, 
    description: "Database design, optimization & maintenance",
    image: database,
    details: "Ensure your data is always available, secure, and performing optimally. Our database experts handle design, optimization, migration, and ongoing maintenance.",
    features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"]
  },
  { 
    name: "IT Consulting", 
    icon: Lightbulb, 
    description: "Strategic technology guidance & planning",
    image: itConsulting,
    details: "Navigate your digital transformation journey with expert guidance. We provide strategic IT consulting to help you make informed technology decisions aligned with your business goals.",
    features: ["Technology Assessment", "Digital Strategy", "Vendor Selection", "Project Management"]
  },
];

const nonItServices = [
  { 
    name: "XML Processing", 
    icon: FileCode, 
    description: "Data transformation & XML management",
    image: xmlProcessing,
    details: "Expert XML data processing and transformation services. We handle complex data conversions, validation, and management to ensure seamless data integration across your systems.",
    features: ["XML Transformation", "Data Validation", "Schema Management", "Format Conversion"]
  },
  { 
    name: "Lead Generation", 
    icon: Users, 
    description: "Qualified leads for business growth",
    image: leadGeneration,
    details: "Fuel your sales pipeline with qualified leads. Our lead generation strategies combine research, outreach, and qualification to deliver prospects ready for conversion.",
    features: ["B2B Lead Generation", "Market Research", "Lead Qualification", "Database Building"]
  },
  { 
    name: "BPO Services", 
    icon: Building2, 
    description: "Business process outsourcing solutions",
    image: bpo,
    details: "Streamline your operations with our comprehensive BPO services. We handle your back-office processes efficiently, allowing you to focus on core business activities.",
    features: ["Back-Office Operations", "Process Optimization", "Cost Reduction", "Quality Assurance"]
  },
  { 
    name: "Document Management", 
    icon: FileText, 
    description: "Digital document organization & storage",
    image: documentManagement,
    details: "Transform your document workflows with digital solutions. We help you organize, store, and retrieve documents efficiently while ensuring security and compliance.",
    features: ["Digital Archiving", "Document Indexing", "Workflow Automation", "Secure Storage"]
  },
  { 
    name: "Data Entry", 
    icon: Keyboard, 
    description: "Accurate & efficient data processing",
    image: dataEntry,
    details: "High-accuracy data entry services to support your operations. Our trained professionals ensure data integrity while meeting your volume and timeline requirements.",
    features: ["High Accuracy", "Fast Turnaround", "Quality Control", "Multiple Format Support"]
  },
  { 
    name: "Customer Support", 
    icon: Headphones, 
    description: "24/7 customer service solutions",
    image: customerSupport,
    details: "Deliver exceptional customer experiences with our support services. We provide multi-channel support to ensure your customers receive timely, professional assistance.",
    features: ["24/7 Availability", "Multi-Channel Support", "Ticket Management", "Customer Satisfaction"]
  },
  { 
    name: "Market Research", 
    icon: Search, 
    description: "Competitive analysis & market insights",
    image: marketResearch,
    details: "Make informed business decisions with comprehensive market research. We provide actionable insights into market trends, competitors, and customer behavior.",
    features: ["Competitive Analysis", "Consumer Insights", "Trend Analysis", "Industry Reports"]
  },
  { 
    name: "Content Writing", 
    icon: PenTool, 
    description: "Professional content creation & management",
    image: contentWriting,
    details: "Engage your audience with compelling content. Our professional writers create SEO-optimized content that drives traffic, engagement, and conversions.",
    features: ["Blog Writing", "Copywriting", "Technical Writing", "SEO Content"]
  },
  { 
    name: "Quality Assurance", 
    icon: CheckCircle, 
    description: "Non-technical QA & testing services",
    image: qualityAssurance,
    details: "Ensure excellence with our quality assurance services. We implement rigorous testing and review processes to maintain the highest standards in your deliverables.",
    features: ["Process Audits", "Quality Reviews", "Documentation QA", "Compliance Checks"]
  },
  { 
    name: "Administrative Support", 
    icon: ClipboardList, 
    description: "Virtual admin & back-office support",
    image: adminSupport,
    details: "Efficient administrative support to keep your business running smoothly. Our virtual assistants handle scheduling, correspondence, and office management tasks.",
    features: ["Virtual Assistance", "Scheduling", "Email Management", "Office Coordination"]
  },
];

interface ServiceType {
  name: string;
  icon: React.ElementType;
  description: string;
  image: string;
  details: string;
  features: string[];
}

const ServiceCard = ({ 
  service, 
  index, 
  onClick 
}: { 
  service: ServiceType; 
  index: number; 
  onClick: () => void;
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
      onClick={onClick}
      className="group perspective-1000 cursor-pointer"
    >
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
          className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-sm shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-500"
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
            <div className="relative mb-5">
              <motion.div 
                className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary group-hover:to-accent transition-all duration-500 shadow-lg"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  transform: "translateZ(30px)"
                }}
                whileHover={{ rotateZ: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </motion.div>
              {/* Icon Glow */}
              <div className="absolute inset-0 w-16 h-16 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
              {service.name}
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
    </motion.div>
  );
};

const ServiceModal = ({ 
  service, 
  onClose 
}: { 
  service: ServiceType | null; 
  onClose: () => void;
}) => {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.8, rotateY: -30, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        exit={{ scale: 0.8, rotateY: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-card rounded-3xl shadow-2xl"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Floating Icon */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-6"
          >
            <div 
              className="w-20 h-20 flex items-center justify-center bg-primary shadow-xl"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }}
            >
              <service.icon className="w-10 h-10 text-primary-foreground" />
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            {service.name}
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            {service.details}
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {service.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"
                }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const DepartmentsSection = () => {
  const [activeTab, setActiveTab] = useState<"it" | "nonit">("it");
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const services = activeTab === "it" ? itServices : nonItServices;
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
              onClick={() => setActiveTab("nonit")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative z-10 px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "nonit"
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
                key={service.name}
                service={service}
                index={index}
                onClick={() => setSelectedService(service)}
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

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
