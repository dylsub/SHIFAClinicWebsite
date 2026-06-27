"use client";

import React, { useEffect, useState } from "react";
import TextColumn from "./TextColumn";
import DropdownColumn from "../../reusables/DropdownColumn";
import { DROPDOWN_COLUMN_BREAKPOINT_PX } from "../../reusables/dropdownColumnBreakpoint";
import styles from "./GetInvolvedFAQ.module.css";

const GetInvolvedFAQ = () => {
  const [columnSize, setColumnSize] = useState("600px");

  useEffect(() => {
    const mq = window.matchMedia(
      `(max-width: ${DROPDOWN_COLUMN_BREAKPOINT_PX - 1}px)`
    );
    const sync = () => setColumnSize(mq.matches ? "85vw" : "600px");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  
  const faqData = [
    [
      "Volunteer Coordinators",
      "The volunteer coordinators at SHIFA Clinic oversee the recruitment, scheduling, and support of volunteers, ensuring all operations run smoothly and efficiently.",
    ],
    [
      "Assessment Process & Requirements",
      "Volunteers are required to meet specific eligibility criteria and undergo an application process that includes an assessment of their skills, background, and commitment to serving the community.",
    ],
    [
      "Training & Orientation",
      "New volunteers participate in a structured training and orientation program where they learn essential healthcare skills such as history taking and obtaining vital signs under supervision.",
    ],
    [
      "How the Volunteer Process Works",
      "The volunteer process involves applying through a formal system, attending an orientation, completing training, and then actively participating in various healthcare-related tasks at the clinic.",
    ],
    [
      "Roles & Responsibilities",
      "Volunteers take on a variety of roles based on their skills and interests, ranging from clinical tasks like assisting healthcare providers to non-clinical support such as administrative work and marketing.",
    ],
    [
      "Volunteer Commitment & Expectations",
      "Volunteers can expect to commit 10-15 hours of work to Shifa Clinic on a weekly basis, assisting in basic administrative tasks, patient care, and vital analysis.",
    ],
  ];

  return (
    <div className={"content_box " + styles.container}>
      <div className={styles.textColumn}>
        <TextColumn />
      </div>
      <div className="dropdownColumn">
        <DropdownColumn
          columnSize={columnSize}
          numDropdowns={6}
          testArr={faqData}
        />
      </div>
    </div>
  );
};

export default GetInvolvedFAQ;
