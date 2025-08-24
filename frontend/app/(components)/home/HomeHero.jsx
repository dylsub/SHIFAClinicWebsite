import React from "react";
import styles from "./HomeHero.module.css";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

export default function HomeHero() {
  return (
    <div className={`${styles.heroContainer} ${styles.home}`}>
      <div className={`${styles.text_box} content_box`}>
        <div>
          <h1 className={styles.heroHeader}>
            Sacred healing institute for all
          </h1>
          <div className={styles.button_box}>
            <ButtonWhiteTransparent path="/request-appointment">
              Request Appointment
            </ButtonWhiteTransparent>
            <ButtonWhiteFilled path="/services">
              View services
            </ButtonWhiteFilled>
          </div>
        </div>
      </div>
    </div>
  );
}
