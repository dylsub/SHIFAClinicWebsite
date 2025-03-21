import React from "react";
import styles from "./HeroQuote.module.css";

const HeroQuote = ({ leadingText, quoteText, authorText }) => {
  // Ashlee and Victor
  // Create the hero quote section on the Get Involved page
  // This content should be kept in a 1400px wide content box (div)
  // Volunteering with SHIFA text should be text-align left
  // Prophet Muhammad text should be text-align right
  // Give the content an upper and lower padding
  // The text should be dynamically fed into into the component
  // leadingText, quoteText, authorText should be the parameters

  return (
    <div className={styles.quoteContainer}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.text_box}>
        <p className={styles.leadingText}>{leadingText}</p>
        <h1 className={styles.quoteText}>{quoteText}</h1>
        <p className={styles.authorText}>{authorText}</p>
      </div>
   
 
 
    </div>
  );
};

export default HeroQuote;
