import React from "react";

import styles from "./DonateThanks.module.css";
import DetailedTextBlock from "../reusables/DetailedTextBlock";

const DonateThanks = ({subtitleText,
  headerText,
  bodyText,
  buttonText,
  path,
  titleText,
  src
}) => {
  // Armaan
  // Very similar to HomeAbout and HomeGetInvolved
  // You can leave subtitle parameter blank and use your DetailedTextBlock component

  return <div width={1200} className={styles.aboutColumn}>
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
  <img src={src} alt={titleText} />


</div>;
};

export default DonateThanks;
