import { ObjectId } from "mongodb";
import { authenticateRequest } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function POST(request) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { id, title, description } = await request.json();

    if (!id || !title || !description) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("statistics").updateOne(
      { id: parseInt(id, 10) },
      {
        $set: {
          title,
          description,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return Response.json({
      message: "Statistic updated successfully",
      modifiedCount: result.modifiedCount,
      upsertedCount: result.upsertedCount,
    });
  } catch (error) {
    console.error("Error updating statistic:", error);
    return Response.json({ error: "Error updating statistic" }, { status: 500 });
  }
}

export async function PUT(request) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { id, title, description } = await request.json();

    if (!id || !title || !description) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("statistics").updateOne(
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
      return Response.json({ error: "Statistic not found" }, { status: 404 });
    }

    return Response.json({
      message: "Statistic updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Error updating statistic:", error);
    return Response.json({ error: "Error updating statistic" }, { status: 500 });
  }
}
