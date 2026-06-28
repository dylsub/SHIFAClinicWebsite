"use client";

import { apiUrl } from "@/lib/apiUrl";
import React, { useState, useEffect } from "react";
import styles from "./VolunteersManager.module.css";
import { getAuthToken } from "./AuthUtils";

const VolunteersManager = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    category: "SHIFA Providers",
    imageSrc: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingVolunteerId, setEditingVolunteerId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    role: "",
    description: "",
    category: "SHIFA Providers",
    imageSrc: "",
  });
  const [selectedEditImage, setSelectedEditImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const categories = [
    "SHIFA Providers",
    "SHIFA Dentists",
    "SHIFA Nurses",
    "SHIFA Pharmacists",
    "SHIFA Admins",
    "Student Volunteers",
  ];

  // Fetch volunteers from MongoDB
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const response = await fetch(
        apiUrl("/api/volunteers"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setVolunteers(data);
      } else if (response.status === 401) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching volunteers:", error);
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

  const handleEditInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedEditImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const token = getAuthToken();
    const response = await fetch(
      apiUrl("/api/upload-image"),
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
        apiUrl("/api/volunteers"),
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
          name: "",
          role: "",
          description: "",
          category: "SHIFA Providers",
          imageSrc: "",
        });
        setSelectedImage(null);
        setShowForm(false);
        fetchVolunteers(); // Refresh the list
        alert("Volunteer added successfully!");
      } else if (response.status === 401) {
        window.location.reload();
      } else {
        alert("Failed to add volunteer");
      }
    } catch (error) {
      console.error("Error adding volunteer:", error);
      alert("Error adding volunteer");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (volunteerId) => {
    if (window.confirm("Are you sure you want to delete this volunteer?")) {
      try {
        const token = getAuthToken();
        const response = await fetch(
          apiUrl(`/api/volunteers/${volunteerId}`),
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setVolunteers((prev) => prev.filter((v) => v._id !== volunteerId));
          alert("Volunteer deleted successfully!");
        } else if (response.status === 401) {
          window.location.reload();
        } else {
          alert("Failed to delete volunteer");
        }
      } catch (error) {
        console.error("Error deleting volunteer:", error);
        alert("Error deleting volunteer");
      }
    }
  };

  const handleEdit = (volunteer) => {
    setEditingVolunteerId(volunteer._id);
    setEditFormData({
      name: volunteer.name || "",
      role: volunteer.role || "",
      description: volunteer.description || "",
      category: volunteer.category || "SHIFA Providers",
      imageSrc: volunteer.imageSrc || "",
    });
    setSelectedEditImage(null);
  };

  const handleCancelEdit = () => {
    setEditingVolunteerId(null);
    setEditFormData({
      name: "",
      role: "",
      description: "",
      category: "SHIFA Providers",
      imageSrc: "",
    });
    setSelectedEditImage(null);
  };

  const handleUpdate = async (e, volunteerId) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = editFormData.imageSrc;

      if (selectedEditImage) {
        imageUrl = await uploadImage(selectedEditImage);
      }

      const token = getAuthToken();
      const response = await fetch(
        apiUrl(`/api/volunteers/${volunteerId}`),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...editFormData,
            imageSrc: imageUrl,
          }),
        }
      );

      if (response.ok) {
        setVolunteers((prev) =>
          prev.map((volunteer) =>
            volunteer._id === volunteerId
              ? { ...volunteer, ...editFormData, imageSrc: imageUrl }
              : volunteer
          )
        );
        handleCancelEdit();
        fetchVolunteers();
        alert("Volunteer updated successfully!");
      } else if (response.status === 401) {
        window.location.reload();
      } else {
        alert("Failed to update volunteer");
      }
    } catch (error) {
      console.error("Error updating volunteer:", error);
      alert("Error updating volunteer");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Manage Volunteers</h2>
        <button
          className={styles.addButton}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add New Volunteer"}
        </button>
      </div>

      {showForm && (
        <div className={styles.formContainer}>
          <h3>Add New Volunteer</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter volunteer name"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                placeholder="Enter volunteer role"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter a short bio or description"
                rows="4"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Category:</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="image">Profile Image:</label>
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
              {uploading ? "Uploading..." : "Add Volunteer"}
            </button>
          </form>
        </div>
      )}

      <div className={styles.volunteersList}>
        <h3>Current Volunteers ({volunteers.length})</h3>
        {volunteers.length === 0 ? (
          <p className={styles.noVolunteers}>No volunteers found.</p>
        ) : (
          <div className={styles.volunteersGrid}>
            {volunteers.map((volunteer) => (
              <div key={volunteer._id} className={styles.volunteerCard}>
                <img
                  src={volunteer.imageSrc}
                  alt={volunteer.name}
                  className={styles.volunteerImage}
                  onError={(e) => {
                    e.target.src = "/doctors.jpg"; // Fallback image
                  }}
                />
                <div className={styles.volunteerInfo}>
                  {editingVolunteerId === volunteer._id ? (
                    <form
                      className={styles.editForm}
                      onSubmit={(e) => handleUpdate(e, volunteer._id)}
                    >
                      <div className={styles.formGroup}>
                        <label>Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={editFormData.name}
                          onChange={handleEditInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Role:</label>
                        <input
                          type="text"
                          name="role"
                          value={editFormData.role}
                          onChange={handleEditInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Description:</label>
                        <textarea
                          name="description"
                          value={editFormData.description}
                          onChange={handleEditInputChange}
                          rows="4"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Category:</label>
                        <select
                          name="category"
                          value={editFormData.category}
                          onChange={handleEditInputChange}
                          required
                        >
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label>Replace Image:</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleEditImageChange}
                        />
                        <small>Leave blank to keep current image</small>
                      </div>
                      <div className={styles.actionButtons}>
                        <button
                          type="submit"
                          className={styles.saveButton}
                          disabled={uploading}
                        >
                          {uploading ? "Saving..." : "Save"}
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className={styles.cancelButton}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <h4>{volunteer.name}</h4>
                      <p className={styles.role}>{volunteer.role}</p>
                      {volunteer.description && (
                        <p className={styles.description}>
                          {volunteer.description}
                        </p>
                      )}
                      <p className={styles.category}>{volunteer.category}</p>
                      <div className={styles.actionButtons}>
                        <button
                          onClick={() => handleEdit(volunteer)}
                          className={styles.editButton}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(volunteer._id)}
                          className={styles.deleteButton}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteersManager;
