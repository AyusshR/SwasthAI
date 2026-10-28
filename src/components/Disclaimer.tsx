import { AlertTriangle, Info } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export function Disclaimer({ type = 'educational' }: { type?: 'educational' | 'emergency' | 'ai' }) {
  const { language } = useApp();
  const styles = {
    educational: 'bg-mint-50 border-mint-200 text-mint-700',
    emergency: 'bg-red-50 border-red-200 text-red-700',
    ai: 'bg-primary-50 border-primary-200 text-primary-700',
  };
  const icons = {
    educational: Info,
    emergency: AlertTriangle,
    ai: Info,
  };
  const Icon = icons[type];

  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${styles[type]} text-sm`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <p className="leading-relaxed">{t(`disclaimer.${type}`, language)}</p>
    </div>
  );
}
