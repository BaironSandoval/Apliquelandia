"use client";

import { useState, useEffect } from "react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "SUBLIMACIÓN",
    image: "/servicio-sublimacion.png",
    description:
      "Impresión a todo color integrada a la tela. Ideal para prendas deportivas y personalizadas, con alta durabilidad y excelente definición.",
  },
  {
    title: "DTF",
    image: "/servicio-dtf.png",
    description:
      "Transfer digital de alta calidad aplicable a múltiples telas. Perfecto para logos, textos y diseños complejos.",
  },
  {
    title: "BORDADOS",
    image: "/servicio-bordado.png",
    description:
      "Bordado profesional que aporta elegancia y resistencia. Ideal para marcas, uniformes y prendas premium.",
  },
  {
    title: "APLIQUES A CALOR",
    image: "/servicio-apliques.png",
    description:
      "Combinación de técnicas para crear diseños únicos con textura, volumen y gran impacto visual.",
  },
  {
    title: "PEDRERÍA Y PARCHES EN GOMA",
    image: "/servicio-parches-goma.png",
    description:
      "Aplicaciones decorativas que destacan por su brillo y relieve. Perfectas para moda y personalización exclusiva.",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<any>(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "auto";
  }, [activeService]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestros servicios</h2>

      <div className={styles.list}>
        {services.map((service) => (
          <div
            key={service.title}
            className={styles.card}
            style={{ backgroundImage: `url(${service.image})` }}
            onClick={() => setActiveService(service)}
          >
            <div className={styles.overlay}>
              <h3
                className={styles.text}
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeService && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.close}
              onClick={() => setActiveService(null)}
            >
              ✕
            </button>

            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
