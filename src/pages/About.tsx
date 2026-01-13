import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Award, Users, Lightbulb, Heart } from "lucide-react";
import ItDepartmentBg from "@/assets/services/our mission.jpg";
import NonItDepartmentBg from "@/assets/services/our vision.jpg";
import InnovationImage from "@/assets/services/innovation.jpg";
import ExcellenceImage from "@/assets/services/Excellence.jpg";
import CollaborationImage from "@/assets/services/collaboration.jpg";
import IntegrityImage from "@/assets/services/integrity.jpg";

const values = [{
  icon: Lightbulb,
  title: "Innovation",
  image: InnovationImage,
  description: "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve. We foster a culture of curiosity and continuous learning to drive technological advancements. Our team is encouraged to experiment with new technologies and approaches, ensuring that we are always at the forefront of the industry.",
}, {
  icon: Award,
  title: "Excellence",
  image: ExcellenceImage,
  description: "Quality is non-negotiable. We strive for excellence in every project, every interaction, every deliverable. Our commitment to the highest standards ensures exceptional outcomes and client satisfaction. We implement rigorous testing and quality assurance processes to ensure that our solutions are robust, reliable, and secure.",
}, {
  icon: Users,
  title: "Collaboration",
  image: CollaborationImage,
  description: "We believe in the power of teamwork, both internally and with our clients, to achieve extraordinary results. We build strong, transparent partnerships to foster mutual growth and success. Our collaborative approach ensures that we understand our clients' needs and goals, allowing us to deliver tailored solutions that meet their specific requirements.",
}, {
  icon: Heart,
  title: "Integrity",
  image: IntegrityImage,
  description: "Honesty and transparency guide all our actions. We build trust through ethical business practices and a steadfast commitment to doing the right thing for our clients, partners, and community. We believe in open and honest communication, and we are committed to building long-term relationships based on trust and mutual respect.",
}];

const About = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: "-100px"
  });
  const isValuesInView = useInView(valuesRef, {
    once: true,
    margin: "-100px"
  });
  const isTeamInView = useInView(teamRef, {
    once: true,
    margin: "-100px"
  });
  const [isMissionHovered, setIsMissionHovered] = useState(false);

  return <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Pioneering Digital Excellence</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Crestonix Global Solutions is a leading IT services company dedicated to 
              transforming businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-24">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6 }}
                          className="flex flex-col md:flex-row items-center gap-12"
                          onMouseEnter={() => setIsMissionHovered(true)}
                          onMouseLeave={() => setIsMissionHovered(false)}
                        >
                          <div className="md:w-1/2">
                            <img src={ItDepartmentBg} alt="Our Mission" className="w-full h-auto object-cover" />
                          </div>
                          <div className="md:w-1/2">
                            <Target className="w-12 h-12 text-primary mb-4" />
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Mission</h2>
                            <motion.p
                              className="text-lg text-muted-foreground leading-relaxed mt-6 overflow-hidden"
                              initial={{ height: '4.5em' }} // Approximately 4 lines of text
                              animate={{ height: isMissionHovered ? 'auto' : '4.5em' }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                              To empower businesses worldwide with innovative technology solutions that drive
                              growth, enhance efficiency, and create lasting competitive advantages. We are
                              committed to delivering excellence in every project while building meaningful
                              partnerships with our clients. We strive to be a catalyst for change, enabling organizations to navigate the complexities of the digital age with confidence. Our goal is to provide our clients with the tools and expertise they need to succeed in a rapidly evolving technology landscape.
                            </motion.p>
                          </div>
                        </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <img src={NonItDepartmentBg} alt="Our Vision" className="w-full h-auto object-cover rounded-2xl shadow-xl" />
              </div>
              <div className="md:w-1/2">
                <Eye className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  To be the global leader in digital transformation, recognized for our innovative 
                  solutions, exceptional talent, and unwavering commitment to client success. We 
                  envision a world where technology seamlessly enhances every aspect of business 
                  and life, creating a future where possibilities are limitless and accessible to all. We aspire to be a trusted partner for businesses of all sizes, helping them to harness the power of technology to achieve their strategic objectives.
                </p>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isValuesInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <ValueCard key={value.title} value={value} index={index} isInView={isValuesInView} />)}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section ref={teamRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isTeamInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Meet Our CEO
            </h2>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isTeamInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-center bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
              {/* CEO Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  <img alt="Pulla Eswar Sudheer" className="w-full h-full object-cover border-destructive-foreground rounded-none shadow-none opacity-100" src="/Uploads/3b880324-f000-4e5d-8ae2-ab5ed014a89c.jpg"/>
                </div>
              </div>

              {/* CEO Info */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Pulla Eswar Sudheer
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">
                  Founder & Chief Executive Officer
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">Pulla Eswar Sudheer is a visionary technology leader with over 10 years of experience in the IT industry. He founded Crestonix Global Solutions with a mission to democratize access to enterprise-grade technology solutions. Under his leadership, CGS has grown from a small startup to a global technology.</p>
                <p className="text-muted-foreground leading-relaxed">Eswar is passionate about innovation and mentoring the next generation of tech leaders. A visionary entrepreneur, problem solver, Innovation-driven leader and who transformed an idea into a company within a short time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>;
};

const ValueCard = ({ value, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={value.title}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl bg-card shadow-lg text-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40">
        <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <value.icon className="w-10 h-10 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
          {value.title}
        </h3>
                <motion.p
                  className="text-muted-foreground overflow-hidden min-h-[3em]"
                  initial={{ height: '3em' }}
                  animate={{ height: isHovered ? 'auto' : '3em' }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >          {value.description}
        </motion.p>
      </div>
    </motion.div>
  );
};


export default About;