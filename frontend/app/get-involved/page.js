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
import InfoPanel2 from "../(components)/reusables/InfoPanel2";
import ImageBanner from "../(components)/reusables/ImageBanner";
import ApplyNow from "../(components)/get-involved/ApplyNow";

//test

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

      <ImageBanner src="prophet.jpg"></ImageBanner>

      <BackgroundWhiteWrapper>
        <GetInvolvedFAQ></GetInvolvedFAQ>
      </BackgroundWhiteWrapper>

      {/* <BackgroundGreyWrapper>
        <VolunteerTestimonial>
          <InfoPanel2
            src="contact.png"
            titleText="Jane Doe"
            descripText="“Volunteering with Shifa Clinic has been incredibly rewarding. Supporting patients, assisting nurses, and learning about the inner workings of healthcare has been so inspiring.”"
            colorCode="#FF0000"
            circularIcon
          ></InfoPanel2>
          <InfoPanel2
            src="contact.png"
            titleText="Jane Doe"
            descripText="“Volunteering with Shifa Clinic has been incredibly rewarding. Supporting patients, assisting nurses, and learning about the inner workings of healthcare has been so inspiring.”"
            colorCode="#FF0000"
            circularIcon
          ></InfoPanel2>
          <InfoPanel2
            src="contact.png"
            titleText="Jane Doe"
            descripText="“Volunteering with Shifa Clinic has been incredibly rewarding. Supporting patients, assisting nurses, and learning about the inner workings of healthcare has been so inspiring.”"
            colorCode="#FF0000"
            circularIcon
          ></InfoPanel2>
        </VolunteerTestimonial>
      </BackgroundGreyWrapper> */}

      <BackgroundGreyWrapper>
        <ApplyNow></ApplyNow>
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
          headerText={"Contact us here"}
        ></Contact>
      </BackgroundDarkGreyWrapper>
    </div>
  );
};

export default GetInvolved;
