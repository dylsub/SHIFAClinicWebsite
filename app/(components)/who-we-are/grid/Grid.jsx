"use client";

import React from "react";
import GridText from "./GridText";
import GridImage from "./GridImage";
import styles from "./Grid.module.css";

const Grid = () => {
  const isMobile = window.innerWidth <= 720;
  return (
    <div className={styles.container}>
      {!isMobile ? (
        <>
          <GridImage src="/doctors.jpg" alt="Doctors" />
          <GridText
            title="Mission"
            text="ICN SHIFA Clinic aims to provide free quality healthcare to anyone without insurance or underinsured, regardless of race, religion, or political affiliation."
          />
        </>
      ) : (
        <>
          <GridText
            title="Mission"
            text="ICN SHIFA Clinic aims to provide free quality healthcare to anyone without insurance or underinsured, regardless of race, religion, or political affiliation."
          />
          <GridImage src="/doctors.jpg" alt="Doctors" />
        </>
      )}
      <GridText
        title="Vision"
        text="ICN SHIFA Clinic has a vision for a facility that will offer comprehensive healthcare services under one roof, including medical, mental, dental, optical, and specialty care. We aim to create a system where patients without health insurance benefit from cost-effective, patient-focused services."
      />
      <GridImage src="/doctors.jpg" alt="Doctors" />
    </div>
  );
};

export default Grid;
