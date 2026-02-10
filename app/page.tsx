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
import ModalBienvenida from "../components/ModalBienvenida";

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="px-4 py-6">
        <ModalBienvenida imagenFondo="/modal-bg.jpeg" />
        <Hero />
        <Sublimacion />
        <Dtf />
        <CorteLaser />
        <ParcheGoma />
        <BordadoComputarizado />
        <GrabadoLaser />
        <ApliquePedreria />
        <CombinacionTecnicas />
        <Footer />
      </section>      
    </div>
  );
}
