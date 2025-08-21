// Authentication utility functions
export const isAuthenticated = () => {
  try {
    const token = localStorage.getItem("adminToken");
    const session = localStorage.getItem("adminSession");

    if (!token || !session) {
      return false;
    }

    const sessionData = JSON.parse(session);
    const now = Date.now();

    // Check if session has expired (24 hours)
    if (now > sessionData.expiresAt) {
      logout();
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking authentication:", error);
    logout();
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminSession");
  window.location.href = "/dashboard";
};

export const getAuthToken = () => {
  return localStorage.getItem("adminToken");
};

export const refreshSession = () => {
  try {
    const session = localStorage.getItem("adminSession");
    if (session) {
      const sessionData = JSON.parse(session);
      const newSession = {
        timestamp: Date.now(),
        expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      };
      localStorage.setItem("adminSession", JSON.stringify(newSession));
    }
  } catch (error) {
    console.error("Error refreshing session:", error);
  }
};

// Auto-refresh session every 30 minutes
if (typeof window !== "undefined") {
  setInterval(refreshSession, 30 * 60 * 1000);
}
