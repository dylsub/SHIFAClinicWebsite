"use client";
import React, { useState, useEffect } from "react";
import NavBar from "../(components)/navigation/NavBar";
import StatisticsManager from "../(components)/dashboard/StatisticsManager";
import VolunteersManager from "../(components)/dashboard/VolunteersManager";
import ResourcesManager from "../(components)/dashboard/ResourcesManager";
import LoginModal from "../(components)/dashboard/LoginModal";
import { isAuthenticated, logout } from "../(components)/dashboard/AuthUtils";
import styles from "../(components)/dashboard/Dashboard.module.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("statistics");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated()) {
        setIsLoggedIn(true);
        setShowLoginModal(false);
      } else {
        setIsLoggedIn(false);
        setShowLoginModal(true);
      }
    };

    checkAuth();

    // Check authentication status every 5 minutes
    const authInterval = setInterval(checkAuth, 5 * 60 * 1000);

    return () => clearInterval(authInterval);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (!isLoggedIn) {
    return (
      <div className="main">
        <NavBar />
        <div id="hero" />
        <LoginModal
          isOpen={showLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    );
  }

  return (
    <div className="main">
      <NavBar />
      <div id="hero" className={styles.dashboardContainer + " content_box"}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.dashboardTitle}>Admin Dashboard</h1>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${
              activeTab === "statistics" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("statistics")}
          >
            Statistics
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "volunteers" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("volunteers")}
          >
            Volunteers
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "resources" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("resources")}
          >
            Resources
          </button>
        </div>
        <div className={styles.contentArea}>
          {activeTab === "statistics" && <StatisticsManager />}
          {activeTab === "volunteers" && <VolunteersManager />}
          {activeTab === "resources" && <ResourcesManager />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
