# Design Guidelines: School Fair Blog Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from community-focused educational platforms and modern blog designs that balance professionalism with warmth and accessibility.

## Color Strategy
**Warm, Empathetic Palette** (User Requirement):
- **Primary**: Warm orange (#FF6B35, #F7931E) - Energy and enthusiasm
- **Secondary**: Soft coral (#FF8C61) and amber (#FDB44B) - Solidarity and warmth
- **Accent**: Deep terracotta (#D9534F) for CTAs - Action and engagement
- **Neutrals**: Cream (#FFF8F0) backgrounds, warm gray (#4A4A4A) text
- **Supporting**: Soft yellow (#FFE66D) for highlights

## Typography
- **Headings**: Poppins (Bold 700, SemiBold 600) - Friendly, modern, approachable
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl lg:text-5xl
  - H3: text-2xl md:text-3xl
- **Body**: Inter (Regular 400, Medium 500) - Clean readability
  - Base: text-base md:text-lg
  - Small: text-sm md:text-base

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-20 lg:py-24
- Container: max-w-7xl mx-auto px-4 md:px-6
- Component spacing: gap-6 md:gap-8
- Card padding: p-6 md:p-8

## Component Library

### Navigation
- Sticky header with blur backdrop
- Logo left, horizontal menu center/right on desktop
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections with offset for fixed header

### Hero Section
- Large hero image showcasing school fair atmosphere (students, activities, community)
- Image treatment: Subtle warm gradient overlay (orange-to-transparent)
- Centered content with compelling headline
- Dual CTAs: Primary "Conocer Más" + Secondary "Ver Actividades"
- Buttons on images: Blurred background (backdrop-blur-md bg-white/20)
- Height: min-h-[500px] md:min-h-[600px] lg:min-h-[700px]

### Content Sections (5-7 sections)
1. **Inicio (Hero)**
2. **Quiénes Somos**: 2-column layout (image + text), team photos, mission statement
3. **Objetivos**: Icon cards in 3-column grid, each with warm-colored icon background
4. **Actividades/Eventos**: Card grid showcasing fair activities with images
5. **Blog/Noticias**: Featured posts with thumbnail images, 2-column layout
6. **Galería**: Masonry grid or 3-4 column photo grid
7. **Contacto/Participación**: Form + info card side-by-side

### Cards
- Rounded corners: rounded-2xl
- Soft shadows: shadow-lg hover:shadow-xl
- Warm accent borders on hover
- Image + title + description + CTA pattern

### Call-to-Action Buttons
- **Primary**: Solid terracotta background, white text, generous padding (px-8 py-4)
- **Secondary**: Outlined with warm orange border, transparent background
- Rounded: rounded-full for friendly feel
- Text: font-semibold text-base md:text-lg

### Footer
- Multi-column layout: Quick links, Contact info, Social media, Newsletter signup
- Newsletter form with CTA
- Social icons with warm accent on hover
- School/fair logo and mission tagline

## Images
**Required Images**:
1. **Hero**: Wide shot of school fair - students engaged in activities, booths, community atmosphere
2. **Quiénes Somos**: Group photo of organizing team/students
3. **Actividades**: 4-6 photos of different fair activities
4. **Galería**: 9-12 candid moments from previous fairs/preparations

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-4 column grids, full horizontal menu)

## Accessibility
- High contrast ratios (warm colors against cream backgrounds)
- Clear focus states with warm accent outlines
- Semantic HTML5 structure
- Alt text for all images
- Keyboard navigation support

## Visual Hierarchy
- Large, bold headings with warm accent underlines
- Generous whitespace between sections
- Progressive disclosure: important info above fold
- Strategic use of warm-colored backgrounds for section variation (alternating cream/white)