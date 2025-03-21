"use client";

import React, { useState, useEffect } from "react";
import GridText from "./GridText";
import GridImage from "./GridImage";
import styles from "./Grid.module.css";

const Grid = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to update the screen size state
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 720);
  };

  useEffect(() => {
    // Check initial screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {isSmallScreen ? (
        <>
          <GridText
            title="Mission"
            text="ICN SHIFA Clinic aims to provide free quality healthcare to anyone without insurance or underinsured, regardless of race, religion, or political affiliation."
          />
          <GridImage src="/doctors.jpg" alt="Doctors" />
        </>
      ) : (
        <>
          <GridImage src="/doctors.jpg" alt="Doctors" />
          <GridText
            title="Mission"
            text="ICN SHIFA Clinic aims to provide free quality healthcare to anyone without insurance or underinsured, regardless of race, religion, or political affiliation."
          />
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
