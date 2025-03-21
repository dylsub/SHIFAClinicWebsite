import React from "react";
import classes from "./Statistics.module.css";

const StatisticsNumber = ({ titleText, descripText, color }) => {
  return (
    <div className={classes.stat}>
      <h1 style={{ color: `${color}` }} className={classes.stat_title}>
        {titleText}
      </h1>
      <p style={{ color: `${color}` }} className={classes.stat_description}>
        {descripText}
      </p>
    </div>
  );
};

export default StatisticsNumber;
