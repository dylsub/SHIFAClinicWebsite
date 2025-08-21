"use client";

import React from "react";
import Link from "next/link";
import styles from "./ButtonBlackTransparent.module.css";

export default function ButtonBlackTransparent({ children, path, scrollTo }) {
  // Devin + Faris
  // Finish this as well.
  // Add hover animation to fill in black (As explained in prev buttons)

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
