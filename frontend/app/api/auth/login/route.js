import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const validUsername = process.env.ADMIN_USERNAME?.trim();
    const validPassword = process.env.ADMIN_PASSWORD?.trim();
    const jwtSecret = process.env.JWT_SECRET;

    if (!validUsername || !validPassword) {
      console.error("Admin credentials not configured in environment variables");
      return Response.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!jwtSecret) {
      console.error("JWT_SECRET is not configured in environment variables");
      return Response.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (
      username?.trim() !== validUsername ||
      password?.trim() !== validPassword
    ) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ username, role: "admin" }, jwtSecret, {
      expiresIn: "24h",
    });

    return Response.json({
      message: "Login successful",
      token,
      user: { username, role: "admin" },
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
