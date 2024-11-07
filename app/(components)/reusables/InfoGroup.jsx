import React from "react";

const InfoGroup = ({ children }) => {
  // Ishaan
  // This is functionally the same as HomeServices.jsx.
  // However, you are only passing in the special children prop.
  // This means that in pseudocode <InfoGroup><InfoPanel/> * 3</InfoGroup>,
  // <InfoPanel/> * 3 would be stored in the children prop

  return <div>{children}</div>;
};

export default InfoGroup;
