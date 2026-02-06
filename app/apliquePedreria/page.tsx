"use client";

import "./page.css";
import { usePathname } from "next/navigation";

export default function ApliquePedreria() {
    const pathname = usePathname();
  const isDetalle = pathname === "/apliquePedreria";
  return (
    <section className="apliquePedreria">
      <div className="overlay">
        <h1 className="titulo">Aplique con Pedrería</h1>
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
