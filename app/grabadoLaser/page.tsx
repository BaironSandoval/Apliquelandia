"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import "./page.css";

export default function GrabadoLaser() {
  const pathname = usePathname();
  const isDetalle = pathname === "/grabadoLaser";
  return (
    <section className="grabadoLaser">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        <h1 className="titulo">Grabado Láser</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/grabadoLaser">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="grabado láser" className="btn contratar" />
        </div>
      </div>
    </section>
  );
}
