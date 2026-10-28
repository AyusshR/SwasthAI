import { useState, useEffect, useCallback } from 'react';
import { Pill, Plus, Clock, Check, X, Calendar, Info, Bell } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import type { Medicine, MedicineLog } from '@/types';

const FREQUENCIES = ['daily', 'weekdays', 'weekends'];

export function MedicineReminderPage() {
  const { language, navigate } = useApp();
  const { user } = useAuth();
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [logs, setLogs] = useState<MedicineLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newMed, setNewMed] = useState({ name: '', dosage: '', times: ['08:00'], frequency: 'daily', refill: false });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const loadData = useCallback(async () => {
    if (!user) { setLoading(false); return; }
    setLoading(true);
    const { data: meds } = await supabase.from('medicines').select('*').order('created_at', { ascending: false });
    if (meds) setMedicines(meds);

    const { data: todayLogs } = await supabase
      .from('medicine_logs')
      .select('*')
      .eq('logged_date', today);
    if (todayLogs) setLogs(todayLogs);
    setLoading(false);
  }, [user, today]);

  useEffect(() => {
    if (user) loadData();
    else setLoading(false);
  }, [user, loadData]);

  const addMedicine = async () => {
    setErrorMsg('');
    if (!newMed.name.trim()) {
      setErrorMsg(language === 'en' ? 'Please enter the medicine name' : 'कृपया दवा का नाम दर्ज करें');
      return;
    }
    const { data, error } = await supabase.from('medicines').insert({
      name: newMed.name.trim(),
      dosage: newMed.dosage.trim(),
      times: newMed.times,
      frequency: newMed.frequency,
      refill_reminder: newMed.refill,
    }).select().single();

    if (error) {
      setErrorMsg(t('misc.errorGeneric', language));
      return;
    }

    if (data) {
      setMedicines([data, ...medicines]);
      setNewMed({ name: '', dosage: '', times: ['08:00'], frequency: 'daily', refill: false });
      setShowAdd(false);
      setSuccessMsg(t('misc.saved', language));
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const deleteMedicine = async (id: string) => {
    if (!confirm(t('misc.confirmDelete', language))) return;
    await supabase.from('medicines').delete().eq('id', id);
    setMedicines(medicines.filter((m) => m.id !== id));
    setLogs(logs.filter((l) => l.medicine_id !== id));
  };

  const updateLog = async (medicineId: string, scheduledTime: string, status: 'taken' | 'skipped') => {
    const existing = logs.find((l) => l.medicine_id === medicineId && l.scheduled_time === scheduledTime && l.logged_date === today);
    if (existing) {
      const { data } = await supabase.from('medicine_logs')
        .update({ status, logged_at: new Date().toISOString() })
        .eq('id', existing.id).select().single();
      if (data) setLogs(logs.map((l) => (l.id === data.id ? data : l)));
    } else {
      const { data } = await supabase.from('medicine_logs').insert({
        medicine_id: medicineId,
        scheduled_time: scheduledTime,
        status,
        logged_date: today,
      }).select().single();
      if (data) setLogs([...logs, data]);
    }
  };

  const getLogStatus = (medicineId: string, time: string): MedicineLog | undefined => {
    return logs.find((l) => l.medicine_id === medicineId && l.scheduled_time === time && l.logged_date === today);
  };

  const statusStyles = {
    taken: 'bg-mint-500 text-white',
    pending: 'bg-amber-100 text-amber-700',
    skipped: 'bg-gray-200 text-gray-500',
    upcoming: 'bg-primary-50 text-primary-600',
  };

  if (!user) {
    return (
      <div>
        <PageHeader title={t('medicine.title', language)} subtitle={t('medicine.subtitle', language)} />
        <div className="container-app px-4 py-8 max-w-4xl">
          <div className="card p-8 text-center">
            <Pill className="w-12 h-12 text-primary-300 mx-auto mb-3" />
            <p className="text-lg text-gray-600 mb-4">{t('misc.signInRequired', language)}</p>
            <button onClick={() => navigate('/auth')} className="btn-primary">{t('nav.login', language)}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={t('medicine.title', language)} subtitle={t('medicine.subtitle', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-mint-50 text-mint-700 text-sm font-medium flex items-center gap-2">
            <Check className="w-4 h-4" /> {successMsg}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-charcoal">{t('medicine.todaySchedule', language)}</h2>
          <button onClick={() => setShowAdd(!showAdd)} className="btn-primary">
            <Plus className="w-5 h-5" />
            {t('medicine.add', language)}
          </button>
        </div>

        {/* Add Medicine Form */}
        {showAdd && (
          <div className="card p-6 mb-6 animate-slide-up">
            <h3 className="text-lg font-bold text-charcoal mb-4">{t('medicine.add', language)}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{t('medicine.name', language)}</label>
                <input
                  type="text"
                  value={newMed.name}
                  onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                  placeholder={t('medicine.namePlaceholder', language)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{t('medicine.dosage', language)}</label>
                <input
                  type="text"
                  value={newMed.dosage}
                  onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
                  placeholder={t('medicine.dosagePlaceholder', language)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{t('medicine.times', language)}</label>
                <div className="flex flex-wrap gap-2 items-center">
                  {newMed.times.map((time, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => {
                          const times = [...newMed.times];
                          times[i] = e.target.value;
                          setNewMed({ ...newMed, times });
                        }}
                        className="input-field w-32"
                      />
                      {newMed.times.length > 1 && (
                        <button
                          onClick={() => setNewMed({ ...newMed, times: newMed.times.filter((_, idx) => idx !== i) })}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setNewMed({ ...newMed, times: [...newMed.times, '12:00'] })}
                    className="btn-ghost text-sm"
                  >
                    <Plus className="w-4 h-4" /> {t('common.add', language)}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{t('medicine.frequency', language)}</label>
                <select
                  value={newMed.frequency}
                  onChange={(e) => setNewMed({ ...newMed, frequency: e.target.value })}
                  className="input-field"
                >
                  {FREQUENCIES.map((f) => (
                    <option key={f} value={f}>{t(`medicine.frequency.${f}`, language)}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newMed.refill}
                  onChange={(e) => setNewMed({ ...newMed, refill: e.target.checked })}
                  className="w-5 h-5 rounded text-primary-500"
                />
                <span className="text-sm font-medium text-charcoal">{t('medicine.refillReminder', language)}</span>
              </label>
              {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
              <div className="flex gap-3">
                <button onClick={addMedicine} className="btn-primary">{t('common.save', language)}</button>
                <button onClick={() => setShowAdd(false)} className="btn-ghost">{t('common.cancel', language)}</button>
              </div>
            </div>
          </div>
        )}

        {/* Notification Info */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100 mb-6">
          <Bell className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-primary-700 leading-relaxed">{t('medicine.notificationNote', language)}</p>
        </div>

        {/* Medicine List */}
        {loading ? (
          <p className="text-gray-400">{t('common.loading', language)}</p>
        ) : medicines.length === 0 ? (
          <div className="card p-12 text-center">
            <Pill className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">{t('medicine.noMedicines', language)}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {medicines.map((med) => (
              <div key={med.id} className="card p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mint-50 flex items-center justify-center flex-shrink-0">
                      <Pill className="w-5 h-5 text-mint-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal">{med.name}</h3>
                      {med.dosage && <p className="text-sm text-gray-500">{med.dosage}</p>}
                      <p className="text-xs text-gray-400 mt-1">{t(`medicine.frequency.${med.frequency}`, language)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteMedicine(med.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                    aria-label={t('common.delete', language)}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  {med.times.map((time) => {
                    const log = getLogStatus(med.id, time);
                    const status = log?.status || (time > new Date().toTimeString().slice(0, 5) ? 'upcoming' : 'pending');
                    return (
                      <div key={time} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                        <div className="flex items-center gap-2 flex-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-charcoal">{time}</span>
                        </div>
                        <span className={`badge ${statusStyles[status as keyof typeof statusStyles]}`}>
                          {t(`medicine.${status}`, language)}
                        </span>
                        {status !== 'taken' && (
                          <button
                            onClick={() => updateLog(med.id, time, 'taken')}
                            className="btn-secondary text-sm py-1.5 px-3 min-h-[36px]"
                          >
                            <Check className="w-4 h-4" /> {t('medicine.taken', language)}
                          </button>
                        )}
                        {status !== 'skipped' && status !== 'taken' && (
                          <button
                            onClick={() => updateLog(med.id, time, 'skipped')}
                            className="btn-ghost text-sm py-1.5 px-3 min-h-[36px]"
                          >
                            {t('medicine.skipped', language)}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Missed Dose Info */}
        {medicines.length > 0 && (
          <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <Info className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-700 leading-relaxed">{t('medicine.missedDose', language)}</p>
          </div>
        )}

        {/* Adherence History */}
        {medicines.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-500" />
              {t('medicine.history', language)}
            </h2>
            <div className="card p-6">
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-3xl font-bold text-mint-500">
                    {logs.filter((l) => l.status === 'taken').length}
                  </p>
                  <p className="text-sm text-gray-500">{t('medicine.taken', language)}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-500">
                    {logs.filter((l) => l.status === 'pending').length}
                  </p>
                  <p className="text-sm text-gray-500">{t('medicine.pending', language)}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-400">
                    {logs.filter((l) => l.status === 'skipped').length}
                  </p>
                  <p className="text-sm text-gray-500">{t('medicine.skipped', language)}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Disclaimer type="educational" />
        </div>
      </div>
    </div>
  );
}
