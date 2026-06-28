export function apiUrl(path) {
  const base = process.env.NEXT_PUBLIC_API_URL || "";
  return `${base}${path}`;
}
