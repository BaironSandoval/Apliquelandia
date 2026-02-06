"use client";

import { usePathname } from "next/navigation";
import "./page.css";

export default function ParcheGoma() {
  const pathname = usePathname();
  const isDetalle = pathname === "/parcheGoma";
  return (
    <section className="parcheGoma">
      <div className="overlay">
        <h1 className="titulo">Parche en Goma</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <button className="btn info">Más información</button>
          )}
          <button className="btn contratar">Contratar</button>
        </div>
      </div>
    </section>
  );
}
