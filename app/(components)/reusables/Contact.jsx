import React from "react";
import styles from "./Contact.module.css";
import ButtonWhiteFilled from "./buttons/ButtonWhiteFilled";
const Contact = (
  {
    subtitleText,
    headerText,
    buttonText,
    path,
    titleText,
    src,
  }
) => {
  // Armaan
  // Create the contact section at the bottom of each page
  // Should have a content box of width 1200px
  // One div for the form and one div for the image
  // Create a template for the form (No functionality needed yet)
  // Style appropriately

  return (
    <div className={styles.about}>
      <div className={styles.aboutText}>
          <h3 className={styles.detailed_subtitle}>{subtitleText}</h3>
          <h1 className={styles.detailed_title}>{headerText}</h1>
          <div className={styles.form_container}>
            <form onSubmit={""} className={styles.form}>
              <label className={styles.label}>
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={""}
                className={styles.input}
              />
              <label className={styles.label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={""}
                className={styles.input}
              />
              <label className={styles.label}>
                Message
              </label>
              <textarea
                name="message"
                onChange={""}
                className={styles.text_area}
              />
            </form>
          </div>
          <div className={styles.buttonContainer}>
            <ButtonWhiteFilled path={path}>
              {buttonText}
            </ButtonWhiteFilled>
        </div>
      </div>
      <div className={styles.aboutImage}>
        <img src={src} alt={titleText} />
      </div>
    </div>
  );;
};

export default Contact;
