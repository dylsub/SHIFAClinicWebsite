import React from "react";
import styles from "./HomeHero.module.css";
import ButtonWhiteTransparent from "../reusables/ButtonWhiteTransparent";
import ButtonWhiteFilled from "../reusables/ButtonWhiteFilled";


export default function HomeHero() {
 // Ashlee Tran + Victor


 // Hero Image (Gradient black to clear from bottom to top)
 // Stretchs 100vw and a constant pixel height


 // h1 header with a margin left of around 10-15vw
 // Include placeholders for buttons (use default button). Someone else will design those.


 // Style in HomeHero.module.css for right now


 return (
   <div className={styles.heroContainer}>
     {/* <div className={styles.overlay}></div> */}
     <div className={styles.text_box}>
       <h1 className={styles.heroHeader}>Sacred healing for all</h1>
       <ButtonWhiteTransparent path="/">Request appointment</ButtonWhiteTransparent>
       <ButtonWhiteFilled path="/">View services</ButtonWhiteFilled>
     </div>
  


   </div>
 );


}
