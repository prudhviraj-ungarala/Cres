import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/services";

const ServiceCard = ({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/services/${service.slug}`} className="block h-full">
        <div className="relative h-full p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card">
          <div className="mb-6 overflow-hidden rounded-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-xl font-heading font-bold mb-3 transition-colors text-foreground group-hover:text-primary">
            {service.title}
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  const itServices = services.filter(s => s.type === "it");
  const nonItServices = services.filter(s => s.type === "non-it");

  const showIt = !category || category === 'it';
  const showNonIt = !category || category === 'non-it';

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
              Explore Our Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We deliver end-to-end solutions that drive growth, efficiency, and innovation for businesses of all sizes.
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

      {/* IT Services Grid */}
      {showIt && (
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Comprehensive IT Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each of our services is designed to address specific business challenges 
                while integrating seamlessly with your existing infrastructure.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  service={service} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Non-IT Services Grid */}
      {showNonIt && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Comprehensive Non-IT Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond technology, we offer a range of business process services to streamline your operations and drive growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonItServices.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  service={service} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default Services;
