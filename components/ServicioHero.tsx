"use client";

import BotonWhatsapp from "./BotonWhatsapp";
import "./ServicioHero.css";

type Props = {
  titulo: string;
  descripcion: string;
  imagenDesktop: string;
  imagenMobile: string;
};

export default function ServicioHero({
  titulo,
  descripcion,
  imagenDesktop,
  imagenMobile,
}: Props) {
  return (
    <section className="servicio-hero">
      <div className="hero-overlay">
        <h1 className="hero-titulo">{titulo}</h1>
        <p className="hero-descripcion">{descripcion}</p>

        <div className="hero-acciones">
          <BotonWhatsapp servicio={titulo.toLowerCase()} />
        </div>
      </div>

      <div className="hero-imagen">
        <picture>
          <source media="(max-width: 768px)" srcSet={imagenMobile} />
          <img src={imagenDesktop} alt={titulo} />
        </picture>
      </div>
    </section>
  );
}
