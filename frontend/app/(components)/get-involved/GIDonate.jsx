import React from "react";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import classes from "./GIDonate.module.css";

const GIDonate = () => {
  return (
    <div className={classes.container + " content_box"}>
      <h1>Your Support Matters</h1>
      <p>
        Giving back to the community is a principle we value, and donations from
        our community are greatly appreciated. Your generous donations are vital
        in helping us provide essential healthcare services. Thank you for your
        commitment to helping us create a difference for those who are in need!
      </p>

      <div className={classes.buttonContainer}>
        <ButtonAnyColorFilled path="/donate" buttonColor="rgb(0, 0, 0)">
          Donate Today!
        </ButtonAnyColorFilled>
      </div>
    </div>
  );
};

export default GIDonate;
