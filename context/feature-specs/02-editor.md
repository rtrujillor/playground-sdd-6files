We need the base Chrome components that frame every editor screen -  the top nav bar and the left sidebar shell. These will be reused and extended in every chapter that follows.

### Editor nav bar

Create `components/editor/editor-nav-bar.tsx`.
Requirements:

- Fix the top nav bar with left, center, and right sections.
- The left section contains the sidebar toggle button.
- Use panel-left-open and panel-left-close icons based on sidebar state.
- The right section stays empty for now.
- Dark background with subtle bottom border

### Project sidebar

Create components/editor/project-sidebar.tsx 

Requirements 

- The sidebar should float above the editor canvas. 
Opening it should not push page content. 
Slides in from the left. 
Accepts  isOpen prop. 
Header with project's title plus close button 
Use shadcn tabs: 
- my projects 
- Shared
Both tabs show an empty placeholder state. 
Full width new project button at the bottom with plus icon  

### Dialog Pattern

Use the existing color tokens from global.css for dialog styling. Support:
- title
- description
- footer actions
Do not build actual dialogs yet.

### Check when done

- new compoenents compile without Typesrcriot errors
- No lint errors. 
- Dialog pattern is ready for future use. 

