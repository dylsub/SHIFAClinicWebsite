import React from "react";
import DetailedTextBlock from "../../reusables/DetailedTextBlock";
import styles from "../about/HomeAbout.module.css";
const HomeGetInvolved = ({
  subtitleText,
  headerText,
  bodyText,
  buttonText,
  path,
  width,
  titleText,
  src,
}) => {
  // Armaan
  // Now that you have the detail text block component created,
  // You want to design the home get involved section.
  // The section be held in a content box (div) with a width of 1400px
  // An image and your created component should be in those boxes and styled appropriately
  return (
    <div className={styles.about + " content_box"}>
      <div className={styles.aboutImage}>
        <img src={src} alt={titleText} />
      </div>
      <div className={styles.aboutText}>
        <DetailedTextBlock
          subtitleText={subtitleText}
          headerText={headerText}
          bodyText={bodyText}
          buttonText={buttonText}
          path={path}
          width={100}
        ></DetailedTextBlock>
      </div>
    </div>
  );
};

export default HomeGetInvolved;
