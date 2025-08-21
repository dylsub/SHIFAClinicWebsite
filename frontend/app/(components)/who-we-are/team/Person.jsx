import React from "react";
import classes from "./Person.module.css";

const Person = ({ imageSrc, name, role }) => {
  return (
    <div>
      <div className={classes.container}>
        <img src={imageSrc} alt={name} />
        <div className={classes.overlay}>
          <p>{role}</p>
        </div>
      </div>
      <div className={classes.name}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Person;
