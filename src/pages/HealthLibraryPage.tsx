import { useState, useMemo } from 'react';
import { Search, BookOpen, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import { ReadAloud } from '@/components/ReadAloud';
import { healthArticles, searchArticles, healthCategories } from '@/data/healthArticles';
import type { HealthArticle } from '@/types';

export function HealthLibraryPage() {
  const { language } = useApp();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const articles = useMemo(() => {
    let list = healthArticles;
    if (query.trim()) {
      list = searchArticles(query);
    }
    if (selectedCategory) {
      list = list.filter((a) => a.category === selectedCategory || a.categoryHi === selectedCategory);
    }
    return list;
  }, [query, selectedCategory]);

  if (selectedArticle) {
    const article = selectedArticle;
    const fullText = [article.summary[language], ...article.content[language]].join('. ');

    return (
      <div>
        <PageHeader title={article.title[language]} subtitle={article.summary[language]} />
        <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <ReadAloud text={fullText} />
            <button onClick={() => setSelectedArticle(null)} className="btn-ghost text-sm">
              {language === 'en' ? 'Back to Library' : 'लाइब्रेरी पर वापस'}
            </button>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge bg-primary-50 text-primary-600">
                  {language === 'en' ? article.category : article.categoryHi}
                </span>
                <span className="text-xs text-gray-400">
                  {t('library.reviewedOn', language)}: {new Date(article.reviewedOn).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN')}
                </span>
              </div>

              <div className="space-y-4">
                {article.content[language].map((para, i) => (
                  <p key={i} className="text-base-lg text-gray-700 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="card p-6 bg-gradient-to-br from-mint-50 to-white">
              <h3 className="text-lg font-bold text-mint-600 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                {t('library.keyTakeaways', language)}
              </h3>
              <ul className="space-y-2">
                {article.keyTakeaways[language].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-mint-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Myths vs Facts */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">{t('library.myths', language)}</h3>
              <div className="space-y-4">
                {article.myths.map((mf, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-red-500 uppercase">{t('library.myth', language)}</p>
                        <p className="text-sm text-gray-700">{mf.myth[language]}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-mint-50">
                      <CheckCircle2 className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-mint-500 uppercase">{t('library.fact', language)}</p>
                        <p className="text-sm text-gray-700">{mf.fact[language]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-500" />
                {t('library.faqs', language)}
              </h3>
              <div className="space-y-2">
                {article.faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left min-h-[44px]"
                    >
                      <span className="text-sm font-medium text-charcoal">{faq.question[language]}</span>
                      {expandedFaq === i ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                    </button>
                    {expandedFaq === i && (
                      <p className="p-3 text-sm text-gray-600 leading-relaxed animate-fade-in">{faq.answer[language]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sources */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-charcoal mb-3">{t('library.sources', language)}</h3>
              <ul className="space-y-2">
                {article.sources.map((source, i) => (
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
      <PageHeader title={t('library.title', language)} subtitle={t('library.subtitle', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        {/* Search */}
        <div className="card p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('library.searchPlaceholder', language)}
                className="input-field pl-12 text-lg"
                aria-label={t('library.searchPlaceholder', language)}
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-charcoal mb-3">{t('library.categories', language)}</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                !selectedCategory ? 'bg-primary-500 text-white' : 'bg-gray-50 text-charcoal hover:bg-gray-100'
              }`}
            >
              {t('library.allCategories', language)}
            </button>
            {healthCategories.map((cat) => {
              const article = healthArticles.find((a) => a.category === cat);
              const displayCat = language === 'en' ? cat : article?.categoryHi || cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                    selectedCategory === cat ? 'bg-primary-500 text-white' : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                  }`}
                >
                  {displayCat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles */}
        {articles.length === 0 ? (
          <div className="card p-12 text-center">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">{language === 'en' ? 'No articles found. Try a different search.' : 'कोई लेख नहीं मिले। दूसरी खोज आज़माएं।'}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="card p-5 text-left hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="badge bg-teal-50 text-teal-600 mb-2 text-xs">
                  {language === 'en' ? article.category : article.categoryHi}
                </span>
                <h3 className="font-bold text-charcoal mb-2">{article.title[language]}</h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{article.summary[language]}</p>
                <p className="text-xs text-gray-400 mt-3">
                  {t('library.reviewedOn', language)}: {new Date(article.reviewedOn).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN')}
                </p>
              </button>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Disclaimer type="educational" />
        </div>
      </div>
    </div>
  );
}
