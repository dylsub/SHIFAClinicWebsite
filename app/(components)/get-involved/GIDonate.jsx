import React from "react";
import ButtonAnyColorFilled from "../reusables/buttons/ButtonAnyColorFilled";
import classes from "../get-involved/GIDonate.modules.css";

const GIDonate = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 100px",
        textAlign: "center",
        backgroundColor: "white",
        maxWidth: "1500px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        Your Support Matters
      </h1>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          maxWidth: "1200px",
          marginBottom: "45px",
        }}
      >
        Giving back to the community is a principle we value, and donations
        from our community are greatly appreciated. Your generous donations are
        vital in helping us provide essential healthcare services. Thank you
        for your generosity and helping us create a difference for those in
        need!
      </p>
    
      <ButtonAnyColorFilled 
      path="/donate" buttonColor="rgb(0, 0, 0)">
        Donate Today!
      </ButtonAnyColorFilled>
    
    </div>
  );
};

export default GIDonate;