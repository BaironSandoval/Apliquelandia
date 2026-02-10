"use client";

import { useEffect, useState } from "react";
import "./ModalBienvenida.css";

type Props = {
  imagenFondo: string;
};

export default function ModalBienvenida({ imagenFondo }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const visto = localStorage.getItem("modal-bienvenida");

    if (!visto) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const cerrarModal = () => {
    localStorage.setItem("modal-bienvenida", "true");
    document.body.style.overflow = "auto";
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-contenido"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        <button className="modal-cerrar" onClick={cerrarModal}>
          ✕
        </button>

        <div className="modal-texto">
          <h1 className="modal-titulo">Estuvimos en Colombiatex 2026</h1>
          <p className="modal-descripcion">
            Conocimos las últimas tendencias e innovaciones del sector textil
            para seguir ofreciéndote productos de alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
}
