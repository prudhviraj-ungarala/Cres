import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Crestonix Global Solutions transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% on operational costs while improving performance tenfold.",
    author: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    // image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    quote: "Working with CGS was a game-changer. Their AI solutions helped us automate critical processes, allowing our team to focus on strategic initiatives. Exceptional work!",
    author: "Michael Rodriguez",
    role: "Director of Operations, InnovateCo",
    // image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    quote: "The cybersecurity framework CGS implemented gave us peace of mind. Their proactive approach to security has prevented numerous potential threats. Highly recommended!",
    author: "Emily Watson",
    role: "CEO, SecureData Solutions",
    // image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
  {
    quote: "From initial consultation to final deployment, CGS demonstrated exceptional professionalism. Their custom software solution exceeded all our expectations.",
    author: "David Park",
    role: "Founder, DataFlow Analytics",
    // image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-secondary overflow-hidden relative">
      {/* 3D Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] border border-primary/5"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-accent/5"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          }}
        />
        
        {/* Floating Quote Icons */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/5"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <Quote className="w-16 h-16" />
          </motion.div>
        ))}
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
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders 
            have to say about working with Crestonix Global Solutions.
          </p>
        </motion.div>

        {/* Testimonial Carousel with 3D Effect */}
        <div className="relative max-w-4xl mx-auto perspective-1000">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: -30, x: 100 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: 30, x: -100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative preserve-3d"
          >
            {/* Main Card with Unique Shape */}
            <div 
              className="bg-card p-8 md:p-12 shadow-xl relative"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)"
              }}
            >
              {/* Quote Icon with 3D Effect */}
              <motion.div 
                className="absolute top-8 right-8 md:top-12 md:right-12"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center bg-primary/10"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  }}
                >
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar with 3D Border */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    className="relative"
                  >
                    <div 
                      className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 overflow-hidden border-4 border-primary/20"
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                      }}
                    >
                      <img
                        // src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
                  </motion.div>
                </div>

                {/* Quote */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent" />
            </div>

            {/* 3D Shadow Layer */}
            <div 
              className="absolute inset-0 bg-foreground/5 -z-10 translate-x-3 translate-y-3"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)"
              }}
            />
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
