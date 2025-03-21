import React from "react";
import HeroQuote from "../(components)/get-involved/HeroQuote";
import NavBar from "../(components)/navigation/NavBar";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import GIDonate from "../(components)/get-involved/GIDonate";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";
import DropDownPanel from "../(components)/reusables/DropDownPanel";
import DropdownColumn from "../(components)/get-involved/FAQ/DropdownColumn";
import GetInvolvedFAQ from "../(components)/get-involved/FAQ/GetInvolvedFAQ";

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

      <BackgroundWhiteWrapper>
        <GetInvolvedFAQ></GetInvolvedFAQ>
      </BackgroundWhiteWrapper>

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
