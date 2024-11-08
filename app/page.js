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

export default function Home() {
  return (
    <div className="main">
      <NavBar></NavBar>

      <WWAHero></WWAHero>

      <HomeHero></HomeHero>

      <WWAAbout></WWAAbout>

      <Grid></Grid>

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
