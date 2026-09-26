"use client"

import { useState } from "react"

import { EditorNavBar } from "@/components/editor/editor-nav-bar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

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
