import BotonWhatsapp from "./BotonWhatsapp";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Título superior */}
      <h1 className="hero-title">Fabricamos apliques textiles</h1>
      {/* Botón inferior */}
      <p className="hero-p">Porque el detalle define el valor, producimos apliques que transforman prendas comunes en piezas con carácter, cuidando el proceso, el acabado y cada detalle desde el inicio.</p>
      <BotonWhatsapp servicio="Cotizar mi proyecto" className="btn contratar" />
      {/* Imagen central */}
      {/* <div className="hero-image-wrapper">
        <Image
          src="/imageHer.png" // cambia por tu imagen
          alt="Elegancia que se aplica"
          fill
          priority
          className="hero-image"
        />

        
      </div> */}
    </section>
  );
};

export default Hero;
