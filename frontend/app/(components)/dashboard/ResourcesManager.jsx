"use client";

import React, { useState, useEffect } from "react";
import styles from "./ResourcesManager.module.css";
import { getAuthToken } from "./AuthUtils";

const ResourcesManager = () => {
  const [resources, setResources] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    imageSrc: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch resources from MongoDB
  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/resources",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setResources(data);
      } else if (response.status === 401) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const token = getAuthToken();
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/upload-image",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.imageUrl;
    } else {
      throw new Error("Failed to upload image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.imageSrc; // Use existing URL if no new image selected

      // Upload new image if selected
      if (selectedImage) {
        imageUrl = await uploadImage(selectedImage);
      }

      const token = getAuthToken();
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/resources",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...formData,
            imageSrc: imageUrl,
          }),
        }
      );

      if (response.ok) {
        setFormData({
          title: "",
          description: "",
          link: "",
          imageSrc: "",
        });
        setSelectedImage(null);
        setShowForm(false);
        fetchResources(); // Refresh the list
        alert("Resource added successfully!");
      } else if (response.status === 401) {
        window.location.reload();
      } else {
        alert("Failed to add resource");
      }
    } catch (error) {
      console.error("Error adding resource:", error);
      alert("Error adding resource");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (resourceId) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      try {
        const token = getAuthToken();
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/resources/${resourceId}",
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setResources((prev) => prev.filter((r) => r._id !== resourceId));
          alert("Resource deleted successfully!");
        } else if (response.status === 401) {
          window.location.reload();
        } else {
          alert("Failed to delete resource");
        }
      } catch (error) {
        console.error("Error deleting resource:", error);
        alert("Error deleting resource");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Manage Resources</h2>
        <button
          className={styles.addButton}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add New Resource"}
        </button>
      </div>

      {showForm && (
        <div className={styles.formContainer}>
          <h3>Add New Resource</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Enter resource title"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Enter resource description"
                rows="3"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Link:</label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                required
                placeholder="Enter resource URL"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="image">Resource Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <small>Upload an image</small>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Add Resource"}
            </button>
          </form>
        </div>
      )}

      <div className={styles.resourcesList}>
        <h3>Current Resources ({resources.length})</h3>
        {resources.length === 0 ? (
          <p className={styles.noResources}>No resources found.</p>
        ) : (
          <div className={styles.resourcesGrid}>
            {resources.map((resource) => (
              <div key={resource._id} className={styles.resourceCard}>
                <img
                  src={resource.imageSrc}
                  alt={resource.title}
                  className={styles.resourceImage}
                  onError={(e) => {
                    e.target.src = "/doctors.jpg"; // Fallback image
                  }}
                />
                <div className={styles.resourceInfo}>
                  <h4>{resource.title}</h4>
                  <p className={styles.description}>{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resourceLink}
                  >
                    View Resource
                  </a>
                  <button
                    onClick={() => handleDelete(resource._id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesManager;
