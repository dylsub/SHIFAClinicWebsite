import React from "react";
import styles from "./DonateHero.module.css";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

const DonateHero = () => {
  // Ashlee + Victor
  // Y'all know the drill
  // Stylize this one like the Figma

  return (
    <div className={styles.donateHeroContainer}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.text_box}>
        <h1 className={styles.donateHeroHeader}>Make A Donation</h1>
        <ButtonWhiteFilled path="/">Donate Now</ButtonWhiteFilled>
      </div>
    </div>
  );
};

export default DonateHero;
