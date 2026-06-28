import { ObjectId } from "mongodb";
import { authenticateRequest } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function PUT(request, { params }) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;
    const { title, description, link, imageSrc } = await request.json();

    if (!title || !description || !link || !imageSrc) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("resources").updateOne(
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
      return Response.json({ error: "Resource not found" }, { status: 404 });
    }

    return Response.json({
      message: "Resource updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Error updating resource:", error);
    return Response.json({ error: "Error updating resource" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;
    const db = await getDb();
    const result = await db.collection("resources").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return Response.json({ error: "Resource not found" }, { status: 404 });
    }

    return Response.json({
      message: "Resource deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting resource:", error);
    return Response.json({ error: "Error deleting resource" }, { status: 500 });
  }
}
