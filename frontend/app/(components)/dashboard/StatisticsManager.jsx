"use client";

import React, { useState, useEffect } from "react";
import styles from "./StatisticsManager.module.css";
import { getAuthToken } from "./AuthUtils";

const StatisticsManager = () => {
  const [statistics, setStatistics] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Color array in the correct order
  const colors = ["#FD6A6D", "#EC2024", "#A1080B", "#6C0305", "#230203"];

  // Fetch statistics from MongoDB
  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/statistics",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // Assign colors to statistics in order
        const statisticsWithColors = data.map((stat, index) => ({
          ...stat,
          color: colors[index] || "#666666", // fallback color if more than 5 items
        }));
        setStatistics(statisticsWithColors);
      } else if (response.status === 401) {
        // Token expired or invalid
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const handleEdit = (stat) => {
    setEditingId(stat._id);
    setEditTitle(stat.title);
    setEditDescription(stat.description);
  };

  const handleSave = async (stat) => {
    try {
      const token = getAuthToken();
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/statistics/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: stat._id,
            title: editTitle,
            description: editDescription,
          }),
        }
      );

      if (response.ok) {
        setStatistics((prevStats) =>
          prevStats.map((s) =>
            s._id === stat._id
              ? { ...s, title: editTitle, description: editDescription }
              : s
          )
        );
        setEditingId(null);
        setEditTitle("");
        setEditDescription("");
        fetchStatistics(); // Refresh
      } else if (response.status === 401) {
        window.location.reload();
      } else {
        alert("Failed to update statistic");
      }
    } catch (error) {
      console.error("Error updating statistic:", error);
      alert("Error updating statistic");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Manage Statistics</h2>
      <p className={styles.description}>
        Click on any statistic to edit its value and label. Changes will be saved to the
        database.
      </p>

      <div className={styles.statisticsGrid}>
        {statistics.map((stat) => (
          <div key={stat._id} className={styles.statCard}>
            <div className={styles.statContent}>
              {editingId === stat._id ? (
                <div className={styles.editMode}>
                  <label className={styles.editLabel}>
                    Value
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className={styles.editInput}
                      autoFocus
                    />
                  </label>
                  <label className={styles.editLabel}>
                    Label
                    <input
                      type="text"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      className={styles.editDescriptionInput}
                    />
                  </label>
                  <div className={styles.editButtons}>
                    <button
                      onClick={() => handleSave(stat)}
                      className={styles.saveButton}
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className={styles.cancelButton}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.displayMode}>
                  <h3
                    className={styles.statTitle}
                    style={{ color: stat.color }}
                    onClick={() => handleEdit(stat)}
                  >
                    {stat.title}
                  </h3>
                  <p className={styles.statDescription}>{stat.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsManager;
