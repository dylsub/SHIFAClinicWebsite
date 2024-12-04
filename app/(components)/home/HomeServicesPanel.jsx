import React from "react";
import styles from "./HomeServicesPanel.module.css";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";

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

      <ButtonAnyColorFilled path={buttonPath} buttonColor={colorCode}>
        {buttonText}
      </ButtonAnyColorFilled>
    </div>
  );
}
