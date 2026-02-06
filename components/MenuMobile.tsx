"use client";

import Link from "next/link";
import { useState } from "react";
import "./MenuMobile.css";

interface MenuMobileProps {
  onClose: () => void;
}

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6L15 12L9 18"
      stroke="#6B6B6B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 15L12 9L18 15"
      stroke="#6B6B6B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MenuMobile({ onClose }: MenuMobileProps) {
  const [openServicios, setOpenServicios] = useState(false);
  const [openCategoria, setOpenCategoria] = useState(false);
  const [openInfantil, setOpenInfantil] = useState(false);
  const [openTemporadas, setOpenTemporadas] = useState(false);

  return (
    <div className="menu-overlay">
      <nav className="menu-mobile">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <h2 className="menu-title-item">MENÚ</h2>

        <Link href="/" onClick={onClose}>
          <button className="menu-item">INICIO</button>
        </Link>

        {/* SERVICIOS */}
        <button
          className="menu-item menu-parent"
          onClick={() => setOpenServicios(!openServicios)}
        >
          SERVICIOS
          {openServicios ? <ChevronUp /> : <ChevronRight />}
        </button>

        {openServicios && (
          <div className="submenu">
            <Link href="/sublimacion" onClick={onClose}>
              <button className="submenu-item">Sublimación</button>
            </Link>
            <Link href="/impresionDtf" onClick={onClose}>
              <button className="submenu-item">Impresión DTF</button>
            </Link>
            <Link href="/corteLaser" onClick={onClose}>
              <button className="submenu-item">Corte láser</button>
            </Link>
            <Link href="/parcheGoma" onClick={onClose}>
              <button className="submenu-item">Parche en goma</button>
            </Link>
            <Link href="/bordadoComputarizado" onClick={onClose}>
              <button className="submenu-item">Bordado computarizado</button>
            </Link>
            <Link href="/grabadoLaser" onClick={onClose}>
              <button className="submenu-item">Grabado láser</button>
            </Link>
            <Link href="/apliquePedreria" onClick={onClose}>
              <button className="submenu-item">Aplique con pedrería</button>
            </Link>
            <Link href="/combinacionTecnicas" onClick={onClose}>
              <button className="submenu-item">Combinación de técnicas</button>
            </Link>
          </div>
        )}
        {/* CATEGORÍA */}
        <button
          className="menu-item menu-parent"
          onClick={() => setOpenCategoria(!openCategoria)}
        >
          CATÁLOGO
          {openCategoria ? <ChevronUp /> : <ChevronRight />}
        </button>

        {openCategoria && (
          <div className="submenu">
            <Link href="/categoria/mujeres" onClick={onClose}>
              <button className="submenu-item">Mujeres</button>
            </Link>

            <Link href="/categoria/hombres" onClick={onClose}>
              <button className="submenu-item">Hombres</button>
            </Link>

            {/* INFANTIL */}
            <button
              className="submenu-item menu-parent"
              onClick={() => setOpenInfantil(!openInfantil)}
            >
              INFANTIL
              {openInfantil ? <ChevronUp /> : <ChevronRight />}
            </button>

            {openInfantil && (
              <div className="submenu nested">
                <Link href="/categoria/infantil-ninas" onClick={onClose}>
                  <button className="submenu-item">Niñas</button>
                </Link>
                <Link href="/categoria/infantil-ninos" onClick={onClose}>
                  <button className="submenu-item">Niños</button>
                </Link>
                <Link href="/categoria/bebes" onClick={onClose}>
                  <button className="submenu-item">Bebés</button>
                </Link>
              </div>
            )}

            {/* TEMPORADAS */}
            <button
              className="submenu-item menu-parent"
              onClick={() => setOpenTemporadas(!openTemporadas)}
            >
              TEMPORADAS
              {openTemporadas ? <ChevronUp /> : <ChevronRight />}
            </button>

            {openTemporadas && (
              <div className="submenu nested">
                <Link href="/categoria/navidad" onClick={onClose}>
                  <button className="submenu-item">Navidad</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
