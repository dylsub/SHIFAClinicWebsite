import { authenticateRequest } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const resources = await db.collection("resources").find({}).toArray();
    return Response.json(resources);
  } catch (error) {
    console.error("Error fetching resources:", error);
    return Response.json({ error: "Error fetching resources" }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  try {
    const { title, description, link, imageSrc } = await request.json();

    if (!title || !description || !link || !imageSrc) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resourceData = {
      title,
      description,
      link,
      imageSrc,
      createdAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection("resources").insertOne(resourceData);

    return Response.json(
      {
        message: "Resource added successfully",
        id: result.insertedId,
        resource: resourceData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding resource:", error);
    return Response.json({ error: "Error adding resource" }, { status: 500 });
  }
}
