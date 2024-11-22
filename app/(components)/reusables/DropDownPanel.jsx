'use client';

import React, { useState } from "react";
import styles from "./DropDownPanel.module.css";

const DropDownPanel = ({ buttonText, dropdownText }) => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={styles.dropdownContainer}>
            {/* Dropdown button */}
            <div
                onClick={toggleDropdown}
                className={`${styles.dropdownButton} ${open ? styles.open : ""}`}
            >
                {buttonText}
            </div>

            {/* Dropdown content */}
            <div className={`${styles.dropdownMenu} ${open ? styles.open : ""}`}>
                {dropdownText}
            </div>
        </div>
    );
};

export default DropDownPanel;

  // Faris + Devin
  // Now we are getting a little more tricky!
  // Design a single drop down component.
  // Style is similar to the FAQ found on the Figma. Add hover effects like lowered brightness.
  // Upon click, text should appear underneath.
  // Make sure this text displaces components underneath.
  // (Stuff below it should be pushed down so that things don't overlap. This is easier than it sounds)
  // Good luck!
  // displayblock