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

export default function Home() {
  return (
    <div className="main">
      <NavBar></NavBar>

      <HomeHero></HomeHero>

      <WWAAbout></WWAAbout>

      <Grid></Grid>

      <DetailedTextBlock
        subtitleText={"Non-profit medical clinic"}
        headerText={"Uplifting the Community with health services"}
        bodyText={
          "ICN SHIFA Clinic is a manifestation of a desire to serve humanity without any boundaries. ICN Free Clinic was started in its rudimentary form as a makeshift clinic in the hallways of Islamic Center of Naperville with a small team of passionate doctors. "
        }
        buttonText={"Who we are"}
        width={700}
        path="/"
      ></DetailedTextBlock>

      <Testimonial
        quoteText={
          '"The SHIFA Clinic provides patients with hope and empowerment. It\'s been a pleasure being part of this community and serving others."'
        }
        authorText="Jane Anderson"
        roleText="Nurse Practitioner"
      ></Testimonial>

      <HomeServicesPanel
        src="/PiggyBank.png"
        titleText="Expert Led"
        descripText="We are a team of professionals with backgrounds, certifications, and experience in the medical world."
        buttonText="Our Team"
        colorCode="#FF0000"
        buttonPath="/"
      ></HomeServicesPanel>

      <Statistics></Statistics>
      <h1>Header One - h1</h1>
      <h2>Header Two - h2</h2>
      <h3>Header Three - h3</h3>
      <h4>Header Four - h4</h4>

      <p>Paragraph</p>
    </div>
  );
}
