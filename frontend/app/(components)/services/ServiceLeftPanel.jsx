"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ServiceLeftPanel.module.css";

const ServiceLeftPanel = ({
  title,
  paragraph,
  buttonText,
  buttonPath = "#",
  backgroundColor,
  src = "1080x1920 sample.jpg",
}) => {
  const contentCardRef = useRef(null);
  const imageBoxRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const updateImageBoxHeight = () => {
      if (isMobile && contentCardRef.current && imageBoxRef.current) {
        const contentCardHeight = contentCardRef.current.offsetHeight;
        imageBoxRef.current.style.height = `${contentCardHeight}px`;
      } else if (imageBoxRef.current) {
        // Reset to CSS default for larger screens
        imageBoxRef.current.style.height = "";
      }
    };

    // Update height when mobile state changes or content changes
    updateImageBoxHeight();

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateImageBoxHeight, 100);

    return () => clearTimeout(timeoutId);
  }, [isMobile, title, paragraph, buttonText]);

  return (
    <div
      className={styles.container + " content_box"}
      style={{ "--background-color": backgroundColor }}
    >
      <div className={styles.content}>
        <div className={styles.contentCard} ref={contentCardRef}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.paragraph}>{paragraph}</p>
          <Link className={styles.button} href={buttonPath}>
            {buttonText}
          </Link>
        </div>
      </div>

      <div className={styles.image_box} ref={imageBoxRef}>
        <img src={src} alt="Service image"></img>
      </div>
    </div>
  );
};

export default ServiceLeftPanel;
