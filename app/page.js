import Image from "next/image";
import Statistics from "./(components)/home/statistics/Statistics";
import Testimonial from "./(components)/home/testimonial/Testimonial";
import HomeServicesPanel from "./(components)/home/HomeServicesPanel";

export default function Home() {
  return (
    <div>
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
