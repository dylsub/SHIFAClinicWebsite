import React from "react";
import styles from "./WWAHero.module.css";
import ButtonWhiteFilled from "../reusables/ButtonWhiteFilled";
import ButtonAnyColorFilled from "../reusables/ButtonAnyColorFilled";

const WWAHero = () => {
  // Ashlee + Victor
  // Do the same thing as the home hero
  // Most code should be copy pasted
  // Make minor styling changes to fit the Figma design

  return (
    <div className={styles.WWAContainer}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.text_box}>
        <h1 className={styles.WWAHeader}>Who we are</h1>
        <div className={styles.Buttons} >
          <ButtonAnyColorFilled path="/" buttonColor="rgb(255, 0, 0)">Our Mission and Vision</ButtonAnyColorFilled>
          <ButtonWhiteFilled path="/">Our Team</ButtonWhiteFilled>
        </div>
      </div>
   
 
 
    </div>
  );
};

export default WWAHero;
