import React from "react";

export default function ButtonWhiteFilled({ children, path }) {
  // Faris + Devin

  // Create a button that resembles the white button with black text seen on the home page with text "View Services"
  // Give it a border-radius, border-width, border-color of white, text of black
  // Make it dynamic. It should scale to fit the text written.
  // Text should be centered

  // IMPORTANT: Please use a nextJS <Link> tag instead of a <button> element.

  // Huge hint:
  //   <Link href="/about" passHref>
  //     <a style={buttonStyle}>Go to About Page</a>
  //   </Link>;

  // Text will be automatically entered in its children property. The path parameter is the route that the button should link to.
  // CSS should be done in ButtonWhiteFilled.module.css for right now. Please use detailed classNames to avoid overlap

  return <div>{children}</div>;
}
