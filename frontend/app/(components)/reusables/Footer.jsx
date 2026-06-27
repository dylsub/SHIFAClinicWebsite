import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} content_box`}>
        <div className={styles.brandColumn}>
          <h2 className={styles.logoText}>ICN SHIFA Clinic</h2>
          <p className={styles.tagline}>
            Free healthcare services rooted in compassion, dignity, and
            community care.
          </p>
        </div>

        <div className={styles.infoColumn}>
          <h3 className={styles.sectionTitle}>Visit Us</h3>
          <address className={styles.address}>
            25W530 75th Street
            <br />
            Naperville, IL 60565
          </address>
          <a className={styles.link} href="tel:+16303644773">
            (630) 364-4773
          </a>
        </div>

        <div className={styles.hoursColumn}>
          <h3 className={styles.sectionTitle}>Clinic Hours</h3>
          <div className={styles.hoursGrid}>
            <div className={styles.hoursBlock}>
              <h4>ICN SHIFA Medical Clinic Hours</h4>
              <p>First 4 Wed. monthly: 6:30 PM - 9:00 PM</p>
              <p>Second Tues. monthly: 6:30 PM - 9:00 PM</p>
            </div>
            <div className={styles.hoursBlock}>
              <h4>ICN SHIFA Dental Clinic Hours</h4>
              <p>Sat. 9:00 AM - 1:00 PM</p>
              <p>Sun. 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footerBottom} content_box`}>
        <p>ICN SHIFA Clinic</p>
        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/who-we-are">Who We Are</Link>
          <Link href="/services">Services</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/request-appointment">Request Appointment</Link>
          <Link href="/donate">Donate</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
