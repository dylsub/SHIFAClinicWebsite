"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";
import ButtonBlackTransparent from "../reusables/buttons/ButtonBlackTransparent";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import ButtonWhiteFilled from "../reusables/buttons/ButtonWhiteFilled";
import ButtonWhiteTransparent from "../reusables/buttons/ButtonWhiteTransparent";
import MobileNavMenu from "./MobileNavMenu";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo Section */}
        <div className={styles.navbarContainer + " content_box"}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/shifa.png" alt="Logo" width={60} height={60} />
            </Link>
          </div>

          {/* Navigation Links Section - Hidden on mobile */}
          {!isMobile && (
            <div className={styles.navLinks}>
              <Link
                href="/who-we-are"
                className={`${styles.link} ${
                  pathname === "/who-we-are" ? styles.active : ""
                }`}
              >
                Who Are We
              </Link>
              <Link
                href="/services"
                className={`${styles.link} ${
                  pathname === "/services" ? styles.active : ""
                }`}
              >
                Services
              </Link>
              <Link
                href="/get-involved"
                className={`${styles.link} ${
                  pathname === "/get-involved" ? styles.active : ""
                }`}
              >
                Get Involved
              </Link>
              <Link
                href="/resources"
                className={`${styles.link} ${
                  pathname === "/resources" ? styles.active : ""
                }`}
              >
                Resources
              </Link>
            </div>
          )}

          {/* Buttons Section - Hidden on mobile */}
          {!isMobile && (
            <div className={styles.buttons}>
              <ButtonBlackTransparent path="/donate" className={styles.buttons}>
                Donate
              </ButtonBlackTransparent>
              <ButtonAnyColorFilled
                path="/request-appointment"
                buttonColor="red"
                className={styles.buttons}
              >
                Request Appointment
              </ButtonAnyColorFilled>
            </div>
          )}

          {/* Hamburger Menu Button - Only visible on mobile */}
          {isMobile && (
            <button
              className={styles.hamburgerButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <MobileNavMenu onClose={closeMobileMenu} />
      )}

      {/* Overlay for mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </>
  );
}
