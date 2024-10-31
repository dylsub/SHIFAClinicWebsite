import React from "react";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  // Ashlee Tran + Victor 

  // Hero Image (Gradient black to clear from bottom to top)
  // Stretchs 100vw and a constant pixel height

  // h1 header with a margin left of around 10-15vw
  // Include placeholders for buttons (use default button). Someone else will design those.

  // Style in HomeHero.module.css for right now

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <h1 className={styles.heroHeader}>Sacred healing for all</h1>
        <button className={styles.heroButton1}>Request appointment</button>
        <button className={styles.heroButton2}>View services</button>
      {/* <img src="./Control-V.png"></img> */}
    </div>
  );

}
