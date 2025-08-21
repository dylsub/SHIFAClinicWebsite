import React from "react";
import styles from "./ResourcesHero.module.css";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

export default function HomeHero() {
  return (
    <div className={`${styles.heroContainer}`}>
      <div className={`${styles.text_box} content_box`}>
        <div>
          <h1 className={styles.heroHeader}>Access our resources</h1>
          <div className={styles.button_box}>
            <ButtonWhiteTransparent scrollTo="shifa-resources">
              SHIFA Resources
            </ButtonWhiteTransparent>
            <ButtonWhiteFilled scrollTo="recommended-diets">
              Recommended Diets
            </ButtonWhiteFilled>
          </div>
        </div>
      </div>
    </div>
  );
}
