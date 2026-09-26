import type { Metadata } from "next"

import { EditorWorkspace } from "@/components/editor/editor-workspace"

export const metadata: Metadata = {
  title: "Editor | Ghost AI",
}

/** Renders the editor workspace; route protection is handled by the proxy. */
export default function EditorPage() {
  return <EditorWorkspace />
}
