import React from "react";
import styles from "./InfoPanel2.module.css";
import ButtonAnyColorFilled from "./buttons/ButtonAnyColorFilled";
import Link from "next/link";

export default function InfoPanel2({
  titleText,
  descripText,
  buttonText = "",
  colorCode,
  buttonPath = "",
  src = "",
  borderTopWidth = "8px",
  borderRightWidth = "8px",
  borderLeftWidth = "0px",
  borderBottomWidth = "0px",
  link = false,
}) {
  return (
    <div
      className={styles.panel}
      style={{
        borderTopWidth: borderTopWidth,
        borderRightWidth: borderRightWidth,
        borderLeftWidth: borderLeftWidth,
        borderBottomWidth: borderBottomWidth,
        borderColor: colorCode,
      }}
    >
      {src != "" && <img src={src} alt={titleText} className={styles.icon} />}
      <h1 className={styles.title}>
        {link ? (
          <Link className={styles.link_text} href={buttonPath}>
            {titleText}
          </Link>
        ) : (
          titleText
        )}
      </h1>
      <p className={styles.description}>{descripText}</p>

      {buttonText != "" && (
        <ButtonAnyColorFilled path={buttonPath} buttonColor={colorCode}>
          {buttonText}
        </ButtonAnyColorFilled>
      )}
    </div>
  );
}
