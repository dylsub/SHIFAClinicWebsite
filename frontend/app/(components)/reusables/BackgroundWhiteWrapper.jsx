import React from "react";
import classes from "./BackgroundWrapper.module.css";

const BackgroundWhiteWrapper = ({ children, id }) => {
  return (
    <div
      id={id || ""}
      style={{
        backgroundColor: "#fff",
      }}
      className={classes.background_wrapper}
    >
      {children}
    </div>
  );
};

export default BackgroundWhiteWrapper;
