"use client";

import Link from "next/link";
import { useState } from "react";
import "./MenuMobile.css";

interface MenuMobileProps {
  onClose: () => void;
}

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
  const [openInfantil, setOpenInfantil] = useState(false);
  const [openTemporadas, setOpenTemporadas] = useState(false);

  return (
    <div className="menu-overlay">
      <nav className="menu-mobile">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2 className="menu-title-item">MENÚ</h2>
        <Link href="/categoria/mujeres" onClick={onClose}>
          <button className="menu-item">MUJERES</button>
        </Link>

        <Link href="/categoria/hombres" onClick={onClose}>
          <button className="menu-item">HOMBRES</button>
        </Link>

        {/* INFANTIL */}
        <button
          className="menu-item menu-parent"
          onClick={() => setOpenInfantil(!openInfantil)}
        >
          INFANTIL
          {openInfantil ? <ChevronUp /> : <ChevronRight />}
        </button>

        {openInfantil && (
          <div className="submenu">
            <Link href="/categoria/infantil-ninas" onClick={onClose}>
              <button className="submenu-item">NIÑAS</button>
            </Link>

            <Link href="/categoria/infantil-ninos" onClick={onClose}>
              <button className="submenu-item">NIÑOS</button>
            </Link>

            <Link href="/categoria/bebes" onClick={onClose}>
              <button className="submenu-item">BEBÉS</button>
            </Link>
          </div>
        )}

        {/* TEMPORADAS */}
        <button
          className="menu-item menu-parent"
          onClick={() => setOpenTemporadas(!openTemporadas)}
        >
          TEMPORADAS
          {openTemporadas ? <ChevronUp /> : <ChevronRight />}
        </button>

       {openTemporadas && (
          <div className="submenu">
            <Link href="/categoria/navidad" onClick={onClose}>
              <button className="submenu-item">NAVIDAD</button>
            </Link>
          </div>
        )}

      </nav>
    </div>
  );
}
