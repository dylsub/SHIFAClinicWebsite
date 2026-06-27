"use client";

import React, { useState, useEffect } from "react";
import styles from "./Team.module.css";
import Person from "./Person";

const categories = [
  "SHIFA Providers",
  "SHIFA Dentists",
  "SHIFA Nurses",
  "SHIFA Pharmacists",
  "SHIFA Admins",
  "Student Volunteers",
];

const TeamGrid = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [openCategories, setOpenCategories] = useState({});

  // Fetch volunteers from MongoDB
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/volunteers"
      );
      if (response.ok) {
        const data = await response.json();
        setVolunteers(data);
      }
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  // Organize volunteers by category
  const getTeamData = () => {
    return categories.map((category) => {
      const categoryVolunteers = volunteers.filter(
        (v) => v.category === category
      );
      return {
        label: category,
        members: categoryVolunteers.map((volunteer) => ({
          imageSrc: volunteer.imageSrc,
          name: volunteer.name,
          role: volunteer.role,
          description: volunteer.description,
        })),
      };
    });
  };

  const teamData = getTeamData().filter((team) => team.members.length > 0);

  const toggleCategory = (category) => {
    setOpenCategories((currentOpenCategories) => ({
      ...currentOpenCategories,
      [category]: !currentOpenCategories[category],
    }));
  };

  return (
    <div className={styles.teamSections}>
      {teamData.map((team) => {
        const isOpen = openCategories[team.label];

        return (
          <section
            className={`${styles.teamCategory} content_box`}
            key={team.label}
          >
            <h2 className={styles.categoryHeading}>
              <button
                aria-expanded={!!isOpen}
                className={styles.categoryToggle}
                onClick={() => toggleCategory(team.label)}
                type="button"
              >
                <span>{team.label}</span>
                <span
                  aria-hidden="true"
                  className={`${styles.dropdownIcon} ${
                    isOpen ? styles.dropdownIconOpen : ""
                  }`}
                >
                  v
                </span>
              </button>
            </h2>
            <div
              className={`${styles.categoryContent} ${
                isOpen ? styles.categoryContentOpen : ""
              }`}
            >
              <div className={styles.categoryContentInner}>
                <div className={styles.teamMembersGrid}>
                  {team.members.map((member, index) => (
                    <Person
                      key={`${member.name}-${index}`}
                      imageSrc={member.imageSrc}
                      name={member.name}
                      role={member.role}
                      description={member.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TeamGrid;
