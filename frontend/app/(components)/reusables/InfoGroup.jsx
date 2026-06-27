import React from "react";
import styles from "./InfoGroup.module.css";
// Ishaan
// Same flex row + content_box pattern as HomeServices (panel row only; no section heading).
// This means that in pseudocode <InfoGroup><InfoPanel/> * 3</InfoGroup>,
// <InfoPanel/> * 3 would be stored in the children prop

export default function InfoGroup({ children, className = "" }) {
  return (
    <div
      className={[styles.container, "content_box", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
