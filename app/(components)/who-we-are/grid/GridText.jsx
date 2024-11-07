import React from "react";
import styles from "./Grid.module.css"

const GridText = ({ title, text }) => {
  return (
    <div className={styles.gridText}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default GridText;
