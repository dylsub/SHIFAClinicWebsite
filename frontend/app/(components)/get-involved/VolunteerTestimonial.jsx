import React from "react";
import styles from "./VolunteerTestimonial.module.css";

export default function VolunteerTestimonial({ children }) {
  return (
    <div className={styles.wrapper}>
      <h3>Hear from our volunteers!</h3>
      <div className={styles.container + " content_box"}>{children}</div>
      {/* <button className={styles.button}>
          Tell Us About Your Experience!
        </button> */}
    </div>
  );
}
