import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Apliquelandia" />
        <span>APLIQUELANDIA</span>
      </div>

      <nav className={styles.links}>
        <a href="categoria/hombres">Insumos Hombres</a>
        <a href="categoria/mujeres">Insumos Mujeres</a>
        <a href="categoria/infantil">Insumos Infantil</a>
        <a href="categoria/temporadas">Insumos Temporadas</a>
      </nav>

      <div className={styles.social}>
        <a href="https://www.instagram.com/apliquelandia/" target="_blank"><img src="/instagram.svg" alt="Instagram" /></a>
        <a href="https://www.facebook.com/people/Apliqueland%C3%ADa/100081973608859/" target="_blank"><img src="/facebook.svg" alt="Facebook" /></a>
        <a href="https://www.tiktok.com/@apliquelandia" target="_blank"><img src="/tiktok.svg" alt="TikTok" /></a>
        <a href="mailto:apliquelandia@gmail.com"><img src="/gmail.svg" alt="Email" /></a>
      </div>

      <p className={styles.copy}>
        © 2025 Apliquelandia. All rights reserved.
      </p>
    </footer>
  );
}
