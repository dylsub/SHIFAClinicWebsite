import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  // Ayush Shastry
  // Fix formatting on Nav Bar
  // Get it looking perfect
  // Link to the correct pages now that they have been created
  // Add the reusable button components

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          {" "}
          <Image src="/shifa.png" alt="Logo" width={40} height={40} />{" "}
        </Link>
      </div>

      {/* Navigation Links Section */}
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Services
        </Link>
      </div>

      {/* Buttons Section */}
      <div className={styles.buttons}>
        <Link href="/" className={styles.button}>
          Sign Up
        </Link>
        <Link href="/" className={styles.button}>
          Login
        </Link>
      </div>
    </nav>
  );
}
