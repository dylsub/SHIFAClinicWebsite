"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";

const contactOptions = {
  nurse: {
    formspreeId: "xpqebbdy",
    label: "Ask a SHIFA Nurse a Question",
    description:
      "If you are an existing SHIFA patient and have a question regarding your labs or imaging results or have any other nursing question, please submit your query here. If you are not a SHIFA patient yet, please Submit Your Question to our ICN SHIFA Clinic Admin.",
    submitText: "Submit to Nurse",
  },
  admin: {
    formspreeId: "xpqebbdy",
    label: "General question? Ask our admins",
    description:
      "Please note: If you are an existing SHIFA Clinic patient and have a nursing question, please submit your question to our nurses instead.",
    submitText: "Submit to Admin",
  },
};

const Contact = ({ subtitleText, headerText }) => {
  const [selectedContactType, setSelectedContactType] = useState("nurse");
  const selectedOption = contactOptions[selectedContactType];
  const [state, handleSubmit, reset] = useForm(selectedOption.formspreeId);

  if (state.succeeded) {
    return (
      <div className={styles.successMessage}>
        <p>Thanks for reaching out! We will get back to you soon.</p>
        <button className={styles.button} onClick={reset} type="button">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className={styles.about + " content_box"}>
      <div className={styles.aboutText}>
        <h3 className={styles.detailed_subtitle}>{subtitleText}</h3>
        <h1 className={styles.detailed_title}>{headerText}</h1>
        <div className={styles.toggleGroup}>
          {Object.entries(contactOptions).map(([optionKey, option]) => (
            <button
              className={`${styles.toggleOption} ${
                selectedContactType === optionKey
                  ? styles.toggleOptionActive
                  : ""
              }`}
              key={optionKey}
              onClick={() => setSelectedContactType(optionKey)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className={styles.toggleDescription}>{selectedOption.description}</p>
      </div>

      <div className={styles.formColumn}>
        <div className={styles.form_container}>
          <form
            key={selectedContactType}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <input
              type="hidden"
              name="inquiryType"
              value={selectedOption.label}
            />
            <div className={styles.nameFields}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="firstName">
                  First Name <span className={styles.required}>(required)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.input}
                  required
                />
                <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={state.errors}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="lastName">
                  Last Name <span className={styles.required}>(required)</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.input}
                  required
                />
                <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email <span className={styles.required}>(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phone">
                Phone Number <span className={styles.required}>(required)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                required
              />
              <ValidationError
                prefix="Phone Number"
                field="phone"
                errors={state.errors}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">
                Message <span className={styles.required}>(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.text_area}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                disabled={state.submitting}
                className={styles.button}
              >
                {selectedOption.submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
