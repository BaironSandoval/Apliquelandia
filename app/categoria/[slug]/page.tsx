import { productos } from "@/app/data/productos";
import { SUBCATEGORIAS } from "@/app/data/categorias";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import styles from "./categoria.module.css";

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const subcategorias = SUBCATEGORIAS[slug];

  // 👉 si hay subcategorías, mostrar productos de TODAS esas subcategorías
  const productosFiltrados = subcategorias
    ? productos.filter((p) =>
        subcategorias.some((sub) => sub.slug === p.categoria)
      )
    : productos.filter((p) => p.categoria === slug);

  return (
    <div className={styles.container}>
      <BackButton />
      <h1 className={styles.title}>CATEGORÍA</h1>

      {/* SUBCATEGORÍAS */}
      {subcategorias && (
        <div className={styles.subcategorias}>
          {subcategorias.map((sub) => (
            <Link key={sub.slug} href={`/categoria/${sub.slug}`}>
              <button className={styles.subBtn}>{sub.label}</button>
            </Link>
          ))}
        </div>
      )}

      {/* PRODUCTOS */}
      <div className={styles.grid}>
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className={styles.card}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <span>${producto.precio}</span>

            <Link href={`/producto/${producto.slug}`}>
              <button className="btn contratar">ver producto</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
