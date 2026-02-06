"use client";
import HomeButton from "@/components/HomeButton";
import "./CategorySection.css";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="section">
      <div className="overlayC">
        <HomeButton label="← Ir a Inicio" />
        <h2 className="title">CATEGORIAS</h2>

        <div className="grid">
          <Link className="button" href="/categoria/hombres">Hombres</Link>
          <Link className="button" href="/categoria/mujeres">Mujeres</Link>
          <Link className="button" href="/categoria/infantil">Infantil</Link>
          <Link className="button" href="/categoria/temporadas">Temporadas</Link>
        </div>
      </div>
    </section>
  );
}
