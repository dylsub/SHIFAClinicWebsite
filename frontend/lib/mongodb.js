import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  `mongodb+srv://dylsub:${process.env.URI_PASSWORD}@cluster0.sxply.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const dbName = "SHIVACLINIC";

let clientPromise;

function getClientPromise() {
  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(dbName);
}
