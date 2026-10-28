import { ArrowLeft, Home } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const { language, goBack, navigate } = useApp();

  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-teal-50 border-b border-gray-100">
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.back', language)}
          </button>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 px-3 py-2 rounded-lg transition-colors min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            {t('common.home', language)}
          </button>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold text-charcoal">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  );
}
