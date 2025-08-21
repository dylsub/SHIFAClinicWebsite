import React from "react";
import classes from "./DonateNow.module.css";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";

const DonateNow = () => {
  return (
    <div className={`content_box ${classes.container}`}>
      <h1>
        Thank you for your commitment to improving healthcare access for all.
      </h1>
      <ButtonAnyColorFilled buttonColor="#EC2024" path="/">
        Donate Now
      </ButtonAnyColorFilled>
    </div>
  );
};

export default DonateNow;
