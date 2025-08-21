import React from "react";
import styles from "./GeneralInformation.module.css";
import InfoGroup from "../reusables/InfoGroup";
import InfoPanel2 from "../reusables/InfoPanel2";

const GeneralInformation = () => {
  return (
    <div className={styles.teamSection + " content_box"}>
      <h1 className={styles.heading}>General Health Information</h1>
      <p className={styles.description}>
        Here you'll find helpful resources and information about general health
        topics. These resources are meant to provide basic education and
        guidance, but should not replace professional medical advice.
      </p>
      <div className={styles.panelContainer}>
        <InfoGroup>
          <InfoPanel2
            src={""}
            colorCode={"#333333"}
            titleText={"Mayo Clinic"}
            descripText={
              "Navigate to the Mayo Clinic Portal (linked above) to obtain more information on your health, medicines and lifestyle!"
            }
            buttonText={""}
            buttonPath={"/"}
            borderTopWidth={"2px"}
            borderRightWidth={"2px"}
            borderLeftWidth={"2px"}
            borderBottomWidth={"2px"}
            link={true}
          />
          <InfoPanel2
            src={""}
            colorCode={"#333333"}
            titleText={"WebMD"}
            descripText={
              "WebMD is a source of up to date information for your medical and health issues. You can navigate to WebMD using the link above."
            }
            buttonText={""}
            buttonPath={"/"}
            borderTopWidth={"2px"}
            borderRightWidth={"2px"}
            borderLeftWidth={"2px"}
            borderBottomWidth={"2px"}
            link={true}
          />
          <InfoPanel2
            src={""}
            colorCode={"#333333"}
            titleText={"Heart Health"}
            descripText={
              "Access essential heart health resources, including information about heart disease, heart-healthy certifications, and critical symptoms of cardiac emergencies."
            }
            buttonText={""}
            buttonPath={"/"}
            borderTopWidth={"2px"}
            borderRightWidth={"2px"}
            borderLeftWidth={"2px"}
            borderBottomWidth={"2px"}
            link={true}
          />
        </InfoGroup>
      </div>
    </div>
  );
};

export default GeneralInformation;
