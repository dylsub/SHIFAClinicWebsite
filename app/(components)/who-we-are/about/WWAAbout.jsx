import React from "react";
import ButtonBlackTransparent from "../../reusables/ButtonBlackTransparent";
import classes from "./WWAAbout.module.css";

// I cooked

const WWAAbout = () => {
  return (
    <div className={classes.about_container}>
      <div>
        <h1 className={classes.title_text}>
          We serve
          <br /> humanity
          <br /> without any
          <br /> boundaries
        </h1>
      </div>

      <div>
        <p className={classes.body_text}>
          ICN SHIFA Clinic is a manifestation of a desire to serve humanity
          without any boundaries. Since being founded in 2017, the clinic has
          proudly transformed into a new ICN SHIFA Clinic in a newly built
          dedicated office space with a team of almost 50 volunteers, offering
          several services to its patients at no cost.
        </p>

        <ButtonBlackTransparent path="/">Our Team</ButtonBlackTransparent>
      </div>
    </div>
  );
};

export default WWAAbout;
