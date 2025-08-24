import Statistics from "./(components)/home/statistics/Statistics";
import Testimonial from "./(components)/home/testimonial/Testimonial";
import NavBar from "./(components)/navigation/NavBar";
import HomeHero from "./(components)/home/HomeHero";
import HomeAbout from "./(components)/home/about/HomeAbout";
import HomeGetInvolved from "./(components)/home/get-involved/HomeGetInvolved";
import HomeServices from "./(components)/home/HomeServices";
import BackgroundGreyWrapper from "./(components)/reusables/BackgroundGreyWrapper";
import BackgroundWhiteWrapper from "./(components)/reusables/BackgroundWhiteWrapper";
import Contact from "./(components)/reusables/Contact";
import BackgroundDarkGreyWrapper from "./(components)/reusables/BackgroundDarkGreyWrapper";
import InfoPanel2 from "./(components)/reusables/InfoPanel2";

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
          path={"/who-we-are"}
          src={"home_about.png"}
          headerText={"Uplifting the community with health services"}
        ></HomeAbout>
      </BackgroundWhiteWrapper>

      <BackgroundGreyWrapper>
        <HomeServices>
          <InfoPanel2
            src="/PiggyBank.png"
            titleText="Expert Led"
            descripText="We are a team of professionals with backgrounds, certifications, and experience in the medical world."
            buttonText="Our Team"
            colorCode="#FF0000"
            buttonPath="/who-we-are#team"
          ></InfoPanel2>
          <InfoPanel2
            src="/PiggyBank.png"
            titleText="100% Free"
            descripText="We offer a wide range of medical services including primary care, dental, mental health, and specialty care."
            buttonText="Our Services"
            colorCode="#FF0000"
            buttonPath="/services"
          ></InfoPanel2>
          <InfoPanel2
            src="/PiggyBank.png"
            titleText="Volunteer Run"
            descripText="We are a community-driven organization that is committed to providing the best possible care to our patients."
            buttonText="Volunteer"
            colorCode="#FF0000"
            buttonPath="/get-involved"
          ></InfoPanel2>
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
            "The ICN SHIFA Clinic is looking for new volunteers to join our community. We offer opportunities ranging from job shadowing to full-time volunteering positions. We'd love to have you!"
          }
          buttonText={"Learn More"}
          path={"/get-involved"}
          src={"join_our_team.png"}
          headerText={"Get Involved"}
        ></HomeGetInvolved>
      </BackgroundWhiteWrapper>

      <BackgroundDarkGreyWrapper>
        <Contact
          subtitleText={"Question or concern?"}
          buttonText={"Submit"}
          path={"/contact"}
          src={"contact.png"}
          headerText={"Feel free to contact us"}
        ></Contact>
      </BackgroundDarkGreyWrapper>
    </div>
  );
}
