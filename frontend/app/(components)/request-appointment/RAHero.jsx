import React from "react";
import styles from "../home/HomeHero.module.css";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

export default function HomeHero() {
  return (
    <div className={`${styles.heroContainer}`}>
      <div className={`${styles.text_box} content_box`}>
        <div>
          <h1 className={styles.heroHeader}>Request an Appointment</h1>
          <div className={styles.button_box}>
            <ButtonWhiteTransparent scrollTo="request-appointment">
              View Request Form
            </ButtonWhiteTransparent>
            <ButtonWhiteFilled scrollTo="contact-us">
              Contact Us
            </ButtonWhiteFilled>
          </div>
        </div>
      </div>
    </div>
  );
}
