import React from "react";
import styles from "./WhyDonate.module.css";

export default function WhyDonate({ children }) {
  return (
    <div className={styles.container + " content_box"}>
      <h1 className={styles.heading}>Why Donate to ICN SHIFA Clinic?</h1>
      {children}
    </div>
  );
}
