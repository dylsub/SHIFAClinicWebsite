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
      <div className={styles.content_box}>
        <div className={styles.contentCard}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.paragraph}>{paragraph}</p>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </div>

      <div className={styles.image_box}>
        <img src="1080x1920 sample.jpg"></img>
      </div>
    </div>
  );
};

export default ServiceLeftPanel;
