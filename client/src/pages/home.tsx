import { HeroSection } from "@/components/home/hero-section";
import { FeatureSection } from "@/components/home/feature-section";
import { VarietiesSection } from "@/components/varieties/varieties-section";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ScrollEffect } from "@/components/layout/scroll-effect";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      
      <ScrollEffect type="fadeIn" delay={0.1}>
        <FeatureSection />
      </ScrollEffect>
      
      <ScrollEffect type="slideUp" delay={0.2}>
        <VarietiesSection />
      </ScrollEffect>
      
      <ScrollEffect type="slideLeft" delay={0.1}>
        <AboutSection />
      </ScrollEffect>
      
      <ScrollEffect type="fadeIn" delay={0.2}>
        <ContactSection />
      </ScrollEffect>
    </MainLayout>
  );
}
