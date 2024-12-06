import React from "react";
import styles from "./DonateQuote.module.css";

const DonateQuote = () => {
  // Ashlee + Victor
  // The small section with a picture and a quote on donate page
  // Should be in a content box of 1200px like usual
  // Should create a div container for the image and a div container for the text
  // Both should be 50% the content box

  return (
    <div className={styles.DonateQuoteContainer}>
      <div className={styles.content_box}>
        <div className={styles.image_box}></div>
        <div className={styles.text_box}>
          <h1 className={styles.DonateQuote}>"Giving is not just about making a donation. It is about making a difference."</h1>
        </div>
      </div>
    </div>
  );
};

export default DonateQuote;
