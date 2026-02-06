"use client";

import { usePathname } from "next/navigation";
import "./page.css";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";

export default function Dtf() {
  const pathname = usePathname();
  const isDetalle = pathname === "/impresionDtf";
  return (
    <section className="dtf">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        <h1 className="titulo">Impresión DTF</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/impresionDtf">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="impresión DTF" className="btn contratar" />
        </div>
      </div>
    </section>
  );
}
