import React from "react";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";
import NavBar from "../(components)/navigation/NavBar";
import ServiceLeftPanel from "../(components)/services/ServiceLeftPanel";
import ServiceRightPanel from "../(components)/services/ServiceRightPanel";

const Services = () => {
  return (
    <div className="main">
      <NavBar></NavBar>

      <div id="hero">
        <h1 className="page_title">Services</h1>
      </div>

      <ServiceLeftPanel
        title="Free Medical Consultation"
        paragraph="At ICN SHIFA Clinic, we have a team of dedicated physicians who are available to our patients on appointment basis to provide free consultation services. A physician consultation includes a comprehensive medical history, examination, basic labs and medication prescription at no cost to our patients."
        buttonText="Need to see a Physician or a Psychiatrist?"
        buttonPath="/request-appointment"
        backgroundColor="red"
        src="/SHIFA3.jpeg"
      ></ServiceLeftPanel>

      <ServiceRightPanel
        title="Free Dental Services"
        paragraph="ICN SHIFA Clinic is proudly equipped with a full scale Dental Clinic with two operatories and panoramic X-Ray services. Our dedicated dentists offer preventive and curative dental care including cleaning, tooth extraction and filling. These services are offered to our patients at no cost."
        buttonText="Need to see a Dentist?"
        buttonPath="/request-appointment"
        backgroundColor="coral"
        src="/clinic3.png"
      ></ServiceRightPanel>

      <ServiceLeftPanel
        title="Free Lab Services with Quest Diagnostics"
        paragraph="ICN SHIFA Clinic patients are offered a variety of basic lab tests at no cost to them. In addition to free lab tests, ICN SHIFA Clinic also offers imaging studies including X-Ray, ultrasound, CT and MRI at a subsidized cost to the patients. These tests are ordered by your ICN SHIFA provider after a thorough evaluation. You are welcome to call ICN SHIFA Nurse who can discuss your results with you once reviewed by the ordering physician."
        buttonText="Have a question for a SHIFA Nurse?"
        buttonPath="/request-appointment"
        backgroundColor="red"
        src="/clinic2.png"
      ></ServiceLeftPanel>

      <ServiceRightPanel
        title="Free SHIFA Dispensary"
        paragraph="At ICN SHIFA Clinic, we aim to provide a quality care at no cost. Our patients are entitled to enjoy the benefit of some commonly prescribed medications for free. Our patients can also request a medication refill online or by calling SHIFA nurse to avoid any lapse on their medications."
        buttonText="Need a medication refill?"
        buttonPath="/request-appointment"
        backgroundColor="coral"
        src="/clinic4.png"
      ></ServiceRightPanel>

      <ServiceLeftPanel
        title="SHIFA Flu Vaccination Program"
        paragraph="ICN SHIFA Clinic is committed to its mission of free quality care to those who are deprived of their healthcare due to lack of insurance. Preventive care is the essence of quality medicine. Hence, at ICN SHIFA Clinic, we plan to offer yearly flu vaccine to our patients with a plan to expand our vaccination program by adding travel vaccinations in future."
        buttonText="Need to see a Physician or a Psychiatrist?"
        buttonPath="/request-appointment"
        backgroundColor="red"
        src="/two_people.png"
      ></ServiceLeftPanel>

      <ServiceRightPanel
        title="Free Optometry Services"
        paragraph="At ICN SHIFA Clinic, we have a team of dedicated optometrists who are available to our patients on appointment basis to provide free eye exams and prescriptions at no cost to our patients. Health starts with your eyes."
        buttonText="Need to see a Physician or a Psychiatrist?"
        buttonPath="/request-appointment"
        backgroundColor="coral"
        src="/clinic1.png"
      ></ServiceRightPanel>

      <ServiceLeftPanel
        title="In-House Referrals"
        paragraph="After meeting a general medical provider, if needed, they will create a referral to one of our specialty providers. Our specialty providers offer care in gynecology, endocrinology, cardiology, EKGs, psychiatry, and nutrition/dietary counseling."
        buttonText="Need to see a Physician or a Psychiatrist?"
        buttonPath="/request-appointment"
        backgroundColor="red"
        src="/clinic1.png"
      ></ServiceLeftPanel>

      <BackgroundDarkGreyWrapper>
        <Contact
          subtitleText={"Question or concern?"}
          buttonText={"Submit"}
          path={"/"}
          src={"contact.png"}
          headerText={"Contact us here"}
        ></Contact>
      </BackgroundDarkGreyWrapper>
    </div>
  );
};

export default Services;
