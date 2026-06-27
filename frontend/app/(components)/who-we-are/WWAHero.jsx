import React from "react";
import styles from "../home/HomeHero.module.css";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

export default function HomeHero() {
  return (
    <div id="hero" className={`${styles.heroContainer} ${styles.who_we_are}`}>
      <div className={`${styles.text_box} content_box`}>
        <div>
          <h1 className={styles.heroHeader}>What is the ICN SHIFA Clinic?</h1>
          <div className={styles.button_box}>
            <ButtonWhiteTransparent path="/services">
              View Services
            </ButtonWhiteTransparent>
            <ButtonWhiteFilled path="/get-involved">
              Get Involved
            </ButtonWhiteFilled>
          </div>
        </div>
      </div>
    </div>
  );
}
