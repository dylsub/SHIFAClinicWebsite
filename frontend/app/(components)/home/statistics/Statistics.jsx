"use client";

import { apiUrl } from "@/lib/apiUrl";
import React, { useState, useEffect } from "react";
import StatisticsNumber from "./StatisticsNumber";
import classes from "./Statistics.module.css";

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  // Color array in the correct order
  const colors = ["#FD6A6D", "#EC2024", "#A1080B", "#6C0305", "#230203"];

  // Fetch statistics from MongoDB
  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch(apiUrl("/api/statistics"));
      if (response.ok) {
        const data = await response.json();
        // Assign colors to statistics in order
        const statisticsWithColors = data.map((stat, index) => ({
          ...stat,
          color: colors[index] || "#666666", // fallback color if more than 5 items
        }));
        setStatistics(statisticsWithColors);
      }
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  return (
    <div className={classes.stats + " content_box"}>
      {statistics.map((stat) => (
        <StatisticsNumber
          key={stat._id}
          titleText={stat.title}
          descripText={stat.description}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default Statistics;
