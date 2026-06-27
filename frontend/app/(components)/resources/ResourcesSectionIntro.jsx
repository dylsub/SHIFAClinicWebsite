import React from "react";

import styles from "./ResourcesSectionIntro.module.css";



export default function ResourcesSectionIntro({ title, description, className = "" }) {

  return (

    <div className={[styles.container, className].filter(Boolean).join(" ")}>

      <h1 className={styles.heading}>{title}</h1>

      <p className={styles.description}>{description}</p>

    </div>

  );

}



