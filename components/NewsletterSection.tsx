import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  const telefono = "573209908045";

  const mensaje = "Hola, estoy interesad@ en unirme al grupo de novedades";

  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;
  return (
    <section className={styles.section}>
      <span className={styles.badge}>¡Únete a nuestro grupo de novedades!</span>

      <p className={styles.description}>
        Si eres fabricante, allí podrás ver todas las novedades que tenemos para
        ti, descuentos y más
      </p>

      <div className={styles.images}>
        <img src="/novedad-1.png" alt="Aplique" />
        <img src="/novedad-2.png" alt="Aplique" />
      </div>

      <a href={urlWhatsapp} target="_blank">
        <button className={styles.button}>Unirme al grupo</button>
      </a>
    </section>
  );
}
