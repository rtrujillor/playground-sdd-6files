import type { Metadata } from "next"

import { EditorWorkspace } from "@/components/editor/editor-workspace"

export const metadata: Metadata = {
  title: "Editor | Ghost AI",
}

export default function EditorPage() {
  return <EditorWorkspace />
}
