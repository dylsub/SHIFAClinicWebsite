import React from "react";
import styles from "./RAHero.module.css";

const RAHero = () => {
  // Ashlee + Victor
  // Y'all know the drill
  // Stylize this one like the Figma

  return (
    <div className={styles.RAHeroContainer}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.text_box}>
        <h1 className={styles.RAHeroHeader}>Request An Appointment</h1>
      </div>
    </div>
  );
};

export default RAHero;
