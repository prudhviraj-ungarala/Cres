import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CollaboratedCompanies } from "@/components/home/CollaboratedCompanies";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { NonITServicesPreview } from "@/components/home/NonITServicesPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CollaboratedCompanies />
      <DepartmentsSection />
      <ServicesPreview />
      <NonITServicesPreview />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
