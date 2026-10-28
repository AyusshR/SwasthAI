/*
# SwasthAI — Core Schema

## Overview
Creates the core data tables for the SwasthAI healthcare companion app.
All tables are user-scoped (multi-tenant via auth.users) with owner-based RLS.

## New Tables

1. **medicines** — Stores a user's medicine schedule and reminder settings.
   - id (uuid PK)
   - user_id (uuid FK → auth.users, defaults to auth.uid())
   - name (text) — medicine name as prescribed
   - dosage (text) — dosage instructions as written
   - times (text[]) — reminder times in HH:MM format
   - frequency (text) — daily, weekdays, etc.
   - status (text) — active | paused
   - refill_reminder (boolean)
   - created_at (timestamptz)

2. **medicine_logs** — Tracks each dose action (taken/pending/skipped) per day.
   - id (uuid PK)
   - user_id (uuid FK → auth.users)
   - medicine_id (uuid FK → medicines)
   - scheduled_time (text) — HH:MM
   - status (text) — taken | pending | skipped
   - logged_date (date)
   - logged_at (timestamptz)

3. **mood_logs** — Daily mood tracker entries with optional notes.
   - id (uuid PK)
   - user_id (uuid FK → auth.users)
   - mood (text) — happy | calm | okay | anxious | sad
   - note (text, nullable)
   - logged_date (date)
   - created_at (timestamptz)

4. **wellness_logs** — Daily wellness checklist tracking.
   - id (uuid PK)
   - user_id (uuid FK → auth.users)
   - logged_date (date)
   - activity_minutes (int, default 0)
   - sleep_hours (numeric, nullable)
   - water_glasses (int, default 0)
   - checklist_items (jsonb) — completed habit flags
   - created_at (timestamptz)

5. **report_summaries** — Saved medical report explanation summaries.
   - id (uuid PK)
   - user_id (uuid FK → auth.users)
   - title (text)
   - summary (jsonb) — structured test result explanations
   - original_filename (text)
   - created_at (timestamptz)

6. **journal_entries** — Mental wellbeing positive habit journal.
   - id (uuid PK)
   - user_id (uuid FK → auth.users)
   - content (text)
   - created_at (timestamptz)

## Security
- RLS enabled on all tables.
- Grants only to `authenticated` (app requires sign-in).
- Owner-scoped CRUD policies using auth.uid() = user_id.
- service_role granted for edge function access if needed.
- All owner columns default to auth.uid() so frontend inserts succeed.
*/

-- 1. medicines
CREATE TABLE IF NOT EXISTS medicines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  dosage text NOT NULL DEFAULT '',
  times text[] NOT NULL DEFAULT '{}',
  frequency text NOT NULL DEFAULT 'daily',
  status text NOT NULL DEFAULT 'active',
  refill_reminder boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE medicines ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON medicines TO authenticated;

DROP POLICY IF EXISTS "select_own_medicines" ON medicines;
CREATE POLICY "select_own_medicines" ON medicines FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_medicines" ON medicines;
CREATE POLICY "insert_own_medicines" ON medicines FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_medicines" ON medicines;
CREATE POLICY "update_own_medicines" ON medicines FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_medicines" ON medicines;
CREATE POLICY "delete_own_medicines" ON medicines FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- 2. medicine_logs
CREATE TABLE IF NOT EXISTS medicine_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  medicine_id uuid NOT NULL REFERENCES medicines(id) ON DELETE CASCADE,
  scheduled_time text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  logged_date date NOT NULL DEFAULT CURRENT_DATE,
  logged_at timestamptz DEFAULT now(),
  UNIQUE(medicine_id, scheduled_time, logged_date)
);

ALTER TABLE medicine_logs ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON medicine_logs TO authenticated;

DROP POLICY IF EXISTS "select_own_medicine_logs" ON medicine_logs;
CREATE POLICY "select_own_medicine_logs" ON medicine_logs FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_medicine_logs" ON medicine_logs;
CREATE POLICY "insert_own_medicine_logs" ON medicine_logs FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_medicine_logs" ON medicine_logs;
CREATE POLICY "update_own_medicine_logs" ON medicine_logs FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_medicine_logs" ON medicine_logs;
CREATE POLICY "delete_own_medicine_logs" ON medicine_logs FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- 3. mood_logs
CREATE TABLE IF NOT EXISTS mood_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  mood text NOT NULL,
  note text,
  logged_date date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE mood_logs ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON mood_logs TO authenticated;

DROP POLICY IF EXISTS "select_own_mood_logs" ON mood_logs;
CREATE POLICY "select_own_mood_logs" ON mood_logs FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_mood_logs" ON mood_logs;
CREATE POLICY "insert_own_mood_logs" ON mood_logs FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_mood_logs" ON mood_logs;
CREATE POLICY "update_own_mood_logs" ON mood_logs FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_mood_logs" ON mood_logs;
CREATE POLICY "delete_own_mood_logs" ON mood_logs FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- 4. wellness_logs
CREATE TABLE IF NOT EXISTS wellness_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  logged_date date NOT NULL DEFAULT CURRENT_DATE,
  activity_minutes int NOT NULL DEFAULT 0,
  sleep_hours numeric(4,1),
  water_glasses int NOT NULL DEFAULT 0,
  checklist_items jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, logged_date)
);

ALTER TABLE wellness_logs ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON wellness_logs TO authenticated;

DROP POLICY IF EXISTS "select_own_wellness_logs" ON wellness_logs;
CREATE POLICY "select_own_wellness_logs" ON wellness_logs FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_wellness_logs" ON wellness_logs;
CREATE POLICY "insert_own_wellness_logs" ON wellness_logs FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_wellness_logs" ON wellness_logs;
CREATE POLICY "update_own_wellness_logs" ON wellness_logs FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_wellness_logs" ON wellness_logs;
CREATE POLICY "delete_own_wellness_logs" ON wellness_logs FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- 5. report_summaries
CREATE TABLE IF NOT EXISTS report_summaries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  summary jsonb NOT NULL DEFAULT '[]'::jsonb,
  original_filename text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE report_summaries ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON report_summaries TO authenticated;

DROP POLICY IF EXISTS "select_own_report_summaries" ON report_summaries;
CREATE POLICY "select_own_report_summaries" ON report_summaries FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_report_summaries" ON report_summaries;
CREATE POLICY "insert_own_report_summaries" ON report_summaries FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_report_summaries" ON report_summaries;
CREATE POLICY "update_own_reportummies" ON report_summaries FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_report_summaries" ON report_summaries;
CREATE POLICY "delete_own_report_summaries" ON report_summaries FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- 6. journal_entries
CREATE TABLE IF NOT EXISTS journal_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON journal_entries TO authenticated;

DROP POLICY IF EXISTS "select_own_journal_entries" ON journal_entries;
CREATE POLICY "select_own_journal_entries" ON journal_entries FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_journal_entries" ON journal_entries;
CREATE POLICY "insert_own_journal_entries" ON journal_entries FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_journal_entries" ON journal_entries;
CREATE POLICY "update_own_journal_entries" ON journal_entries FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_journal_entries" ON journal_entries;
CREATE POLICY "delete_own_journal_entries" ON journal_entries FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_medicines_user_id ON medicines(user_id);
CREATE INDEX IF NOT EXISTS idx_medicine_logs_user_id ON medicine_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_medicine_logs_date ON medicine_logs(logged_date);
CREATE INDEX IF NOT EXISTS idx_mood_logs_user_id ON mood_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_mood_logs_date ON mood_logs(logged_date);
CREATE INDEX IF NOT EXISTS idx_wellness_logs_user_id ON wellness_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_wellness_logs_date ON wellness_logs(logged_date);
CREATE INDEX IF NOT EXISTS idx_report_summaries_user_id ON report_summaries(user_id);
CREATE INDEX IF NOT EXISTS idx_journal_entries_user_id ON journal_entries(user_id);
