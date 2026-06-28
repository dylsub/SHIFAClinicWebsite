"use client";

import { apiUrl } from "@/lib/apiUrl";
import React, { useState } from "react";
import styles from "./LoginModal.module.css";

const LoginModal = ({ isOpen, onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(apiUrl("/api/auth/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem(
          "adminSession",
          JSON.stringify({
            timestamp: Date.now(),
            expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
          })
        );
        onLoginSuccess();
      } else {
        let errorMessage = "Invalid credentials";

        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage =
            response.status === 429
              ? "Too many login attempts. Please wait 15 minutes and try again."
              : `Login failed (${response.status}). Please try again.`;
        }

        setAttempts((prev) => prev + 1);

        if (response.status === 429 || attempts >= 4) {
          setError(errorMessage);
          setTimeout(() => setAttempts(0), 300000); // 5 minutes
        } else {
          setError(errorMessage);
        }
      }
    } catch (error) {
      console.error("Login request failed:", error);
      setError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              autoComplete="username"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button
            type="submit"
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
