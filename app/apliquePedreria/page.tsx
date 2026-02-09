"use client";

import "./page.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
        {/* IMAGEN */}
      <div className="imagen-wrapper">
        <Image
          src="/apliquePedreriaD.png"
          alt="Aplique con pedrería"
          width={1100}
          height={500}
          className="imagenApliquePedreria"
        />
      </div>
    </section>
  );
}
