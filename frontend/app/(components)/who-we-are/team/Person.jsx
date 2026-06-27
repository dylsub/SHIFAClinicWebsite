import React from "react";
import classes from "./Person.module.css";

const Person = ({ imageSrc, name, role, description }) => {
  const displayDescription = description?.trim() || "No Description";

  return (
    <div className={classes.person}>
      <div className={classes.container}>
        <img src={imageSrc} alt={name} />
        <div className={classes.overlay}>
          <p>{role}</p>
        </div>
      </div>
      <div className={classes.details}>
        <p className={classes.name}>{name}</p>
        <p className={classes.description}>{displayDescription}</p>
      </div>
    </div>
  );
};

export default Person;
