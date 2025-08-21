const multer = require("multer");
const { bucket } = require("./firebase-admin-config");

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check file type
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// Function to upload image to Firebase Storage using Admin SDK
const uploadImageToFirebase = async (file, folder = "uploads") => {
  try {
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}_${file.originalname}`;

    // Create a file object in the bucket
    const fileUpload = bucket.file(fileName);

    // Create write stream
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
      resumable: false,
    });

    // Return a promise that resolves when upload is complete
    return new Promise((resolve, reject) => {
      blobStream.on("error", (error) => {
        console.error("Upload error:", error);
        reject(new Error("Failed to upload image"));
      });

      blobStream.on("finish", async () => {
        try {
          // Make the file public
          await fileUpload.makePublic();

          // Get the public URL
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

          console.log("Image uploaded successfully to Firebase:", {
            originalName: file.originalname,
            savedAs: fileName,
            url: publicUrl,
          });

          resolve(publicUrl);
        } catch (error) {
          console.error("Error making file public:", error);
          reject(new Error("Failed to get image URL"));
        }
      });

      // Write the file buffer to the stream
      blobStream.end(file.buffer);
    });
  } catch (error) {
    console.error("Error uploading image to Firebase:", error);
    throw new Error("Failed to upload image");
  }
};

module.exports = { upload, uploadImageToFirebase };
