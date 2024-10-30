import React from "react";
import Link from "next/link";
import styles from "./ButtonWhiteFilled.module.css"

export default function ButtonWhiteFilled({ children, path }) {
  return (
    <Link href={path} className={styles.button}>
      {children}
    </Link>
    );
}
