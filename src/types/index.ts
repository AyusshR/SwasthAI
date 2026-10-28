export type Language = 'en' | 'hi';
export type TextSize = 'normal' | 'large' | 'xlarge';

export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  times: string[];
  frequency: string;
  status: string;
  refill_reminder: boolean;
  created_at: string;
}

export interface MedicineLog {
  id: string;
  medicine_id: string;
  scheduled_time: string;
  status: 'taken' | 'pending' | 'skipped';
  logged_date: string;
  logged_at: string;
}

export interface MoodLog {
  id: string;
  mood: 'happy' | 'calm' | 'okay' | 'anxious' | 'sad';
  note: string | null;
  logged_date: string;
  created_at: string;
}

export interface WellnessLog {
  id: string;
  logged_date: string;
  activity_minutes: number;
  sleep_hours: number | null;
  water_glasses: number;
  checklist_items: Record<string, boolean>;
}

export interface ReportSummary {
  id: string;
  title: string;
  summary: TestResult[];
  original_filename: string | null;
  created_at: string;
}

export interface TestResult {
  testName: string;
  result: string;
  unit: string;
  referenceRange: string;
  explanation: string;
  doctorQuestion: string;
  status: 'normal' | 'low' | 'high' | 'unknown';
}

export interface JournalEntry {
  id: string;
  content: string;
  created_at: string;
}

export interface DiseaseInfo {
  id: string;
  name: string;
  nameHi: string;
  category: string;
  whatIs: { en: string; hi: string };
  symptoms: { en: string[]; hi: string[] };
  causes: { en: string[]; hi: string[] };
  prevention: { en: string[]; hi: string[] };
  management: { en: string[]; hi: string[] };
  whenToSeeDoctor: { en: string[]; hi: string[] };
  emergencySigns: { en: string[]; hi: string[] };
  sources: string[];
}

export interface HealthArticle {
  id: string;
  category: string;
  categoryHi: string;
  title: { en: string; hi: string };
  summary: { en: string; hi: string };
  content: { en: string[]; hi: string[] };
  keyTakeaways: { en: string[]; hi: string[] };
  myths: { myth: { en: string; hi: string }; fact: { en: string; hi: string } }[];
  faqs: { question: { en: string; hi: string }; answer: { en: string; hi: string } }[];
  sources: string[];
  reviewedOn: string;
}
