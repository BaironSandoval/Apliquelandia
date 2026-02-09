"use client";

import { usePathname } from "next/navigation";
import "./page.css";
import HomeButton from "@/components/HomeButton";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import Image from "next/image";
import Link from "next/link";

export default function ParcheGoma() {
  const pathname = usePathname();
  const isDetalle = pathname === "/parcheGoma";
  return (
    <section className="parcheGoma">
      <div className="overlay">
        {
          isDetalle && <HomeButton label="← Ir a Inicio" />
        }
        <h1 className="titulo">Parche en Goma</h1>
        <p className="descripcion">
          Impresiones duraderas, colores vivos y acabado profesional que no se
          sienten al tacto.
        </p>

        <div className="acciones">
          {!isDetalle && (
            <Link href="/parcheGoma">
              <button className="btn info">Más información</button>
            </Link>
          )}
          <BotonWhatsapp servicio="parche en goma" className="btn contratar" />
        </div>
      </div>
        {/* IMAGEN */}
      <div className="imagen-wrapper">
        <Image
          src="/parcheGomaD.png"
          alt="parche en goma"
          width={1100}
          height={500}
          className="imagenParcheGoma"
        />
      </div>
    </section>
  );
}
