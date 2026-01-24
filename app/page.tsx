import BenefitsCTA from "@/components/BenefitsCTA";
import CategoriesSection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import NovedadesCarousel from "@/components/NovedadesCarousel";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="px-4 py-6">
        <Hero />
        <NovedadesCarousel />
        <CategoriesSection />
        <ServicesSection />
        <NewsletterSection />
        <BenefitsCTA />
        <Footer />
      </section>

      
    </div>
  );
}
