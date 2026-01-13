import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/LoGo.png";

const footerLinks = {
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Contact",
    href: "/contact"
  }],
  services: [{
    name: "Software Development",
    href: "/services"
  }, {
    name: "Cloud Solutions",
    href: "/services"
  }, {
    name: "AI & Machine Learning",
    href: "/services"
  }, {
    name: "XML processing",
    href: "/services"
  }, {
    name: "Lead generation",
    href: "/services"
  }],
  resources: [{
    name: "Case Studies",
    href: "/services"
  }, {
    name: "Blog",
    href: "/about"
  }, {
    name: "Documentation",
    href: "/services"
  }, {
    name: "Support",
    href: "/contact"
  }]
};
const socialLinks = [{
  icon: Linkedin,
  href: "https://www.linkedin.com/company/crestonix-global-solutions-private-limited/posts/?feedView=all",
  label: "LinkedIn"
}, {
  icon: Instagram,
  href: "https://www.instagram.com/crestonixglobalsolutions?igsh=MWYwdTJlM2Vja2thbQ==",
  label: "Instagram"
}];
export const Footer = () => {
  return <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="CGS Logo" className="w-12 h-12 rounded-xl" />
              <div>
                <span className="font-heading font-bold text-lg text-background">
                  Crestonix
                </span>
                <span className="font-heading font-bold text-lg text-primary ml-1">
                  Global Solutions
                </span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We deliver excellence in software development, cloud infrastructure, 
              and digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -2
            }} className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </motion.a>)}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">#Plot No 534, Shaikpet, kakatiya Hills, Guttala_Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081
              </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-background/70 hover:text-primary transition-colors">+91 8096695559</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a className="text-background/70 hover:text-primary transition-colors" href="mailto:info@crestonixglobal.com">info@crestonixglobal.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © 2025 Crestonix Global Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};