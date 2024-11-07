import React from "react";
import styles from "./Grid.module.css"


const GridImage = ({ src, alt }) => {
  return (
    <div className={styles.gridImage}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default GridImage;
