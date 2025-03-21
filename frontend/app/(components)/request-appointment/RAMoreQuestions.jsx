import React from "react";
import classes from "./RAMoreQuestions.module.css";

const RAMoreQuestions = () => {
  // Swetha
  // This one is a little more tricky
  // This is the section that starts with "Have more questions about your health?"
  // Simple header but then you have two red filled buttons connected with a line
  // Make sure that it is stored in a content box just like we have been doing

  return (
    <div className={classes.contentBox}>
      <h2 className={classes.header}>Have More Questions About Your Health?</h2>
      <div className={classes.buttonContainer}>
        <button className={`${classes.redButton} ${classes.leftButton}`}>
          Request an Appointment
        </button>
        <div className={classes.line}></div>
        <button className={`${classes.redButton} ${classes.rightButton}`}>
          Ask a SHIFA Doctor!
        </button>
      </div>
    </div>
  );
};

export default RAMoreQuestions;
