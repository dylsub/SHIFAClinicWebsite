import React from "react";
import classes from "./ImageBanner.module.css";

const ImageBanner = ({ src }) => {
  return (
    <div className={classes.container}>
      <img src={src}></img>
    </div>
  );
};

export default ImageBanner;
