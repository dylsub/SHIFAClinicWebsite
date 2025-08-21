require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const { connectToDb, getDb } = require("./db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { upload, uploadImageToFirebase } = require("./uploadUtils");

const app = express();

// JWT secret key (in production, use environment variable)
const JWT_SECRET = process.env.JWT_SECRET;

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many login attempts, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3536;

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user;
    next();
  });
};

// MongoDB connection
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
    db = getDb();
  }
});

// Authentication endpoints
app.post("/api/auth/login", loginLimiter, async (req, res) => {
  try {
    const { username, password } = req.body;

    // Get credentials from environment variables
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    // Check if environment variables are set
    if (!validUsername || !validPassword) {
      console.error(
        "Admin credentials not configured in environment variables"
      );
      return res.status(500).json({ message: "Server configuration error" });
    }

    if (username !== validUsername || password !== validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({
      message: "Login successful",
      token,
      user: { username, role: "admin" },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/auth/verify", authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// Image upload endpoint
app.post(
  "/api/upload-image",
  authenticateToken,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No image file provided" });
      }

      const imageUrl = await uploadImageToFirebase(req.file, "shifa-clinic");

      res.json({
        message: "Image uploaded successfully",
        imageUrl: imageUrl,
      });
    } catch (error) {
      console.error("Image upload error:", error);
      res.status(500).json({ message: "Failed to upload image" });
    }
  }
);

// Protected routes - require authentication for write operations only
app.use("/api/volunteers", (req, res, next) => {
  // Allow GET requests without authentication
  if (req.method === "GET") {
    return next();
  }
  // Require authentication for POST, PUT, DELETE
  return authenticateToken(req, res, next);
});

app.use("/api/resources", (req, res, next) => {
  // Allow GET requests without authentication
  if (req.method === "GET") {
    return next();
  }
  // Require authentication for POST, PUT, DELETE
  return authenticateToken(req, res, next);
});

app.use("/api/statistics", (req, res, next) => {
  // Allow GET requests without authentication
  if (req.method === "GET") {
    return next();
  }
  // Require authentication for POST, PUT, DELETE
  return authenticateToken(req, res, next);
});

// Dashboard API Endpoints

// GET - Fetch all statistics
app.get("/api/statistics", async (req, res) => {
  console.log("Fetching statistics");
  try {
    const collection = db.collection("statistics");
    const statistics = await collection.find({}).toArray();
    res.status(200).json(statistics);
  } catch (err) {
    console.error("Error fetching statistics:", err);
    res.status(500).json({ error: "Error fetching statistics" });
  }
});

// GET - Fetch all volunteers
app.get("/api/volunteers", async (req, res) => {
  console.log("Fetching volunteers");
  try {
    const collection = db.collection("volunteers");
    const volunteers = await collection.find({}).toArray();
    res.status(200).json(volunteers);
  } catch (err) {
    console.error("Error fetching volunteers:", err);
    res.status(500).json({ error: "Error fetching volunteers" });
  }
});

// GET - Fetch all resources
app.get("/api/resources", async (req, res) => {
  console.log("Fetching resources");
  try {
    const collection = db.collection("resources");
    const resources = await collection.find({}).toArray();
    res.status(200).json(resources);
  } catch (err) {
    console.error("Error fetching resources:", err);
    res.status(500).json({ error: "Error fetching resources" });
  }
});

// POST - Add new volunteer
app.post("/api/volunteers", async (req, res) => {
  console.log("Adding new volunteer:", req.body);
  try {
    const { name, role, category, imageSrc } = req.body;

    // Validate request body
    if (!name || !role || !category || !imageSrc) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const volunteerData = {
      name,
      role,
      category,
      imageSrc,
      createdAt: new Date(),
    };

    const collection = db.collection("volunteers");
    const result = await collection.insertOne(volunteerData);

    res.status(201).json({
      message: "Volunteer added successfully",
      id: result.insertedId,
      volunteer: volunteerData,
    });
  } catch (err) {
    console.error("Error adding volunteer:", err);
    res.status(500).json({ error: "Error adding volunteer" });
  }
});

// POST - Add new resource
app.post("/api/resources", async (req, res) => {
  console.log("Adding new resource:", req.body);
  try {
    const { title, description, link, imageSrc } = req.body;

    // Validate request body
    if (!title || !description || !link || !imageSrc) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resourceData = {
      title,
      description,
      link,
      imageSrc,
      createdAt: new Date(),
    };

    const collection = db.collection("resources");
    const result = await collection.insertOne(resourceData);

    res.status(201).json({
      message: "Resource added successfully",
      id: result.insertedId,
      resource: resourceData,
    });
  } catch (err) {
    console.error("Error adding resource:", err);
    res.status(500).json({ error: "Error adding resource" });
  }
});

// POST - Update statistic
app.post("/api/statistics/update", async (req, res) => {
  console.log("Updating statistic:", req.body);
  try {
    const { id, title, description } = req.body;

    // Validate request body
    if (!id || !title || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const collection = db.collection("statistics");
    const result = await collection.updateOne(
      { id: parseInt(id) },
      {
        $set: {
          title,
          description,
          updatedAt: new Date(),
        },
      },
      { upsert: true } // Create if doesn't exist
    );

    res.status(200).json({
      message: "Statistic updated successfully",
      modifiedCount: result.modifiedCount,
      upsertedCount: result.upsertedCount,
    });
  } catch (err) {
    console.error("Error updating statistic:", err);
    res.status(500).json({ error: "Error updating statistic" });
  }
});

// PUT - Update statistic (alternative method)
app.put("/api/statistics/update", async (req, res) => {
  console.log("Updating statistic:", req.body);
  try {
    const { id, title, description } = req.body;

    // Validate request body
    if (!id || !title || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const collection = db.collection("statistics");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          description,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Statistic not found" });
    }

    res.status(200).json({
      message: "Statistic updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    console.error("Error updating statistic:", err);
    res.status(500).json({ error: "Error updating statistic" });
  }
});

// PUT - Update volunteer
app.put("/api/volunteers/:id", async (req, res) => {
  console.log("Updating volunteer:", req.params.id, req.body);
  try {
    const { id } = req.params;
    const { name, role, category, imageSrc } = req.body;

    // Validate request body
    if (!name || !role || !category || !imageSrc) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const collection = db.collection("volunteers");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          role,
          category,
          imageSrc,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    res.status(200).json({
      message: "Volunteer updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    console.error("Error updating volunteer:", err);
    res.status(500).json({ error: "Error updating volunteer" });
  }
});

// PUT - Update resource
app.put("/api/resources/:id", async (req, res) => {
  console.log("Updating resource:", req.params.id, req.body);
  try {
    const { id } = req.params;
    const { title, description, link, imageSrc } = req.body;

    // Validate request body
    if (!title || !description || !link || !imageSrc) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const collection = db.collection("resources");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          description,
          link,
          imageSrc,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Resource not found" });
    }

    res.status(200).json({
      message: "Resource updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    console.error("Error updating resource:", err);
    res.status(500).json({ error: "Error updating resource" });
  }
});

// DELETE - Delete volunteer
app.delete("/api/volunteers/:id", async (req, res) => {
  console.log("Deleting volunteer:", req.params.id);
  try {
    const { id } = req.params;

    const collection = db.collection("volunteers");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    res.status(200).json({
      message: "Volunteer deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    console.error("Error deleting volunteer:", err);
    res.status(500).json({ error: "Error deleting volunteer" });
  }
});

// DELETE - Delete resource
app.delete("/api/resources/:id", async (req, res) => {
  console.log("Deleting resource:", req.params.id);
  try {
    const { id } = req.params;

    const collection = db.collection("resources");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Resource not found" });
    }

    res.status(200).json({
      message: "Resource deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    console.error("Error deleting resource:", err);
    res.status(500).json({ error: "Error deleting resource" });
  }
});
