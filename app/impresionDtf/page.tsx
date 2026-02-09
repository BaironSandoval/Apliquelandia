"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import "./page.css";


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
      {/* IMAGEN */}
      <div className="imagen-wrapper">
        <Image
          src="/dtfD.png"
          alt="Máquina de impresión DTF"
          width={1100}
          height={500}
          className="imagenDtf"
         />
      </div>
    </section>
  );
}
