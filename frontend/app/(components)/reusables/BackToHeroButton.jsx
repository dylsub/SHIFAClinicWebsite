"use client";

import React from "react";
import styles from "./BackToHeroButton.module.css";

export default function BackToHeroButton() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={scrollToHero}
      aria-label="Back to top"
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 5l7 7h-4v7H9v-7H5l7-7z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
