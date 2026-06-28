import { authenticateRequest } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const volunteers = await db.collection("volunteers").find({}).toArray();
    return Response.json(volunteers);
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    return Response.json({ error: "Error fetching volunteers" }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
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

    const volunteerData = {
      name,
      role,
      description,
      category,
      imageSrc,
      createdAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection("volunteers").insertOne(volunteerData);

    return Response.json(
      {
        message: "Volunteer added successfully",
        id: result.insertedId,
        volunteer: volunteerData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding volunteer:", error);
    return Response.json({ error: "Error adding volunteer" }, { status: 500 });
  }
}
