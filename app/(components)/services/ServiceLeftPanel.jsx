import React from "react";
import styles from "./ServiceLeftPanel.module.css";

const ServiceLeftPanel = ({
  title,
  paragraph,
  buttonText,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.container}
      style={{ "--background-color": backgroundColor }}
    >
      <div className={styles.contentCard}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceLeftPanel;
