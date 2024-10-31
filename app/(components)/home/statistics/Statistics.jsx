import React from "react";
import StatisticsNumber from "./StatisticsNumber";
import classes from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={classes.stats}>
      <StatisticsNumber
        titleText={"70+"}
        descripText={"Patients Served"}
        color={"#FD6A6D"}
      ></StatisticsNumber>
      <StatisticsNumber
        titleText={"7"}
        descripText={"Services Offered"}
        color={"#EC2024"}
      ></StatisticsNumber>
      <StatisticsNumber
        titleText={"100%"}
        descripText={"Donation Funded"}
        color={"#A1080B"}
      ></StatisticsNumber>
      <StatisticsNumber
        titleText={"45+"}
        descripText={"Past + Current Volunteers"}
        color={"#6C0305"}
      ></StatisticsNumber>
      <StatisticsNumber
        titleText={"2x"}
        descripText={"Silver Clinic Recepient"}
        color={"#230203"}
      ></StatisticsNumber>
    </div>
  );
};

export default Statistics;
