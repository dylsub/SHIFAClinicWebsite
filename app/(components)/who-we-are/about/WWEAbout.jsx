import React from "react";
import ButtonBlackTransparent from "../../reusables/ButtonBlackTransparent";

// I cooked

const WWEAbout = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "100px 320px", backgroundColor: "#f1f1f1" }}>
      <div style={{ maxWidth: "1400px", display: "flex", alignItems: "center"}}>
        
        
        <div>
          <p style={{ width: "350px", fontSize: "56px", lineHeight: "1", fontFamily: "Inter" }}>  
            We serve<br /> humanity<br /> without any<br /> boundaries
          </p>
        </div>

        
        <div>
          <p style={{ fontSize: "20px", lineHeight: "1.5", fontFamily: "Inter", paddingBottom: "20px" }}>
            ICN SHIFA Clinic is a manifestation of a desire to serve humanity without any boundaries. 
            Since being founded in 2017, the clinic has proudly transformed into a new ICN SHIFA Clinic 
            in a newly built dedicated office space with a team of almost 50 volunteers, offering 
            several services to its patients at no cost.
          </p>
          
          <ButtonBlackTransparent path="/">Our Team</ButtonBlackTransparent>
        </div>
      </div>
    </div>
  );
};


export default WWEAbout;
