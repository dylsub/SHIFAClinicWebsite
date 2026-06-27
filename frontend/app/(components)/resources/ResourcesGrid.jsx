"use client";

import React, { useState, useEffect } from "react";
import styles from "./ResourcesGrid.module.css";
import ResourcesSectionIntro from "./ResourcesSectionIntro";

const ResourcesGrid = () => {
  const [resources, setResources] = useState([]);

  // Fetch resources from MongoDB
  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/resources"
      );
      if (response.ok) {
        const data = await response.json();
        setResources(data);
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  return (
    <div className={styles.resourcesContainer + " content_box"}>
      <ResourcesSectionIntro
        title="Other SHIFA Resources"
        description="Access helpful resources and information to support your healthcare journey."
      />

      <div className={styles.resourcesGrid}>
        {resources.length === 0 ? (
          <div className={styles.noResources}>
            <p>No resources available at the moment.</p>
          </div>
        ) : (
          resources.map((resource) => (
            <div key={resource._id} className={styles.resourceCard}>
              <div className={styles.imageContainer}>
                <img
                  src={resource.imageSrc}
                  alt={resource.title}
                  className={styles.resourceImage}
                  onError={(e) => {
                    e.target.src = "/doctors.jpg"; // Fallback image
                  }}
                />
              </div>
              <div className={styles.resourceContent}>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceDescription}>
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  View Resource
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResourcesGrid;
