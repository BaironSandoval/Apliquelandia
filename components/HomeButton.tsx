"use client";

import Link from "next/link";
import styles from "./BackButton.module.css";

export default function HomeButton({ label = "← Inicio" }) {

  return (
    <Link href="/" className="box">
      <button className={styles.backBtn}>
        {label}
      </button>
    </Link>
  );
}