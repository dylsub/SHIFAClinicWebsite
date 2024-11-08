import React from "react";
import DetailedTextBlock from "../../reusables/DetailedTextBlock";
import styles from "./HomeAbout.module.css";

const HomeAbout = ({subtitleText,
  headerText,
  bodyText,
  buttonText,
  path,
  width,
  titleText,
  src
}) => {
  // Armaan
  // Now that you have the detail text block component created,
  // You want to design the about section.
  // The about section be held in a content box (div) with a width of 1400px
  // An image and your created component should be in those boxes and styled appropriately
  return <div width={1200} className={styles.aboutColumn}>
  <div>
  <img src={src} alt={titleText} />
  </div>
  <div className={styles.aboutText}>
  <DetailedTextBlock
    subtitleText = {subtitleText}
    headerText = {headerText}
    bodyText = {bodyText}
    buttonText = {buttonText}
    path=  {path}
    width = {600}
    >
  </DetailedTextBlock>
  </div>

</div>;
};

export default HomeAbout;
