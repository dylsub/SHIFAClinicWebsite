import React from "react";
import HeroQuote from "../(components)/get-involved/HeroQuote";
import NavBar from "../(components)/navigation/NavBar";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import GIDonate from "../(components)/get-involved/GIDonate";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";

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
