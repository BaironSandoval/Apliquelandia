"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import "./page.css";

export default function BordadoComputarizado() {
  const pathname = usePathname();
  const isDetalle = pathname === "/bordadoComputarizado";
  return (
    <section className="bordadoComputarizado">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }         
        <h1 className="titulo">Bordado Computarizado</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/bordadoComputarizado">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="bordado computarizado" className="btn contratar" />
        </div>
      </div>
    </section>
  );
}
