import React from "react";
import DonateThanks from "../(components)/donate/DonateThanks";
import BackgroundGreyWrapper from "../(components)/reusables/BackgroundGreyWrapper";
import DonateQuote from "../(components)/donate/DonateQuote";
import NavBar from "../(components)/navigation/NavBar";
import DonateHero from "../(components)/donate/DonateHero";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";
import WhyDonate from "../(components)/donate/WhyDonate";
import InfoGroup from "../(components)/reusables/InfoGroup";
import InfoPanel from "../(components)/reusables/InfoPanel";
import DonateNow from "../(components)/donate/DonateNow";
import InfoAltPanel from "../(components)/reusables/InfoAltPanel";
import WaysToDonate from "../(components)/donate/WaysToDonate";
import Testimonial from "../(components)/donate/Testimonial";

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
        <WhyDonate>
          <InfoGroup>
            <InfoPanel
              titleText="Free Healthcare Access"
              descripText="Your donation directly supports the clinic’s mission of providing free medical care to those who might otherwise go without it. It ensures that individuals and families, regardless of their financial situation, receive the medical attention they need."
              colorCode="#FD6A6D"
            ></InfoPanel>
            <InfoPanel
              titleText="Volunteer-Driven Impact"
              descripText="ICN SHIFA Clinic is completely volunteer-operated, which means that every dollar donated goes directly toward medical supplies, equipment, and patient care, maximizing the impact of your contribution"
              colorCode="#EC2024"
            ></InfoPanel>
            <InfoPanel
              titleText="Community Needs"
              descripText="By supporting ICN SHIFA Clinic, you’re contributing to better overall health outcomes in the community. Preventative care, early diagnosis, and treatment help reduce medical complications and improve the quality of life for countless individuals."
              colorCode="#A1080B"
            ></InfoPanel>
          </InfoGroup>
        </WhyDonate>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <WaysToDonate>
          <InfoGroup>
            <InfoAltPanel
              descripText="You can make a secure donation online through our website. It’s fast, easy, and convenient. Whether you choose to make a one-time gift or set up a recurring donation, your support goes a long way in helping us provide free healthcare to those in need. "
              iconOption={1}
            ></InfoAltPanel>
            <InfoAltPanel
              descripText="If you prefer to donate by mail or in person, you can send a check directly to ICN SHIFA Clinic at

 [Insert Mailing Address Here]. 

Please make checks payable to “ICN SHIFA Clinic.”"
              iconOption={2}
            ></InfoAltPanel>
            <InfoAltPanel
              descripText="We welcome donations of medical supplies and equipment, which play a crucial role in enhancing patient care at ICN SHIFA Clinic.  If you’re interested in donating supplies, please contact us to learn more about the specific items currently needed."
              iconOption={3}
            ></InfoAltPanel>
          </InfoGroup>
        </WaysToDonate>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <Testimonial
          quoteText={
            '"Giving is not just about making a donation. It is about making a genuine difference in the community."'
          }
          authorText="Jane Anderson"
          roleText="Nurse Practitioner"
        ></Testimonial>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper id="donate-now">
        <DonateNow></DonateNow>
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

export default Donate;
