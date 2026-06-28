import { authenticateRequest } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const statistics = await db.collection("statistics").find({}).toArray();
    return Response.json(statistics);
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return Response.json({ error: "Error fetching statistics" }, { status: 500 });
  }
}
