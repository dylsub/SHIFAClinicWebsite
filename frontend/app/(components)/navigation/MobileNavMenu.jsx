import React from 'react';
import Link from 'next/link';
import styles from './MobileNavMenu.module.css';

const MobileNavMenu = ({ onClose }) => {
  return (
    <div className={styles.mobileNavMenu}>
      {/* Close Button */}
      <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
        ×
      </button>

      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/" onClick={onClose}>
          <img
            src="/shifa.png"
            alt="SHIFA Clinic Logo"
            className={styles.logoImage}
          />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/who-we-are" onClick={onClose}>Who Are We</Link>
        </li>
        <li>
          <Link href="/services" onClick={onClose}>Services</Link>
        </li>
        <li>
          <Link href="/get-involved" onClick={onClose}>Get Involved</Link>
        </li>
        <li>
          <Link href="/resources" onClick={onClose}>Resources</Link>
        </li>
        <li>
          <Link href="/donate" onClick={onClose}>Donate</Link>
        </li>
        <li>
          <Link href="/request-appointment" onClick={onClose}>Request Appointment</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
