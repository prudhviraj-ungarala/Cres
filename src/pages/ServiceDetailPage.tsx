
import { useParams } from "react-router-dom";
import { services } from "@/lib/services";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/NotFound";
import { CheckCircle } from "lucide-react";

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl">{service.description}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-4">Details</h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.details}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
