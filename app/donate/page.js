import React from "react";
import DonateThanks from "../(components)/donate/DonateThanks";

const Donate = () => {
  return (
    <div>
      <h1>This is the DONATE page.</h1>
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
    </div>
  );
};

export default Donate;
