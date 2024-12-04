import React from "react";
import NavBar from "../(components)/navigation/NavBar";
import WWAHero from "../(components)/who-we-are/WWAHero";
import WWAAbout from "../(components)/who-we-are/about/WWAAbout";
import BackgroundWhiteWrapper from "../(components)/reusables/BackgroundWhiteWrapper";
import BackgroundGreyWrapper from "../(components)/reusables/BackgroundGreyWrapper";
import Grid from "../(components)/who-we-are/grid/Grid";
import Contact from "../(components)/reusables/Contact";

const WhoWeAre = () => {
  return (
    <div className="main">
      <NavBar></NavBar>

      <WWAHero></WWAHero>

      <BackgroundGreyWrapper>
        <WWAAbout></WWAAbout>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <h1>Timeline section (TODO)</h1>
      </BackgroundWhiteWrapper>

      <Grid></Grid>

      <BackgroundWhiteWrapper>
        <h1>Team section (TODO)</h1>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <Contact></Contact>
      </BackgroundGreyWrapper>
    </div>
  );
};

export default WhoWeAre;
