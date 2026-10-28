import { Heart, Cross } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const { navigate } = useApp();
  const sizeClass = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const iconSize = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  }[size];

  return (
    <button
      onClick={() => navigate('/')}
      className="inline-flex items-center gap-2 group"
      aria-label="SwasthAI Home"
    >
      <span className="relative inline-flex items-center justify-center">
        <span className="absolute inset-0 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors" />
        <Heart className={`relative ${iconSize} text-primary-500`} fill="currentColor" />
        <Cross className={`absolute ${iconSize} text-white`} strokeWidth={3} />
      </span>
      <span className={`font-bold ${sizeClass} text-charcoal`}>
        Swasth<span className="text-teal-500">AI</span>
      </span>
    </button>
  );
}
