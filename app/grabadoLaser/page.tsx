"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
        {/* IMAGEN */}
      <div className="imagen-wrapper">
        <Image
          src="/grabadoLaserDesktop.png"
          alt="Máquina de grabado láser"
          width={1100}
          height={500}
          className="imagenGrabadoLaser"
        />
      </div>
    </section>
  );
}
