import React from "react";
import styles from "./ServiceRightPanel.module.css";

const ServiceRightPanel = ({
  title,
  paragraph,
  buttonText,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.container + " content_box"}
      style={{ "--background-color": backgroundColor }}
    >
      <div className={styles.content}>
        <div className={styles.contentCard}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.paragraph}>{paragraph}</p>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </div>

      <div className={styles.image_box}>
        <img src="serviceright.jpg"></img>
      </div>
    </div>
  );
};

export default ServiceRightPanel;
