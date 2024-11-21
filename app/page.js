import Image from "next/image";
import Statistics from "./(components)/home/statistics/Statistics";
import Testimonial from "./(components)/home/testimonial/Testimonial";
import HomeServicesPanel from "./(components)/home/HomeServicesPanel";
import NavBar from "./(components)/navigation/NavBar";
import WWAAbout from "./(components)/who-we-are/about/WWAAbout";
import Grid from "./(components)/who-we-are/grid/Grid";
import HomeHero from "./(components)/home/HomeHero";
import WWAHero from "./(components)/who-we-are/WWAHero";
import HomeAbout from "./(components)/home/about/HomeAbout";
import HomeGetInvolved from "./(components)/home/get-involved/HomeGetInvolved";
import DonateThanks from "./(components)/donate/DonateThanks";
import GIDonate from "./(components)/get-involved/GIDonate";
import HomeServices from "./(components)/home/HomeServices";

export default function Home() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <WWAHero></WWAHero>
      <HomeHero></HomeHero>
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
      <WWAAbout></WWAAbout>
      <Grid></Grid>
      <Testimonial
        quoteText={
          '"The SHIFA Clinic provides patients with hope and empowerment. It\'s been a pleasure being part of this community and serving others."'
        }
        authorText="Jane Anderson"
        roleText="Nurse Practitioner"
      ></Testimonial>
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
      <Statistics></Statistics>
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
      <DonateThanks
        subtitleText={""}
        bodyText={
          "Your generosity helps us continue providing free medical services to those in need, thanks to the dedication of our incredible volunteer team. Every contribution, no matter the amount, supports our mission to offer compassionate care to the community. With your support, we can make a meaningful difference in the health and well-being of individuals and families in need."
        }
        buttonText={"Ways to Donate"}
        path={"/"}
        src={"nurse-treating-patient-stockcake.png"}
        headerText={"Thank you for considering a donation to ICN SHIFA Clinic!"}
      ></DonateThanks>
      <GIDonate></GIDonate>

      <h1>Header One - h1</h1>
      <h2>Header Two - h2</h2>
      <h3>Header Three - h3</h3>
      <h4>Header Four - h4</h4>
      <p>Paragraph</p>
    </div>
  );
}
