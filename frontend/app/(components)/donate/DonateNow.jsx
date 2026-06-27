import React from "react";
import classes from "./DonateNow.module.css";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";

const DonateNow = () => {
  return (
    <div className={`content_box ${classes.container}`}>
      <h1>
        Thank you for your commitment to improving healthcare access for all.
      </h1>
      <ButtonAnyColorFilled buttonColor="#EC2024" openInNewTab path="https://www.paypal.com/cgi-bin/webscr?business=F6E5CZWWG7KLS&cancel_return=http%3A%2F%2Fclinic.icnmasjid.org&cmd=_donations&currency_code=USD&invoice=ICN%20SHIFA%20CLINIC&item_name=ICN%20SHIFA%20CLINIC&item_number=ICN%20SHIFA%20CLINIC&lc=US&no_note=0&no_shipping=1&return=http%3A%2F%2Fclinic.icnmasjid.org&rm=1">
        Donate Online Now
      </ButtonAnyColorFilled>
    </div>
  );
};

export default DonateNow;
