import React from "react";
<<<<<<< HEAD
import ButtonBlackTransparent from "./ButtonBlackTransparent";
=======
import ButtonWhiteTransparent from "./buttons/ButtonWhiteTransparent";
>>>>>>> 212d490d03a0dadaa5ca7366d4a1efd1a97a83bb

export default function DetailedTextBlock({
  subtitleText,
  headerText,
  bodyText,
  buttonText,
  path,
  width,
<<<<<<< HEAD
  className
=======
>>>>>>> 212d490d03a0dadaa5ca7366d4a1efd1a97a83bb
}) {
  // Armaan Patel

  // Create a dynamic text component for the first main text block on the home page
  // h3 element, h1 element, p element, button (use default unstyled button for right now)
  // All should be justified left

  // Component should accept the text for all the items including the button as parameters
  // It should also accept the width of the text block. Notice how the "Get Involved" text block is more narrow but follow the same format.
  // Style in DetailedTextBlock.module.css
  //button white transparent for button
<<<<<<< HEAD
  return <div className={className} style={{width : `${width}px`}} >
    <h3>{subtitleText}</h3>
    <h1>{headerText}</h1>
    <p>{bodyText}</p>
    <ButtonBlackTransparent path={path}>
      {buttonText}
    </ButtonBlackTransparent>
  </div>;
=======
  return (
    <div style={{ width: `${width}px` }}>
      <h3>{subtitleText}</h3>
      <h1>{headerText}</h1>
      <p>{bodyText}</p>
      <ButtonWhiteTransparent path={path}>{buttonText}</ButtonWhiteTransparent>
    </div>
  );
>>>>>>> 212d490d03a0dadaa5ca7366d4a1efd1a97a83bb
}
