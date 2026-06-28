import { ObjectId } from "mongodb";
import { authenticateRequest } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function PUT(request, { params }) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;
    const {
      name,
      role,
      description: rawDescription = "",
      category,
      imageSrc,
    } = await request.json();
    const description =
      typeof rawDescription === "string" ? rawDescription.trim() : "";

    if (!name || !role || !category || !imageSrc) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("volunteers").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          role,
          description,
          category,
          imageSrc,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return Response.json({ error: "Volunteer not found" }, { status: 404 });
    }

    return Response.json({
      message: "Volunteer updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Error updating volunteer:", error);
    return Response.json({ error: "Error updating volunteer" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;
    const db = await getDb();
    const result = await db.collection("volunteers").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return Response.json({ error: "Volunteer not found" }, { status: 404 });
    }

    return Response.json({
      message: "Volunteer deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting volunteer:", error);
    return Response.json({ error: "Error deleting volunteer" }, { status: 500 });
  }
}
