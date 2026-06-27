import React from "react";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import classes from "./ApplyNow.module.css";

const ApplyNow = () => {
  return (
    <div className={`content_box ${classes.container}`}>
      <h1>Apply to volunteer today</h1>
      <p>
        Ready to serve with ICN SHIFA Clinic? Complete the volunteer application
        form and our team will review your submission.
      </p>
      <ButtonAnyColorFilled
        buttonColor="#000"
        openInNewTab
        path="https://form.jotform.com/240317517976059"
      >
        Start Volunteer Application
      </ButtonAnyColorFilled>
    </div>
  );
};

export default ApplyNow;
