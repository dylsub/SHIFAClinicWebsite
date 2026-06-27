import React from "react";
import styles from "./MoreQuestions.module.css";
import InfoPanel2 from "../reusables/InfoPanel2";
import InfoGroup from "../reusables/InfoGroup";
import ResourcesSectionIntro from "./ResourcesSectionIntro";

const MoreQuestions = () => {
  return (
    <div className={styles.section + " content_box"}>
      <ResourcesSectionIntro
        title="More Questions?"
        description="If you have any additional questions or concerns, please feel free to reach out to us. For more information, please visit our FAQ page for the most common questions."
      />
      <div className={styles.container}>
        <InfoGroup>
          <InfoPanel2
            src={""}
            colorCode={"#333333"}
            titleText={"Contact Us"}
            descripText={
              "Have a specific question? Contact us directly and we'll get back to you as soon as possible."
            }
            buttonText={"Contact"}
            buttonPath={"/contact"}
          />
          <InfoPanel2
            src={""}
            colorCode={"#333333"}
            titleText={"FAQ"}
            descripText={
              "Check out our frequently asked questions for quick answers to common inquiries."
            }
            buttonText={"View FAQ"}
            buttonPath={"/faq"}
          />
        </InfoGroup>
      </div>
    </div>
  );
};

export default MoreQuestions;
