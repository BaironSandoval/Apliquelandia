"use client";

import { usePathname } from "next/navigation";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import Link from "next/link";
import "./page.css";

export default function CombinacionTecnicas() {
  const pathname = usePathname();
  const isDetalle = pathname === "/combinacionTecnicas";
  return (
    <section className="combinacionTecnicas">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        <h1 className="titulo">Combinación de Técnicas</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/combinacionTecnicas">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="combinación de técnicas" className="btn contratar" />
        </div>
      </div>
    </section>
  );
}
