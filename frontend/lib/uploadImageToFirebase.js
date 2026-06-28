import { getStorageBucket } from "./firebase-admin";

const MAX_FILE_SIZE = 4 * 1024 * 1024;

export async function uploadImageToFirebase(file, folder = "uploads") {
  if (!file || typeof file === "string") {
    throw new Error("No image file provided");
  }

  if (!file.type?.startsWith("image/")) {
    throw new Error("Only image files are allowed!");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image must be 4MB or smaller");
  }

  const bucket = getStorageBucket();
  const buffer = Buffer.from(await file.arrayBuffer());
  const timestamp = Date.now();
  const fileName = `${folder}/${timestamp}_${file.name}`;
  const fileUpload = bucket.file(fileName);

  await fileUpload.save(buffer, {
    metadata: { contentType: file.type },
    resumable: false,
  });

  await fileUpload.makePublic();

  return `https://storage.googleapis.com/${bucket.name}/${fileName}`;
}
