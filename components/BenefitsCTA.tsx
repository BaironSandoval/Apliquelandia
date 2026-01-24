import styles from "./BenefitsCTA.module.css";
import Image from "next/image";

export default function BenefitsCTA() {
  const telefono = "573209908045";

  const mensaje = "Hola, estoy interesad@ en sus productos";

  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje,
  )}`;
  return (
    <section className={styles.section}>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.icon}>
            <Image src="/car.svg" alt="Truck" width={24} height={24} />
          </div>
          <p>Entrega gratis para pedidos mayores a $200.000</p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.icon}>
            <Image src="/$.svg" alt="Money" width={24} height={18} />
          </div>
          <p>Posibilidad de pago contra entrega</p>
        </div>
      </div>

      <a href={urlWhatsapp} target="_blank">
        <button className={styles.button}>COMPRAR AHORA</button>
      </a>
    </section>
  );
}
