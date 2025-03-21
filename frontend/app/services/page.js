import React from "react";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";
import NavBar from "../(components)/navigation/NavBar";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import ServiceLeftPanel from "../(components)/services/ServiceLeftPanel";
import ServiceRightPanel from "../(components)/services/ServiceRightPanel";

const Services = () => {
  return (
    <div className="main">
      <NavBar></NavBar>

      <h1 className="page_title">Services</h1>

      <ServiceLeftPanel
        title="Free Medical Consultation"
        paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians and psychiatrist who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
        buttonText="Need to see a Physician or a Psychiatrist?"
        backgroundColor="red"
      ></ServiceLeftPanel>

      <BackgroundWhiteWrapper>
        <ServiceRightPanel
          title="Free Medical Consultation"
          paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians and psychiatrist who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
          buttonText="Need to see a Physician or a Psychiatrist?"
          backgroundColor="coral"
        ></ServiceRightPanel>
      </BackgroundWhiteWrapper>

      <ServiceLeftPanel
        title="Free Medical Consultation"
        paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians and psychiatrist who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
        buttonText="Need to see a Physician or a Psychiatrist?"
        backgroundColor="red"
      ></ServiceLeftPanel>

      <BackgroundWhiteWrapper>
        <ServiceRightPanel
          title="Free Medical Consultation"
          paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians and psychiatrist who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
          buttonText="Need to see a Physician or a Psychiatrist?"
          backgroundColor="coral"
        ></ServiceRightPanel>
      </BackgroundWhiteWrapper>

      <ServiceLeftPanel
        title="Free Medical Consultation"
        paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians and psychiatrist who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
        buttonText="Need to see a Physician or a Psychiatrist?"
        backgroundColor="red"
      ></ServiceLeftPanel>

      <BackgroundWhiteWrapper>
        <ServiceRightPanel
          title="Free Medical Consultation"
          paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians and psychiatrist who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
          buttonText="Need to see a Physician or a Psychiatrist?"
          backgroundColor="coral"
        ></ServiceRightPanel>
      </BackgroundWhiteWrapper>

      <BackgroundDarkGreyWrapper>
        <Contact
          subtitleText={"Question or concern?"}
          buttonText={"Submit"}
          path={"/"}
          src={"contact.png"}
          headerText={"Feel free to contact us"}
        ></Contact>
      </BackgroundDarkGreyWrapper>
    </div>
  );
};

export default Services;
