import React from "react";
import classes from "./BackgroundWrapper.module.css";

const BackgroundDarkGreyWrapper = ({ children, id }) => {
  return (
    <div
      id={id || ""}
      style={{
        backgroundColor: "#535353",
      }}
      className={classes.background_wrapper}
    >
      {children}
    </div>
  );
};

export default BackgroundDarkGreyWrapper;
