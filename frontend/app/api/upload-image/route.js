import { authenticateRequest } from "@/lib/auth";
import { uploadImageToFirebase } from "@/lib/uploadImageToFirebase";

export async function POST(request) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const formData = await request.formData();
    const image = formData.get("image");

    const imageUrl = await uploadImageToFirebase(image, "shifa-clinic");

    return Response.json({
      message: "Image uploaded successfully",
      imageUrl,
    });
  } catch (error) {
    console.error("Image upload error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to upload image";
    const status = message.includes("provided") ? 400 : 500;
    return Response.json({ message }, { status });
  }
}
