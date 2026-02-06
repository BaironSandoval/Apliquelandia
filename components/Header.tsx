"use client";

import { useState } from "react";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const telefono = "573209908045";

  const mensaje = "Hola, estoy interesad@ en sus productos";

  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <>
      <header className="header">
        <button
          className="menu-button"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <Image src="/menu.svg" alt="Menú" width={24} height={24} />
        </button>

        <button
          className="btn-logo"
          aria-label="/Ir a inicio"
          onClick={() => (window.location.href = "/")}
        >
          <Image src="/logoSinFondo.png" alt="Apliquelandia" width={46} height={37} />
        </button>

        <a href={urlWhatsapp} target="_blank">
          <button className="btn-mensaje" aria-label="Ir a mensajes">
            <Image
              className="mensaje"
              src="/mensaje.svg"
              alt="Mensajes"
              width={24}
              height={24}
            />
          </button>
        </a>
      </header>

      {menuOpen && <MenuMobile onClose={() => setMenuOpen(false)} />}
    </>
  );
}
