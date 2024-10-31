import React from "react";
import styles from "./HomeServicesPanel.module.css";

// Ishaan Bhandari

// Create one of the panels from the "Our services are..." section.
// This component should accept the src url for the image, title text, description text, button text, border/button color code
// This will allow to easily create dynamic versions of these panels in future sections

// Icon/image should be centered
// Header should be centered
// Text should be justify left
// Button should be centered

// Panel should be around 1/3 the size of the non-margin width (Will adjust this better later so just eyeball it)
// Style in HomeServicespanel.module.css for right now

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
      <h3 className={styles.title}>{titleText}</h3>
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
