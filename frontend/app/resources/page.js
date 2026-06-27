import React from "react";
import NavBar from "../(components)/navigation/NavBar";
import ResourcesHero from "../(components)/resources/ResourcesHero";
import Contact from "../(components)/reusables/Contact";
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import DropdownColumn from "../(components)/reusables/DropdownColumn";
import Link from "next/link";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import ResourcesDropdown from "../(components)/resources/ResourcesDropdown";
import BackgroundGreyWrapper from "../(components)/reusables/BackgroundGreyWrapper";
import GeneralInformation from "../(components)/resources/GeneralInformation";
import MoreQuestions from "../(components)/resources/MoreQuestions";
import ResourcesGrid from "../(components)/resources/ResourcesGrid";
import EventsAnnouncements from "../(components)/resources/EventsAnnouncements";

const Resources = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <ResourcesHero></ResourcesHero>

      <BackgroundGreyWrapper>
        <GeneralInformation></GeneralInformation>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper id="recommended-diets">
        <ResourcesDropdown></ResourcesDropdown>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper id="shifa-resources">
        <ResourcesGrid></ResourcesGrid>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <EventsAnnouncements></EventsAnnouncements>
      </BackgroundWhiteWrapper>

{/* 
      <BackgroundWhiteWrapper>
        <MoreQuestions></MoreQuestions>
      </BackgroundWhiteWrapper> */}

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

export default Resources;
