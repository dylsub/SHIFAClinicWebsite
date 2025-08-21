import React from "react";
import styles from "./HomeServices.module.css";

export default function HomeServices({ children }) {
  return (
    <div className={styles.wrapper}>
      <h3>Our services are...</h3>
      <div className={styles.container + " content_box"}>{children}</div>
    </div>
  );
}
