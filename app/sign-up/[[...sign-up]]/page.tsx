import { SignUp } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

export default function SignUpPage() {
  return (
    <AuthPageShell>
      <SignUp
        fallbackRedirectUrl="/editor"
        signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
      />
    </AuthPageShell>
  )
}
