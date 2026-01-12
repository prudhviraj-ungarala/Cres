import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageSquare, Users, Briefcase
} from "lucide-react";
import Map from "@/components/ui/map";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8096695559",
    link: "tel:+918096695559",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@crestonixglobal.com",
    link: "mailto:info@crestonixglobal.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Plot No 534, Shaikpet, kakatiya Hills, Guttala_Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081",
    link: "#Plot No 534, Shaikpet, kakatiya Hills, Guttala_Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    link: "#",
  },
];

const inquiryTypes = [
  { icon: MessageSquare, label: "General Inquiry" },
  { icon: Briefcase, label: "Project Discussion" },
  { icon: Users, label: "Partnership" },
];

const Contact = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "General Inquiry",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Have a project in mind? We'd love to hear from you. 
              Reach out and let's start the conversation.
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

      {/* Contact Section */}
      <section ref={formRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Whether you have a question about our services, pricing, or just want 
                to say hello, our team is ready to answer all your questions.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="rounded-2xl overflow-hidden border border-border h-64 bg-secondary"
              >
                <Map
                  center={{ lat: 17.4474, lng: 78.391 }}
                  zoom={15}
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl border border-border"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              {/* Inquiry Type Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">
                  What can we help you with?
                </label>
                <div className="flex flex-wrap gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.label}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.label }))}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        formData.inquiryType === type.label
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border hover:border-primary/50 text-foreground'
                      }`}
                    >
                      <type.icon className="w-4 h-4" />
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: "What industries do you serve?",
                  a: "We work with clients across healthcare, finance, retail, manufacturing, and technology sectors."
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary based on scope. Small projects may take 4-8 weeks, while enterprise solutions can span 6-12 months."
                },
                {
                  q: "Do you offer ongoing support?",
                  a: "Yes, we provide 24/7 support and maintenance packages to ensure your solutions run smoothly."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h4 className="font-heading font-bold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
