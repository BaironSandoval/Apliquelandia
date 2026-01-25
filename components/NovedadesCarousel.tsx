"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./NovedadesCarousel.css";
import { productos } from "../app/data/productos";
import Link from "next/link";

const NovedadesCarousel = () => {
  const baseItems = Object.values(
    productos.reduce((acc, p) => {
      acc[p.categoria] = acc[p.categoria] || [];
      acc[p.categoria].push(p);
      acc[p.categoria] = acc[p.categoria].slice(-2);
      return acc;
    }, {} as Record<string, typeof productos>)
  ).flat();

  // Clones para loop infinito
  const items = [
    baseItems[baseItems.length - 1],
    ...baseItems,
    baseItems[0],
  ];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Reset invisible (loop infinito)
  useEffect(() => {
    if (index === items.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(items.length - 2);
      }, 700);
    }
  }, [index, items.length]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <section className="novedades">
      <h2 className="novedades-title">
        NOVEDADES QUE <br /> TENEMOS PARA TI
      </h2>

      <div className="carousel">
        <div
          className="track"
          style={{
            transform: `translateX(calc(-1 * var(--step) * ${index}))`,
            transition: transition ? "transform .7s ease" : "none",
          }}
        >
          {items.map((p, i) => {
            const active = i === index + 1;
            return (
              <div className={`card ${active ? "active" : ""}`} key={i}>
                <div className="image-wrapper">
                  <Image src={p.imagen} alt={p.nombre} fill />
                </div>

                <div className="card-content">
                  <p className="product-name">{p.nombre}</p>
                  <p className="product-price">{p.precio}</p>
                </div>

                <Link href={`/producto/${p.slug}`}>
                  <button className="product-button">VER PRODUCTO</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NovedadesCarousel;
