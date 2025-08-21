import React from "react";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import classes from "./RequestNow.module.css";

const DonateNow = () => {
  return (
    <div className={`content_box ${classes.container}`}>
      <h1>Request an Appointment at ICN SHIVA Clinic</h1>
      <div className={classes.description}>
        <p>
          Please be advised that this request is not a guaranteed appointment.
          ICN SHIFA Clinic admins will review your appointment request and will
          communicate with you to confirm the appointment.
        </p>
      </div>
      <div className={classes.buttonContainer}>
        <ButtonAnyColorFilled buttonColor="#EC2024" path="/">
          Request Medical Appointment
        </ButtonAnyColorFilled>
        <ButtonAnyColorFilled buttonColor="#5b0304" path="/">
          Request Dental Appointment
        </ButtonAnyColorFilled>
      </div>
    </div>
  );
};

export default DonateNow;
