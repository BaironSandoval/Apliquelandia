import BenefitsCTA from "@/components/BenefitsCTA";
import CategoriesSection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Sublimacion from "./sublimacion/page";
import Dtf from "./impresionDtf/page";
import CorteLaser from "./corteLaser/page";
import ParcheGoma from "./parcheGoma/page";
import BordadoComputarizado from "./bordadoComputarizado/page";
import GrabadoLaser from "./grabadoLaser/page";
import ApliquePedreria from "./apliquePedreria/page";
import CombinacionTecnicas from "./combinacionTecnicas/page";

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="px-4 py-6">
        <Hero />
        <Sublimacion />
        <Dtf />
        <CorteLaser />
        <ParcheGoma />
        <BordadoComputarizado />
        <GrabadoLaser />
        <ApliquePedreria />
        <CombinacionTecnicas />
        {/* <NovedadesCarousel /> */}
        {/* <CategoriesSection /> */}
        {/* <ServicesSection /> */}
        {/* <NewsletterSection /> */}
        {/* <BenefitsCTA /> */}
        <Footer />
      </section>

      
    </div>
  );
}
