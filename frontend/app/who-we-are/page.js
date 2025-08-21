import React from "react";
import NavBar from "../(components)/navigation/NavBar";
import WWAHero from "../(components)/who-we-are/WWAHero";
import WWAAbout from "../(components)/who-we-are/WWAAbout";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import BackgroundGreyWrapper from "../(components)/reusables/BackgroundGreyWrapper";
import Grid from "../(components)/who-we-are/grid/Grid";
import Contact from "../(components)/reusables/Contact";
import Team from "../(components)/who-we-are/team/Team"; // Import the Team component
import BackgroundDarkGreyWrapper from "../(components)/reusables/BackgroundDarkGreyWrapper";
import Milestones from "../(components)/who-we-are/Milestones";

const WhoWeAre = () => {
  return (
    <div className="main">
      <NavBar></NavBar>

      <WWAHero></WWAHero>

      <BackgroundGreyWrapper>
        <WWAAbout></WWAAbout>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <Milestones></Milestones>
      </BackgroundWhiteWrapper>

      <Grid></Grid>

      <BackgroundWhiteWrapper id={"team"}>
        <Team> </Team>
      </BackgroundWhiteWrapper>

      <BackgroundDarkGreyWrapper>
        <Contact
          subtitleText={"Question or concern?"}
          titleText={"Nurse holding a baby"}
          buttonText={"Submit"}
          headerText={"Feel free to contact us"}
          path={"/"}
          src={"contact.png"}
        ></Contact>
      </BackgroundDarkGreyWrapper>
    </div>
  );
};

export default WhoWeAre;
