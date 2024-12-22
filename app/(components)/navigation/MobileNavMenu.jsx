import React from 'react';
import Link from 'next/link';
import styles from './MobileNavMenu.module.css';

const MobileNavMenu = () => {
  return (
    <div className={styles.mobileNavMenu}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/donate">Donate</Link>
        </li>
      </ul>
      <div className={styles.buttons}>
        <Link href="/login" className={styles.button}>
          Login
        </Link>
        <Link href="/signup" className={styles.button}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MobileNavMenu;
