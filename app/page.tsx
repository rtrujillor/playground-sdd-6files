import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Redirects authenticated visitors to `/editor` and other visitors to `/sign-in`.
 *
 * @throws Propagates Clerk authentication errors, including missing middleware
 * context. On success, throws Next.js's redirect signal instead of rendering.
 */
export default async function Home() {
  const { isAuthenticated } = await auth();

  redirect(isAuthenticated ? "/editor" : "/sign-in");
}
