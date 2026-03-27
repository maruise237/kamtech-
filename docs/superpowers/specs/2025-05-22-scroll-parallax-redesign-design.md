# Design Spec: Staggered Parallax Redesign (KAMTECH IA)

## 1. Overview
The current "Problem," "Solutions," "For Who," "Process," and "FAQ" sections are static and contrast sharply with the high-end, scroll-linked animations of the Hero and Gallery sections. This redesign introduces a unified **Staggered Parallax System** to bring these sections to life while maintaining the "Vercel-style" monochromatic aesthetic.

## 2. Goals
- **Coherence**: Ensure all sections feel like part of the same "living" document as the Hero.
- **Performance**: Maintain 60fps animations using `requestAnimationFrame` and CSS transforms.
- **Maintainability**: Create a reusable hook and component to easily add animations to future sections.

## 3. Architecture

### 3.1 `useScrollProgress` Hook
A custom React hook that calculates the scroll progress of a specific DOM element.
- **Inputs**: `ref: React.RefObject<HTMLElement>`, `threshold?: number` (offset for when progress starts).
- **Output**: `progress: number` (0 to 1).
- **Mechanism**: Attaches a scroll listener and uses `getBoundingClientRect()` within a `requestAnimationFrame` loop to calculate the element's position relative to the viewport.

### 3.2 `ScrollReveal` Component
A wrapper component that applies parallax and opacity effects based on the `progress` value.
- **Props**:
  - `progress`: The value from the hook.
  - `offset`: Vertical/Horizontal travel distance (in pixels).
  - `direction`: 'up' | 'down' | 'left' | 'right' | 'scale'.
  - `delay`: A multiplier to stagger the start of the animation (0 to 1).
  - `speed`: A multiplier for the parallax effect (0.5 to 1.5).

## 4. Section-Specific Designs

### 4.1 Headers (Problem, Solution, Process, etc.)
- **Effect**: Subtle 40px "lift".
- **Logic**: Fades from 0 to 1 as the section enters the bottom 30% of the viewport.

### 4.2 Grid Cards (Problem, Solution)
- **Effect**: 80px vertical "rise".
- **Stagger**: Each card in a 3-column grid is assigned a different speed (e.g., Card 1: 0.9x, Card 2: 1.0x, Card 3: 1.1x).
- **Look**: Cards "spread out" vertically as they rise, settling into place as the user continues scrolling.

### 4.3 Checklist (For Who)
- **Effect**: 20px horizontal "slide-in" from the left.
- **Logic**: Items reveal sequentially based on their index in the array, creating an "unfolding" effect.

### 4.4 FAQ (Accordion)
- **Effect**: Scale-up (0.95 to 1.0) and soft fade.
- **Logic**: Entire FAQ container rises as a single unit to ensure readability isn't compromised by varying speeds.

## 5. Constraints & Refinements
- **Hero Preservation**: The "KAMTECH" hero text remains at `z-0` behind the transparent subject (`z-10`). This redesign does NOT affect the hero layering.
- **Reduced Motion**: The system will respect `prefers-reduced-motion` media queries by disabling transforms and only using simple fades.
- **SSR Safety**: The scroll hook will check for `window` existence to prevent hydration errors.

## 6. Testing & Verification
- **Visual Check**: Scroll through all sections in both Light and Dark modes.
- **Performance**: Monitor Frame Rate in DevTools to ensure no drops during rapid scrolling.
- **Responsive**: Verify the "slide-in" effects don't cause horizontal overflow on mobile devices.
