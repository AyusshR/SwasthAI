import { useState, useEffect, useCallback } from 'react';
import { Pill, Clock, CheckCircle2, FileText, Calendar, Brain, BookOpen, Bell } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import type { Medicine, MedicineLog, ReportSummary, MoodLog } from '@/types';

export function MyHealthPage() {
  const { language, navigate } = useApp();
  const { user } = useAuth();
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [logs, setLogs] = useState<MedicineLog[]>([]);
  const [reports, setReports] = useState<ReportSummary[]>([]);
  const [recentMoods, setRecentMoods] = useState<MoodLog[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split('T')[0];

  const loadData = useCallback(async () => {
    if (!user) { setLoading(false); return; }
    setLoading(true);

    const { data: meds } = await supabase.from('medicines').select('*').order('created_at', { ascending: false }).limit(5);
    if (meds) setMedicines(meds);

    const { data: todayLogs } = await supabase.from('medicine_logs').select('*').eq('logged_date', today);
    if (todayLogs) setLogs(todayLogs);

    const { data: reps } = await supabase.from('report_summaries').select('*').order('created_at', { ascending: false }).limit(3);
    if (reps) setReports(reps);

    const { data: moods } = await supabase.from('mood_logs').select('*').order('created_at', { ascending: false }).limit(7);
    if (moods) setRecentMoods(moods);

    setLoading(false);
  }, [user, today]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!user) {
    return (
      <div>
        <PageHeader title={t('dashboard.title', language)} />
        <div className="container-app px-4 py-8 max-w-4xl">
          <div className="card p-8 text-center">
            <Bell className="w-12 h-12 text-primary-300 mx-auto mb-3" />
            <p className="text-lg text-gray-600 mb-4">{t('dashboard.signInPrompt', language)}</p>
            <button onClick={() => navigate('/auth')} className="btn-primary">{t('nav.login', language)}</button>
            <p className="text-sm text-gray-400 mt-4">{t('disclaimer.educational', language)}</p>
          </div>
        </div>
      </div>
    );
  }

  const nextReminder = (() => {
    const now = new Date().toTimeString().slice(0, 5);
    let next: { med: Medicine; time: string } | null = null;
    for (const med of medicines) {
      for (const time of med.times) {
        const log = logs.find((l) => l.medicine_id === med.id && l.scheduled_time === time);
        if (!log || log.status === 'pending') {
          if (time >= now && (!next || time < next.time)) {
            next = { med, time };
          }
        }
      }
    }
    return next;
  })();

  const takenCount = logs.filter((l) => l.status === 'taken').length;
  const totalScheduled = medicines.reduce((sum, m) => sum + m.times.length, 0);

  const recommendedTopics = [
    { id: 'diabetes-awareness', title: language === 'en' ? 'Diabetes Awareness' : 'मधुमेह जागरूकता', route: '/health-library' },
    { id: 'heart-health', title: language === 'en' ? 'Heart Health' : 'हृदय स्वास्थ्य', route: '/health-library' },
    { id: 'mental-wellbeing', title: language === 'en' ? 'Mental Wellbeing' : 'मानसिक स्वास्थ्य', route: '/health-library' },
  ];

  return (
    <div>
      <PageHeader title={t('dashboard.title', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        <p className="text-lg text-gray-600 mb-6">{t('common.welcomeBack', language)}, {user.email}</p>

        {loading ? (
          <p className="text-gray-400">{t('common.loading', language)}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Today's Medicines */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-5 h-5 text-mint-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.todayMedicines', language)}</h3>
              </div>
              {medicines.length === 0 ? (
                <p className="text-sm text-gray-400">{t('medicine.noMedicines', language)}</p>
              ) : (
                <div className="space-y-2 mb-3">
                  {medicines.slice(0, 3).map((med) => (
                    <div key={med.id} className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-sm font-medium text-charcoal flex-1 truncate">{med.name}</span>
                      <span className="text-xs text-gray-400">{med.times[0]}</span>
                    </div>
                  ))}
                </div>
              )}
              <button onClick={() => navigate('/medicine-reminder')} className="text-sm text-primary-600 font-medium hover:underline">
                {t('misc.viewAll', language)} →
              </button>
            </div>

            {/* Next Reminder */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="w-5 h-5 text-primary-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.nextReminder', language)}</h3>
              </div>
              {nextReminder ? (
                <div>
                  <p className="text-2xl font-bold text-primary-500">{nextReminder.time}</p>
                  <p className="text-sm text-gray-600">{nextReminder.med.name}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-400">{t('dashboard.noReminders', language)}</p>
              )}
            </div>

            {/* Wellness Checklist */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.wellnessChecklist', language)}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                {takenCount}/{totalScheduled} {t('medicine.taken', language).toLowerCase()}
              </p>
              <button onClick={() => navigate('/preventive')} className="text-sm text-primary-600 font-medium hover:underline">
                {t('misc.viewAll', language)} →
              </button>
            </div>

            {/* Saved Reports */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-primary-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.savedReports', language)}</h3>
              </div>
              {reports.length === 0 ? (
                <p className="text-sm text-gray-400">{t('report.noSummaries', language)}</p>
              ) : (
                <div className="space-y-1 mb-3">
                  {reports.slice(0, 2).map((r) => (
                    <p key={r.id} className="text-sm text-charcoal truncate">{r.title}</p>
                  ))}
                </div>
              )}
              <button onClick={() => navigate('/report-explainer')} className="text-sm text-primary-600 font-medium hover:underline">
                {t('misc.viewAll', language)} →
              </button>
            </div>

            {/* Preventive Reminders */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-teal-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.preventiveReminders', language)}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-gray-600">{language === 'en' ? 'Annual check-up' : 'वार्षिक जांच'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-gray-600">{language === 'en' ? 'Flu vaccine' : 'फ्लू टीका'}</span>
                </div>
              </div>
              <button onClick={() => navigate('/preventive')} className="text-sm text-primary-600 font-medium hover:underline mt-2">
                {t('misc.viewAll', language)} →
              </button>
            </div>

            {/* Mood Tracker Shortcut */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-teal-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.moodShortcut', language)}</h3>
              </div>
              {recentMoods.length > 0 ? (
                <div className="flex gap-1 mb-2">
                  {recentMoods.slice(0, 5).map((m) => (
                    <span key={m.id} className="text-lg">
                      {m.mood === 'happy' ? '😊' : m.mood === 'calm' ? '😌' : m.mood === 'okay' ? '😐' : m.mood === 'anxious' ? '😟' : '😢'}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">{language === 'en' ? 'No mood logged yet' : 'अभी कोई मूड नहीं'}</p>
              )}
              <button onClick={() => navigate('/mental-wellbeing')} className="text-sm text-primary-600 font-medium hover:underline">
                {language === 'en' ? 'Log mood' : 'मूड दर्ज करें'} →
              </button>
            </div>

            {/* Recommended Topics */}
            <div className="card p-5 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary-500" />
                <h3 className="text-sm font-bold text-charcoal">{t('dashboard.recommendedTopics', language)}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {recommendedTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => navigate(topic.route)}
                    className="p-3 rounded-xl bg-primary-50 hover:bg-primary-100 text-left transition-colors"
                  >
                    <p className="text-sm font-medium text-primary-600">{topic.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
