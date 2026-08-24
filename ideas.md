# Crimson Education HK Dashboard — Design Direction

## Ground-Truth Reference

The user's **HK Dashboard Webpage Framework** PDF is the ground-truth structural reference. Its priorities are a clean internal knowledge interface, clear tab and section hierarchy, modular UI-grid components, and concise operational content. The supplied Claude-generated HTML is the implementation base, while the content PDF is the source of HK-specific market information.

## Chosen Design Direction: Editorial Intelligence Console

### Design Movement

The interface follows **Swiss editorial information design adapted for an internal intelligence dashboard**. It combines disciplined typography, dense-but-controlled data presentation, and a practical left-hand navigation model rather than a marketing-style layout.

### Core Principles

1. **Clarity before decoration:** every visual treatment must improve scanning, comparison, or comprehension.
2. **Progressive disclosure:** summaries appear first, while long evidence and source details live in collapsible areas.
3. **Explicit information status:** complete, draft, and placeholder content must be visually distinguishable at a glance.
4. **HK context is primary:** labels and modules should communicate that this is a local operating resource rather than a global public website.

### Color Philosophy

Crimson red is used sparingly as an institutional signal for active navigation, section numbering, and critical data. Warm off-white and paper tones reduce fatigue during long internal reading sessions. Dark charcoal provides editorial authority, while amber marks incomplete content without implying an error. Green is reserved for strengths or validated operating guidance.

### Layout Paradigm

The page uses a **persistent left navigation rail paired with a wide editorial workspace**. Within each tab, an asymmetric two-column rhythm combines compact summary cards with wider comparison modules. Large tables remain scrollable, while concise insight cards stay visible and easy to scan.

### Signature Elements

- **Crimson section rails:** narrow red rules and numbered markers that guide the eye through long pages.
- **Status ribbons:** restrained labels for current, draft, source-backed, and placeholder content.
- **Briefing cards:** compact editorial cards with a clear headline, one-sentence takeaway, and optional detail disclosure.

### Interaction Philosophy

Navigation should feel immediate and utilitarian. Tab changes, filters, and disclosure controls receive short, responsive transitions. Interactions must never hide essential context or make the user wait for decorative effects.

### Animation

Content changes use subtle opacity and vertical translation under 220 ms with a strong ease-out curve. Hover states are limited to slight border, shadow, and color shifts. Keyboard-triggered interactions are effectively instant. All non-essential motion respects `prefers-reduced-motion`.

### Typography System

**Source Sans 3** is the primary interface and body typeface for high readability in dense English content. **Libre Baskerville** is used selectively for the dashboard title and editorial pull-quotes, creating a clear contrast between institutional identity and operational information. Section headings use Source Sans 3 at 650–750 weight; body copy remains 400–500 weight with generous line height.

### Brand Essence

**A private HK market intelligence console for Crimson strategists who need local context quickly and confidently.** Personality: precise, discreet, pragmatic.

### Brand Voice

Headlines are short, factual, and locally specific. CTAs use verbs that describe the exact action. Microcopy explains status without filler.

Example headline: **“What makes the HK client profile different?”**

Example CTA: **“Compare curricula”**

### Wordmark & Logo

The wordmark pairs the Crimson name with a compact **HK intelligence seal**: an abstract `C` formed by two opposing brackets around a central square, representing context, comparison, and an internal knowledge core. The symbol appears without text as the favicon and navigation mark.

### Signature Brand Color

**Harbour Crimson — `#9F1D35`**. This colour is used as a controlled navigation and emphasis signal, not as a broad background wash.

## Placeholder Rules

Incomplete subsections use a dedicated placeholder card with an amber status label and direct wording such as **“HK-specific content to be added”**. Placeholders must preserve the intended UI-grid structure so future content can be added without redesigning the page.

## Style Decisions

The interface will avoid generic centered dashboard layouts, excessive rounded containers, glossy gradients, and oversized marketing copy. The chosen design should always answer: **Does this choice make HK-specific information faster to find and easier to act on?**

The persistent left navigation rail remains the dominant console frame; the top bar supports search but does not replace the primary navigation. Libre Baskerville is reserved for the main dashboard title, key numeric statements, and rare editorial accents, while Source Sans 3 carries section titles, module headings, labels, navigation, and data hierarchy. The opening view prioritizes tab context, content status, and scan-ready section access over decorative imagery.
