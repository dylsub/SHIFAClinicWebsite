import React from "react";
import styles from "./HomeServicesPanel.module.css";

export default function HomeServicesPanel({
  src,
  titleText,
  descripText,
  buttonText,
  colorCode,
  buttonPath,
}) {
  return (
    <div className={styles.panel} style={{ borderColor: colorCode }}>
      <img src={src} alt={titleText} className={styles.icon} />
      <h1 className={styles.title}>{titleText}</h1>
      <p className={styles.description}>{descripText}</p>
      <a
        href={buttonPath}
        className={styles.button}
        style={{ backgroundColor: colorCode }}
      >
        {buttonText}
      </a>
    </div>
  );
}
