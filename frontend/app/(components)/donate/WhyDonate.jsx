import React from "react";
import styles from "./WhyDonate.module.css";

export default function WhyDonate({ children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why Donate to ICN SHIFA Clinic?</h2>
      {children}
    </div>
  );
}
