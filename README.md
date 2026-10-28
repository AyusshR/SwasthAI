# SwasthAI — Your Health, Made Simple
 
SwasthAI is a calm, accessible health-information website in **English and Hindi**. It helps people understand everyday health topics, medical reports, medicines, preventive care and mental wellbeing in plain language.
 
> **Important:** SwasthAI shares general health information only. It does not diagnose, treat or prescribe, and it cannot replace a doctor. In an emergency, call **112** (India).
 
> **Prototype status:** This is a front-end prototype. The AI chat and the report analysis are **simulated** with built-in sample content. No live AI model is connected. See [Current status](#current-status).
 
---
 
## Features
 
| Page | Route | What it does |
| --- | --- | --- |
| Home | `#/` | Hero, trust badges and cards for every feature |
| Health Assistant | `#/health-assistant` | Searchable information on 6 conditions (diabetes, hypertension, asthma, malaria, thyroid, dengue) |
| Report Explainer | `#/report-explainer` | Upload flow (PDF/JPG/PNG, max 10 MB) with a plain-language results table and saved summaries |
| Medicine Reminders | `#/medicine-reminder` | Add medicines, daily log, refill option; data saved per user |
| Preventive Health | `#/preventive` | General wellness education and a daily wellness log |
| Mental Wellbeing | `#/mental-wellbeing` | Supportive chat, mood tracker, breathing exercise, journal, crisis resources |
| Health Library | `#/health-library` | 10 categories of articles (diabetes, heart health, nutrition, sleep, first aid and more) |
| My Health | `#/my-health` | Personal dashboard of medicines, reports and moods (needs login) |
| Languages | `#/multilingual` | Voice-input and read-aloud demo for English and Hindi |
| Login / Sign Up | `#/auth` | Email and password accounts |
| About, Privacy, Terms, Contact, Disclaimer | `#/about`, `#/privacy`, `#/terms`, `#/contact`, `#/disclaimer` | Information pages |
 
### Accessibility and language
- English / हिंदी toggle, saved in your browser
- Text-size control and a High Contrast mode, saved in your browser
- Read-aloud (browser speech synthesis) on content
- Voice input using the browser's Web Speech API (`en-IN` or `hi-IN`)
### Safety
- A persistent medical disclaimer on every page
- The Mental Wellbeing page checks messages for crisis wording and shows support resources
- Report explanations are written to avoid diagnosis and encourage talking to a professional
---
 
## Tech stack
 
- **React 18** with **TypeScript**
- **Vite 7** (build tool and dev server)
- **Tailwind CSS 3** and **lucide-react** icons
- **Supabase** (email authentication and PostgreSQL with Row Level Security)
- Hash-based routing (`#/route`), so it works on any static host
---
 
## Getting started
 
### Prerequisites
- Node.js 18 or newer
- A free [Supabase](https://supabase.com) project
### 1. Install
```bash
npm install
```
 
### 2. Add your Supabase keys
Create a file named `.env` in the project root (it is already git-ignored):
 
```env
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```
 
The app will not start without these two values. Use the **anon (public)** key only. Never put a service-role key in front-end code.
 
### 3. Create the database
Run the SQL in `supabase/migrations/20261028064414_create_swasthai_schema.sql` in the Supabase SQL editor (or with the Supabase CLI: `supabase db push`).
 
It creates these tables, each with Row Level Security so users can only see and change their own rows:
 
`medicines`, `medicine_logs`, `mood_logs`, `wellness_logs`, `report_summaries`, `journal_entries`
 
### 4. Run it
```bash
npm run dev
```
Open the address shown in the terminal (usually http://localhost:5173).
 
---
 
## Scripts
 
| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |
 
---
 
## Project structure
 
```
src/
  App.tsx                 Routes
  main.tsx                Entry point
  components/             Header, Footer, Layout, Disclaimer, ReadAloud, Logo, PageHeader
  context/                AppContext (language, text size, contrast, routing), AuthContext (Supabase auth)
  data/                   diseases.ts and healthArticles.ts (written content)
  lib/                    supabase.ts (client) and translations.ts (English/Hindi text)
  pages/                  One file per page
  types/                  Shared TypeScript types
supabase/migrations/      Database schema and RLS policies
dist/                     Production build output
```
 
Imports use the `@/` alias for `src/` (for example `@/components/Header`).
 
---
 
## Translations
 
All interface text lives in `src/lib/translations.ts` as `{ en, hi }` pairs and is read with `t('key', language)`. To add or change text, edit both languages. The language you choose is saved in `localStorage` (`swasthai-lang`) and switching it does not reload the page.
 
---
 
## Deployment
 
```bash
npm run build
```
 
Upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your host's environment settings **before** building. A `_redirects` file is included for Netlify-style hosts. Because routing uses `#/`, no extra rewrite rules are needed.
 
---
 
## Current status
 
**Working:** English/Hindi, accessibility settings, authentication, per-user data with RLS (medicines, medicine log, moods, journal, wellness log, saved report summaries), the written health library, read-aloud and voice input.
 
**Simulated or not yet built** (be honest about these before any public launch):
- **Report Explainer:** uploads are validated, but analysis is a 2-second simulation that always returns the same synthetic sample results. Real text extraction (OCR / PDF reading) is not connected.
- **Mental Wellbeing chat:** replies are pre-written. No live AI is connected.
- **Health Assistant:** shows curated information on 6 conditions. It is not a live AI chat, and there is no `health-chat` backend function in this repository.
- **Medicine reminders:** the page stores schedules and a daily log. Browser notifications and push notifications are not implemented.
- **Not present:** Recharts-based charts, a Help/FAQ page, and a first-time tutorial.
### Suggested next steps
1. Add a Supabase Edge Function that calls an AI model, with the API key stored as a secret (never in the browser).
2. Keep the client-side emergency and crisis keyword checks running before any AI call.
3. Add real OCR / PDF text extraction for reports.
4. Add the notification and charting features.
5. Have a qualified clinician review all health content before launch.
---
 
## Privacy
 
- Language, text-size and contrast choices are stored only in your browser.
- Personal data is saved only for signed-in users, and Row Level Security keeps each user's rows private.
- Use only synthetic sample data while testing. Do not enter real medical records into a prototype.
---
 
## Disclaimer
 
SwasthAI is for general education. It is not medical advice, a diagnosis or a treatment plan. Always speak with a qualified healthcare professional about your health. If you think you are having an emergency, call **112** (India) or your local emergency number immediately.
