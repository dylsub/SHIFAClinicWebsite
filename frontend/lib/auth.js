import jwt from "jsonwebtoken";

export function authenticateRequest(request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return {
      error: Response.json({ message: "Access token required" }, { status: 401 }),
    };
  }

  if (!process.env.JWT_SECRET) {
    return {
      error: Response.json(
        { message: "Server configuration error" },
        { status: 500 }
      ),
    };
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return { user };
  } catch {
    return {
      error: Response.json(
        { message: "Invalid or expired token" },
        { status: 403 }
      ),
    };
  }
}
