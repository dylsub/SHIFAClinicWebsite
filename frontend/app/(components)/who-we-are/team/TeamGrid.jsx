"use client";

import React, { useState, useEffect } from "react";
import styles from "./Team.module.css";
import TeamItem from "./TeamItem";
import TeamModal from "./TeamModal";

const TeamGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [volunteers, setVolunteers] = useState([]);

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
    const categories = [
      "SHIFA Providers",
      "SHIFA Dentists",
      "SHIFA Nurses",
      "SHIFA Pharmacists",
      "SHIFA Admins",
      "Student Volunteers",
    ];

    return categories.map((category) => {
      const categoryVolunteers = volunteers.filter(
        (v) => v.category === category
      );
      return {
        imageSrc: "/doctors.jpg", // Default image for category
        label: category,
        members: categoryVolunteers.map((volunteer) => ({
          imageSrc: volunteer.imageSrc,
          name: volunteer.name,
          role: volunteer.role,
        })),
      };
    });
  };

  const teamData = getTeamData();

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <>
      <div className={styles.teamGrid + " content_box"}>
        {teamData.map((item, index) => (
          <TeamItem
            key={index}
            imageSrc={item.imageSrc}
            label={item.label}
            onClick={() => handleTeamClick(item)}
          />
        ))}
      </div>

      <TeamModal
        isOpen={isModalOpen}
        onClose={closeModal}
        teamMembers={selectedTeam?.members || []}
        teamTitle={selectedTeam?.label || ""}
      />
    </>
  );
};

export default TeamGrid;
