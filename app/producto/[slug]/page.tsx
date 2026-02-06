"use client";

import { useParams } from "next/navigation";
import { productos } from "@/app/data/productos";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import styles from "./product.module.css";

export default function ProductoPage() {
  const { slug } = useParams();
  const producto = productos.find((p) => p.slug === slug);

  const [cantidad, setCantidad] = useState<number | null>(null);

  if (!producto) return <p>Producto no encontrado</p>;

  const telefono = "573209908045";

  const mensaje = cantidad
    ? `Hola, estoy interesad@ en ${cantidad} unidades del producto: ${producto.nombre}`
    : `Hola, estoy interesad@ en el producto: ${producto.nombre}`;

  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className={styles.container}>
      <BackButton />

      <div className={styles.layout}>
        <div className={styles.imageBox}>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{producto.nombre}</h1>

          <div className={styles.price}>
            ${producto.precio}
            <span>precio por unidad</span>
          </div>

          <p className={styles.subtitle}>Selecciona una cantidad</p>

          <div className={styles.qty}>
            {[50, 100, 500].map((q) => (
              <button
                key={q}
                className={`${styles.qtyBtn} ${cantidad === q ? styles.active : ""}`}
                onClick={() => setCantidad(q)}
              >
                {q === 500 ? "+500" : q}
              </button>
            ))}
          </div>

          <a href={urlWhatsapp} target="_blank">
            <button className={styles.mainBtnP}>
              {cantidad ? "COTIZAR AHORA" : "COMPRAR AHORA"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
