import React from "react";
import classes from "./TextColumn.module.css";

const TextColumn = () => {
  // Devin + Faris
  // Text column that is to the left of the drop downs on the get involved page
  // Super simple
  // Format and style accordingly

  return (
    <div>
      <h1 className={classes.header}>
        Everything you need to know before volunteering
      </h1>
      <p>
        We have developed a structured training program for student volunteers
        to acquire basic, practical, medical skills as well as operational
        skills in the services outside of patient care (i.e. marketing,
        outreach, etc.) We strongly encourage you to reach out and contact us to
        further discuss opportunities.
      </p>
    </div>
  );
};

export default TextColumn;
