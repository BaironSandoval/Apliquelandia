"use client";

import "./page.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";

export default function ApliquePedreria() {
    const pathname = usePathname();
  const isDetalle = pathname === "/apliquePedreria";
  return (
    <section className="apliquePedreria">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        <h1 className="titulo">Aplique con Pedrería</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/apliquePedreria">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="aplique con pedrería" className="btn contratar" />
          
        </div>
      </div>
    </section>
  );
}
