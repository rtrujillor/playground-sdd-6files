import { Check } from "lucide-react"
import type { ReactNode } from "react"

interface AuthPageShellProps {
  children: ReactNode
}

const features = [
  "Map architecture on a shared canvas",
  "Generate system designs with AI",
  "Turn your graph into a technical specification",
]

function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <main className="grid min-h-screen bg-base lg:grid-cols-2">
      <section className="hidden border-r bg-surface px-12 py-10 lg:flex lg:flex-col lg:justify-between xl:px-20 xl:py-16">
        <div className="text-sm font-semibold tracking-tight text-copy">
          Ghost AI
        </div>

        <div className="max-w-lg">
          <p className="mb-3 text-sm font-medium text-brand">
            System design, made collaborative
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-copy">
            Design the system. Keep everyone in sync.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-copy-secondary">
            Build, refine, and document production architecture in one shared
            technical workspace.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-copy-secondary">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-brand-dim text-brand">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-copy-muted">
          Collaborative architecture for modern engineering teams.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-8">
        {children}
      </section>
    </main>
  )
}

export { AuthPageShell }
