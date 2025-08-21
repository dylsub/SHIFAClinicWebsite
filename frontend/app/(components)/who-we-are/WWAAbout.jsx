"use client";

import React from "react";
import ButtonBlackTransparent from "../reusables/buttons/ButtonBlackTransparent";
import classes from "./WWAAbout.module.css";

// I cooked

const WWAAbout = () => {
  return (
    <div className={classes.about_container + " content_box"}>
      <div className={classes.title_text}>
        <h1>We serve humanity without any boundaries</h1>
      </div>

      <div className={classes.body_text}>
        <p>
          ICN SHIFA Clinic is a manifestation of a desire to serve humanity
          without any boundaries. Since being founded in 2017, the clinic has
          proudly transformed into a new ICN SHIFA Clinic in a newly built
          dedicated office space with a team of almost 50 volunteers, offering
          several services to its patients at no cost.
        </p>

        <div className={classes.buttonContainer}>
          <ButtonBlackTransparent scrollTo="team">
            Our Team
          </ButtonBlackTransparent>
        </div>
      </div>
    </div>
  );
};

export default WWAAbout;
