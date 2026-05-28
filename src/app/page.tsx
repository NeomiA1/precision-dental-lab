import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CasesPreview from "@/components/sections/CasesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutPreview from "@/components/sections/AboutPreview";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <CasesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <CTASection />
    </main>
  );
}
