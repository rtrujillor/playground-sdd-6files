import { SignIn } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

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
