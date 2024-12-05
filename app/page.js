import Image from "next/image";
import Statistics from "./(components)/home/statistics/Statistics";
import Testimonial from "./(components)/home/testimonial/Testimonial";
import HomeServicesPanel from "./(components)/home/HomeServicesPanel";
import NavBar from "./(components)/navigation/NavBar";
import DetailedTextBlock from "./(components)/reusables/DetailedTextBlock";
import ButtonWhiteTransparent from "./(components)/reusables/buttons/ButtonWhiteTransparent";
import ButtonWhiteFilled from "./(components)/reusables/buttons/ButtonWhiteFilled";
import HomeHero from "./(components)/home/HomeHero";
import WWAAbout from "./(components)/who-we-are/about/WWAAbout";
import Grid from "./(components)/who-we-are/grid/Grid";
import WWAHero from "./(components)/who-we-are/WWAHero";
import HomeAbout from "./(components)/home/about/HomeAbout";
import HomeGetInvolved from "./(components)/home/get-involved/HomeGetInvolved";
import DonateThanks from "./(components)/donate/DonateThanks";
import GIDonate from "./(components)/get-involved/GIDonate";
import HomeServices from "./(components)/home/HomeServices";
import DropDownPanel from "./(components)/reusables/DropDownPanel";
import RAHero from "./(components)/request-appointment/RAHero";
import DonateHero from "./(components)/donate/DonateHero";
import BackgroundGreyWrapper from "./(components)/reusables/BackgroundGreyWrapper";
import BackgroundWhiteWrapper from "./(components)/reusables/BackgroundWhiteWrapper";
import Contact from "./(components)/reusables/Contact";
import BackgroundDarkGreyWrapper from "./(components)/reusables/BackgroundDarkGreyWrapper";

export default function Home() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <HomeHero></HomeHero>

      <BackgroundWhiteWrapper>
        <HomeAbout
          subtitleText={"Non-profit medical clinic"}
          bodyText={
            "ICN SHIFA Clinic is a manifestation of a desire to serve humanity without any boundaries. ICN Free Clinic was started in its rudimentary form as a makeshift clinic in the hallways of Islamic Center of Naperville with a small team of passionate doctors."
          }
          buttonText={"Who we are"}
          path={"/"}
          src={"home_about.png"}
          headerText={"Uplifting the community with health services"}
        ></HomeAbout>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <HomeServices>
          <HomeServicesPanel
            src="/PiggyBank.png"
            titleText="Expert Led"
            descripText="We are a team of professionals with backgrounds, certifications, and experience in the medical world."
            buttonText="Our Team"
            colorCode="#FF0000"
            buttonPath="/"
          ></HomeServicesPanel>
          <HomeServicesPanel
            src="/PiggyBank.png"
            titleText="Expert Led"
            descripText="We are a team of professionals with backgrounds, certifications, and experience in the medical world."
            buttonText="Our Team"
            colorCode="#FF0000"
            buttonPath="/"
          ></HomeServicesPanel>
          <HomeServicesPanel
            src="/PiggyBank.png"
            titleText="Expert Led"
            descripText="We are a team of professionals with backgrounds, certifications, and experience in the medical world."
            buttonText="Our Team"
            colorCode="#FF0000"
            buttonPath="/"
          ></HomeServicesPanel>
        </HomeServices>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <Testimonial
          quoteText={
            '"The SHIFA Clinic provides patients with hope and empowerment. It\'s been a pleasure being part of this community and serving others."'
          }
          authorText="Jane Anderson"
          roleText="Nurse Practitioner"
        ></Testimonial>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <Statistics></Statistics>
      </BackgroundGreyWrapper>

      <BackgroundWhiteWrapper>
        <HomeGetInvolved
          subtitleText={"Join our team"}
          bodyText={
            "The ICN SHIFA Clinic is looking for new volunteers to join our community. We offer opportunities ranging from job shadowing to full-time volunteering positions. We’d love to have you!"
          }
          buttonText={"Learn More"}
          path={"/"}
          src={"join_our_team.png"}
          headerText={"Get Involved"}
        ></HomeGetInvolved>
      </BackgroundWhiteWrapper>

      <BackgroundDarkGreyWrapper>
        <Contact
        subtitleText={"Question or concern?"}
        buttonText={"Submit"}
        path={"/"}
        src={"contact.png"}
        headerText={"Feel free to contact us"}>
        </Contact>
      </BackgroundDarkGreyWrapper>
    </div>
  );
}
