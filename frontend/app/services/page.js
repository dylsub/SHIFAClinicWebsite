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
          title="Free Dental Services"
          paragraph="ICN SHIFA Clinic patients are offered a variety of basic lab tests at no cost to them. In addition to free lab tests, ICN SHIFA Clinic also offers imaging studies including X-Ray, ultrasound, CT and MRI at a subsidized cost to the patients. These tests are ordered by your ICN SHIFA provider after a thorough evaluation. You are welcome to call ICN SHIFA Nurse who can discuss your results with you once reviewed by the ordering physician."
          buttonText="Need to see a Physician or a Psychiatrist?"
          backgroundColor="coral"
        ></ServiceRightPanel>
      </BackgroundWhiteWrapper>

      <ServiceLeftPanel
        title="Free Lab Services"
        paragraph="ICN SHIFA Clinic patients are offered a variety of basic lab tests at no cost to them. In addition to free lab tests, ICN SHIFA Clinic also offers imaging studies including X-Ray, ultrasound, CT and MRI at a subsidized cost to the patients. These tests are ordered by your ICN SHIFA provider after a thorough evaluation. You are welcome to call ICN SHIFA Nurse who can discuss your results with you once reviewed by the ordering physician."
        buttonText="Need to see a Physician or a Psychiatrist?"
        backgroundColor="red"
      ></ServiceLeftPanel>

      <BackgroundWhiteWrapper>
        <ServiceRightPanel
          title="Free SHIFA Dispensary"
          paragraph="At ICN SHIFA Clinic, we aim to provide a quality care at no cost. Our patients are entitled to enjoy the benefit  of free medications supplies that are prescribed by SHIFA providers. Our patients can also request a medication refill online or by calling SHIFA nurse to avoid any lapse on their medications."
          buttonText="Need to see a Physician or a Psychiatrist?"
          backgroundColor="coral"
        ></ServiceRightPanel>
      </BackgroundWhiteWrapper>

      <ServiceLeftPanel
        title="SHIFA Vaccination Program"
        paragraph="ICN SHIFA Clinic is committed to its mission of free quality care to those are deprived of their healthcare due to lack of insurance. Preventive care is the essence of quality medicine. Hence, at ICN SHIFA Clinic, we plan to offer yearly flu vaccine to our patients with a plan to expand our vaccination program by adding travel vaccinations in future."
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
