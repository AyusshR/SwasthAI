import { useState, useEffect, useCallback } from 'react';
import { Activity, Moon, Droplets, CheckCircle2, Target, Stethoscope, Syringe, Calendar } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import type { WellnessLog } from '@/types';

const AGE_RANGES = ['18-30', '31-45', '46-60', '60+'];
const ACTIVITY_LEVELS = ['sedentary', 'light', 'moderate', 'active'];
const SLEEP_DURATIONS = ['<5', '5-6', '6-7', '7-8', '8+'];
const GOALS = ['general', 'weight', 'heart', 'diabetes', 'sleep'];

const checklistItems = [
  { key: 'walked', en: 'Walked 30 minutes', hi: '30 मिनट टहला' },
  { key: 'water', en: 'Drank enough water', hi: 'पर्याप्त पानी पिया' },
  { key: 'fruits', en: 'Ate fruits/vegetables', hi: 'फल/सब्ज़ियां खाईं' },
  { key: 'slept', en: 'Slept well', hi: 'अच्छी नींद ली' },
  { key: 'relaxed', en: 'Practiced relaxation', hi: 'विश्राम किया' },
  { key: 'nosaltsugar', en: 'Limited salt & sugar', hi: 'नमक और चीनी सीमित की' },
];

const screeningInfo = [
  { age: '18-30', en: 'General check-up every 2-3 years, blood pressure annually', hi: 'हर 2-3 साल में सामान्य जांच, ब्लड प्रेशर हर साल' },
  { age: '31-45', en: 'Blood pressure, cholesterol, blood sugar annually; eye exam every 2 years', hi: 'ब्लड प्रेशर, कोलेस्ट्रॉल, ब्लड शुगर हर साल; आंख जांच हर 2 साल' },
  { age: '46-60', en: 'Annual blood pressure, cholesterol, diabetes screening; cancer screenings as advised', hi: 'हर साल ब्लड प्रेशर, कोलेस्ट्रॉल, मधुमेह जांच; सलाह अनुसार कैंसर जांच' },
  { age: '60+', en: 'Annual full check-up, bone density, eye exam, hearing test, flu vaccine', hi: 'हर साल पूर्ण जांच, हड्डी घनत्व, आंख जांच, सुनने की जांच, फ्लू टीका' },
];

const vaccinationInfo = [
  { en: 'Annual flu vaccine — recommended for everyone, especially 50+', hi: 'वार्षिक फ्लू टीका — सभी के लिए, विशेषकर 50+ के लिए' },
  { en: 'Tetanus booster — every 10 years', hi: 'टेटनस बूस्टर — हर 10 साल' },
  { en: 'Pneumonia vaccine — for adults 65+', hi: 'निमोनिया टीका — 65+ वयस्कों के लिए' },
  { en: 'Shingles vaccine — for adults 50+', hi: 'शिंगल्स टीका — 50+ वयस्कों के लिए' },
];

export function PreventiveHealthPage() {
  const { language, navigate } = useApp();
  const { user } = useAuth();
  const [profile, setProfile] = useState({ age: '', activity: '', sleep: '', goal: '' });
  const [showProfile, setShowProfile] = useState(false);
  const [wellness, setWellness] = useState<WellnessLog | null>(null);
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const loadWellness = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const { data } = await supabase.from('wellness_logs')
      .select('*')
      .eq('logged_date', today)
      .maybeSingle();
    if (data) setWellness(data as WellnessLog);
    else {
      const newLog: Partial<WellnessLog> = {
        logged_date: today,
        activity_minutes: 0,
        sleep_hours: null,
        water_glasses: 0,
        checklist_items: {},
      };
      setWellness(newLog as WellnessLog);
    }
    setLoading(false);
  }, [user, today]);

  useEffect(() => {
    if (user) loadWellness();
  }, [user, loadWellness]);

  const updateWellness = async (updates: Partial<WellnessLog>) => {
    if (!user || !wellness) return;
    const merged = { ...wellness, ...updates };
    setWellness(merged);
    if (wellness.id) {
      await supabase.from('wellness_logs').update(updates).eq('id', wellness.id);
    } else {
      const { data } = await supabase.from('wellness_logs').insert({
        logged_date: today,
        activity_minutes: merged.activity_minutes,
        sleep_hours: merged.sleep_hours,
        water_glasses: merged.water_glasses,
        checklist_items: merged.checklist_items,
      }).select().single();
      if (data) setWellness(data as WellnessLog);
    }
  };

  const toggleChecklist = (key: string) => {
    if (!wellness) return;
    const items = { ...wellness.checklist_items, [key]: !wellness.checklist_items[key] };
    updateWellness({ checklist_items: items });
  };

  const activityGoal = 30;
  const waterGoal = 8;
  const activityProgress = wellness ? Math.min(100, (wellness.activity_minutes / activityGoal) * 100) : 0;
  const waterProgress = wellness ? Math.min(100, (wellness.water_glasses / waterGoal) * 100) : 0;
  const completedChecklist = wellness ? Object.values(wellness.checklist_items).filter(Boolean).length : 0;

  const dailyTip = {
    en: 'Drinking a glass of water first thing in the morning can help kick-start your metabolism and rehydrate after sleep.',
    hi: 'सुबह उठकर सबसे पहले एक गिलास पानी पीने से आपकी चयापचय शुरू होती है और नींद के बाद शरीर को फिर से हाइड्रेट करता है।',
  };

  return (
    <div>
      <PageHeader title={t('preventive.title', language)} subtitle={t('preventive.subtitle', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        {/* Wellness Profile */}
        <div className="card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-500" />
              {t('preventive.profile', language)}
            </h2>
            <button onClick={() => setShowProfile(!showProfile)} className="btn-ghost text-sm">
              {showProfile ? t('common.close', language) : (language === 'en' ? 'Edit' : 'बदलें')}
            </button>
          </div>

          {showProfile ? (
            <div className="space-y-4 animate-slide-up">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">{t('preventive.ageRange', language)}</label>
                <div className="flex flex-wrap gap-2">
                  {AGE_RANGES.map((age) => (
                    <button
                      key={age}
                      onClick={() => setProfile({ ...profile, age })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                        profile.age === age ? 'bg-primary-500 text-white' : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">{t('preventive.activity', language)}</label>
                <div className="flex flex-wrap gap-2">
                  {ACTIVITY_LEVELS.map((level) => (
                    <button
                      key={level}
                      onClick={() => setProfile({ ...profile, activity: level })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                        profile.activity === level ? 'bg-teal-500 text-white' : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                      }`}
                    >
                      {level === 'sedentary' ? (language === 'en' ? 'Sedentary' : 'निष्क्रिय')
                        : level === 'light' ? (language === 'en' ? 'Light' : 'हल्का')
                        : level === 'moderate' ? (language === 'en' ? 'Moderate' : 'मध्यम')
                        : (language === 'en' ? 'Active' : 'सक्रिय')}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">{t('preventive.sleep', language)}</label>
                <div className="flex flex-wrap gap-2">
                  {SLEEP_DURATIONS.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setProfile({ ...profile, sleep: dur })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                        profile.sleep === dur ? 'bg-primary-500 text-white' : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                      }`}
                    >
                      {dur}h
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => setShowProfile(false)} className="btn-primary">{t('common.save', language)}</button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {profile.age && <span className="badge bg-primary-50 text-primary-600">{t('preventive.ageRange', language)}: {profile.age}</span>}
              {profile.activity && <span className="badge bg-teal-50 text-teal-600">{t('preventive.activity', language)}: {profile.activity}</span>}
              {profile.sleep && <span className="badge bg-mint-50 text-mint-600">{t('preventive.sleep', language)}: {profile.sleep}h</span>}
              {!profile.age && !profile.activity && !profile.sleep && (
                <p className="text-sm text-gray-400">{language === 'en' ? 'Click Edit to set your wellness profile' : 'अपनी वेलनेस प्रोफ़ाइल सेट करने के लिए बदलें पर क्लिक करें'}</p>
              )}
            </div>
          )}
        </div>

        {/* Dashboard */}
        {user ? (
          <>
            <h2 className="text-xl font-bold text-charcoal mb-4">{t('preventive.dashboard', language)}</h2>
            {loading ? (
              <p className="text-gray-400">{t('common.loading', language)}</p>
            ) : wellness && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Activity */}
                <div className="card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-primary-500" />
                    <h3 className="text-sm font-semibold text-charcoal">{t('preventive.activityGoal', language)}</h3>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-charcoal">{wellness.activity_minutes}</span>
                    <span className="text-sm text-gray-400">/ {activityGoal} {t('preventive.minutes', language)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-primary-500 rounded-full transition-all" style={{ width: `${activityProgress}%` }} />
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => updateWellness({ activity_minutes: Math.max(0, wellness.activity_minutes - 5) })} className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-lg min-h-[36px]">−</button>
                    <button onClick={() => updateWellness({ activity_minutes: wellness.activity_minutes + 5 })} className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-lg min-h-[36px]">+</button>
                    <button onClick={() => updateWellness({ activity_minutes: activityGoal })} className="flex-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 min-h-[36px]">
                      {language === 'en' ? 'Goal!' : 'लक्ष्य!'}
                    </button>
                  </div>
                </div>

                {/* Sleep */}
                <div className="card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="w-5 h-5 text-teal-500" />
                    <h3 className="text-sm font-semibold text-charcoal">{t('preventive.sleepTracking', language)}</h3>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-charcoal">{wellness.sleep_hours || 0}</span>
                    <span className="text-sm text-gray-400">/ 8 {t('preventive.hours', language)}</span>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[5, 6, 7, 8].map((h) => (
                      <button
                        key={h}
                        onClick={() => updateWellness({ sleep_hours: h })}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium min-h-[36px] ${
                          wellness.sleep_hours === h ? 'bg-teal-500 text-white' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {h}h
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hydration */}
                <div className="card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets className="w-5 h-5 text-primary-500" />
                    <h3 className="text-sm font-semibold text-charcoal">{t('preventive.hydration', language)}</h3>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-charcoal">{wellness.water_glasses}</span>
                    <span className="text-sm text-gray-400">/ {waterGoal} {t('preventive.glasses', language)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-primary-400 rounded-full transition-all" style={{ width: `${waterProgress}%` }} />
                  </div>
                  <button
                    onClick={() => updateWellness({ water_glasses: Math.min(20, wellness.water_glasses + 1) })}
                    className="w-full py-2 rounded-lg bg-primary-50 text-primary-600 font-medium text-sm hover:bg-primary-100 min-h-[36px]"
                  >
                    + {language === 'en' ? 'Add Glass' : 'गिलास जोड़ें'}
                  </button>
                </div>

                {/* Checklist progress */}
                <div className="card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-mint-500" />
                    <h3 className="text-sm font-semibold text-charcoal">{t('preventive.checklist', language)}</h3>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-charcoal">{completedChecklist}</span>
                    <span className="text-sm text-gray-400">/ {checklistItems.length}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    {completedChecklist === checklistItems.length
                      ? (language === 'en' ? 'Great job today!' : 'आज बहुत बढ़िया!')
                      : (language === 'en' ? 'Keep going!' : 'लगे रहें!')}
                  </p>
                </div>
              </div>
            )}

            {/* Checklist */}
            {wellness && (
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">{t('preventive.checklist', language)}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {checklistItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => toggleChecklist(item.key)}
                      className={`flex items-center gap-3 p-3 rounded-xl text-left transition-colors min-h-[44px] ${
                        wellness.checklist_items[item.key]
                          ? 'bg-mint-50 text-mint-700'
                          : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        wellness.checklist_items[item.key] ? 'bg-mint-500' : 'bg-gray-200'
                      }`}>
                        {wellness.checklist_items[item.key] && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-sm font-medium">{language === 'en' ? item.en : item.hi}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Tip */}
            <div className="card p-6 mb-6 bg-gradient-to-br from-primary-50 to-teal-50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal mb-1">{t('preventive.tip', language)}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{dailyTip[language]}</p>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* Screening Info */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-primary-500" />
            {t('preventive.screening', language)}
          </h2>
          <div className="space-y-3">
            {screeningInfo.map((info) => (
              <div key={info.age} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <span className="badge bg-primary-100 text-primary-600 flex-shrink-0">{info.age}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{language === 'en' ? info.en : info.hi}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vaccination */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <Syringe className="w-5 h-5 text-teal-500" />
            {t('preventive.vaccination', language)}
          </h2>
          <div className="space-y-2">
            {vaccinationInfo.map((v, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">{language === 'en' ? v.en : v.hi}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-500" />
            {t('preventive.reminders', language)}
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-primary-50">
              <span className="text-sm text-primary-700">{language === 'en' ? 'Annual health check-up' : 'वार्षिक स्वास्थ्य जांच'}</span>
              <span className="text-sm font-medium text-primary-500">{language === 'en' ? 'Due soon' : 'जल्द आवश्यक'}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-teal-50">
              <span className="text-sm text-teal-700">{language === 'en' ? 'Flu vaccine' : 'फ्लू टीका'}</span>
              <span className="text-sm font-medium text-teal-500">{language === 'en' ? 'Seasonal' : 'मौसमी'}</span>
            </div>
          </div>
        </div>

        {!user && (
          <div className="card p-6 text-center mb-6">
            <p className="text-gray-600 mb-3">{t('misc.signInRequired', language)}</p>
            <button onClick={() => navigate('/auth')} className="btn-primary">{t('nav.login', language)}</button>
          </div>
        )}

        <Disclaimer type="educational" />
      </div>
    </div>
  );
}
