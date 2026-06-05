# Ayurveda Prakriti App — Project Writeup
**Vibe Coding Week 1 · June 2026**
*Built with Claude Code (Sonnet 4.6) + React + Tailwind CSS*

---

## 1. Project Overview

### What Was Built
A fully interactive **Ayurveda Prakriti (dosha) assessment web app**, deployed publicly on GitHub Pages at:
**https://rehanas.github.io/ayurveda-prakriti/**

The app guides users through a 35-question quiz to determine their Ayurvedic constitutional type (Prakriti), then delivers a personalised lifestyle guide based on their results.

### Core Features

| Feature | Details |
|---|---|
| **Assessment Quiz** | 35 questions across 5 categories: physical, physiological, mental, behavioral, emotional. Each answer maps to Vata, Pitta, or Kapha scoring. |
| **Results Page** | Donut chart showing dosha percentage breakdown. Supports single dominant, dual-dosha, and tridoshic constitutions. Displays traits, balanced/imbalanced states, elements, and qualities. |
| **Lifestyle Guide** | 4 tabbed sections: Dincharya (daily routine timeline), Ritucharya (6-season guide), Ahara (diet with food categories), Vyayama (exercise + yoga). |
| **PDF Download** | Generates a formatted 5-page PDF of the personalised lifestyle guide using jsPDF. |
| **Herb Warning Banner** | Disclaimer on every lifestyle guide page advising consultation with a practitioner before starting herbs, emphasising moderation and body awareness. |
| **Meet Coach Page** | Introduces Rehana Sheikh — bio, HAC credential (with certificate link), services, and email booking CTA. |

### Tech Stack
- **Frontend:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Chart:** Recharts (donut/pie chart)
- **PDF generation:** jsPDF
- **Data:** 6 structured JSON files (no backend, no database)
- **Deployment:** GitHub Pages via gh-pages npm package

---

## 2. Datasets Used

All content was stored in structured JSON files prepared before the coding session began. These lived in the `src/data/` folder.

### dosha_questions.json
- 35 questions across 5 categories
- Each question has 3 options, each mapped to a dosha (vata / pitta / kapha) with a score of 3
- Categories: physical traits, physiological traits, mental traits, behavioral patterns, emotional tendencies
- Subcategories include: body frame, skin, hair, eyes, teeth, nails, joints, digestion, sleep, learning style, memory, stress response, emotional tendencies

### dosha_profiles.json
- Full profiles for all 3 doshas: elements, qualities, summary, physical traits, mental traits, emotional traits, balanced state, signs of imbalance, seasonal vulnerability, time of day
- Dual-dosha profiles: Vata-Pitta, Pitta-Kapha, Vata-Kapha (with balancing focus)
- Tridoshic (Sama Prakriti) profile

### dincharya.json
- Daily routine for each dosha
- Each entry includes: time, activity name (in Sanskrit + English), details, and duration
- Covers: wake-up, warm water, elimination, oral care (oil pulling, tongue scraping), nasya, abhyanga (oil massage), exercise, breakfast, work, lunch, afternoon, dinner, evening wind-down, sleep

### ritucharya.json
- 6 seasons of the Ayurvedic calendar: Shishira (Late Winter), Vasanta (Spring), Grishma (Summer), Varsha (Monsoon), Sharad (Autumn), Hemanta (Early Winter)
- Each season contains: months, Western equivalent, dominant dosha, climate, Agni strength
- Per-dosha recommendations within each season: diet, lifestyle, exercise, herbs

### diet_recommendations.json
- Per-dosha general principles
- Tastes to favour and reduce (the 6 Ayurvedic tastes / rasas)
- Meal guidelines: breakfast, lunch, dinner, snacks
- Food categories with favour/avoid lists: grains, legumes, vegetables, fruits, dairy, oils, sweeteners, nuts & seeds, spices, meats, beverages

### exercise_recommendations.json
- Per-dosha principle, intensity, frequency, best timing
- Capacity rule (when to stop exercising)
- Recommended activities with details and frequency
- Activities to avoid
- Yoga asanas, pranayama practices, and yoga practices to avoid

---

## 3. Prompts Used During Vibe Coding

The session was conducted with a step-by-step approval workflow — Claude proposed each step and waited for confirmation before executing.

### Prompt 1 — Initial Build Request
```
Build a React web app for Ayurveda Prakriti (dosha) assessment with these features:
1. Assessment Quiz — 30+ questions covering physical traits (body frame, skin, hair,
   digestion, sleep), mental traits (learning style, memory, emotional tendencies),
   and behavioral patterns. Each answer maps to Vata, Pitta, or Kapha scoring.
2. Results Page — Show dominant dosha and dual-dosha combinations (e.g., Vata-Pitta)
   with percentage breakdown and a visual chart.
3. Full Lifestyle Guide based on results:
   - Dincharya (daily routine): wake time, oral care, abhyanga, exercise, meal timing,
     sleep schedule
   - Ritucharya (seasonal routine): seasonal adjustments per dosha
   - Diet recommendations: foods to favor and avoid, spices, meal guidelines
   - Exercise: suitable types and intensity per dosha
4. Design: Modern minimal UI, clean typography, earthy but contemporary color palette.
   Mobile responsive.
Use React + Tailwind CSS. All dosha data and recommendations should be stored in
structured JSON files.
```

### Prompt 2 — Use Existing Data & Rename Folder
```
I already have json files in current folder use them. rename the current folder to
ayurveda_app
```

### Prompt 3 — Deployment Request
```
How to make this public so that it is accessible on internet
```

### Prompt 4 — Feature Additions
```
add capability to download the lifestyle guide. Also add warning in the lifestyle page,
it is better to contact ayurvedic practioner before starting any herb. The key is
moderation and being body aware. Also add a Meet coach button and build a page
introducing me. Let me know what details you need for this. Ask before executing any step.
```

### Prompt 5 — Coach Page Content
```
1. Rehana Shake
2. extract from linkedin www.linkedin.com/in/rehanashake
3. [Full bio paragraph provided]
4. Added pdf of certificate in project folder
5. 60-min Prakriti consultation · 4-week personalised diet plan
6. for booking use email rehana.s.sheikh@gmail.com
```

### Prompt 6 — Photo
```
I added jpeg image
```

---

## 4. Iterations and Decisions Along the Way

### Iteration 1 — Vite Scaffolding in a Non-Empty Folder
**Problem:** `npm create vite@latest .` refused to run in a folder that already contained JSON files.
**Solution:** Scaffolded the Vite project in `/tmp/ayurveda_temp`, then copied all generated files into the target folder. The JSON files coexisted cleanly.

### Iteration 2 — Tailwind Version
**Decision:** Tailwind v4 was installed automatically. This version uses a completely different setup — no `tailwind.config.js`, no `@tailwind` directives. Instead: `@import "tailwindcss"` in CSS and `@tailwindcss/vite` as a Vite plugin. This was handled automatically.

### Iteration 3 — App.css
**Decision:** The default Vite `App.css` was flagged for deletion since Tailwind handles all styling. User chose to leave it. Since it was no longer imported in `App.jsx`, it had no effect — a safe choice.

### Iteration 4 — GitHub Authentication
**Problem:** `gh` CLI was not installed. SSH was not configured. HTTPS push failed with "Device not configured."
**Solution path:**
1. Installed `gh` CLI via Homebrew
2. Ran `gh auth login` → one-time device code flow via browser
3. Ran `gh auth setup-git` to wire the credential helper to git
4. Push succeeded on first try after setup

### Iteration 5 — PDF Generation Approach
**Options considered:**
- `html2canvas` + `jsPDF`: captures a screenshot of the DOM — good for visual fidelity but large file size and fragile with fonts
- Print CSS + `window.print()`: simple, but limited control over formatting and filename
- **jsPDF text-based (chosen):** Constructs the PDF programmatically from the JSON data. Clean output, small file size, reliable across browsers, no DOM dependency

### Iteration 6 — Coach Page Photo
**First version:** Used a styled "RS" initials avatar with a dark gradient as a placeholder.
**Update:** User added `Rehana.jpg` to `src/assets/` — replaced initials with the real photo in one edit.

### Iteration 7 — Booking Method
**Original plan:** Calendly link.
**Changed to:** `mailto:rehana.s.sheikh@gmail.com` — simpler, no external service dependency, user preferred direct email contact.

---

## 5. Learnings and Observations from the Workflow

### On the Vibe Coding Approach
- **JSON-first content design pays off.** Having all Ayurvedic content pre-structured in JSON meant zero time spent writing copy during the coding session. The components just consumed the data. This separation of content and code made the whole build faster and cleaner.
- **Step-by-step approval creates clarity.** Asking before executing each step added some back-and-forth, but it caught real issues early (e.g. the App.css deletion question, the repo name confirmation). It also made the process legible — the user always knew what was about to change.
- **Folder and file hygiene matters early.** The rename from "Vibe Coding Week1" to `ayurveda_app` before scaffolding would have avoided the Vite non-empty-directory issue. Starting with a clean, well-named folder is worth the 30 seconds.

### On AI-Assisted Coding
- **The model reads and reasons about data structure before writing components.** Reading all 6 JSON files before building the UI ensured the components matched the actual data shape — no mismatched keys or missing fields.
- **Deployment is the hardest part.** Writing the app took less time than getting it deployed. Authentication, CLI tools, and GitHub settings each required human decisions that could not be automated. Having the gh CLI installed and authenticated in advance would save significant time.
- **Prompts with constraints produce better output.** The most effective prompts in this session were specific: they named the feature, described the behaviour, and stated a preference (e.g. "moderation and body awareness" for the warning copy). Vague prompts like "make it nice" would have required more back-and-forth.
- **LinkedIn blocks automated scraping.** Attempting to extract profile data from LinkedIn returned a professional summary but no photo. Public profile data is accessible; media is not. Always have a local copy of assets you'll need.

### On Ayurveda App Design Specifically
- **Earthy ≠ dull.** The colour palette (warm cream background, terracotta accents, sage green, muted blue) worked well with Tailwind's arbitrary value syntax. Defining Vata/Pitta/Kapha brand colours early in `doshaUtils.js` kept the whole UI consistent without a design system.
- **Dual-dosha logic needed careful thought.** A simple "highest score wins" approach would miss the nuance of constitutions where two doshas are nearly equal. The 15% gap threshold for dual-dosha and 10% gap for tridoshic gave reasonable, clinically-aligned results.
- **The disclaimer matters.** The herb warning wasn't an afterthought — it was user-initiated and placed prominently. For any health-adjacent app, responsible communication is part of the design, not a footnote.

---

## 6. What's Next / Ideas for V2

- **Photo in quiz intro** — personalise the welcome screen with Rehana's photo
- **Shareable results link** — encode dosha scores in the URL so users can share their results
- **Email results** — let users email themselves the PDF directly from the app
- **Multi-language support** — Sanskrit terms with hover explanations for non-Ayurveda users
- **Progress persistence** — save quiz progress to localStorage so users can resume
- **Pitta/Vata/Kapha secondary guide toggle** — allow dual-dosha users to view both doshas' guides side by side
- **Analytics** — track which dosha is most common among users (privacy-safe, no PII)

---

*Document generated: June 2026*
*App repository: https://github.com/REhanaS/ayurveda-prakriti*
*Live app: https://rehanas.github.io/ayurveda-prakriti/*
