"use client";

import { usePathname } from "next/navigation";
import "./page.css";

export default function GrabadoLaser() {
  const pathname = usePathname();
  const isDetalle = pathname === "/grabadoLaser";
  return (
    <section className="grabadoLaser">
      <div className="overlay">
        <h1 className="titulo">Grabado Láser</h1>
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
