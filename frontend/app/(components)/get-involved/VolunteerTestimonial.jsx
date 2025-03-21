import React from "react";
import styles from "./VolunteerTestimonial.module.css";

export default function VolunteerTestimonial({ children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hear from our volunteers!</h1>
      {children}
      <button className={styles.button}>Tell Us About Your Experience!</button>
    </div>
  );
}
