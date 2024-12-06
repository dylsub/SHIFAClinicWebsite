import React from "react";
import NavBar from "../(components)/navigation/NavBar";
import ResourcesHero from "../(components)/resources/ResourcesHero";
import Contact from "../(components)/reusables/Contact";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";

const Resources = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <ResourcesHero></ResourcesHero>

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

export default Resources;
