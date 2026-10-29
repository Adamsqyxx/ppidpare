---
name: PPID Kota Parepare Civic System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f493f'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#006c4e'
  on-secondary: '#ffffff'
  secondary-container: '#97f5cc'
  on-secondary-container: '#007353'
  tertiary: '#4d586c'
  on-tertiary: '#ffffff'
  tertiary-container: '#657085'
  on-tertiary-container: '#f1f4ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#97f5cc'
  secondary-fixed-dim: '#7bd8b1'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-2xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-2xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.025em
  code-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
---

## Brand & Style

This design system establishes a high-trust, institutional, and radically transparent digital interface for the Pejabat Pengelola Informasi dan Dokumentasi (PPID) Pemerintah Kota Parepare. The visual personality balances public-sector authority with human-centered civic hospitality: calm, dependable, dignified, and impeccably organized.

The design movement combines **Contemporary Public Minimalist** principles with precision-engineered component structures inspired by modern utility-first interfaces (such as shadcn/ui). This avoids bureaucratic visual clutter in favor of crisp delineation, deliberate structural rhythm, and zero-compromise legibility. 

Key attributes:
- **Authority & Dignity:** Communicated through deep institutional greens, crisp typography, and formal spatial discipline.
- **Radical Transparency & Clarity:** Fast document retrieval, unmistakable information categorization, and distinct visual statuses.
- **Universal Civic Accessibility:** Strict compliance with WCAG 2.2 AA standards, ensuring high contrast, distinct focus rings, large touch targets, and assistive-technology-friendly layouts across diverse demographics and devices.

## Colors

The color palette is anchored in authoritative civic emerald and forest green hues, complemented by high-contrast slate neutrals and dedicated semantic tokens. The system operates natively in **light mode** to mirror physical civic documents, white papers, and official transparency portals.

### Palette Architecture
- **Primary Institutional Green:**
  - `primary`: `#15803d` (Green 700) – Primary action buttons, active navigation markers, key brand anchors. Contrast against white: 4.8:1.
  - `primary-dark`: `#166534` (Green 800) – Hover states, dark accents, and active focus boundaries.
  - `primary-surface`: `#f0fdf4` (Green 50) – Subtle background fills for selected items and highlight callouts.
- **Secondary Civic Teal-Green:**
  - `secondary`: `#047857` (Emerald 700) – Secondary action triggers, auxiliary links, and status accents.
  - `secondary-focus`: `#059669` (Emerald 600) – Dedicated accessible keyboard focus ring indicator.
- **Neutrals & Surfaces:**
  - `background`: `#f8fafc` (Slate 50) – Canvas background delivering clean contrast without harsh glare.
  - `surface`: `#ffffff` (White) – Primary card, dialog, table, and input background.
  - `surface-muted`: `#f1f5f9` (Slate 100) – Table headers, code blocks, and subtle structural dividers.
  - `border`: `#e2e8f0` (Slate 200) – Standard structural border for cards, inputs, and tab rails.
  - `border-strong`: `#cbd5e1` (Slate 300) – High-definition border for interactive components and hover borders.
- **Typography & Text Contrast:**
  - `text-primary`: `#0f172a` (Slate 900) – Primary text, titles, data values (Contrast: 15.6:1 against `#f8fafc`).
  - `text-secondary`: `#334155` (Slate 700) – Form labels, table headings, SLA metadata (Contrast: 6.8:1 against `#ffffff`).
  - `text-muted`: `#64748b` (Slate 500) – Ancillary helper text, timestamps, and icons (Contrast: 4.6:1 against `#ffffff`).

### Semantic Status Badges & SLA Tokens
- **Informasi Berkala (Periodic):** Fill `#ecfdf5` (Emerald 50), Text `#065f46` (Emerald 800), Border `#a7f3d0`.
- **Informasi Serta-Merta (Immediate):** Fill `#fff7ed` (Orange 50), Text `#9a3412` (Orange 800), Border `#fed7aa`.
- **Informasi Setiap Saat (Available Anytime):** Fill `#eff6ff` (Blue 50), Text `#1e40af` (Blue 800), Border `#bfdbfe`.
- **Status Diproses (In Progress):** Fill `#fefce8` (Yellow 50), Text `#854d0e` (Yellow 800), Border `#fef08a`.
- **Status Selesai (Completed):** Fill `#f0fdf4` (Green 50), Text `#166534` (Green 800), Border `#bbf7d0`.
- **Status Ditolak / Terlambat (Overdue / Rejected):** Fill `#fef2f2` (Red 50), Text `#991b1b` (Red 800), Border `#fecaca`.

## Typography

The type system pairs **Plus Jakarta Sans** for headlines and structural titling with **Inter** for dense civic tables, search results, forms, and administrative body text. 

- **Plus Jakarta Sans (Headings):** Provides crisp modern geometry, distinctive character, and civic dignity while avoiding corporate blandness. Used exclusively in semi-bold and bold weights to provide structural clarity.
- **Inter (Body & Controls):** Delivers tall x-height, clear optical counters, and unambiguous differentiation between confusing glyphs (e.g., `1`, `I`, `l`), essential for tracking registration codes (`Kode Permohonan`), citizen identity numbers (NIK), and legal mandate citations.

### Formatting Rules
- Never use pure black text on white; `#0f172a` eliminates harsh glare during prolonged public reading.
- Body paragraphs default to `body-md` (16px / 24px) to respect default browser accessibility baselines.
- Minimum interactive control font size is strictly `14px` (`label-md`).
- Metadata chips and SLA badges use `label-sm` (12px) with medium-to-semibold tracking (+0.025em) and uppercase transform where appropriate for instant recognition.

## Layout & Spacing

The layout is built upon a standard 8pt spatial grid configured to a maximum content width of 1280px (`max-w-7xl`). It prioritizes linear predictability, tabular scanability, and effortless navigation for citizens filing freedom-of-information requests.

### Grid & Breakpoints
- **Mobile (< 640px):** 4 columns, `margin-mobile` (16px), `gutter-mobile` (16px). Form controls stack vertically with minimum 44px hit-target heights.
- **Tablet (640px – 1023px):** 8 columns, `margin` (32px), `gutter` (24px). Sidebar filters collapse into an accessible modal drawer.
- **Desktop (1024px+):** 12 columns, `margin` (32px), `gutter` (24px). Fixed or sticky 3-column navigation / filter rail alongside a 9-column document table or application view.

### Layout Rhythm
- Section gaps follow `space-2xl` (48px) on mobile and `space-3xl` (64px) on desktop.
- Component-level internal padding adheres to strict pairs: `space-md` (16px) for compact widgets, `space-lg` (24px) for cards, and `space-xl` (32px) for critical administrative panels.

## Elevation & Depth

To maintain a crisp, modern governmental feel inspired by shadcn/ui, the design system avoids heavy, muddy drop shadows. Depth is achieved primarily through **low-contrast outlines, white surface stacking, and subtle ambient shadows**.

### Elevation Scale
1. **Level 0 (Flat Canvas):** `#f8fafc`. All cards and content blocks sit directly on this canvas.
2. **Level 1 (Surface Cards & Inputs):** `#ffffff` background with a 1px solid `#e2e8f0` border and an ultra-subtle ambient shadow:
   `0 1px 2px 0 rgba(15, 23, 42, 0.05)`.
3. **Level 2 (Hovered Cards & Interactive States):** `#ffffff` surface, border transitions to `#cbd5e1`, with elevated ambient shadow:
   `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
4. **Level 3 (Dropdown Menus, Popovers & Tooltips):** Floating container with border `#e2e8f0` and clean directional depth:
   `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.
5. **Level 4 (Modals & Administrative Sheets):** Backed by backdrop overlay `rgba(15, 23, 42, 0.45)` with subtle backdrop blur (`4px`):
   `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.

## Shapes

The interface employs a tailored **Soft (`1`)** shape language that aligns with modern minimalist component libraries:

- **Inputs, Buttons, Badges, and Small Controls:** `0.375rem` (6px) border radius. This gives an intentional, structured, and modern look without feeling aggressively blocky or childishly rounded.
- **Cards, Panels, and Dialogs (`rounded-lg`):** `0.5rem` (8px) border radius, delivering gentle containment while preserving crisp rectangular reading lines.
- **Large Hero Banners & Feature Blocks (`rounded-xl`):** `0.75rem` (12px) border radius.
- **Status Pills & Count Badges:** Fully rounded `9999px` to signify non-interactive metadata or discrete categorical filters.

## Components

### 1. Buttons
- **Primary:** Solid `#15803d` background, `#ffffff` text, 6px border radius, font-weight 500, height 40px (desktop) or 44px (touch). Hover: `#166534`. Active: `#14532d`.
- **Secondary:** Solid `#ffffff` background, 1px border `#e2e8f0`, `#0f172a` text. Hover: `#f8fafc` background, border `#cbd5e1`.
- **Destructive:** Solid `#dc2626` background, `#ffffff` text. Hover: `#b91c1c`.
- **Ghost:** Transparent background, `#334155` text. Hover: `#f1f5f9` background.
- **Focus Rings:** All buttons must show an unambiguous focus state: `outline: 2px solid #059669; outline-offset: 2px;` on `:focus-visible`.

### 2. Form Inputs & Search Fields
- **Base Input:** 40px height, background `#ffffff`, border 1px solid `#e2e8f0`, text `#0f172a`, placeholder text `#94a3b8`.
- **Focus State:** Border changes to `#15803d`, accompanied by `box-shadow: 0 0 0 2px rgba(21, 128, 61, 0.2)`.
- **Error State:** Border changes to `#dc2626`, with descriptive helper text below in 12px `#b91c1c` containing an SVG warning icon.
- **Accessible Citizen Search:** Includes prominent leading search icon (`20px`), integrated trailing keyboard shortcut badge (`Ctrl + K`), and explicit `aria-label="Cari dokumen informasi publik"`.

### 3. Checkboxes & Radio Buttons
- **Checkbox:** 18px × 18px, 4px border radius. Unchecked: `#ffffff` with 1.5px border `#94a3b8`. Checked: `#15803d` fill with bold white checkmark SVG.
- **Radio Button:** 18px × 18px, 50% border radius. Checked: `#15803d` ring with a 6px centered green inner dot.
- **Hit Area:** Enclosed in minimum 44px × 44px clickable label container for mobile accessibility.

### 4. SLA & Category Status Badges
- **Structure:** Inline-flex, 22px height, 4px horizontal padding, 6px border radius, 12px font size, font-weight 600.
- **Color Matrix:**
  - *Berkala:* Background `#ecfdf5`, Border `#a7f3d0`, Text `#065f46`.
  - *Serta-Merta:* Background `#fff7ed`, Border `#fed7aa`, Text `#9a3412`.
  - *Setiap Saat:* Background `#eff6ff`, Border `#bfdbfe`, Text `#1e40af`.
  - *Diproses:* Background `#fefce8`, Border `#fef08a`, Text `#854d0e`.
  - *Selesai:* Background `#f0fdf4`, Border `#bbf7d0`, Text `#166534`.
  - *Terlambat / Ditolak:* Background `#fef2f2`, Border `#fecaca`, Text `#991b1b`.

### 5. Cards & Civic Document Listings
- **Document Card:** Background `#ffffff`, border 1px solid `#e2e8f0`, border radius 8px, padding 20px. 
- **Layout:** Header row displays registration ID (`Kode PPID`) and SLA Badge; body displays document title in `Plus Jakarta Sans` semi-bold; footer displays publishing date, requesting agency/OPD, download format badge (`PDF`, `XLSX`), and accessible download link button.

### 6. Public Notification & Alert Banners
- **Civic Notice Box:** Left border 4px solid `#15803d`, background `#f0fdf4`, padding 16px, text `#166534`. Used for statutory deadlines according to UU KIP (Undang-Undang Keterbukaan Informasi Publik No. 14 Tahun 2008).