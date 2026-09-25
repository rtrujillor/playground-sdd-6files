"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  projectTitle: string
  onClose: () => void
  onNewProject?: () => void
  className?: string
}

interface EmptyProjectsStateProps {
  children: string
}

function EmptyProjectsState({ children }: EmptyProjectsStateProps) {
  return (
    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-copy-muted">
      <p>{children}</p>
    </div>
  )
}

function ProjectSidebar({
  isOpen,
  projectTitle,
  onClose,
  onNewProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      id="project-sidebar"
      data-slot="project-sidebar"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "fixed inset-y-0 left-0 z-60 flex w-80 flex-col border-r bg-surface shadow-2xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        className
      )}
    >
      <header className="flex h-14 shrink-0 items-center justify-between border-b px-4">
        <h2 className="truncate pr-3 text-sm font-semibold text-copy">
          {projectTitle}
        </h2>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close project sidebar"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </Button>
      </header>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 gap-0">
        <TabsList variant="line" className="h-11 w-full shrink-0 gap-4 border-b px-4">
          <TabsTrigger value="my-projects">My projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="min-h-0">
          <EmptyProjectsState>No projects yet.</EmptyProjectsState>
        </TabsContent>
        <TabsContent value="shared" className="min-h-0">
          <EmptyProjectsState>No shared projects yet.</EmptyProjectsState>
        </TabsContent>
      </Tabs>

      <footer className="shrink-0 border-t p-4">
        <Button type="button" className="w-full" onClick={onNewProject}>
          <Plus aria-hidden="true" />
          New project
        </Button>
      </footer>
    </aside>
  )
}

export { ProjectSidebar }
export type { ProjectSidebarProps }
