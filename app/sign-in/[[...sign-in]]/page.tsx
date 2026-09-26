import { SignIn } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

/** Renders Clerk sign-in with `/editor` as the fallback destination after sign-in. */
export default function SignInPage() {
  return (
    <AuthPageShell>
      <SignIn
        fallbackRedirectUrl="/editor"
        signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
      />
    </AuthPageShell>
  )
}
