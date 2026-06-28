import { authenticateRequest } from "@/lib/auth";

export async function POST(request) {
  const auth = authenticateRequest(request);
  if (auth.error) return auth.error;

  return Response.json({ valid: true, user: auth.user });
}
