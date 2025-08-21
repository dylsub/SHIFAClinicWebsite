import React from "react";
import styles from "./WaysToDonate.module.css";

export default function WaysToDonate({ children }) {
  return (
    <div className={styles.container + " content_box"}>
      <h1 className={styles.heading}>Ways to Donate</h1>
      {children}
    </div>
  );
}
