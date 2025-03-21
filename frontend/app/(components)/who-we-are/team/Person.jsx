import React from 'react'
import classes from './Person.module.css';

const Person = () => {
  return (
    <div>
      <div className={classes.container}>
        <img src="inputimage" alt="Image" />
        <div className={classes.overlay}>
          <p>Sample Text</p>
        </div>
      </div> 
      <div className={classes.name}>
        <p>Name</p> 
      </div>
    </div>
  );
};

export default Person;
