"use client";

import { useState } from "react";
import "./ModalBienvenida.css";

type Props = {
  imagenFondo: string;
};

export default function ModalBienvenida({ imagenFondo }: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-contenido"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        <button className="modal-cerrar" onClick={() => setVisible(false)}>
          ✕
        </button>

        <div className="modal-texto">
          <h1 className="modal-titulo">Estuvimos en Colombiatex 2026</h1>
          <p className="modal-descripcion">
            Participamos en el evento textil más importante del sector,
            conociendo nuevas tendencias, tecnologías e innovaciones para
            ofrecerte lo mejor en apliques y servicios textiles.
          </p>
        </div>
      </div>
    </div>
  );
}
