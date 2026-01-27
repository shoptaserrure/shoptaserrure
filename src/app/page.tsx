import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import PricingTransparency from "@/components/sections/pricing-transparency";
import ContactSection from "@/components/sections/contact-form";
import BlogSection from "@/components/sections/blog";
import Footer from "@/components/sections/footer";
import InterventionZones from "@/components/sections/intervention-zones";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 md:pb-0">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingTransparency />
      <ContactSection />
      <BlogSection />
      <InterventionZones />
      <Footer />
    </main>
  );
}
