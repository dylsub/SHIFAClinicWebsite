import React from "react";
import HeroQuote from "../(components)/get-involved/HeroQuote";
import NavBar from "../(components)/navigation/NavBar";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import GIDonate from "../(components)/get-involved/GIDonate";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";
import GetInvolvedFAQ from "../(components)/get-involved/FAQ/GetInvolvedFAQ";
import BackgroundGreyWrapper from "../(components)/reusables/BackgroundGreyWrapper";
import VolunteerTestimonial from "../(components)/get-involved/VolunteerTestimonial";
import InfoGroup from "../(components)/reusables/InfoGroup";
import InfoPanel from "../(components)/reusables/InfoPanel";
import ImageBanner from "../(components)/reusables/ImageBanner";

const GetInvolved = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <HeroQuote
        leadingText={"Volunteering With Shifa"}
        quoteText={
          "“The best of people are those that bring most benefit to the rest of mankind."
        }
        authorText={"-Prophet Muhammad"}
      ></HeroQuote>

      <ImageBanner src="doctors.jpg"></ImageBanner>

      <BackgroundWhiteWrapper>
        <GetInvolvedFAQ></GetInvolvedFAQ>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <VolunteerTestimonial>
          <InfoGroup>
            <InfoPanel
              src="contact.png"
              titleText="Jane Doe"
              descripText="“Volunteering with Shifa Clinic has been incredibly rewarding. Supporting patients, assisting nurses, and learning about the inner workings of healthcare has been so inspiring.”"
              colorCode="red"
            ></InfoPanel>
            <InfoPanel
              src="contact.png"
              titleText="Jane Doe"
              descripText="“Volunteering with Shifa Clinic has been incredibly rewarding. Supporting patients, assisting nurses, and learning about the inner workings of healthcare has been so inspiring.”"
              colorCode="red"
            ></InfoPanel>
            <InfoPanel
              src="contact.png"
              titleText="Jane Doe"
              descripText="“Volunteering with Shifa Clinic has been incredibly rewarding. Supporting patients, assisting nurses, and learning about the inner workings of healthcare has been so inspiring.”"
              colorCode="red"
            ></InfoPanel>
          </InfoGroup>
        </VolunteerTestimonial>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <GIDonate></GIDonate>
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

export default GetInvolved;
