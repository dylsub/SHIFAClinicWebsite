import React from "react";
import styles from "./Team.module.css";

const TeamItem = ({ imageSrc, label }) => {
  return (
    <div className={styles.teamItem}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={label} className={styles.image} />
      </div>
      <button className={styles.label}>{label}</button>
    </div>
  );
};

export default TeamItem;
