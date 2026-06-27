import React from "react";

import styles from "./DonateThanks.module.css";
import DetailedTextBlock from "../reusables/DetailedTextBlock";

const DonateThanks = ({
  subtitleText,
  headerText,
  bodyText,
  buttonText,
  path,
  scrollTo,
  titleText,
  src,
}) => {
  // Armaan
  // Very similar to HomeAbout and HomeGetInvolved
  // You can leave subtitle parameter blank and use your DetailedTextBlock component

  return (
    <div className={styles.aboutColumn + " content_box"}>
      <div className={styles.aboutText}>
        <DetailedTextBlock
          subtitleText={subtitleText}
          headerText={headerText}
          bodyText={bodyText}
          buttonText={buttonText}
          path={path}
          scrollTo={scrollTo}
          width={92}
          className={styles.textBlockMobileFull}
        ></DetailedTextBlock>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={src} alt={titleText} />
      </div>
    </div>
  );
};

export default DonateThanks;
