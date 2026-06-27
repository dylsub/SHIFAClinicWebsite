import React from "react";
import styles from "../home/HomeHero.module.css";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

export default function HomeHero() {
  return (
    <div id="hero" className={`${styles.heroContainer} ${styles.donate}`}>
      <div className={`${styles.text_box} content_box`}>
        <div>
          <h1 className={styles.heroHeader}>Support our mission</h1>
          <div className={styles.button_box}>
            <ButtonWhiteTransparent scrollTo="donate-now">
              Donate Now
            </ButtonWhiteTransparent>
          </div>
        </div>
      </div>
    </div>
  );
}
