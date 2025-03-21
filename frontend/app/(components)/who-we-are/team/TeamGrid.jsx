import React from "react";
import styles from "./Team.module.css";
import TeamItem from "./TeamItem";

const TeamGrid = () => {
  const teamData = [
    { imageSrc: "/doctors.jpg", label: "SHIFA Providers" },
    { imageSrc: "/doctors.jpg", label: "SHIFA Dentists" },
    { imageSrc: "/doctors.jpg", label: "SHIFA Nurses" },
    { imageSrc: "/RAHero.png", label: "SHIFA Pharmacists" },
    { imageSrc: "/doctors.jpg", label: "SHIFA Admins" },
    { imageSrc: "/doctors.jpg", label: "Student Volunteers" },
  ];

  return (
    <div className={styles.teamGrid}>
      {teamData.map((item, index) => (
        <TeamItem key={index} imageSrc={item.imageSrc} label={item.label} />
      ))}
    </div>
  );
};

export default TeamGrid;

