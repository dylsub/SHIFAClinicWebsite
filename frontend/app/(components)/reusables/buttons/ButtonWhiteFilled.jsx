"use client";

import React from "react";
import Link from "next/link";
import styles from "./ButtonWhiteFilled.module.css";

export default function ButtonWhiteFilled({ children, path, scrollTo }) {
  // Devin + Faris
  // Add hover animations. This one should lower the button brightness from 1 to like 0.9.
  // Give it a transition over time (Like 0.15s)

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Link href={path || "#"} className={styles.button} onClick={handleClick}>
      <p>{children}</p>
    </Link>
  );
}
