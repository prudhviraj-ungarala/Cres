
import softwareDev from "@/assets/services/software-development.jpg";
import cloudComputing from "@/assets/services/cloud-computing.jpg";
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


export const services = [
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Tailored software solutions designed to meet your unique business requirements.",
    features: [
      "Web Application Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization",
      "Quality Assurance & Testing",
    ],
    details: "Our expert developers craft scalable, maintainable software using modern technologies like React, Node.js, Python, and .NET. We follow agile methodologies to ensure rapid delivery without compromising quality.",
    image: softwareDev,
    type: "it"
  },
  {
    title: "Cloud Solutions & Migration",
    slug: "cloud-solutions-migration",
    description: "Seamlessly transition to the cloud with our comprehensive migration services.",
    features: [
      "Cloud Architecture Design",
      "AWS, Azure & GCP Solutions",
      "Cloud Migration Strategy",
      "DevOps & CI/CD Implementation",
      "Cost Optimization",
    ],
    details: "We help businesses leverage the full potential of cloud computing. From initial assessment to complete migration, our team ensures minimal downtime and maximum ROI on your cloud investment.",
    image: cloudComputing,
    type: "it"
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description: "Harness the power of artificial intelligence to drive innovation.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Systems",
      "Process Automation",
    ],
    details: "Our AI solutions transform raw data into actionable insights. From chatbots to predictive maintenance systems, we build intelligent applications that learn and improve over time.",
    image: aiMl,
    type: "it"
  },
  {
    title: "Data Analytics & BI",
    slug: "data-analytics-bi",
    description: "Transform data into strategic business intelligence.",
    features: [
      "Data Warehouse Solutions",
      "Business Intelligence Dashboards",
      "ETL Pipeline Development",
      "Real-time Analytics",
      "Data Visualization",
    ],
    details: "Make data-driven decisions with our comprehensive analytics solutions. We design and implement data infrastructures that provide real-time insights and support strategic planning.",
    image: dataAnalytics,
    type: "it"
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Modern, responsive web applications",
    image: webDev,
    details: "Build stunning, high-performance websites that engage your audience. We create responsive, SEO-optimized web solutions using the latest frameworks and best practices.",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
    type: "it"
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Ongoing Maintenance",
    ],
    details: "Engage your customers on any device with our mobile solutions. We build high-performance apps using React Native, Flutter, and native technologies that deliver exceptional user experiences.",
    image: mobileDev,
    type: "it"
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Strategic technology guidance to align IT with business goals.",
    features: [
      "Technology Assessment",
      "IT Strategy Development",
      "Vendor Selection",
      "Project Management",
      "Training & Support",
    ],
    details: "Our consultants bring decades of combined experience to help you navigate complex technology decisions. We provide objective, vendor-agnostic advice that puts your interests first.",
    image: itConsulting,
    type: "it"
  },
  {
    title: "DevOps & CI/CD",
    slug: "devops-ci-cd",
    description: "Continuous integration & deployment pipelines",
    image: devops,
    details: "Accelerate your software delivery with our DevOps practices. We implement automated pipelines, infrastructure as code, and continuous monitoring for faster, reliable releases.",
    features: ["Pipeline Automation", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
    type: "it"
  },
  {
    title: "Database Management",
    slug: "database-management",
    description: "Database design, optimization & maintenance",
    image: database,
    details: "Ensure your data is always available, secure, and performing optimally. Our database experts handle design, optimization, migration, and ongoing maintenance.",
    features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"],
    type: "it"
  },
  {
    title: "XML Processing",
    slug: "xml-processing",
    description: "Data transformation & XML management",
    image: xmlProcessing,
    details: "Expert XML data processing and transformation services. We handle complex data conversions, validation, and management to ensure seamless data integration across your systems.",
    features: ["XML Transformation", "Data Validation", "Schema Management", "Format Conversion"],
    type: "non-it"
  },
  {
    title: "Lead Generation",
    slug: "lead-generation",
    description: "Qualified leads for business growth",
    image: leadGeneration,
    details: "Fuel your sales pipeline with qualified leads. Our lead generation strategies combine research, outreach, and qualification to deliver prospects ready for conversion.",
    features: ["B2B Lead Generation", "Market Research", "Lead Qualification", "Database Building"],
    type: "non-it"
  },
  {
    title: "BPO Services",
    slug: "bpo-services",
    description: "Business process outsourcing solutions",
    image: bpo,
    details: "Streamline your operations with our comprehensive BPO services. We handle your back-office processes efficiently, allowing you to focus on core business activities.",
    features: ["Back-Office Operations", "Process Optimization", "Cost Reduction", "Quality Assurance"],
    type: "non-it"
  },
  {
    title: "Document Management",
    slug: "document-management",
    description: "Digital document organization & storage",
    image: documentManagement,
    details: "Transform your document workflows with digital solutions. We help you organize, store, and retrieve documents efficiently while ensuring security and compliance.",
    features: ["Digital Archiving", "Document Indexing", "Workflow Automation", "Secure Storage"],
    type: "non-it"
  },
  {
    title: "Data Entry",
    slug: "data-entry",
    description: "Accurate & efficient data processing",
    image: dataEntry,
    details: "High-accuracy data entry services to support your operations. Our trained professionals ensure data integrity while meeting your volume and timeline requirements.",
    features: ["High Accuracy", "Fast Turnaround", "Quality Control", "Multiple Format Support"],
    type: "non-it"
  },
  {
    title: "Customer Support",
    slug: "customer-support",
    description: "24/7 customer service solutions",
    image: customerSupport,
    details: "Deliver exceptional customer experiences with our support services. We provide multi-channel support to ensure your customers receive timely, professional assistance.",
    features: ["24/7 Availability", "Multi-Channel Support", "Ticket Management", "Customer Satisfaction"],
    type: "non-it"
  },
  {
    title: "Market Research",
    slug: "market-research",
    description: "Competitive analysis & market insights",
    image: marketResearch,
    details: "Make informed business decisions with comprehensive market research. We provide actionable insights into market trends, competitors, and customer behavior.",
    features: ["Competitive Analysis", "Consumer Insights", "Trend Analysis", "Industry Reports"],
    type: "non-it"
  },
  {
    title: "Content Writing",
    slug: "content-writing",
    description: "Professional content creation & management",
    image: contentWriting,
    details: "Engage your audience with compelling content. Our professional writers create SEO-optimized content that drives traffic, engagement, and conversions.",
    features: ["Blog Writing", "Copywriting", "Technical Writing", "SEO Content"],
    type: "non-it"
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    description: "Non-technical QA & testing services",
    image: qualityAssurance,
    details: "Ensure excellence with our quality assurance services. We implement rigorous testing and review processes to maintain the highest standards in your deliverables.",
    features: ["Process Audits", "Quality Reviews", "Documentation QA", "Compliance Checks"],
    type: "non-it"
  },
  {
    title: "Administrative Support",
    slug: "administrative-support",
    description: "Virtual admin & back-office support",
    image: adminSupport,
    details: "Efficient administrative support to keep your business running smoothly. Our virtual assistants handle scheduling, correspondence, and office management tasks.",
    features: ["Virtual Assistance", "Scheduling", "Email Management", "Office Coordination"],
    type: "non-it"
  },
];

export const itServices = services.filter(s => s.type === 'it');
export const nonItServices = services.filter(s => s.type === 'non-it');
