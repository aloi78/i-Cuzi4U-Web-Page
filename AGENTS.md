# AI Agent Guidelines: i-Cuzi4U Deep Cleaning Services Platform

These instructions ensure that all modifications, feature expansions, and code generations for the **i-Cuzi4U** platform remain aligned with the brand identity, localization requirements, technical constraints, and visual design systems.

---

## 1. Project Profile & Domain Context
*   **Brand Name**: i-Cuzi4U Cleaning Services
*   **Slogan**: *"Cleaning is Our Responsibility. i-Cuzi4U Je!"*
*   **Niche**: Premium, professional, and clinical-grade deep cleaning hygiene (not standard maid services).
*   **Core Services**: Deep sanitization and extraction of Mattress, Sofa, Car Interior, Curtain, Carpet, and Kitchen Hood & Hob.
*   **Primary Tech**: German Kärcher® deep-cleaning tech & Eco-Friendly sanitizing solutions.
*   **Target Region**: Klang Valley, Malaysia (Kuala Lumpur, Selangor, PJ, Subang, Shah Alam, etc.).
*   **Business Model**: Lead generation funnel driving customers directly to WhatsApp booking (`+60 11-6263 8228`).

---

## 2. Visual Identity & Brand Standards

### A. Color Palette
Maintain strict usage of the custom, high-contrast, professional color scheme:
*   **Primary Accent**: `#0D49CD` (Super Blue) - conveys clinical cleanliness, trust, and premium service.
*   **Action Accent**: `#3AD2FF` (Psychedelic Aqua) - used for interactive cues, buttons, and highlights.
*   **Branding Highlights**:
    *   `#FFD800` (Bright Yellow) - specifically used to highlight "4" in the global "4U" brand strings.
    *   `#3AD2FF` (Aqua) - specifically used to highlight "U" in "4U" brand strings.
*   **Backgrounds**: Soft off-whites (`#F9F9F9`), clean whites, and high-contrast dark charcoal text (`#333333`) to avoid muddy gray layouts.

### B. Typography & Text Formatting
*   **Interactive Brand Text**: Always use the `renderBrandText` helper function from `src/App.tsx` when rendering headings containing "4" and "U" (or Malay "Untuk Anda" / Chinese "为您"), ensuring consistent color-accentuation.
*   **Display Pairing**: Use clean sans-serif typography with generous spacing (`tracking-tight`) for hero layouts, paired with elegant mono fonts (`font-mono`) for technical tags, prices, and stats.

---

## 3. Localization & Multi-language (i18n) Rules
This is a highly localized product for the Malaysian market.
*   **Supported Languages**: English (`en`), Malay (`ms`), and Chinese (`zh`).
*   **Sync Requirement**: **NEVER** add text directly as a hardcoded string in UI files.
    *   All customer-facing copy must be configured under key-value pairs in `src/i18n.ts`.
    *   When adding or modifying UI components, you **MUST** update the `en`, `ms`, and `zh` translation blocks simultaneously to maintain zero locale gaps.
*   **Terminology consistency**:
    *   *English*: Use "Klang Valley", "Kärcher® technology", and "Eco-Friendly Solutions".
    *   *Malay*: Use "Lembah Klang", "teknologi Kärcher®", and "bahan kimia mesra alam".
    *   *Chinese*: Use "巴生谷", "德国 Kärcher® 技术", and "环保清洁剂".

---

## 4. Technical Constraints & Framework Stack

*   **Runtime Environment**: React 19, Vite 6, Tailwind CSS v4, TypeScript.
*   **Styling**: Use Tailwind CSS v4 classes exclusively via `@import "tailwindcss";` inside `src/index.css`. Do not write standalone CSS modules or inline `style={...}` attributes.
*   **Animations**: Leverage `motion` and `AnimatePresence` from `motion/react` for elegant micro-interactions, responsive mobile menus, lazy-loaded scroll entrances, and fluid transition views. Keep layouts lightweight and avoid heavy, sluggish libraries.
*   **Icons**: Import all icons strictly from `lucide-react`. Do not write inline custom SVG code.
*   **Lead-Capture Funnel**:
    *   Ensure all CTAs use `WHATSAPP_LINK(message)` from `src/constants.ts` to forward intent-based, custom pre-filled message templates to the correct phone number (`601162638228`).
    *   The privacy policy page must maintain its clean localized copy and comply with standard PDP standards.

---

## 5. Model Selection & AI Generation Standards
*   **Aesthetic Priority**: Ensure the design layout feels like a crafted, modern Swiss/Nordic digital landing card. Never use standard generic blocks, cookie-cutter cards, or low-quality AI-generated margins.
*   **Zero AI-Slop Guideline**: Do not add unrequested telemetry lines, terminal mock files, or placeholder stats blocks unless specifically requested. All information should be genuine, premium copy tailored for high-ticket home cleaning services.

---

## 6. Search Engine Optimization (SEO) & Multilingual Marketing Guidelines

As a high-conversion lead generation platform targeting affluent home and commercial clients in Malaysia, SEO and organic crawlability are business-critical. Follow these principles for all code edits:

### A. Core SEO Target Keywords
Any copy generation or meta-information updates must naturally integrate these high-intent local search terms:
*   **English**: "deep mattress cleaning KL", "sofa cleaning service Selangor", "professional couch extraction PJ", "car seat sanitization Klang Valley", "dust mite removal Malaysia", "Kärcher deep cleaning service".
*   **Malay**: "servis cuci tilam dalaman", "cuci sofa Selangor KL", "cuci kusyen kereta", "cuci karpet Klang Valley", "basmi hama habuk rumah".
*   **Chinese**: "吉隆坡除尘螨服务", "雪兰莪深层床垫清洗", "专业沙发清洗", "巴生谷地毯清洁", "汽车座椅消毒".

### B. Dynamic Metadata & i18n Sync
Because this is a multi-language Single Page Application (SPA), keep the page metadata in sync when the user switches languages:
*   Update `document.title` and `meta[name="description"]` dynamically in the language toggle callback or a lightweight hook triggered by the language state.
*   **Multilingual Meta Descriptions**:
    *   *EN*: "i-Cuzi4U deep cleaning services in Klang Valley. Clinical-grade mattress, sofa, curtain, carpet, and car interior extraction & sanitization using eco-friendly German Kärcher® technology."
    *   *MS*: "Servis pembersihan mendalam i-Cuzi4U di Lembah Klang. Servis basuh dan sanitasi tilam, sofa, langsir, permaidani, dan dalaman kereta menggunakan teknologi Jerman Kärcher® yang mesra alam."
    *   *ZH*: "i-Cuzi4U 巴生谷专业深层清洁服务。采用安全环保的德国 Kärcher® 技术，为您提供床垫、沙发、窗帘、地毯及汽车内饰的深层抽吸与除螨消毒服务。"

### C. Semantic Markup & Access Hierarchy
*   **Logical Heading Structure**: Ensure each page or view has exactly one `<h1>` element, with subsequent subheadings ordered sequentially (`<h2>`, `<h3>`). Do not skip heading levels for styling reasons; use Tailwind classes for size adjustment instead.
*   **Image Optimization & Alt Copy**: Every `<img>` tag must include descriptive, SEO-rich `alt` copy localized via `src/i18n.ts` (e.g. `alt={t('seo.mattressCleanAlt')}`). Never leave an `alt` attribute blank or generic like "image" or "cleaning".
*   **Structured Data (JSON-LD Schemas)**: Maintain and inject structured `LocalBusiness` or `ProfessionalService` JSON-LD schema tags inside the index or root to explicitly tell search engines about i-Cuzi4U's operational region (Klang Valley), service list, address details, and primary contact number.

