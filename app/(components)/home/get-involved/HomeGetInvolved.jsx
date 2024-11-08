import React from "react";
import DetailedTextBlock from "../../reusables/DetailedTextBlock";
const HomeGetInvolved = (  {subtitleText,
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
  // You want to design the home get involved section.
  // The section be held in a content box (div) with a width of 1400px
  // An image and your created component should be in those boxes and styled appropriately
  return <div width={1400}>
    <img src={src} alt={titleText} />
    <DetailedTextBlock
      subtitleText = {subtitleText}
      headerText = {headerText}
      bodyText = {bodyText}
      buttonText = {buttonText}
      path=  {path}
      width = {width}
      className={""}>
    </DetailedTextBlock>
  </div>;
};

export default HomeGetInvolved;
