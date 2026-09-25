# Architecture Context

## Stack

| Layer     | Technology                  | Role   |
| --------- | --------------------------- | ------ |
| Framework | Next.js + TypeScript | Full-stack app with server/client boundaries |
| UI        | Tailwind + shadcn/ui | Component composition and styling |
| Auth      | Clerk                | User Identity and route protection |
| Database  | Prisma + PostgreSQL  | Relational - Metadata, Projects, Collaborators, Specs, Task runs |
| Canvas    | Liveblocks + React Flow | Real-time collaborative canvas, presence, and cursors |
| Background tasks | Trigger.dev           | Durable AI generation workflows |
|  Artifact storage | Versel blob  | Canvas snapshots and generated Markdown specs |

## System Boundaries

- App/API authenticated request handlers as input validation, ownership checks, testing, and persistence 
- Trigger long-running background jobs: AI design generation and spec generation. 
- Lib shared infrastructure Prisma client access control helpers and utilities 
- Components, UI composition, canvas surfaces, sidebars, dialogs, and interactive elements 
- Prisma database schema and generated client output 
- Data: legacy local directory, not used for new artifacts. 

## Storage Model

- Database, metadata, ownership relationships, and task run records 
- Vercel Blob:  generated artifacts: Canvas snapshots at canvas/{projectID}.json and specs at specs/{projectID}/{specID}.md 
- Project records, spec records, and task run records belong in PostgreSQL. 
- Canvas content and Markdown output are stored and retrieved from Vercel Blob. 
- The blob URL is stored in the database (canvasJsonPath,filePath) as the reference to the artifact. 

## Auth and Collaboration Model

- Every project has a single owner Clerk user ID.
- Projects can include additional collaborators.
- Only authenticated users can access protected routes.
- Only the owner or a collaborator can mutate project resources.
- Live blocks room tokens are issued only after verifying project membership.

## Starter system designs 

- Preview templates are static canvas snapshots stored in the codebase. 
- Templates are loaded into the active Lifeblocks room when a user imports one. 
- Import Canuckur on canvas creation or from within the editor at any time. 
- Template data follows the same node/edge schema as user-created canvas. 


## Invariants

- Request handlers do not run long-lived AI work that belongs in background tasks.
- Metadata and large generated artifacts are stored in separate layers.
- Auth and ownership are enforced at every mutation boundary.
- Client components are used only where browser interactivity or real-time state requires them.
- The canvas schema must remain consistent between user-created content and imported templates.
