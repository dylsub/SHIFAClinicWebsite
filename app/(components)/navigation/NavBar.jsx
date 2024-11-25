import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import ButtonBlackTransparent from "../reusables/buttons/ButtonBlackTransparent";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";

export default function NavBar() {
  // Ayush Shastry
  // Fix formatting on Nav Bar
  // Get it looking perfect
  // Link to the correct pages now that they have been created
  // Add the reusable button components

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Link href="/">
          {" "}
          <Image src="/shifa.png" alt="Logo" width={60} height={60} />{" "}
        </Link>
      </div>

      {/* Navigation Links Section */}
      <div className={styles.navLinks}>
        <Link href="/who-we-are" className={styles.link}>
          Who Are We
        </Link>
        <Link href="/services" className={styles.link}>
          Services
        </Link>
        <Link href="/get-involved" className={styles.link}>
          Get Involved
        </Link>
        <Link href="/resources" className={styles.link}>
          Resources
        </Link>
      </div>

      {/* Buttons Section */}
      <div className={styles.buttons}>
        <ButtonBlackTransparent path = "\donate" className={styles.buttons}>
          Donate 
          </ButtonBlackTransparent>
        <ButtonAnyColorFilled path = "\request-appointment" buttonColor = "red" className={styles.buttons}>
          Request Appointment
          </ButtonAnyColorFilled>
      </div>
      </div>
      
    </nav>
  );
}
