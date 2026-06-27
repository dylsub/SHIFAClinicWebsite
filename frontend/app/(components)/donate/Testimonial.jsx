import React from "react";
import classes from "./Testimonial.module.css";

const Testimonial = ({ quoteText, authorText, roleText }) => {
  return (
    <div className={classes.testimonial + " content_box"}>
      <div className={classes.text_box}>
        <h1 className={classes.quote_text}>{quoteText}</h1>
        <div className={classes.author_text_box}>
          <h3 className={classes.author_text}>{authorText}</h3>
          <p className={classes.role_text}>{roleText}</p>
        </div>
      </div>
      <div className={classes.image_box}>
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={classes.image}
            src="./people/UsmanKhan.png"
            alt="testimonial pic"
          ></img>
        }
      </div>
    </div>
  );
};

export default Testimonial;
