"use client";

import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";

export default function BackButton({ label = "← Volver" }) {
  const router = useRouter();

  return (
    <button className={styles.backBtn} onClick={() => router.back()}>
      {label}
    </button>
  );
}