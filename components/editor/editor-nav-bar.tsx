"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EditorNavBarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
  className?: string
}

function EditorNavBar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavBarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      data-slot="editor-nav-bar"
      className={cn(
        "fixed inset-x-0 top-0 z-50 grid h-14 grid-cols-[1fr_auto_1fr] items-center border-b bg-surface px-3",
        className
      )}
    >
      <div className="flex items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-expanded={isSidebarOpen}
          aria-controls="project-sidebar"
          onClick={onSidebarToggle}
        >
          <SidebarIcon aria-hidden="true" />
        </Button>
      </div>
      <div aria-label="Editor navigation center" />
      <div aria-label="Editor navigation actions" />
    </header>
  )
}

export { EditorNavBar }
export type { EditorNavBarProps }
