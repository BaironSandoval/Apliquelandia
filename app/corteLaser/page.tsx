"use client";

import { usePathname } from "next/navigation"
import HomeButton from "@/components/HomeButton";
import Link from "next/link";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import "./page.css";

export default function CorteLaser() {
  const pathname = usePathname();
  const isDetalle = pathname === "/corteLaser";
  return (
    <section className="corteLaser">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        <h1 className="titulo">Corte Láser</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/corteLaser">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="corte láser" className="btn contratar" />
        </div>
      </div>
    </section>
  );
}
