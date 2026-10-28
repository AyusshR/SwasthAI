import { useState, useRef, useEffect } from 'react';
import { FileText, Upload, FileCheck, Download, Trash2, AlertCircle, Lock } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import { ReadAloud } from '@/components/ReadAloud';
import type { TestResult, ReportSummary } from '@/types';

const sampleResults: TestResult[] = [
  {
    testName: 'Hemoglobin',
    result: '10.0',
    unit: 'g/dL',
    referenceRange: '13.0 – 17.0',
    explanation: 'This value may be lower than the expected range for some adults. The meaning depends on factors such as age, sex, and medical history. A healthcare professional can help interpret it.',
    doctorQuestion: 'What could be causing my hemoglobin to be low, and do I need further tests?',
    status: 'low',
  },
  {
    testName: 'Fasting Blood Sugar',
    result: '110',
    unit: 'mg/dL',
    referenceRange: '70 – 99',
    explanation: 'This value is slightly above the typical fasting range. It may indicate prediabetes, but a single reading is not enough for diagnosis. Your doctor may recommend a repeat test or an HbA1c test.',
    doctorQuestion: 'Should I get an HbA1c test or a glucose tolerance test to check further?',
    status: 'high',
  },
  {
    testName: 'Total Cholesterol',
    result: '180',
    unit: 'mg/dL',
    referenceRange: '< 200',
    explanation: 'This value is within the desirable range. Maintaining healthy eating and regular activity can help keep it in this range.',
    doctorQuestion: 'Should I also check my LDL and HDL cholesterol levels?',
    status: 'normal',
  },
  {
    testName: 'TSH (Thyroid)',
    result: '2.5',
    unit: 'mIU/L',
    referenceRange: '0.4 – 4.0',
    explanation: 'This value is within the normal reference range. No further action is typically needed based on this result alone.',
    doctorQuestion: 'No specific question needed for this result.',
    status: 'normal',
  },
];

export function ReportExplainerPage() {
  const { language, navigate } = useApp();
  const { user } = useAuth();
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [fileName, setFileName] = useState('');
  const [savedSummaries, setSavedSummaries] = useState<ReportSummary[]>([]);
  const [loadingSaved, setLoadingSaved] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadSavedSummaries = async () => {
    if (!user) return;
    setLoadingSaved(true);
    const { data, error } = await supabase
      .from('report_summaries')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setSavedSummaries(data);
    setLoadingSaved(false);
  };

  // Load saved summaries on mount if logged in
  useEffect(() => {
    if (user) loadSavedSummaries();
  }, [user, loadSavedSummaries]);

  const handleFileUpload = async (file: File) => {
    setErrorMsg('');
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setErrorMsg(language === 'en'
        ? 'Please upload a PDF, JPG, or PNG file.'
        : 'कृपया PDF, JPG, या PNG फ़ाइल अपलोड करें।');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg(language === 'en'
        ? 'File is too large. Please upload a file smaller than 10 MB.'
        : 'फ़ाइल बहुत बड़ी है। कृपया 10 MB से छोटी फ़ाइल अपलोड करें।');
      return;
    }

    setFileName(file.name);
    setAnalyzing(true);
    setResults(null);

    // Simulate OCR processing
    await new Promise((r) => setTimeout(r, 2000));
    setResults(sampleResults);
    setAnalyzing(false);
  };

  const handleDemoReport = async () => {
    setAnalyzing(true);
    setFileName('sample_report.pdf');
    setResults(null);
    await new Promise((r) => setTimeout(r, 1500));
    setResults(sampleResults);
    setAnalyzing(false);
  };

  const saveSummary = async () => {
    if (!user || !results) return;
    const { error } = await supabase.from('report_summaries').insert({
      title: fileName || 'Untitled Report',
      summary: results,
      original_filename: fileName,
    });
    if (!error) {
      setSavedMsg(true);
      setTimeout(() => setSavedMsg(false), 3000);
      loadSavedSummaries();
    }
  };

  const deleteSummary = async (id: string) => {
    if (!confirm(t('misc.confirmDelete', language))) return;
    await supabase.from('report_summaries').delete().eq('id', id);
    setSavedSummaries(savedSummaries.filter((s) => s.id !== id));
  };

  const downloadSummary = () => {
    if (!results) return;
    const text = results.map((r) =>
      `Test: ${r.testName}\nResult: ${r.result} ${r.unit}\nReference: ${r.referenceRange}\nExplanation: ${r.explanation}\nQuestion for doctor: ${r.doctorQuestion}\n`
    ).join('\n---\n\n');
    const blob = new Blob([`SwasthAI Report Summary\n\n${text}\n\n${t('disclaimer.educational', language)}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `swasthai_report_summary.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusColors = {
    normal: 'bg-mint-100 text-mint-600',
    low: 'bg-amber-100 text-amber-600',
    high: 'bg-amber-100 text-amber-600',
    unknown: 'bg-gray-100 text-gray-500',
  };

  return (
    <div>
      <PageHeader title={t('report.title', language)} subtitle={t('report.subtitle', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        {/* Privacy Notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100 mb-6">
          <Lock className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-primary-700 leading-relaxed">{t('report.privacyNotice', language)}</p>
        </div>

        {/* Upload Area */}
        <div className="card p-6 lg:p-8 mb-6">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => { if (e.target.files?.[0]) handleFileUpload(e.target.files[0]); }}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-primary-200 rounded-2xl py-12 px-6 hover:border-primary-400 hover:bg-primary-50/50 transition-all text-center group"
          >
            <Upload className="w-12 h-12 text-primary-300 group-hover:text-primary-500 mx-auto mb-3 transition-colors" />
            <p className="text-lg font-semibold text-charcoal mb-1">{t('report.upload', language)}</p>
            <p className="text-sm text-gray-500">PDF, JPG, PNG — {language === 'en' ? 'max 10 MB' : 'अधिकतम 10 MB'}</p>
          </button>

          <div className="mt-4 text-center">
            <button onClick={handleDemoReport} className="btn-ghost text-sm">
              <FileText className="w-4 h-4" />
              {t('report.tryDemo', language)}
            </button>
          </div>

          {errorMsg && (
            <div className="mt-4 flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" /> {errorMsg}
            </div>
          )}
        </div>

        {/* Analyzing State */}
        {analyzing && (
          <div className="card p-8 text-center">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-600">{t('report.analyzing', language)}</p>
            <p className="text-sm text-gray-400 mt-1">{fileName}</p>
          </div>
        )}

        {/* Results Table */}
        {results && !analyzing && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 flex-wrap">
              <FileCheck className="w-6 h-6 text-mint-500" />
              <h2 className="text-xl font-bold text-charcoal">{fileName}</h2>
              <div className="flex gap-2 ml-auto">
                {user && (
                  <button onClick={saveSummary} className="btn-outline text-sm">
                    {savedMsg ? t('misc.saved', language) : t('report.saveSummary', language)}
                  </button>
                )}
                <button onClick={downloadSummary} className="btn-secondary text-sm">
                  <Download className="w-4 h-4" />
                  {t('report.downloadPDF', language)}
                </button>
              </div>
            </div>

            <ReadAloud
              text={results.map((r) => `${r.testName}, result ${r.result} ${r.unit}, reference range ${r.referenceRange}. ${r.explanation}`).join('. ')}
            />

            {/* Desktop Table */}
            <div className="hidden lg:block card overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary-700">{t('report.table.testName', language)}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary-700">{t('report.table.result', language)}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary-700">{t('report.table.range', language)}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary-700">{t('report.table.explanation', language)}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary-700">{t('report.table.doctorQuestion', language)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {results.map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="px-4 py-4 font-medium text-charcoal">{r.testName}</td>
                      <td className="px-4 py-4">
                        <span className={`badge ${statusColors[r.status]}`}>
                          {r.result} {r.unit}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">{r.referenceRange}</td>
                      <td className="px-4 py-4 text-sm text-gray-700 leading-relaxed">{r.explanation}</td>
                      <td className="px-4 py-4 text-sm text-primary-600 italic">{r.doctorQuestion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {results.map((r, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-charcoal">{r.testName}</h3>
                    <span className={`badge ${statusColors[r.status]}`}>
                      {r.result} {r.unit}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{t('report.table.range', language)}: {r.referenceRange}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{r.explanation}</p>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-1">{t('report.table.doctorQuestion', language)}</p>
                    <p className="text-sm text-primary-600 italic">{r.doctorQuestion}</p>
                  </div>
                </div>
              ))}
            </div>

            <Disclaimer type="ai" />
          </div>
        )}

        {/* Saved Summaries */}
        {user && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">{t('report.savedSummaries', language)}</h2>
            {loadingSaved ? (
              <p className="text-gray-400">{t('common.loading', language)}</p>
            ) : savedSummaries.length === 0 ? (
              <div className="card p-8 text-center">
                <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">{t('report.noSummaries', language)}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedSummaries.map((s) => (
                  <div key={s.id} className="card p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-charcoal truncate">{s.title}</p>
                      <p className="text-xs text-gray-400">{new Date(s.created_at).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN')}</p>
                    </div>
                    <button
                      onClick={() => { setResults(s.summary as TestResult[]); setFileName(s.title); }}
                      className="btn-ghost text-sm"
                    >
                      {t('misc.readMore', language)}
                    </button>
                    <button
                      onClick={() => deleteSummary(s.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
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

        {!user && (
          <div className="mt-8 card p-6 text-center">
            <p className="text-gray-600 mb-3">{t('misc.signInRequired', language)}</p>
            <button onClick={() => navigate('/auth')} className="btn-primary">
              {t('nav.login', language)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
