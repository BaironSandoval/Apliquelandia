"use client";

import Link from "next/link";
import "./Catalogo.css";

type CatalogoProps = {
  label: string;
  items: {
    label: string;
    href: string;
  }[];
};

export default function Catalogo({ label, items }: CatalogoProps) {
  return (
    <div className="dropdown">
      <span className="dropdown-label">{label}</span>

      <div className="dropdown-menu">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
