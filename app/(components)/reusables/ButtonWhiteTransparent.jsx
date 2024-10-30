import React from "react";
import Link from "next/link";
import styles from "./ButtonWhiteTransparent.module.css"

export default function ButtonWhiteTransparent({ children, path }) {
  return (
    <Link href={path} className={styles.button}>
      {children}
    </Link>
    );
}
