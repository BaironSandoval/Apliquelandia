import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  const telefono = "573209908045";

  const mensaje = "Hola, estoy interesad@ en sus productos";

  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;
  return (
    <section className="hero">
      {/* Título superior */}
      <h1 className="hero-title">APLIQUELANDIA</h1>
      {/* Botón inferior */}
      <a href={urlWhatsapp} target="_blank">
        <button className="hero-button">CONTACTANOS</button>
      </a>
      {/* Imagen central */}
      <div className="hero-image-wrapper">
        <Image
          src="/imageHer.png" // cambia por tu imagen
          alt="Elegancia que se aplica"
          fill
          priority
          className="hero-image"
        />

        
      </div>
    </section>
  );
};

export default Hero;
