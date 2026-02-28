import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { FeaturedVehicles } from "@/components/FeaturedVehicles";
import { ServicesSection } from "@/components/ServicesSection";
import { LabelSection } from "@/components/LabelSection";
import { RoueLibreSection } from "@/components/RoueLibreSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <FeaturedVehicles />
      <ServicesSection />
      <LabelSection />
      <RoueLibreSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
