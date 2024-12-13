import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // Set CORS headers globally
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins (adjust as needed)
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle OPTIONS request (preflight request)
  if (request.method === "OPTIONS") {
    response.status = 200;
    return response;
  }

  return response;
}

console.log("test middleware.js");

export const config = {
  matcher: "/lib/api/*", // Apply middleware only to API routes
};
