"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import "./page.css";

export default function Sublimacion() {
  const pathname = usePathname();
  const isDetalle = pathname === "/sublimacion";

  return (
    <section className="sublimacion">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        
        <h1 className="titulo">Sublimación</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/sublimacion">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="sublimación" className="btn contratar" />
        </div>
      </div>
    </section>
  );
}
