import React from "react";
import styles from "./ClinicInfo.module.css";

const ClinicInfo = () => {
  return (
    <section className={styles.banner}>
      <div className={`${styles.container} content_box`}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Medical Clinic Hours</span>
          <p>First 4 Wed. monthly: 6:30 PM - 9:00 PM</p>
          <p>Second Tues. monthly: 6:30 PM - 9:00 PM</p>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Dental Clinic Hours</span>
          <p>Sat. 9:00 AM - 1:00 PM</p>
          <p>Sun. 9:00 AM - 1:00 PM</p>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Address</span>
          <address>25W530 75th Street, Naperville, IL 60565</address>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Phone</span>
          <a href="tel:+16303644773">(630) 364-4773</a>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
