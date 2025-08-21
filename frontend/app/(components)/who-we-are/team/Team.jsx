import React from "react";
import styles from "./Team.module.css";
import TeamGrid from "./TeamGrid";

const Team = () => {
  return (
    <section className={styles.teamSection + " content_box"}>
      <h1 className={styles.heading}>Meet Our Team</h1>
      <p className={styles.description}>
        ICN SHIFA Clinic is the manifestation of a dream that is shared commonly
        among a team of dedicated and committed volunteers. A group of
        kindhearted and caring folks with different sets of skills have joined
        hands for a common cause: serve humanity regardless of faith, race, or
        political affiliation.
      </p>
      <TeamGrid />
    </section>
  );
};

export default Team;
