import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const companies = [
  { name: "TechCorp Industries" },
  { name: "GlobalTech Solutions" },
  { name: "DataFlow Systems" },
  { name: "InnovateCo" },
  { name: "CloudNine Technologies" },
  { name: "SecureNet Systems" },
  { name: "Digital Dynamics" },
  { name: "FutureTech Labs" },
  { name: "SmartBiz Solutions" },
  { name: "NextGen Innovations" },
  { name: "Alpha Networks" },
  { name: "Pinnacle Tech" },
];

export const CollaboratedCompanies = () => {
  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Our <span className="text-primary">Collaborated Companies</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex animate-marquee hover:pause-animation">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 min-w-[160px]">
                {/* Logo */}
                <img
                  src={`https://placehold.co/100x100/${Math.floor(Math.random()*16777215).toString(16)}/white?text=${company.name.substring(0,2)}`}
                  alt={`${company.name} Logo`}
                  className="w-16 h-16 rounded-xl bg-muted transition-all duration-300"
                />
                {/* Company Name */}
                <span className="text-sm font-medium text-foreground text-center whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
