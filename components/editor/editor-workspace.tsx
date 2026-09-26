"use client"

import { useState } from "react"

import { EditorNavBar } from "@/components/editor/editor-nav-bar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

/**
 * Renders the editor navigation, project sidebar, and empty canvas area.
 * The sidebar starts open and can be toggled or closed within this workspace.
 */
function EditorWorkspace() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-base">
      <EditorNavBar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((isOpen) => !isOpen)}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        projectTitle="Untitled project"
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="min-h-screen pt-14" aria-label="Editor canvas" />
    </div>
  )
}

export { EditorWorkspace }
