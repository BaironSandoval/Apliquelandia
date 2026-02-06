"use client";

import Link from "next/link";
import Image from "next/image";
import "./HeaderDesktop.css";

export default function HeaderDesktop() {
  const telefono = "573209908045";
  const mensaje = "Hola, estoy interesad@ en sus productos";
  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <header className="header-desktop">
      {/* Logo */}
      

      {/* Navegación */}
      <nav className="nav">
        <Link href="/" className="logo">
        <img src="/logoSinFondo.png" alt="Apliquelandia" width={30} height={24} />
      </Link>
        <Link href="/sublimacion" className="a">Sublimación</Link>
        <Link href="/impresionDtf" className="a">Impresión DTF</Link>
        <Link href="/corteLaser" className="a">Corte láser</Link>
        <Link href="/parcheGoma" className="a">Parche en goma</Link>
        <Link href="/bordadoComputarizado" className="a">Bordados computarizado</Link>
        <Link href="/grabadoLaser" className="a">Grabado láser</Link>
        <Link href="/apliquePedreria" className="a">Aplique con pedrería</Link>
        <Link href="/combinacionTecnicas" className="a">Combinación de técnicas</Link>
        <Link href="/categoria" className="a">Catálogo</Link>
      </nav>
    </header>
  );
}
