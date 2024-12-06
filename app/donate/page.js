import React from "react";
import DonateThanks from "../(components)/donate/DonateThanks";
import BackgroundGreyWrapper from "../(components)/reusables/BackgroundGreyWrapper";
import DonateQuote from "../(components)/donate/DonateQuote";
import NavBar from "../(components)/navigation/NavBar";
import DonateHero from "../(components)/donate/DonateHero";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";

const Donate = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <DonateHero></DonateHero>
      <BackgroundWhiteWrapper>
        <DonateThanks
          subtitleText={""}
          bodyText={
            "Your generosity helps us continue providing free medical services to those in need, thanks to the dedication of our incredible volunteer team. Every contribution, no matter the amount, supports our mission to offer compassionate care to the community. With your support, we can make a meaningful difference in the health and well-being of individuals and families in need."
          }
          buttonText={"Ways to Donate"}
          path={"/"}
          src={"nurse-treating-patient-stockcake.png"}
          headerText={
            "Thank you for considering a donation to ICN SHIFA Clinic!"
          }
        ></DonateThanks>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <DonateQuote></DonateQuote>
      </BackgroundGreyWrapper>

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

export default Donate;
