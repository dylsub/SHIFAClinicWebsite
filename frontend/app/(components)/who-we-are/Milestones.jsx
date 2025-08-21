import React from "react";
import styles from "./Milestones.module.css";

const Milestones = () => {
  // Ashley and Victor
  // Make the milestones section on the who we are page
  // Recreate the graphic in an external editor (Make the background transparent)
  // Use positioning/margins to place the text in the right location overlaying the graphic.
  // This will be tricky but you guys got it!!
  // Style appropriately

  return (
    <div className={styles.teamSection + " content_box"}>
      <h1 className={styles.heading}>Milestones</h1>
      {/* <p className={styles.description}>
        From just an idea, to a reality. SHIVA Clinic has grown from a small
        clinic to a large organization that is dedicated to providing the best
        care to our patients.
      </p> */}
      <div className={styles.imageContainer}>
        <img src="/milestones.png" alt="Milestones" />
      </div>
    </div>
  );
};

export default Milestones;
