import React from "react";
import classes from "./BackgroundWrapper.module.css";

const BackgroundGreyWrapper = ({ children, id }) => {
  return (
    <div
      id={id || ""}
      style={{
        backgroundColor: "#f3f3f3",
      }}
      className={classes.background_wrapper}
    >
      {children}
    </div>
  );
};

export default BackgroundGreyWrapper;
