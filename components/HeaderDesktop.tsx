"use client";

import Link from "next/link";
import Image from "next/image";
import "./HeaderDesktop.css";

export default function HeaderDesktop() {
  const telefono = "573209908045";
  const mensaje = "Hola, estoy interesad@ en sus productos";
  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje,
  )}`;

  return (
    <header className="header-desktop">
      <Link href="/" className="logo">
        <Image src="/logo.png" alt="Apliquelandia" width={30} height={24} />
      </Link>

      <nav className="nav">
        <Link href="/categoria/mujeres">Mujeres</Link>
        <Link href="/categoria/hombres">Hombres</Link>

        <div className="dropdown">
          <span>Infantil</span>
          <div className="dropdown-menu">
            <Link href="/categoria/infantil-ninas">Niñas</Link>
            <Link href="/categoria/infantil-ninos">Niños</Link>
            <Link href="/categoria/bebes">Bebés</Link>
          </div>
        </div>

        <div className="dropdown">
          <span>Temporadas</span>
          <div className="dropdown-menu">
            <Link href="/categoria/navidad">Navidad</Link>
          </div>
        </div>
      </nav>

      <a href={urlWhatsapp} target="_blank">
        <button className="btn-mensaje" aria-label="Ir a mensajes">
          <Image
            className="mensaje"
            src="/mensaje.svg"
            alt="Mensajes"
            width={20}
            height={20}
          />
        </button>
      </a>
    </header>
  );
}
