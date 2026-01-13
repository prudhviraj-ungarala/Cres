
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
    details: `Our expert developers design and deliver scalable, secure, and maintainable software solutions tailored precisely to your business goals. Leveraging modern technologies such as React, Node.js, Python, and .NET, we ensure that every application is built with performance, flexibility, and long-term growth in mind.

Quality is at the core of everything we do. We follow agile development methodologies to enable transparency, continuous improvement, and rapid delivery—without ever compromising on standards. Each project undergoes rigorous testing and quality assurance processes, including functional testing, performance validation, and security checks, to guarantee robust and reliable outcomes.

Our development approach emphasizes clean architecture, reusable components, and industry best practices, ensuring that the software remains easy to maintain and enhance over time. By combining technical excellence with a deep understanding of client requirements, we consistently deliver solutions that drive efficiency, innovation, and lasting client satisfaction.`,
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
    details: `We empower organizations to modernize their IT infrastructure by delivering secure, scalable, and cost-effective cloud solutions tailored to their business goals. Our cloud journey begins with a thorough assessment of your existing systems, applications, and workloads to identify the most suitable cloud model and migration approach.

From strategy and architecture design to seamless migration and post-deployment optimization, we ensure minimal downtime, data integrity, and business continuity throughout the process. Our experts work across leading cloud platforms to help you adopt modern cloud-native services, improve application performance, enhance security, and enable future scalability.

Whether you are moving from on-premises to cloud, migrating between cloud providers, or optimizing your current cloud environment, we focus on delivering high availability, operational efficiency, and measurable ROI. With DevOps automation, monitoring, and cost-management best practices, we help your business stay agile, resilient, and ready for growth in a cloud-first world.`,
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
    details: `We design and develop intelligent AI and Machine Learning solutions that help businesses turn data into meaningful decisions and competitive advantages. Our approach starts with understanding your business objectives, data sources, and workflows to build models that deliver real-world impact.

From intelligent chatbots and recommendation engines to advanced predictive analytics and computer vision systems, our solutions are designed to learn, adapt, and improve over time. We focus on building scalable, secure, and explainable AI models that integrate seamlessly with your existing applications and infrastructure.

By leveraging modern ML frameworks and automation pipelines, we enable faster model training, deployment, and continuous optimization. Our AI solutions help organizations enhance customer experiences, automate complex processes, reduce operational costs, and unlock new growth opportunities through data-driven intelligence.`,
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
    details: `We help organizations unlock the true value of their data by transforming raw information into clear, actionable business intelligence. Our data analytics and BI solutions are designed to provide accurate insights that support smarter decision-making, performance tracking, and long-term strategic planning.

From building robust data warehouses and ETL pipelines to delivering interactive dashboards and real-time analytics, we ensure your data is reliable, accessible, and easy to understand. Our team integrates data from multiple sources, cleans and structures it efficiently, and presents it through intuitive visualizations tailored to your business needs.

By enabling real-time reporting and advanced analytics, we empower stakeholders to monitor KPIs, identify trends, and respond quickly to changing business conditions. Our solutions help improve operational efficiency, enhance forecasting accuracy, and drive data-driven growth across the organization.`,
    image: dataAnalytics,
    type: "it"
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Modern, responsive web applications",
    image: webDev,
    details: `We build modern, scalable, and high-performance web applications that deliver exceptional user experiences across all devices. Our web development process focuses on creating visually engaging interfaces combined with robust functionality to help businesses establish a strong digital presence.

From responsive corporate websites to advanced web applications and e-commerce platforms, we use the latest technologies and frameworks to ensure speed, security, and reliability. Every solution is optimized for SEO, accessibility, and performance to maximize reach and user engagement.

We follow best development practices, including clean code architecture, cross-browser compatibility, and performance optimization. By integrating modern features such as Progressive Web Apps, content management systems, and secure payment solutions, we help businesses grow, convert visitors into customers, and scale effortlessly in a competitive digital landscape.`,
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
    details: `We create powerful, intuitive, and scalable mobile applications that help businesses connect with their customers anytime, anywhere. Our mobile app development services focus on delivering seamless performance, engaging design, and reliable functionality across both iOS and Android platforms.

Whether you need a native application or a cross-platform solution, our team leverages modern frameworks and technologies to build apps that are fast, secure, and user-friendly. We emphasize clean architecture, smooth navigation, and consistent user experiences to ensure high adoption and long-term engagement.

From UI/UX design and development to app store deployment and ongoing maintenance, we manage the complete mobile app lifecycle. Our solutions are optimized for performance, scalability, and future enhancements, enabling your business to grow and evolve in the mobile-first digital landscape.`,
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
    details: `We provide strategic IT consulting services that help organizations align technology initiatives with their business objectives. Our consultants work closely with stakeholders to understand current challenges, evaluate existing systems, and identify opportunities where technology can drive efficiency, innovation, and growth.

With a vendor-agnostic approach, we deliver unbiased recommendations tailored to your unique needs. From technology assessments and IT roadmap creation to vendor selection and project oversight, we ensure that every decision supports long-term business success and risk reduction.

Our consulting services extend beyond planning to include implementation guidance, change management, and team enablement. By combining deep technical expertise with strong business insight, we help organizations modernize their IT landscape, optimize investments, and build a resilient foundation for future transformation.`,
    image: itConsulting,
    type: "it"
  },
  {
    title: "DevOps & CI/CD",
    slug: "devops-ci-cd",
    description: "Continuous integration & deployment pipelines",
    image: devops,
    details: `We help organizations accelerate software delivery by implementing modern DevOps practices and fully automated CI/CD pipelines. Our approach focuses on reducing deployment time, minimizing errors, and ensuring consistent, high-quality releases across development, testing, and production environments.

By adopting infrastructure as code, containerization, and automated testing, we enable faster and more reliable application deployments. Our DevOps solutions promote collaboration between development and operations teams while improving system stability, scalability, and security.

We also implement continuous monitoring and logging to provide real-time visibility into application performance and infrastructure health. Through proactive alerts and performance insights, we help teams quickly identify issues, optimize resources, and maintain uninterrupted service delivery as your applications scale.`,
    features: ["Pipeline Automation", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
    type: "it"
  },
  {
    title: "Database Management",
    slug: "database-management",
    description: "Database design, optimization & maintenance",
    image: database,
    details: `We provide end-to-end database management services to ensure your data remains secure, highly available, and optimized for performance. Our team designs robust database architectures that support scalability, reliability, and efficient data access for mission-critical applications.

From performance tuning and query optimization to seamless data migration and version upgrades, we proactively manage your databases to minimize downtime and prevent issues before they impact operations. We implement best practices for indexing, storage optimization, and capacity planning to maintain consistent performance as your data grows.

Our services also include automated backups, disaster recovery planning, and continuous monitoring to safeguard your data against loss and security threats. By ensuring data integrity, availability, and compliance, we help organizations confidently rely on their databases as a foundation for business continuity and growth.`,
    features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"],
    type: "it"
  },
  {
    title: "XML Processing",
    slug: "xml-processing",
    description: "Data transformation & XML management",
    image: xmlProcessing,
    details: `We deliver reliable and efficient XML processing solutions that enable seamless data exchange across diverse systems and platforms. Our services focus on transforming, validating, and managing XML data to ensure accuracy, consistency, and compatibility in complex enterprise environments.

From XML schema design and validation to large-scale data transformation and format conversion, we handle structured data with precision and performance in mind. Our solutions support integration between legacy systems, modern applications, and third-party services while maintaining data integrity.

By leveraging industry standards and proven methodologies, we help organizations automate data workflows, reduce manual processing, and ensure smooth, error-free data communication across their digital ecosystem.`,
    features: ["XML Transformation", "Data Validation", "Schema Management", "Format Conversion"],
    type: "non-it"
  },
  {
    title: "Lead Generation",
    slug: "lead-generation",
    description: "Qualified leads for business growth",
    image: leadGeneration,
    details: `We help businesses accelerate revenue growth by delivering high-quality, sales-ready leads tailored to their target market. Our lead generation services combine in-depth market research, data-driven targeting, and multi-channel outreach to connect you with prospects who are genuinely interested in your offerings.

From identifying ideal customer profiles to building verified prospect databases and qualifying leads, we ensure that your sales team spends time engaging with the right opportunities. Our structured qualification process filters prospects based on relevance, intent, and readiness to convert.

By aligning lead generation strategies with your business goals, we create a consistent and scalable pipeline that improves conversion rates, shortens sales cycles, and drives sustainable business growth.`,
    features: ["B2B Lead Generation", "Market Research", "Lead Qualification", "Database Building"],
    type: "non-it"
  },
  {
    title: "BPO Services",
    slug: "bpo-services",
    description: "Business process outsourcing solutions",
    image: bpo,
    details: `We provide reliable and scalable Business Process Outsourcing (BPO) services designed to improve operational efficiency and reduce costs. By managing essential back-office and support functions, we allow businesses to focus on their core competencies and strategic growth initiatives.

Our BPO solutions are tailored to your specific business requirements, combining skilled professionals, standardized processes, and technology-driven workflows. From customer support and data management to administrative and operational tasks, we ensure consistent service quality and measurable performance outcomes.

With a strong focus on process optimization, quality assurance, and compliance, we deliver cost-effective outsourcing solutions that enhance productivity, improve service delivery, and support long-term business success.`,
    features: ["Back-Office Operations", "Process Optimization", "Cost Reduction", "Quality Assurance"],
    type: "non-it"
  },
  {
    title: "Document Management",
    slug: "document-management",
    description: "Digital document organization & storage",
    image: documentManagement,
    details: `We help organizations digitize, organize, and manage documents efficiently with secure and scalable document management solutions. Our services transform paper-based and fragmented digital files into structured, searchable, and easily accessible document repositories.

From digital archiving and intelligent indexing to workflow automation and secure storage, we streamline document lifecycles and improve collaboration across teams. Our solutions ensure quick document retrieval, reduced manual effort, and improved operational efficiency.

With a strong focus on data security, access control, and compliance, we safeguard sensitive information while enabling seamless document sharing and long-term storage. By modernizing document workflows, we help businesses reduce costs, improve productivity, and maintain complete control over their information assets.`,
    features: ["Digital Archiving", "Document Indexing", "Workflow Automation", "Secure Storage"],
    type: "non-it"
  },
  {
    title: "Data Entry",
    slug: "data-entry",
    description: "Accurate & efficient data processing",
    image: dataEntry,
    details: `We deliver accurate, reliable, and efficient data entry services that help organizations maintain clean and well-structured data. Our trained professionals follow strict quality control processes to ensure precision, consistency, and data integrity across all projects.

From large-volume data entry to data cleansing and validation, we handle information in multiple formats while meeting tight timelines. Our scalable processes are designed to adapt to fluctuating workloads without compromising accuracy or turnaround time.

With a strong focus on confidentiality and security, we ensure that your data is handled safely and in compliance with industry standards. By outsourcing data entry tasks to our experts, businesses can reduce operational overhead, improve efficiency, and focus on core strategic activities.`,
    features: ["High Accuracy", "Fast Turnaround", "Quality Control", "Multiple Format Support"],
    type: "non-it"
  },
  {
    title: "Customer Support",
    slug: "customer-support",
    description: "24/7 customer service solutions",
    image: customerSupport,
    details: `We provide reliable, scalable, and results-driven solutions designed to support your business operations and growth objectives. Our services combine skilled professionals, standardized processes, and technology-driven workflows to deliver high-quality outcomes with efficiency and accuracy.

By focusing on process optimization, data security, and performance monitoring, we ensure consistent service delivery and measurable business value. Our approach enables organizations to reduce operational overhead, improve productivity, and maintain flexibility in a rapidly evolving digital environment.

Whether supporting core IT initiatives or managing essential business processes, we work as a trusted partner to help you achieve operational excellence, customer satisfaction, and long-term success.`,
    features: ["24/7 Availability", "Multi-Channel Support", "Ticket Management", "Customer Satisfaction"],
    type: "non-it"
  },
  {
    title: "Market Research",
    slug: "market-research",
    description: "Competitive analysis & market insights",
    image: marketResearch,
    details: `We provide reliable and insight-driven market research services designed to support informed business decisions and strategic planning. Our approach combines structured research methodologies, data analysis, and industry expertise to deliver accurate and actionable market intelligence.

By focusing on competitive analysis, consumer behavior, and market trends, we help organizations understand their position in the market and identify growth opportunities. Our research processes are standardized, data-driven, and tailored to align with your business objectives.

Through clear reporting and actionable insights, we enable businesses to reduce risk, strengthen market strategies, and make confident decisions that drive sustainable growth in a competitive environment.`,
    features: ["Competitive Analysis", "Consumer Insights", "Trend Analysis", "Industry Reports"],
    type: "non-it"
  },
  {
    title: "Content Writing",
    slug: "content-writing",
    description: "Professional content creation & management",
    image: contentWriting,
    details: `We provide reliable and results-driven content writing services designed to support brand communication, digital presence, and business growth. Our approach combines skilled writers, structured content strategies, and industry best practices to deliver high-quality, audience-focused content.

By focusing on clarity, relevance, and SEO optimization, we help organizations communicate their message effectively across multiple channels. Our content creation process is standardized, scalable, and aligned with your business objectives to ensure consistency and impact.

Through well-researched and professionally crafted content, we enable businesses to increase engagement, improve search visibility, and build long-term credibility in a competitive digital landscape.`,
    features: ["Blog Writing", "Copywriting", "Technical Writing", "SEO Content"],
    type: "non-it"
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    description: "Non-technical QA & testing services",
    image: qualityAssurance,
    details: `We provide reliable and structured quality assurance services designed to ensure accuracy, consistency, and compliance across business deliverables. Our approach combines standardized review processes, experienced QA professionals, and performance-driven checks to maintain high-quality outcomes.

By focusing on process audits, documentation reviews, and compliance validation, we help organizations identify gaps, reduce errors, and improve overall operational quality. Our quality assurance practices are scalable and aligned with your business objectives.

Through continuous monitoring and improvement, we enable businesses to strengthen quality standards, minimize risk, and deliver dependable results that meet internal and external expectations.`,
    features: ["Process Audits", "Quality Reviews", "Documentation QA", "Compliance Checks"],
    type: "non-it"
  },
  {
    title: "Administrative Support",
    slug: "administrative-support",
    description: "Virtual admin & back-office support",
    image: adminSupport,
    details: `We provide reliable and scalable administrative support services designed to streamline daily operations and improve business efficiency. Our approach combines skilled virtual assistants, standardized workflows, and technology-enabled processes to deliver dependable back-office support.

By managing scheduling, correspondence, and office coordination tasks, we help organizations reduce administrative workload and maintain operational continuity. Our services are flexible and aligned with your business objectives, ensuring consistent performance and timely support.

Through structured processes and quality-driven execution, we enable businesses to focus on core priorities while maintaining smooth and organized administrative operations.`,
    features: ["Virtual Assistance", "Scheduling", "Email Management", "Office Coordination"],
    type: "non-it"
  },
];

export const itServices = services.filter(s => s.type === 'it');
export const nonItServices = services.filter(s => s.type === 'non-it');
