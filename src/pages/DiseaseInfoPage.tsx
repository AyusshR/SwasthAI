import { useState, useMemo } from 'react';
import { Search, AlertCircle, ExternalLink, Stethoscope } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import { ReadAloud } from '@/components/ReadAloud';
import { diseases, searchDiseases } from '@/data/diseases';
import type { DiseaseInfo } from '@/types';

export function DiseaseInfoPage() {
  const { language, navigate } = useApp();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<DiseaseInfo | null>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchDiseases(query);
  }, [query]);

  const handleSearch = () => {
    if (results.length > 0) {
      setSelected(results[0]);
    }
  };

  const popularDiseases = diseases.slice(0, 6);

  const Section = ({ title, items }: { title: string; items: string[] }) => (
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-charcoal">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-base text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (selected) {
    const fullText = [
      selected.whatIs[language],
      ...selected.symptoms[language],
      ...selected.causes[language],
      ...selected.prevention[language],
    ].join('. ');

    return (
    <div>
      <PageHeader title={selected.name} subtitle={selected.nameHi} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <ReadAloud text={fullText} />
          <button
            onClick={() => setSelected(null)}
            className="btn-ghost text-sm"
          >
            {language === 'en' ? 'New Search' : 'नई खोज'}
          </button>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-3">{t('disease.whatIs', language)}</h2>
            <p className="text-base-lg text-gray-700 leading-relaxed">{selected.whatIs[language]}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <Section title={t('disease.symptoms', language)} items={selected.symptoms[language]} />
            </div>
            <div className="card p-6">
              <Section title={t('disease.causes', language)} items={selected.causes[language]} />
            </div>
          </div>

          <div className="card p-6">
            <Section title={t('disease.prevention', language)} items={selected.prevention[language]} />
          </div>

          <div className="card p-6">
            <Section title={t('disease.management', language)} items={selected.management[language]} />
          </div>

          <div className="card p-6 border-l-4 border-l-primary-400">
            <Section title={t('disease.whenToSeeDoctor', language)} items={selected.whenToSeeDoctor[language]} />
          </div>

          <div className="card p-6 border-l-4 border-l-red-400 bg-red-50/30">
            <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {t('disease.emergencySigns', language)}
            </h3>
            <ul className="space-y-2">
              {selected.emergencySigns[language].map((sign, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-gray-700">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-charcoal mb-3">{t('disease.sources', language)}</h3>
            <ul className="space-y-2">
              {selected.sources.map((source, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-primary-600">
                  <ExternalLink className="w-4 h-4" />
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>

          <Disclaimer type="educational" />
        </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      <PageHeader title={t('feature.diseaseInfo.title', language)} subtitle={t('feature.diseaseInfo.desc', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="card p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                placeholder={t('disease.searchPlaceholder', language)}
                className="input-field pl-12 text-lg"
                aria-label={t('disease.searchPlaceholder', language)}
              />
            </div>
            <button onClick={handleSearch} className="btn-primary text-lg">
              <Search className="w-5 h-5" />
              {t('common.search', language)}
            </button>
          </div>

          {query.trim() && results.length === 0 && (
            <div className="mt-6 text-center py-8">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-lg font-semibold text-gray-500">{t('disease.notFound', language)}</p>
              <p className="text-sm text-gray-400 mt-1">{t('disease.notFoundDesc', language)}</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-gray-500">{results.length} {language === 'en' ? 'results found' : 'परिणाम मिले'}</p>
              {results.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => setSelected(disease)}
                  className="card w-full p-4 flex items-center gap-4 hover:shadow-md hover:border-primary-200 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">{language === 'en' ? disease.name : disease.nameHi}</p>
                    <p className="text-sm text-gray-500 line-clamp-1">{disease.whatIs[language]}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-charcoal mb-4">{t('disease.popular', language)}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {popularDiseases.map((disease) => (
              <button
                key={disease.id}
                onClick={() => setSelected(disease)}
                className="card p-4 text-center hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-charcoal">
                  {language === 'en' ? disease.name : disease.nameHi}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Disclaimer type="educational" />
        </div>
      </div>
    </div>
  );
}
