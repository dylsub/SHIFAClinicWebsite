import React from "react";
import RAHero from "../(components)/request-appointment/RAHero";
import NavBar from "../(components)/navigation/NavBar";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import RequestNow from "../(components)/request-appointment/RequestNow";

const RequestAppointment = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <RAHero></RAHero>

      <BackgroundWhiteWrapper id="request-appointment">
        <RequestNow></RequestNow>
      </BackgroundWhiteWrapper>

      <BackgroundDarkGreyWrapper id="contact-us">
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

export default RequestAppointment;
