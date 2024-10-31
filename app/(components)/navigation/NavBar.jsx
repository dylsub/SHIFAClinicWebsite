import React from "react";
import Link from 'next/link';
import Image from "next/image";
import styles from './NavBar.module.css'

export default function NavBar() {
  // Ayush Shastry + Ryan Gao

  // Create the navigation bar seen at the top of each page on the figma
  // You should split your navigation into three sections: Logo, Navigation Links, Buttons

  // Logo should be a nextJS <Link> that directs the user to the home page ("/")

  // The other buttons should also be <Link>s that direct the user to their respective page (Don't need to worry about paths now just leave as "/")
  // These buttons should change color when hovered and become underlined with that same color.

  // The buttons can remain as default buttons for right now don't worry about styling or doing any functionality

  // The nav bar should have a left and right padding of like 15vw as seen in the figma

  // Style in the NavBar.module.css file for right now

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/"> <Image src="/shifa.png" alt = "Logo" width={40} height={40}/> </Link>
      </div>

      {/* Navigation Links Section */}
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Services</Link>
      </div>

      {/* Buttons Section */}
      <div className={styles.buttons}>
        <Link href="/" className={styles.button}>Sign Up</Link>
        <Link href="/" className={styles.button}>Login</Link>
      </div>
    </nav>
  );
}