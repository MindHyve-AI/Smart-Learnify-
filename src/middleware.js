import { authMiddleware } from "@clerk/nextjs";

// This middleware protects all routes including api/trpc routes
// Routes listed in publicRoutes can be accessed without authentication
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/sign-in*",
    "/sign-up*",
    "/api/webhooks*",
    "/features",
    "/about",
    "/contact"
  ],
  // Make sure /dashboard is not in publicRoutes to ensure it's protected
  ignoredRoutes: [
    "/((?!.*\\..*|_next).*)",
    "/(api|trpc)(.*)"
  ]
});

export const config = {
  // Protects all routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 