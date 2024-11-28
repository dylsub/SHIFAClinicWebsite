import React from "react";
import styles from "./WWAHero.module.css";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";

const WWAHero = () => {
  // Ashlee + Victor
  // Do the same thing as the home hero
  // Most code should be copy pasted
  // Make minor styling changes to fit the Figma design

  return (
    <div className={styles.WWAContainer}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.text_box + " content_box"}>
        <div>
          <h1 className={styles.WWAHeader}>Who we are</h1>
          <div className={styles.button_box}>
            <ButtonAnyColorFilled path="/" buttonColor="rgb(255, 0, 0)">
              Our Mission and Vision
            </ButtonAnyColorFilled>
            <ButtonWhiteFilled path="/">Our Team</ButtonWhiteFilled>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WWAHero;
