import React from "react";
import RAHero from "../(components)/request-appointment/RAHero";
import NavBar from "../(components)/navigation/NavBar";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Contact from "../(components)/reusables/Contact";

const RequestAppointment = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <RAHero></RAHero>
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

export default RequestAppointment;
