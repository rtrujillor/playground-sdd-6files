import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const authRoutePatterns = [
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
]
  .filter((route): route is string => Boolean(route))
  .map((route) => `${route}(.*)`)

const isPublicRoute = createRouteMatcher(authRoutePatterns)

/**
 * Requires a session for matched requests outside the configured auth URL patterns.
 * If neither auth URL is set, no matched route is public. Clerk converts protection
 * signals into redirects or error responses; other errors propagate.
 */
export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
