import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Services",
  href: "/services"
}, {
  name: "Contact",
  href: "/contact"
}];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{
            scale: 1.05
          }} className="relative">
              <img src="/src/assets/LoGo.png" alt="CGS Logo" className="w-12 h-12 rounded-xl shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">
                Crestonix
              </span>
              <span className="font-heading font-bold text-lg text-primary ml-1">Global Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`relative font-medium transition-colors duration-300 ${location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {link.name}
                {location.pathname === link.href && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="default" asChild>
              <Link to="/contact">Get Service</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => <motion.div key={link.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <Link to={link.href} className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.href ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                    {link.name}
                  </Link>
                </motion.div>)}
              <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4
          }} className="pt-4">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <Link to="/contact">Get Service</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};