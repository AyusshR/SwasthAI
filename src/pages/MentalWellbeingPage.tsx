import { useState, useEffect, useRef, useCallback } from 'react';
import { Brain, Wind, BookHeart, Phone, AlertTriangle, Send, Trash2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import type { MoodLog, JournalEntry } from '@/types';

const moods = [
  { key: 'happy', emoji: '😊', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
  { key: 'calm', emoji: '😌', color: 'bg-teal-100 text-teal-700 border-teal-300' },
  { key: 'okay', emoji: '😐', color: 'bg-gray-100 text-gray-600 border-gray-300' },
  { key: 'anxious', emoji: '😟', color: 'bg-amber-100 text-amber-700 border-amber-300' },
  { key: 'sad', emoji: '😢', color: 'bg-blue-100 text-blue-700 border-blue-300' },
] as const;

const crisisKeywords = ['suicide', 'kill myself', 'end my life', 'hurt myself', 'self harm', 'self-harm', 'no reason to live', 'suicidekarna', 'mardunga', 'khudko'];

const crisisResources = [
  { name: 'KIRAN Helpline', number: '1800-599-0019', desc_en: 'Government mental health helpline (24/7)', desc_hi: 'सरकारी मानसिक स्वास्थ्य हेल्पलाइन (24/7)' },
  { name: 'Vandrevala Foundation', number: '1860-2662-345', desc_en: 'Mental health support helpline', desc_hi: 'मानसिक स्वास्थ्य सहयोग हेल्पलाइन' },
  { name: 'Emergency', number: '108', desc_en: 'For immediate medical emergencies', desc_hi: 'तत्काल मेडिकल आपातकाल के लिए' },
];

const supportiveResponses = [
  {
    en: "I'm sorry things feel difficult right now. Would you like to talk about what's worrying you, or try a short breathing exercise?",
    hi: "मुझे खेद है कि चीज़ें अभी मुश्किल लग रही हैं। क्या आप बात करना चाहेंगे कि क्या चिंतित कर रहा है, या एक छोटा श्वास व्यायाम आज़माएं?",
  },
  {
    en: "Thank you for sharing that with me. It takes courage to talk about how you feel. What would help you feel a bit more comfortable right now?",
    hi: "यह मुझसे साझा करने के लिए धन्यवाद। अपनी भावनाओं के बारे में बात करने में हिम्मत लगती है। अभी आपको थोड़ा और सहज करने में क्या मदद करेगा?",
  },
  {
    en: "It sounds like you're carrying a lot. Please remember that it's okay to take things one step at a time. Would you like to try a breathing exercise together?",
    hi: "लगता है आप बहुत कुछ झेल रहे हैं। याद रखें कि चीज़ों को एक-एक कदम से लेना ठीक है। क्या आप हमारे साथ श्वास व्यायाम आज़माना चाहेंगे?",
  },
];

export function MentalWellbeingPage() {
  const { language, navigate } = useApp();
  const { user } = useAuth();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodNote, setMoodNote] = useState('');
  const [moodSaved, setMoodSaved] = useState(false);
  const [moodLogs, setMoodLogs] = useState<MoodLog[]>([]);
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { sender: 'ai', text: language === 'en' ? "Hello, I'm here to support you. How are you feeling today?" : "नमस्ते, मैं आपका समर्थन करने यहां हूं। आज आप कैसा महसूस कर रहे हैं?" },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [breathing, setBreathing] = useState(false);
  const [journalText, setJournalText] = useState('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [showCrisis, setShowCrisis] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [breathingPhase, setBreathingPhase] = useState<'in' | 'out'>('in');
  const breathingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadMoodLogs = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase.from('mood_logs')
      .select('*')
      .order('logged_date', { ascending: false })
      .limit(30);
    if (data) setMoodLogs(data);
  }, [user]);

  const loadJournal = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase.from('journal_entries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);
    if (data) setJournalEntries(data);
  }, [user]);

  useEffect(() => {
    if (user) { loadMoodLogs(); loadJournal(); }
  }, [user, loadMoodLogs, loadJournal]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const saveMood = async () => {
    if (!user || !selectedMood) return;
    const { data } = await supabase.from('mood_logs').insert({
      mood: selectedMood,
      note: moodNote.trim() || null,
    }).select().single();
    if (data) {
      setMoodLogs([data, ...moodLogs]);
      setMoodSaved(true);
      setMoodNote('');
      setSelectedMood(null);
      setTimeout(() => setMoodSaved(false), 3000);
    }
  };

  const deleteMood = async (id: string) => {
    await supabase.from('mood_logs').delete().eq('id', id);
    setMoodLogs(moodLogs.filter((m) => m.id !== id));
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();

    // Check for crisis keywords
    const isCrisis = crisisKeywords.some((kw) => userMsg.toLowerCase().includes(kw));

    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    if (isCrisis) {
      setShowCrisis(true);
      setChatMessages((prev) => [...prev, {
        sender: 'ai',
        text: language === 'en'
          ? "I'm concerned about what you're sharing. Your safety is the most important thing. Please reach out for immediate help — you are not alone. I've shared crisis resources below."
          : "आप जो साझा कर रहे हैं उसे लेकर मुझे चिंता है। आपकी सुरक्षा सबसे ज़रूरी है। कृपया तुरंत मदद मांगें — आप अकेले नहीं हैं। मैंने संकट संसाधन नीचे साझा किए हैं।",
      }]);
      return;
    }

    setTimeout(() => {
      const response = supportiveResponses[Math.floor(Math.random() * supportiveResponses.length)];
      setChatMessages((prev) => [...prev, { sender: 'ai', text: response[language] }]);
    }, 1000);
  };

  const startBreathing = () => {
    setBreathing(true);
    setBreathingPhase('in');
    breathingTimerRef.current = setInterval(() => {
      setBreathingPhase((prev) => (prev === 'in' ? 'out' : 'in'));
    }, 4000);
  };

  const stopBreathing = () => {
    setBreathing(false);
    if (breathingTimerRef.current) {
      clearInterval(breathingTimerRef.current);
      breathingTimerRef.current = null;
    }
  };

  useEffect(() => () => {
    if (breathingTimerRef.current) clearInterval(breathingTimerRef.current);
  }, []);

  const saveJournal = async () => {
    if (!user || !journalText.trim()) return;
    const { data } = await supabase.from('journal_entries').insert({
      content: journalText.trim(),
    }).select().single();
    if (data) {
      setJournalEntries([data, ...journalEntries]);
      setJournalText('');
    }
  };

  const deleteJournal = async (id: string) => {
    await supabase.from('journal_entries').delete().eq('id', id);
    setJournalEntries(journalEntries.filter((j) => j.id !== id));
  };

  return (
    <div>
      <PageHeader title={t('mental.title', language)} subtitle={t('mental.subtitle', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        {/* Not a therapist notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-teal-50 border border-teal-200 mb-6">
          <Brain className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-teal-700 leading-relaxed">{t('mental.notTherapist', language)}</p>
        </div>

        {/* Mood Tracker */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-charcoal mb-1">{t('mental.howAreYou', language)}</h2>
          {moodSaved && (
            <p className="text-sm text-mint-600 mb-3 flex items-center gap-1">
              <Send className="w-4 h-4" /> {t('misc.saved', language)}
            </p>
          )}
          <div className="flex flex-wrap gap-3 mb-4">
            {moods.map((m) => (
              <button
                key={m.key}
                onClick={() => setSelectedMood(selectedMood === m.key ? null : m.key)}
                className={`flex flex-col items-center gap-1 p-4 rounded-2xl border-2 transition-all min-h-[80px] min-w-[80px] ${
                  selectedMood === m.key ? `${m.color} scale-110` : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
                aria-label={t(`mental.mood.${m.key}`, language)}
              >
                <span className="text-3xl">{m.emoji}</span>
                <span className="text-xs font-medium">{t(`mental.mood.${m.key}`, language)}</span>
              </button>
            ))}
          </div>
          {selectedMood && (
            <div className="space-y-3 animate-slide-up">
              <input
                type="text"
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
                placeholder={t('mental.addNote', language)}
                className="input-field"
              />
              <button onClick={saveMood} className="btn-primary">{t('mental.saveMood', language)}</button>
            </div>
          )}

          {/* Mood History */}
          {moodLogs.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-charcoal mb-3">{t('mental.weeklyMood', language)}</h3>
              <div className="flex gap-1.5 flex-wrap">
                {moodLogs.slice(0, 14).map((log) => {
                  const mood = moods.find((m) => m.key === log.mood);
                  return (
                    <div key={log.id} className="group relative">
                      <div className={`w-8 h-8 rounded-full ${mood?.color.split(' ')[0]} flex items-center justify-center text-lg`}>
                        {mood?.emoji}
                      </div>
                      <button
                        onClick={() => deleteMood(log.id)}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Supportive Chat */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <BookHeart className="w-5 h-5 text-primary-500" />
            {t('mental.chat', language)}
          </h2>
          <div className="h-64 overflow-y-auto space-y-3 mb-4 p-3 bg-gray-50 rounded-xl">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-white text-charcoal shadow-sm border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
              placeholder={t('mental.chatPlaceholder', language)}
              className="input-field flex-1"
            />
            <button onClick={sendMessage} className="btn-primary px-4">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Breathing Exercise */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <Wind className="w-5 h-5 text-teal-500" />
            {t('mental.breathing', language)}
          </h2>
          {breathing ? (
            <div className="text-center py-8">
              <div className="w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6 animate-breathe-in">
                <span className="text-lg font-medium text-teal-600">
                  {breathingPhase === 'in' ? t('mental.breatheIn', language) : t('mental.breatheOut', language)}
                </span>
              </div>
              <button onClick={stopBreathing} className="btn-ghost">{t('mental.stopBreathing', language)}</button>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
                {language === 'en'
                  ? 'A simple breathing exercise to help you relax. Breathe in for 4 seconds, then out for 4 seconds.'
                  : 'आपको आराम करने में मदद के लिए एक आसान श्वास व्यायाम। 4 सेकंड सांस लें, फिर 4 सेकंड में छोड़ें।'}
              </p>
              <button onClick={startBreathing} className="btn-secondary">
                <Wind className="w-5 h-5" />
                {t('mental.startBreathing', language)}
              </button>
            </div>
          )}
        </div>

        {/* Journal */}
        {user && (
          <div className="card p-6 mb-6">
            <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
              <BookHeart className="w-5 h-5 text-mint-500" />
              {t('mental.journal', language)}
            </h2>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder={t('mental.journalPlaceholder', language)}
              rows={3}
              className="input-field resize-none mb-3"
            />
            <button onClick={saveJournal} className="btn-primary mb-4">{t('common.save', language)}</button>
            {journalEntries.length === 0 ? (
              <p className="text-sm text-gray-400">{t('mental.noJournal', language)}</p>
            ) : (
              <div className="space-y-2">
                {journalEntries.map((entry) => (
                  <div key={entry.id} className="flex items-start gap-3 p-3 rounded-xl bg-mint-50/50">
                    <p className="text-sm text-gray-700 flex-1">{entry.content}</p>
                    <button
                      onClick={() => deleteJournal(entry.id)}
                      className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg flex-shrink-0"
                      aria-label={t('common.delete', language)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Crisis Resources */}
        {showCrisis && (
          <div className="card p-6 mb-6 border-l-4 border-l-red-400 bg-red-50/50 animate-fade-in">
            <h2 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {language === 'en' ? 'You Are Not Alone — Please Reach Out' : 'आप अकेले नहीं हैं — कृपया मदद लें'}
            </h2>
            <p className="text-sm text-red-700 mb-4">{t('mental.crisisNotice', language)}</p>
            <div className="space-y-2">
              {crisisResources.map((res) => (
                <div key={res.name} className="flex items-center justify-between p-3 rounded-xl bg-white">
                  <div>
                    <p className="font-semibold text-charcoal">{res.name}</p>
                    <p className="text-sm text-gray-500">{language === 'en' ? res.desc_en : res.desc_hi}</p>
                  </div>
                  <a href={`tel:${res.number}`} className="btn-primary text-sm">
                    <Phone className="w-4 h-4" /> {res.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Resources (always visible) */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary-500" />
            {t('mental.resources', language)}
          </h2>
          <div className="space-y-2">
            {crisisResources.map((res) => (
              <div key={res.name} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div>
                  <p className="font-semibold text-charcoal">{res.name}</p>
                  <p className="text-sm text-gray-500">{language === 'en' ? res.desc_en : res.desc_hi}</p>
                </div>
                <a href={`tel:${res.number}`} className="btn-outline text-sm">
                  <Phone className="w-4 h-4" /> {res.number}
                </a>
              </div>
            ))}
          </div>
        </div>

        {!user && (
          <div className="card p-6 text-center mt-6">
            <p className="text-gray-600 mb-3">{t('misc.signInRequired', language)}</p>
            <button onClick={() => navigate('/auth')} className="btn-primary">{t('nav.login', language)}</button>
          </div>
        )}

        <div className="mt-6">
          <Disclaimer type="educational" />
        </div>
      </div>
    </div>
  );
}
