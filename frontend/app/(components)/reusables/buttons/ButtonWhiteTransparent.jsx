"use client";

import React from "react";
import Link from "next/link";
import styles from "./ButtonWhiteTransparent.module.css";

export default function ButtonWhiteTransparent({ children, path, scrollTo }) {
  // Devin + Faris
  // Add hover animations. This one should fill in the button white.
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
